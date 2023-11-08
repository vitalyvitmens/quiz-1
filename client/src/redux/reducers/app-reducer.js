import { ACTION_TYPE } from '../actions'

const initialAppState = {
	user: null,
	token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDhkNTUwMDdjZDhhYjZlODFkNzQwMSIsImlhdCI6MTY5OTQyOTg0MywiZXhwIjoxNzAyMDIxODQzfQ.W2nn-5rh9AFtPGLalIVeJELyREEGMU9hLiyswOyURuk',
	isLoading: false,
	status: null,
}

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.REGISTER_USER:
			return {
				...state,
				...action.payload,
				isloading: false,
				status: action.payload.message,
				user: action.payload.user,
				token: action.payload.token,
			}

		case ACTION_TYPE.LOGIN_USER:
			return {
				...state,
				...action.payload,
				isloading: false,
				status: action.payload.message,
				user: action.payload.user,
				token: action.payload.token,
			}

		case ACTION_TYPE.GET_ME:
			return {
				...state,
				...action.payload,
				isloading: false,
				status: action.payload?.status,
				user: action.payload.data?.user._id,
				token: action.payload.data?.token,
			}

		case ACTION_TYPE.LOGOUT:
			return initialAppState

		default:
			return state
	}
}
