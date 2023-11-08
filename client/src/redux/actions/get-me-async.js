import axios from '../../utils/axios'
import { getMe } from './get-me'

export const getMeAsync = () => {
	return async (dispatch) => {
		const { data } = await axios.get(`/auth/me`, {
			method: 'GET',
		})
		try {
			return data
		} catch (error) {
			console.log(error)
		}
		console.log('data', data)
		console.log('data.data.token', data.data.token)
		console.log('data.data.user._id', data.data.user._id)
		console.log('data.status', data.status)
		return dispatch(getMe(data))
	}
}

// export const getMeAsync = () => {
// 	return async (dispatch) => {
// 		const response = await fetch('auth/getMe', async () => {
// 			try {
// 				const { data } = await axios.get('/auth/me')
// 				return data
// 			} catch (error) {
// 				console.log(error)
// 			}
// 		})
// 		const data = await response.json()
// 		return dispatch(getMe(data))
// 	}
// }
