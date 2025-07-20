/* GET travel page */
var fs = require('fs');

const travel = (req, res, next) => {
  // Read the trips.json file
  var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
  
  // Pass trips data to the template
  res.render('travel', { 
    title: 'Travlr Getaways',
    trips: trips 
  });
};

module.exports = {
  travel
};