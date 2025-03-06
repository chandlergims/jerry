const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/votes', require('./routes/votes'));

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  // The path is relative to the server directory, but we need to go up one level and into the dist folder
  const staticPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(staticPath));
  
  // For any request that doesn't match an API route, send the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
} else {
  // Default route for development
  app.get('/', (req, res) => {
    res.send('Stickfiggy API is running');
  });
}

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
