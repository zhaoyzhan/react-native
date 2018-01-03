import React from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import HomeChild from './HomoChild'

export default class BottomTabNavigator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 'Home'
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<TabNavigator>
					<TabNavigator.Item
						//设置选中的位置
						selected={this.state.selectedTab === 'Home'}
						//标题
						title="Home"
						//标题样式
						titleStyle={styles.tabText}
						//选中时的样式
						selectedTitleStyle={styles.selectedTabText}
						//图标
						renderIcon={()=><Image style={styles.icon} source={require("../img/transfer.png")}/>}
						//选中时的图标
						renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/regular.png")} />}
						//点击Event
						onPress={()=>this.setState({selectedTab:'Home'})}
					>
						<HomeChild/>
					</TabNavigator.Item>

					<TabNavigator.Item
						//设置选中的位置
						selected={this.state.selectedTab == 'News'}
						//标题
						title="News"
						//标题样式
						titleStyle={styles.tabText}
						//选中时的样式
						selectedTitleStyle={styles.selectedTabText}
						//图标
						renderIcon={()=><Image style={styles.icon} source={require("../img/transfer.png")}/>}
						//选中时的图标
						renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/regular.png")} />}
						//点击Event
						onPress={()=>this.setState({selectedTab:'News'})}
					>
						<View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: '#ccc'}}>This is News Page</Text>
                        </View>
					</TabNavigator.Item>

					<TabNavigator.Item
						//设置选中的位置
						selected={this.state.selectedTab == 'List'}
						//标题
						title="List"
						//标题样式
						titleStyle={styles.tabText}
						//选中时的样式
						selectedTitleStyle={styles.selectedTabText}
						//图标
						renderIcon={()=><Image style={styles.icon} source={require("../img/transfer.png")}/>}
						//选中时的图标
						renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/regular.png")} />}
						//点击Event
						onPress={()=>this.setState({selectedTab:'List'})}
					>
						<View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#ccc'}}>This is List Page</Text>
                        </View>
					</TabNavigator.Item>

					<TabNavigator.Item
						//设置选中的位置
						selected={this.state.selectedTab == 'My'}
						//标题
						title="My"
						//标题样式
						titleStyle={styles.tabText}
						//选中时的样式
						selectedTitleStyle={styles.selectedTabText}
						//图标
						renderIcon={()=><Image style={styles.icon} source={require("../img/transfer.png")}/>}
						//选中时的图标
						renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/regular.png")} />}
						//点击Event
						onPress={()=>this.setState({selectedTab:'My'})}
					>
						<View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#ccc'}}>This is My Page</Text>
                        </View>
					</TabNavigator.Item>
				</TabNavigator>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	tabText: {
		fontSize: 10,
		color: 'black'
	},
	selectedTabText: {
		fontSize: 10,
		color: 'red'
	},
	icon: {
		width: 22,
		height: 22
	},
	page0: {
		flex: 1,
		backgroundColor: '#ccc'
	},
	page1: {
		flex: 1,
		backgroundColor: '#ccc'
	}
});