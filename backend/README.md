# Kishkindha Kand Backend API

Backend service for handling email subscriptions and notifications for the Kishkindha Kand website using Outlook/Hotmail email service.

## 🚀 Features

- **Email Subscription Management** - Subscribe, unsubscribe, and manage email preferences
- **Outlook/Hotmail Integration** - Professional email service using Microsoft's SMTP
- **Welcome Emails** - Beautifully designed HTML welcome emails for new subscribers
- **Admin Notifications** - Instant notifications when new users subscribe
- **Data Validation** - Comprehensive input validation and sanitization
- **Rate Limiting** - Protection against spam and abuse
- **MongoDB Integration** - Persistent storage for subscriber data
- **RESTful API** - Clean, documented API endpoints
- **Error Handling** - Robust error handling and logging
- **Security** - CORS, Helmet, compression, and other security measures

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Outlook/Hotmail email account
- App Password for Outlook (see setup instructions below)

## ⚙️ Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables:**
   Edit `.env` file with your settings:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/kishkindha_subscriptions
   
   # Outlook Email Configuration
   OUTLOOK_EMAIL=your-outlook-email@outlook.com
   OUTLOOK_PASSWORD=your-app-password
   OUTLOOK_HOST=smtp-mail.outlook.com
   OUTLOOK_PORT=587
   
   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key
   
   # CORS Configuration
   FRONTEND_URL=http://localhost:5173
   
   # Company Information
   COMPANY_NAME=Zenith Studio LLC
   COMPANY_EMAIL=info@zenithstudio.com
   WEBSITE_URL=https://kishkindhakand.com
   ```

## 🔐 Outlook Email Setup

### Step 1: Enable App Passwords
1. Go to [Microsoft Account Security](https://account.microsoft.com/security)
2. Sign in with your Outlook account
3. Go to **Advanced security options**
4. Under **App passwords**, click **Create a new app password**
5. Enter a name like "Kishkindha Backend"
6. Copy the generated password

### Step 2: Configure Email Settings
- Use the generated app password (not your regular password) in `OUTLOOK_PASSWORD`
- Ensure your Outlook account has 2FA enabled (required for app passwords)
- Use `smtp-mail.outlook.com` as the SMTP host
- Use port `587` for TLS encryption

## 🎯 API Endpoints

### Health Check
```
GET /health
GET /api/subscription/health
```

### Subscribe to Newsletter
```
POST /api/subscription/subscribe
Content-Type: application/json

{
  "email": "user@example.com",
  "preferences": {
    "gameUpdates": true,
    "betaAccess": true,
    "newsletter": true
  },
  "metadata": {
    "source": "website",
    "campaign": "homepage"
  }
}
```

### Unsubscribe
```
POST /api/subscription/unsubscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### Check Subscription Status
```
GET /api/subscription/status?email=user@example.com
```

### Get Subscription Statistics (Admin)
```
GET /api/subscription/stats
```

## 🚀 Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 5000).

## 📧 Email Templates

The system includes beautifully designed HTML email templates:

- **Welcome Email** - Sent to new subscribers with game information and expectations
- **Admin Notification** - Sent to administrators when new subscriptions occur

Templates include:
- Responsive design for all devices
- Brand colors and styling consistent with the website
- Clear call-to-action buttons
- Unsubscribe information
- Professional formatting

## 📊 Database Schema

### Subscription Model
```javascript
{
  email: String (unique, required),
  subscribedAt: Date,
  status: ['active', 'unsubscribed', 'bounced'],
  source: String,
  ipAddress: String,
  userAgent: String,
  preferences: {
    gameUpdates: Boolean,
    betaAccess: Boolean,
    newsletter: Boolean
  },
  metadata: {
    referrer: String,
    campaign: String,
    medium: String,
    source: String
  }
}
```

## 🛡️ Security Features

- **Rate Limiting** - Prevents abuse and spam
- **Input Validation** - Sanitizes and validates all inputs
- **CORS Protection** - Configured for specific frontend domains
- **Helmet Security** - Security headers and protection
- **Environment Variables** - Sensitive data protection
- **Error Handling** - No sensitive data leakage

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 Logging

The server includes comprehensive logging:
- Request/response logging with Morgan
- Error logging with stack traces
- Email sending status
- Database connection status
- Subscription events

## 🔧 Troubleshooting

### Common Issues

1. **Email not sending:**
   - Check Outlook app password
   - Verify 2FA is enabled on Outlook account
   - Check SMTP settings
   - Review firewall settings

2. **Database connection errors:**
   - Ensure MongoDB is running
   - Check connection string
   - Verify database permissions

3. **CORS errors:**
   - Check `FRONTEND_URL` in environment
   - Verify frontend domain matches

### Email Testing
Test your email configuration:
```bash
node -e "require('./src/utils/emailService').testEmailConnection()"
```

## 📦 Dependencies

### Core Dependencies
- **Express** - Web framework
- **Nodemailer** - Email sending
- **Mongoose** - MongoDB ODM
- **Express-validator** - Input validation
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Rate-limit** - Request limiting

### Development Dependencies
- **Nodemon** - Development auto-restart
- **Jest** - Testing framework
- **Supertest** - API testing

## 🤝 Contributing

1. Follow the existing code style
2. Write tests for new features
3. Update documentation
4. Create meaningful commit messages

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For technical support or questions:
- Email: support@zenithstudio.com
- Create an issue in the repository

---

**Made with ❤️ for the Kishkindha Kand community**