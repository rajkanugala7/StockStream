const { userVerification } = require('../middlewares/AuthMiddleware');
const User = require('../models/User');

const getCurrentUser = async (req, res) => {
  try {
    const user = req.user; // Assuming req.user is set by userVerification middleware
    if (!user) {
      return res.status(401).json({ status: false, message: 'User not authenticated' });
    }
    res.status(200).json({ status: true, user: user.username }); // Adjust as per your User schema
  } catch (error) {
    console.error('Error fetching current user:', error);
    res.status(500).json({ status: false, message: 'Internal server error' });
  }
};

module.exports = { getCurrentUser };
