const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const authController = require('../controllers/auth.controller');
const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (authHeader == null) {
    return res.sendStatus(401);
  }

  const headers = authHeader.split(' ');
  if (headers.length < 2) {
    return res.sendStatus(401);
  }

  const token = headers[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      return res.status(401).json('Token Validation Error!');
    }
    req.auth = verified;
    next();
  });
}

router.get('/test', (req, res) => {
    res.json({ message: 'API routes are working!' });
});

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;