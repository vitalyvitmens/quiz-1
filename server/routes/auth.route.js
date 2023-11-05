const { Router } = require('express')
const User = require('../models/User')
const router = Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// register

router.post(
	'/register',
	[
		check(
			'login',
			'Некорректный логин, минимальное количество символов 2'
		).isLength({ min: 2 }),
		check(
			'password',
			'Некорректный пароль, минимальное количество символов 6'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректные данные при регистрации',
				})
			}
			const { login, password } = req.body

			const isUsed = await User.findOne({ login })

			if (isUsed) {
				return res.status(300).json({
					message: `Пользователь с логином: ${login} уже есть в базе, если это Вы, то пробуйте авторизоваться, иначе используйте другой логин для регистрации`,
				})
			}

			const passwordHash = await bcrypt.hash(password, 10)

			const user = new User({
				login,
				password: passwordHash,
			})

			await user.save()

			const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
				expiresIn: '30d',
			})

			res.status(201).json({
				token,
				userId: user.id,
				message: `Пользователь с логином: ${login} создан`,
			})
		} catch (error) {
			console.log(error)
		}
	}
)

// login

router.post(
	'/login',
	[
		check(
			'login',
			'Некорректный логин, минимальное количество символов 2'
		).isLength({ min: 2 }),
		check(
			'password',
			'Некорректный пароль, минимальное количество символов 6'
		).exists(),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректные данные при регистрации',
				})
			}
			const { login, password } = req.body

			const user = await User.findOne({ login })

			if (!user) {
				return res
					.status(400)
					.json({ message: `Пользователя: ${login} нет в базе` })
			}
			const isPasswordMatch = await bcrypt.compare(password, user.password)

			if (!isPasswordMatch) {
				return res.status(400).json({ message: 'Не верный пароль' })
			}

			const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
				expiresIn: '30d',
			})

			res.json({
				token,
				userId: user.id,
				message: `Пользователь с логином: ${login} авторизовался`,
			})
		} catch (error) {
			console.log(error)
		}
	}
)

module.exports = router
