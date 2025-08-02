const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Define route for trips
router
    .route('/trips')
    .get(tripsController.tripsList);

// Define route for single trip by code
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

module.exports = router;