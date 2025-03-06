const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');

// Initialize votes for all features if they don't exist
router.get('/init', async (req, res) => {
  try {
    const features = ['Glasses', 'Teeth', 'Shoes', 'Backpack'];
    
    for (const feature of features) {
      const existingVote = await Vote.findOne({ feature });
      
      if (!existingVote) {
        await Vote.create({ feature, count: 0 });
      }
    }
    
    res.status(200).json({ message: 'Votes initialized successfully' });
  } catch (error) {
    console.error('Error initializing votes:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all votes
router.get('/', async (req, res) => {
  try {
    const votes = await Vote.find().sort({ feature: 1 });
    res.status(200).json(votes);
  } catch (error) {
    console.error('Error fetching votes:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit a vote for a feature
router.post('/', async (req, res) => {
  try {
    const { feature } = req.body;
    
    if (!feature) {
      return res.status(400).json({ message: 'Feature is required' });
    }
    
    const vote = await Vote.findOne({ feature });
    
    if (!vote) {
      return res.status(404).json({ message: 'Feature not found' });
    }
    
    vote.count += 1;
    await vote.save();
    
    res.status(200).json(vote);
  } catch (error) {
    console.error('Error submitting vote:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get votes for a specific feature
router.get('/:feature', async (req, res) => {
  try {
    const { feature } = req.params;
    const vote = await Vote.findOne({ feature });
    
    if (!vote) {
      return res.status(404).json({ message: 'Feature not found' });
    }
    
    res.status(200).json(vote);
  } catch (error) {
    console.error('Error fetching vote:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
