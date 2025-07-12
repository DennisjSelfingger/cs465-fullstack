/* GET travel page */
const travel = (req, res, next) => {
  res.render('travel', { title: 'Travlr Getaways' });
};
module.exports = {
  travel
};
