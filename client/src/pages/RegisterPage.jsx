import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { checkIsAuth, registerUser } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import { Button } from '../components'

export const RegisterPage = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const { status } = useSelector((state) => state.auth)
	const isAuth = useSelector(checkIsAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (status) toast(status)
		if (isAuth) navigate('/')
	}, [isAuth, navigate, status])

	const handleSubmit = () => {
		try {
			dispatch(registerUser({ login, password }))
			setLogin('')
			setPassword('')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className="w-1/4 h-60 mx-auto mt-40"
		>
			<h1 className="text-lg text-white text-center">Регистрация</h1>
			<label className="text-xs text-gray-400">
				LOGIN
				<input
					id="text"
					type="text"
					value={login}
					onChange={(e) => setLogin(e.target.value)}
					placeholder="login"
					className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
				></input>
			</label>

			<label className="text-xs text-gray-400">
				PASSWORD
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password"
					className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
				></input>
			</label>

			<div className="flex gap-8 justify-center mt-4">
				<Button
					type="submit"
					disabled={!login || !password}
					onClick={handleSubmit}
					bgColor={login && password ? 'bg-green-700' : 'bg-gray-400'}
				>
					Регистрация
				</Button>
				<Link
					to="/login"
					className="flex justify-center items-center text-xs text-blue-800"
				>
					Уже есть аккаунт ?
				</Link>
			</div>
		</form>
	)
}
