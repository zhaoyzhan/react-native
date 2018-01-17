import * as TYPES from '../action/Type';

const initialState = {
	isLoggedIn: false,
	user: {},
	status: null,
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case TYPES.LOGGED_DOING:
			return {
				...state,
				status: 'doing'
			};
		case TYPES.LOGGED_IN:
			return {
				...state,
				status: 'done',
				isLoggedIn: 'true',
				user: action.user
			};
		case TYPES.LOGGED_OUT:
			return {
				...state,
				status: null,
				isLoggedIn: false,
				user: {}
			};
		case TYPES.LOGGED_DOING:
			return {
				...state,
				status: null,
				user: {},
				isLoggedIn: false
			};
		default:
			return state;
	}
}