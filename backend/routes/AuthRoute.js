const { Signup, Login  } = require('../controllers/AuthController')
const { getCurrentUser } = require('../controllers/UserController')
const router = require('express').Router()
const {userVerification} =require("../middlewares/AuthMiddleware")
router.post('/signup', Signup)
router.post('/login', Login)
router.post('/', userVerification)
router.get('/currentUser',getCurrentUser)

module.exports = router