const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
	try {
		const { login, password } = req.body

		const isUsed = await User.findOne({ login })

		if (isUsed) {
			return res.json({
				message: `Пользователь с логином: ${login} уже есть в базе, если это Вы, то пробуйте авторизоваться, иначе используйте другой логин для регистрации`,
			})
		}

		const passwordHash = await bcrypt.hash(password, 10)

		const newUser = User({
			login,
			password: passwordHash,
		})

		const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
			expiresIn: '30d',
		})

		await newUser.save()

		res.json({
			token,
			newUser,
			message: `Пользователь с логином: ${login} создан`,
		})
	} catch (error) {
		res.json({ message: `Ошибка: ${error}, при создании пользователя` })
		console.log(`Ошибка: ${error}, при создании пользователя`)
	}
}

const login = async (req, res) => {
	try {
		const { login, password } = req.body
		const user = await User.findOne({ login })

		if (!user) {
			return res.json({ message: `Пользователя: ${login} нет в базе` })
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password)

		if (!isPasswordMatch) {
			return res.json({ message: 'Не верный пароль' })
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '30d',
		})

		res.json({
			token,
			user,
			message: `Пользователь с логином: ${login} авторизовался`,
		})
	} catch (error) {
		res.json({ message: `Ошибка: ${error}, при авторизации` })
		console.log(`Ошибка: ${error}, при авторизации`)
	}
}

const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.userId)

		if (!user) {
			return res.json({ message: `Пользователя: ${login} нет в базе` })
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '30d',
		})

		res.json({
			user,
			token,
		})
	} catch (error) {
		res.json({ message: `Ошибка: ${error}, нет доступа` })
		console.log(`Ошибка: ${error}, нет доступа`)
	}
}

module.exports = {
	register,
	login,
	getMe,
}
