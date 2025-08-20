
const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /api/trips - returns list of trips
const tripsList = async (req, res) => {
  const trips = await Trip.find({});
  if (!trips) {
    return res.status(404).json({ message: "trips not found" });
  } else {
    return res.status(200).json(trips);
  }
};

// GET: /api/trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
  const trip = await Trip.find({ code: req.params.tripCode });
  if (!trip || trip.length === 0) {
    return res.status(404).json({ message: "trip not found" });
  } else {
    return res.status(200).json(trip);
  }
};

// POST: /api/trips - Adds a new Trip
const tripsAddTrip = async (req, res) => {
  console.log('=== DEBUG ===');
  console.log('req.body:', req.body);
  console.log('req.headers:', req.headers);
  console.log('=== END DEBUG ===');

  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });

  const q = await newTrip.save();

  if (!q) {
    return res.status(400).json({ message: "Trip could not be added" });
  } else {
    return res.status(201).json(q);
  }
};

// PUT: /api/trips/:tripCode - Updates a trip
const tripsUpdateTrip = async (req, res) => {
  const updatedTrip = await Trip.findOneAndUpdate(
    { code: req.params.tripCode },
    req.body,
    { new: true }
  );

  if (!updatedTrip) {
    return res.status(404).json({ message: "trip not found" });
  } else {
    return res.status(200).json(updatedTrip);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsFindByCode
};
