import React from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity
} from 'react-native';

import ScrollableTabView, {
	ScrollableTabBar,
	DefaultTabBar
} from 'react-native-scrollable-tab-view';

export default class HomeScroll extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		};
	};
	static navigationOptions = {
		title: '首页',
	};
	_onChangeTab(i) {
		// console.log(i)
	};
	_onScroll(e) {
		// alert(e)
	};
	showIndex() {
		alert("1234")
	};
	render() {
		return (
			<ScrollableTabView
				renderTabBar={() => <ScrollableTabBar/>}
			    tabBarUnderlineStyle={{backgroundColor:'#FF0000',height:0}}
			    tabBarBackgroundColor='#FFFFFF'
			    tabBarActiveTextColor='#9B30FF'
			    tabBarInactiveTextColor='#7A67EE'
			    tabBarTextStyle={{fontSize: 18}}
			    onScroll={(e) => this._onScroll(e)}
			    onChangeTab={(i)=>this._onChangeTab(i)}
			>
				<Text tabLabel='Tab1'/>
				<Text tabLabel='Tab2'/>
				<Text tabLabel='Tab3'/>
				<Text tabLabel='Tab4'/>
				<Text tabLabel='Tab5'/>
				<Text tabLabel='Tab6'/>
				<Text tabLabel='Tab7'/>
				<Text tabLabel='Tab8'/>

			</ScrollableTabView>
		)
	}
}

const styles = StyleSheet.create({
	crollBar: {
		flex: 1,
		backgroundColor: '#ccc'
	}
});