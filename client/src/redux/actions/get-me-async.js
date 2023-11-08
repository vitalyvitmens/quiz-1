import axios from '../../utils/axios'
import { getMe } from './get-me'

export const getMeAsync = () => {
	return async (dispatch) => {
		const response = await axios.get(`/auth/me`, {
			method: 'GET',
		})
		// const data = await response.json()
		return dispatch(getMe(response))
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
