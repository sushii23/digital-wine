const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const bottleData = await Project.findByPk(req.params.id, {
    });
    const bottle = bottleData.get({ plain: true });
    res.render('description', {
      ...bottle,
      logged_in: true
    });
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
 
});

module.exports = router;