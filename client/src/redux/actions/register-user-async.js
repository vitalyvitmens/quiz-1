import { registerUser } from './register-user'
import axios from '../../utils/axios'

export const registerUserAsync = ({ login, password }) => {
	return async (dispatch) => {
		const { data } = await axios.post('/auth/register', {
			login,
			password,
		})

		if (data.token) window.localStorage.setItem('token', data.token)
		console.log('registerUserData:', data)

		return dispatch(registerUser(data))
	}
}
