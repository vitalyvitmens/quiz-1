import { loginUser } from './login-user'
import axios from '../../utils/axios'

export const loginUserAsync = () => {
	return async (dispatch) => {
		const response = await fetch(
			'auth/login',
			async ({ login, password }) => {
				try {
					const { data } = await axios.post('/auth/login', {
						login,
						password,
					})

					if (data.token) window.localStorage.setItem('token', data.token)
					return data
				} catch (error) {
					console.log(error)
				}
			}
		)
		const loginUserData = await response.json()
		return dispatch(loginUser(loginUserData))
	}
}

// export const getMeAsync = () => {
// 	return async (dispatch) => {
// 		const response = await axios.get(`/auth/me`, {
// 			method: 'GET',
// 		})
// 		const data = await response.json()
// 		return dispatch(getMe(data))
// 	}
// }


// export const loginUserAsync = () => {
// 	return async (dispatch) => {
// 		const response = await fetch(
// 			'auth/loginUser',
// 			async ({ login, password }) => {
// 				try {
// 					const { data } = await axios.post('/auth/login', {
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
// 		const loginUserData = await response.json()
// 		return dispatch(loginUser(loginUserData))
// 	}
// }
