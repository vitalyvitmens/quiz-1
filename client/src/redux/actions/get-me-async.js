import axios from '../../utils/axios'
import { getMe } from './get-me'

export const getMeAsync = () => {
	return async (dispatch) => {
		const getMeData = await axios.get(`/auth/me`, {
			method: 'GET',
		})
		try {
			console.log('getMeData:', getMeData)
			console.log('getMeData.data.token:', getMeData.data.token)
			console.log('getMeData.data.user._id:', getMeData.data.user)
			console.log('getMeData.status:', getMeData.status)
			return getMeData
		} catch (error) {
			console.log(error)
		}
		return dispatch(getMe(getMeData))
	}
}
