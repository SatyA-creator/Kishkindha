const nodemailer = require('nodemailer');

// Create reusable transporter object using Outlook SMTP
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.OUTLOOK_HOST || 'smtp-mail.outlook.com',
    port: parseInt(process.env.OUTLOOK_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_PASSWORD, // Use app password, not regular password
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  });
};

// Send welcome email to subscriber
const sendWelcomeEmail = async (subscriberEmail) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: {
        name: process.env.COMPANY_NAME || 'Kishkindha Kand',
        address: process.env.OUTLOOK_EMAIL
      },
      to: subscriberEmail,
      subject: 'Welcome to Kishkindha Kand - Your Adventure Awaits! 🎮',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Kishkindha Kand</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #D4AF37, #F4A460); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: #fff; margin: 0; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: #D4AF37; color: #fff; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            .cta-button { display: inline-block; background: #D4AF37; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎮 KISHKINDHA KAND</h1>
              <p style="color: #fff; margin: 10px 0; font-style: italic;">Welcome to the Epic Tale of Two Brothers</p>
            </div>
            
            <div class="content">
              <h2>🙏 Thank you for joining our community!</h2>
              
              <p>Welcome aboard, brave adventurer! You've successfully subscribed to receive updates about <strong>Kishkindha Kand</strong> - the mythological action-adventure game that reimagines the epic tale of Vali and Sugriva.</p>
              
              <div class="highlight">
                <h3>What to expect:</h3>
                <ul>
                  <li>🎯 Exclusive development updates and behind-the-scenes content</li>
                  <li>🎮 Early access opportunities and beta testing invitations</li>
                  <li>🎨 Concept art, character reveals, and lore deep-dives</li>
                  <li>📅 Release date announcements and milestone celebrations</li>
                  <li>🎁 Special offers and exclusive content for subscribers</li>
                </ul>
              </div>
              
              <p><strong>Our Vision:</strong> Every myth ends in a war. Ours ends in understanding.</p>
              
              <p>You don't play heroes in Kishkindha Kand. You play memory, pride, guilt, and forgiveness. Experience the dual narrative of two brothers bound by love but divided by a single moment of fear.</p>
              
              <a href="${process.env.WEBSITE_URL || 'https://kishkindhakand.com'}" class="cta-button">Visit Our Website</a>
              
              <p>We're not retelling history. We're making it as a new experience. Thank you for being part of this incredible journey!</p>
              
              <p>Stay strong, stay legendary!</p>
              <p><strong>The Zenith Studio Team</strong></p>
            </div>
            
            <div class="footer">
              <p>You're receiving this email because you subscribed to updates from Kishkindha Kand.</p>
              <p>© ${new Date().getFullYear()} ${process.env.COMPANY_NAME || 'Zenith Studio LLC'}. All rights reserved.</p>
              <p>If you no longer wish to receive these emails, you can unsubscribe at any time.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Welcome to Kishkindha Kand!
        
        Thank you for subscribing to receive updates about our mythological action-adventure game.
        
        You'll receive:
        - Exclusive development updates
        - Early access opportunities
        - Concept art and character reveals
        - Release announcements
        - Special subscriber offers
        
        Visit our website: ${process.env.WEBSITE_URL || 'https://kishkindhakand.com'}
        
        Stay strong, stay legendary!
        The Zenith Studio Team
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Welcome email sent:', info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('❌ Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
};

// Send notification email to admin
const sendAdminNotification = async (subscriberEmail) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: {
        name: 'Kishkindha Website',
        address: process.env.OUTLOOK_EMAIL
      },
      to: process.env.OUTLOOK_EMAIL,
      subject: '🎮 New Subscription - Kishkindha Kand',
      html: `
        <h2>New Subscriber Alert!</h2>
        <p><strong>Email:</strong> ${subscriberEmail}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Website subscription form</p>
        
        <p>A new user has joined the Kishkindha Kand community!</p>
      `,
      text: `
        New Subscriber Alert!
        
        Email: ${subscriberEmail}
        Date: ${new Date().toLocaleString()}
        Source: Website subscription form
        
        A new user has joined the Kishkindha Kand community!
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Admin notification sent:', info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('❌ Error sending admin notification:', error);
    return { success: false, error: error.message };
  }
};

// Test email configuration
const testEmailConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Outlook email configuration verified');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    return false;
  }
};

module.exports = {
  sendWelcomeEmail,
  sendAdminNotification,
  testEmailConnection
};