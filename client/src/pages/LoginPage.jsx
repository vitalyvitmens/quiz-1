import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className="w-1/4 h-60 mx-auto mt-40"
		>
			<h1 className="text-lg text-white text-center">Авторизация</h1>
			<label className="text-xs text-gray-400">
				LOGIN
				<input
					id="text"
					type="text"
					placeholder="login"
					className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
				></input>
			</label>

			<label className="text-xs text-gray-400">
				PASSWORD
				<input
					id="password"
					type="password"
					placeholder="password"
					className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
				></input>
			</label>

			<div className="flex gap-8 justify-center mt-4">
				<button
					type="submit"
					className="flex justify-center items-center text-xs text-white py-2 px-4 rounded-lg bg-green-700"
				>
					Войти
				</button>
				<Link
					to="/register"
					className="flex justify-center items-center text-xs text-blue-800"
				>
					Нет аккаунта ?
				</Link>
			</div>
		</form>
	)
}
