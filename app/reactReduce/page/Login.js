import React from 'react'

import {
	Component,
	Text,
	View,
	Platform,
	TextInput,
	Image,
	Alert,
} from 'react-native'

import {
	connect
} from 'react-redux';

import ModalBox from 'react-native-modalBox';

import Spinner from 'react-native-spinkit';

import {
	login,
	skipLogin
} from '../action/User';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'sup1',
			password: '123456',
			btnFlag: true,
		};

	}
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.isLoggedIn != this.this.props..isLoggedIn && nextProps.isLoggedIn === true) {
			this.refs.modal.close();
			this.toMain();
			return false;
		}
		if (nextProps.status == 'doing') {
			this.refs.modal.open();
			return false;
		}
		if (nextProps)
	}
}