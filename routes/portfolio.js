const express = require('express');
const Portfolio = require('../models/Portfolio');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get Portfolio
router.get('/', async (req, res) => {
  const portfolio = await Portfolio.findOne();
  res.json(portfolio);
});

// Update Portfolio
router.put('/', authMiddleware, async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json({ message: 'Portfolio updated successfully', data: updatedPortfolio });
  } catch (err) {
    res.status(500).json({ message: 'Error updating portfolio' });
  }
});

module.exports = router;
