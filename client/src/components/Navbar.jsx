import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions'
import { toast } from 'react-toastify'
import { Button } from './Button'
import { selectCheckIsAuth } from '../redux/selectors'

export const Navbar = () => {
	const isAuth = useSelector(selectCheckIsAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
  console.log('isAuth from Navbar:', isAuth)

	const activeStyles = {
		color: 'white',
	}

	const logoutHandler = () => {
		dispatch(logout)
		window.localStorage.removeItem('token')
		navigate('/login')
		toast('Вы вышли из системы')
	}

	return (
		<div className="flex py-4 justify-between items-center">
			<span className="flex justify-center items-center px-2 text-green-800 font-extrabold text-3xl">
				QUIZ 1.0
			</span>

			{isAuth ? (
				<ul className="flex gap-8">
					<li>
						<NavLink
							to={'/'}
							href="/"
							className="text-xs text-gray-400 hover:text-white"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Главная
						</NavLink>
					</li>
				</ul>
			) : (
				<ul className="flex gap-8">
					<li>
						<NavLink
							to={'/'}
							href="/"
							className="text-xs text-gray-400 hover:text-white"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/register'}
							href="/register"
							className="text-xs text-gray-400 hover:text-white"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Register
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/login'}
							href="/login"
							className="text-xs text-gray-400 hover:text-white"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Login
						</NavLink>
					</li>
				</ul>
			)}

			{isAuth ? (
				<Button onClick={logoutHandler}>Выйти</Button>
			) : (
				<Button bgColor="bg-green-800">
					<Link to="/login">Войти</Link>
				</Button>
			)}
		</div>
	)
}
