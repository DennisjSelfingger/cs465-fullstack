const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /api/trips - returns list of trips
const tripsList = async(req, res) => {
    const trips = await Trip.find({});
    if (!trips) {
        return res
            .status(404)
            .json({"message": "trips not found"});
    } else {
        return res
            .status(200)
            .json(trips);
    }
};

// GET: /api/trips/:tripCode - returns a single trip
const tripsFindCode = async(req, res) => {
    const trip = await Trip.find({'code': req.params.tripCode});
    if (!trip || trip.length === 0) {
        return res
            .status(404)
            .json({"message": "trip not found"});
    } else {
        return res
            .status(200)
            .json(trip);
    }
};

module.exports = {
    tripsList,
    tripsFindCode
};