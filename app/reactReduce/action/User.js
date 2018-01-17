import {
	Alert
} from 'react-native';

import * as TYPES from './Type';

let textUser = {
	'name': 'juju',
	'age': '24',
	'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
}

let skipUser = {
	'name': 'guest',
	'age': '20',
	'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
}

export function Login(opt) {
	return (dispatch) => {
		dispatch({
			'type': TYPES.LOGGED_DOING
		});
		let inner_get = fetch('http://www.baidu.com')
			.then((res) => {
				dispatch({
					'type': TYPES.LOGGED_IN,
					user: textUser
				});
			}).catch((e) => {
				Alert.alert(e.message);
				dispatch({
					'type': TYPES.LOGGED_ERROR,
					error: e
				});
			})
	}
}

export function skipLogin() {
	return {
		'type': TYPES.LOGGED_IN,
		'user': skipUser,
	}
}

export function logOut() {
	return {
		'type': TYPES.LOGGED_OUT
	}
}