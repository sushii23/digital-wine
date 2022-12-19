const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage-login'); 
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
 
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

