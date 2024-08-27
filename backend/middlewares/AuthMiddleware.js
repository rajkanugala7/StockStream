// AuthMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust based on your User model location

const userVerification = (req, res, next) => {
  const token = req.cookies.token; // Assuming token is stored in cookies
  if (!token) {
    return res.status(401).json({ status: false, message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err);
      return res.status(401).json({ status: false, message: 'Token verification failed' });
    }

    try {
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ status: false, message: 'User not found' });
      }
      req.user = user; // Set req.user with user object for use in subsequent middleware/routes
      next(); // Proceed to next middleware/route
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ status: false, message: 'Internal server error' });
    }
  });
};

module.exports = { userVerification };
