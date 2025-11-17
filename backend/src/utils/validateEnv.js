const validateEnv = () => {
  const requiredEnvVars = [
    'OUTLOOK_EMAIL',
    'OUTLOOK_PASSWORD',
    'JWT_SECRET'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`);
    });
    console.error('\n📝 Please create a .env file based on .env.example');
    
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    } else {
      console.warn('⚠️  Continuing in development mode with missing variables...');
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (process.env.OUTLOOK_EMAIL && !emailRegex.test(process.env.OUTLOOK_EMAIL)) {
    console.error('❌ Invalid OUTLOOK_EMAIL format');
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }

  console.log('✅ Environment validation passed');
};

module.exports = validateEnv;