const router = require('express').Router();

// Import all the routes
const notesRoutes = require('./notesRoute');

router.use(notesRoutes);

module.exports = router;