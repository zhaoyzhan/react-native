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

import HomeChild from './HomeChild'

export default class HomeScroll extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			typeArr: [{
				'title': '第一页',
				'type': '第一页'
			}, {
				'title': '第二页',
				'type': '第二页'
			}, {
				'title': '第三页',
				'type': '第三页'
			}, {
				'title': '第四页',
				'type': '第四页'
			}, {
				'title': '第五页',
				'type': '第五页'
			}, {
				'title': '第六页',
				'type': '第六页'
			}, {
				'title': '第七页',
				'type': '第七页'
			}, {
				'title': '第八页',
				'type': '第八页'
			}, {
				'title': '第九页',
				'type': '第九页'
			}]
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
				{
					this.state.typeArr.map((item, index)=>{
						return (
							<HomeChild tabLabel={item.title} type={item.type} key={index}/>
						)
					})
				}
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