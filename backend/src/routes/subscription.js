const express = require('express');
const { body, query } = require('express-validator');
const {
  subscribe,
  unsubscribe,
  getSubscriptionStatus,
  getSubscriptionStats
} = require('../controllers/subscriptionController');

const router = express.Router();

// Validation middleware
const validateEmail = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage('Email address is too long'),
  body('preferences')
    .optional()
    .isObject()
    .withMessage('Preferences must be an object'),
  body('preferences.gameUpdates')
    .optional()
    .isBoolean()
    .withMessage('Game updates preference must be a boolean'),
  body('preferences.betaAccess')
    .optional()
    .isBoolean()
    .withMessage('Beta access preference must be a boolean'),
  body('preferences.newsletter')
    .optional()
    .isBoolean()
    .withMessage('Newsletter preference must be a boolean')
];

const validateEmailQuery = [
  query('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
];

// Routes
router.post('/subscribe', validateEmail, subscribe);
router.post('/unsubscribe', [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
], unsubscribe);
router.get('/status', validateEmailQuery, getSubscriptionStatus);
router.get('/stats', getSubscriptionStats);

// Health check for subscription service
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Subscription service is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      subscribe: 'POST /api/subscription/subscribe',
      unsubscribe: 'POST /api/subscription/unsubscribe',
      status: 'GET /api/subscription/status?email=user@example.com',
      stats: 'GET /api/subscription/stats'
    }
  });
});

module.exports = router;