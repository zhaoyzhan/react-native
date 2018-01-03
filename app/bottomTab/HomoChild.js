import React from 'react';

import {
	Text,
	StyleSheet,
	View
} from 'react-native';

import {
	TabNavigator
} from "react-navigation";

import HclFirst from './homeChildList/HclFirst'
import HclSec from './homeChildList/HclSec'
import HclThree from './homeChildList/HclThree'

class HomeChild extends React.Component {
	static navigationOptions = {
		title: '首页',
	};
	render() {
		return (
			<View style={styles.hcMain}>
				<Text>HomeChild</Text>
			</View>
		)
	}
}

const TabHomeChild = TabNavigator({
	main: {
		screen: HomeChild,
	},
	First: {
		screen: HclFirst
	},
	Second: {
		screen: HclSec
	},
	Three: {
		screen: HclThree
	}
}, {
	//是否允许在标签之间滑动
	swipeEnabled: false,
	//改变标签时是否进行动画制作
	// animationEnabled: false,
	//后退按钮是否会导致标签切换到初始选项卡
	backBehavior: 'none',
	//是否懒加载
	// lazy: iOS ? true : false,
	tabBarOptions: {
		// tabbar上label的style
		labelStyle: {
			// marginTop:0
		},
		style: {
			height: 49,
			backgroundColor: 'white'
		},
		// label和icon的背景色 不活跃状态下
		inactiveBackgroundColor: 'white',
		// label和icon的前景色 不活跃状态下(未选中)
		inactiveTintColor: '#aaa',
		// label和icon的背景色 活跃状态下
		activeBackgroundColor: 'white',
		// label和icon的前景色 活跃状态下（选中）
		activeTintColor: '#4ECBFC',
		indicatorStyle: {
			height: 0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
		},
		pressOpacity: 0.3,
	}
});

const styles = StyleSheet.create({
	hcMain: {
		flex: 1,
		backgroundColor: '#ccc',
	}
});

export default TabHomeChild