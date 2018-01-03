import React from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';


import ScrollHome from './scrollList/ScrollHome'

export default class ScrollBar extends React.Component {
	render() {
		return (
			<ScrollHome/>
		)
	}
}


const styles = StyleSheet.create({
	crollBar: {
		flex: 1,
		backgroundColor: '#ccc'
	}
});