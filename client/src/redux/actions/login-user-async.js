import { loginUser } from './login-user'
import axios from '../../utils/axios'

export const loginUserAsync = ({ login, password }) => {
	return async (dispatch) => {
		const { data } = await axios.post('/auth/login', {
			login,
			password,
		})

		if (data.token) window.localStorage.setItem('token', data.token)
		console.log('loginUserData:', data)

		return dispatch(loginUser(data))
	}
}
