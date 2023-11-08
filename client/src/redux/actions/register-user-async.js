import { registerUser } from './register-user'
import axios from '../../utils/axios'

export const registerUserAsync = ({ login, password }) => {
	return async (dispatch) => {
		// const loginUserData = await axios.post('/auth/login', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ login, password }),
		// })
		const { data } = await axios.post('/auth/register', {
			login,
			password,
		})

		if (data.token) window.localStorage.setItem('token', data.token)
		console.log('registerUserData:', data)

		return dispatch(registerUser(data))
	}
}

// export const registerUserAsync = () => {
// 	return async (dispatch) => {
// 		const response = await fetch(
// 			'auth/registerUser',
// 			async ({ login, password }) => {
// 				try {
// 					const { data } = await axios.post('/auth/register', {
// 						login,
// 						password,
// 					})

// 					if (data.token) window.localStorage.setItem('token', data.token)
// 					return data
// 				} catch (error) {
// 					console.log(error)
// 				}
// 			}
// 		)
// 		const registerUserData = await response.json()
// 		return dispatch(registerUser(registerUserData))
// 	}
// }
