const { Router } = require('express')
const { register, login, getMe } = require('../controllers/auth')
const checkAuth = require('../utils/checkAuth')

const router = Router()

// register
// http://localhost:3001/api/auth/register
router.post('/register', register)

// login
// http://localhost:3001/api/auth/login
router.post('/login', login)

// getMe
// http://localhost:3001/api/auth/me
router.get('/me', checkAuth, getMe)

module.exports = router
