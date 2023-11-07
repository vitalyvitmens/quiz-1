import { ACTION_TYPE } from './action-type'

export const getMe = (data) => ({
	type: ACTION_TYPE.GET_ME,
	payload: data,
})
