const mongoose = require('./db');
const Trip = require('../../app_server/models/travlr');
const tripsData = require('../../data/trips.json');

async function seed() {
  try {
    // Remove existing trips
    await Trip.deleteMany({});
    // Insert trips from JSON
    await Trip.insertMany(tripsData);
    console.log('Trips have been seeded!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding trips:', err);
    process.exit(1);
  }
}

seed();
