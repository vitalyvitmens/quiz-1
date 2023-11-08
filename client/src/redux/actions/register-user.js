import { ACTION_TYPE } from './action-type'

export const registerUser = (data) => ({
	type: ACTION_TYPE.REGISTER_USER,
	payload: data,
})
