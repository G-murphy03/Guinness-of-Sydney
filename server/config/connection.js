const mongoose = require('mongoose');

// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/guinness-of-sydney', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;