import { ACTION_TYPE } from './action-type'

export const getMe = (getMeData) => ({
	type: ACTION_TYPE.GET_ME,
	payload: getMeData,
})
