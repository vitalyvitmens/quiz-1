import { ACTION_TYPE } from './action-type'

export const loginUser = (data) => ({
	type: ACTION_TYPE.LOGIN_USER,
	payload: data,
})
