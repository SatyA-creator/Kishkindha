const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed', 'bounced'],
    default: 'active'
  },
  source: {
    type: String,
    default: 'website',
    enum: ['website', 'social', 'referral', 'other']
  },
  ipAddress: {
    type: String,
    required: false
  },
  userAgent: {
    type: String,
    required: false
  },
  preferences: {
    gameUpdates: {
      type: Boolean,
      default: true
    },
    betaAccess: {
      type: Boolean,
      default: true
    },
    newsletter: {
      type: Boolean,
      default: true
    }
  },
  metadata: {
    referrer: String,
    campaign: String,
    medium: String,
    source: String
  }
}, {
  timestamps: true,
  collection: 'subscriptions'
});

// Indexes for better performance
subscriptionSchema.index({ email: 1 }, { unique: true });
subscriptionSchema.index({ subscribedAt: -1 });
subscriptionSchema.index({ status: 1 });

// Virtual for subscription age
subscriptionSchema.virtual('subscriptionAge').get(function() {
  return Math.floor((Date.now() - this.subscribedAt) / (1000 * 60 * 60 * 24));
});

// Static method to find active subscriptions
subscriptionSchema.statics.findActive = function() {
  return this.find({ status: 'active' });
};

// Instance method to unsubscribe
subscriptionSchema.methods.unsubscribe = function() {
  this.status = 'unsubscribed';
  return this.save();
};

// Instance method to resubscribe
subscriptionSchema.methods.resubscribe = function() {
  this.status = 'active';
  return this.save();
};

// Pre-save middleware
subscriptionSchema.pre('save', function(next) {
  if (this.isNew) {
    console.log(`📧 New subscription: ${this.email}`);
  }
  next();
});

// Post-save middleware
subscriptionSchema.post('save', function(doc, next) {
  console.log(`✅ Subscription saved: ${doc.email} (${doc.status})`);
  next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;