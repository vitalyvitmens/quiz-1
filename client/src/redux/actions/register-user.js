import { ACTION_TYPE } from './action-type'

export const registerUser = (registerUserData) => ({
	type: ACTION_TYPE.REGISTER_USER,
	payload: registerUserData,
})
