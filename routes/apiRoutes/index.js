// import express router to be able to modularize the routes
const router = require('express').Router();

const noteRoutes = require('../apiRoutes/noteRoutes.js');
// another if needed

router.use(noteRoutes);
// another if needed

module.exports = router;
