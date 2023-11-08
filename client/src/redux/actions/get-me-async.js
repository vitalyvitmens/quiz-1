import axios from '../../utils/axios'
import { getMe } from './get-me'

export const getMeAsync = () => {
	return async (dispatch) => {
		const { data } = await axios.get('/auth/me')
		return dispatch(getMe(data))
	}
}
