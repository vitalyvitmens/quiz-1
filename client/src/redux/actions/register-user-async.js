import { registerUser } from './register-user'
import axios from '../../utils/axios'

export const registerUserAsync = () => {
	return async (dispatch) => {
		const response = await fetch(
			'auth/registerUser',
			async ({ login, password }) => {
				try {
					const { data } = await axios.post('/auth/register', {
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
		const registerUserData = await response.json()
		return dispatch(registerUser(registerUserData))
	}
}
