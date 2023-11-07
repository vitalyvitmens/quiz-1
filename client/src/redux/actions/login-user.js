import { ACTION_TYPE } from './action-type'

export const loginUser = (loginUserData) => ({
	type: ACTION_TYPE.LOGIN_USER,
	payload: loginUserData,
})
