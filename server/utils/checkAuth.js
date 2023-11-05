const jwt = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			req.userId = decoded.id

			next()
		} catch (error) {
			res.json({ message: `Ошибка: ${error}, нет доступа` })
			console.log(`Ошибка: ${error}, нет доступа`)
		}
	} else {
		res.json({ message: 'Нет доступа' })
	}
}

module.exports = checkAuth
