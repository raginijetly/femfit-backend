const crypto = require('crypto');

const generateUsername = ({ name, email, googleId }) => {
  const base = name?.toLowerCase()?.replace(/\s+/g, '') || email?.split('@')[0];

  const hashSource = googleId || email;
  const shortHash = crypto.createHash('sha256').update(hashSource).digest('hex').slice(0, process.env.USERNAME_HASHED_DIGIT_COUNT || 6);

  return `${base}${shortHash}`;
}

module.exports = {
  generateUsername,
};