/* GET home page */
const index = (req, res, next) => {
  res.render('index', { title: 'Travlr Getaways' });
};

module.exports = {
  index
};