require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const portfolioRoutes = require('./routes/portfolio');
const { errorHandler } = require('./middleware/error');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.use(errorHandler);

const cors = require('cors');
app.use(cors({
  origin: 'https://portfolio-frontend-dun-mu.vercel.app/',
  credentials: true,
}));


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
