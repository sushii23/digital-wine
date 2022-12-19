const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const profileRoutes = require('./profile-routes')
const descriptionRoutes = require('./description-routes')
const communityRoutes = require('./community-routes')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/projects', descriptionRoutes)
router.use('/community', communityRoutes)



module.exports = router;

