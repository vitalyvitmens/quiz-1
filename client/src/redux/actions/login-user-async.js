import { loginUser } from './login-user'
import axios from '../../utils/axios'

export const loginUserAsync = () => {
	return async (dispatch) => {
		const response = await fetch(
			'auth/loginUser',
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
