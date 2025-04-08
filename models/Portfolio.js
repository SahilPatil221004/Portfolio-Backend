const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  personalInfo: {
    fullName: { type: String, default: 'Dr. John Doe' },
    position: { type: String, default: 'Professor of Computer Science' },
    tagline: { type: String, default: 'Educator | Researcher | Innovator' },
    avatarURL: { type: String, default: '' }
  },
  about: {
    bio: String,
    stats: [{ key: String, value: String }]
  },
  work: [{ title: String, organization: String, duration: String, description: String }],
  achievements: [{ title: String, year: Number, description: String }],
  publications: [{ title: String, year: Number, description: String, link: String }],
  projects: [{ title: String, description: String, year: Number }],
  teaching: [{ title: String, level: String, description: String }],
  contact: {
    email: String,
    phone: String,
    office: String,
    socialLinks: { 
      linkedin: String, 
      twitter: String, 
      researchgate: String 
    }
  }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);