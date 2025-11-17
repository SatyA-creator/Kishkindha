const { validationResult } = require('express-validator');
const Subscription = require('../models/Subscription');
const { sendWelcomeEmail, sendAdminNotification } = require('../utils/emailService');

// Subscribe a new email
const subscribe = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input data',
        errors: errors.array()
      });
    }

    const { email, preferences = {}, metadata = {} } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Check if email already exists
    const existingSubscription = await Subscription.findOne({ email: email.toLowerCase() });
    
    if (existingSubscription) {
      if (existingSubscription.status === 'active') {
        return res.status(409).json({
          success: false,
          message: 'Email is already subscribed to our newsletter',
          data: {
            email: existingSubscription.email,
            subscribedAt: existingSubscription.subscribedAt
          }
        });
      } else if (existingSubscription.status === 'unsubscribed') {
        // Resubscribe the user
        existingSubscription.status = 'active';
        existingSubscription.subscribedAt = new Date();
        existingSubscription.preferences = { ...existingSubscription.preferences, ...preferences };
        existingSubscription.metadata = { ...existingSubscription.metadata, ...metadata };
        
        await existingSubscription.save();

        // Send welcome email
        const emailResult = await sendWelcomeEmail(email);
        
        // Send admin notification
        await sendAdminNotification(email);

        return res.status(200).json({
          success: true,
          message: 'Successfully resubscribed to the newsletter!',
          data: {
            email: existingSubscription.email,
            subscribedAt: existingSubscription.subscribedAt,
            emailSent: emailResult.success
          }
        });
      }
    }

    // Create new subscription
    const newSubscription = new Subscription({
      email: email.toLowerCase(),
      ipAddress,
      userAgent,
      preferences: {
        gameUpdates: true,
        betaAccess: true,
        newsletter: true,
        ...preferences
      },
      metadata: {
        referrer: req.get('Referer'),
        ...metadata
      }
    });

    await newSubscription.save();

    // Send welcome email
    const emailResult = await sendWelcomeEmail(email);
    
    // Send admin notification (don't wait for it)
    sendAdminNotification(email).catch(err => 
      console.error('Failed to send admin notification:', err)
    );

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to the newsletter! Check your email for a welcome message.',
      data: {
        email: newSubscription.email,
        subscribedAt: newSubscription.subscribedAt,
        emailSent: emailResult.success,
        preferences: newSubscription.preferences
      }
    });

  } catch (error) {
    console.error('Subscription error:', error);

    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Email is already subscribed'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Unsubscribe an email
const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const subscription = await Subscription.findOne({ email: email.toLowerCase() });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our subscription list'
      });
    }

    if (subscription.status === 'unsubscribed') {
      return res.status(400).json({
        success: false,
        message: 'Email is already unsubscribed'
      });
    }

    await subscription.unsubscribe();

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from the newsletter',
      data: {
        email: subscription.email,
        unsubscribedAt: new Date()
      }
    });

  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
};

// Get subscription status
const getSubscriptionStatus = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email parameter is required'
      });
    }

    const subscription = await Subscription.findOne({ email: email.toLowerCase() });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our subscription list',
        data: { subscribed: false }
      });
    }

    res.status(200).json({
      success: true,
      data: {
        email: subscription.email,
        subscribed: subscription.status === 'active',
        status: subscription.status,
        subscribedAt: subscription.subscribedAt,
        preferences: subscription.preferences
      }
    });

  } catch (error) {
    console.error('Get subscription status error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
};

// Get subscription statistics (admin only)
const getSubscriptionStats = async (req, res) => {
  try {
    const stats = await Subscription.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalSubscriptions = await Subscription.countDocuments();
    const activeSubscriptions = await Subscription.countDocuments({ status: 'active' });
    const recentSubscriptions = await Subscription.countDocuments({
      subscribedAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });

    res.status(200).json({
      success: true,
      data: {
        total: totalSubscriptions,
        active: activeSubscriptions,
        recentWeek: recentSubscriptions,
        breakdown: stats,
        timestamp: new Date()
      }
    });

  } catch (error) {
    console.error('Get subscription stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
};

module.exports = {
  subscribe,
  unsubscribe,
  getSubscriptionStatus,
  getSubscriptionStats
};