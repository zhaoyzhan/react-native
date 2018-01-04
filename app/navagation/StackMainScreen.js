import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Button,
	ToastAndroid,
	TouchableWithoutFeedback,
	TouchableHighlight,
	TouchableNativeFeedback,
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

import ChatScreen from './ChatScreen';
// import Headers from './public/Header';

class StackMainScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	buttonOnClick() {
		console.log("1")
	};
	render() {
		const {
			navigate
		} = this.props.navigation;
		console.log(this.props)
		return (
			<View style={styles.contain}>
				<Button onPress={this.buttonOnClick} style={styles.btn} title='第一页'></Button>
				<Button onPress={()=>ToastAndroid.show("被点击了", ToastAndroid.SHORT)} style={styles.btn} title='第二页'></Button>
				<Button onPress={()=>navigate('ChatScreen', {user: 'zhangsan'})} style={styles.btn} title='第三页'></Button>
				<Button onPress={()=>ToastAndroid.show("被点击了", ToastAndroid.SHORT)} style={styles.btn} title='第四页'></Button>
				<TouchableHighlight 
					activeOpacity={0.5} 
					underlayColor={'red'}
					onPress={()=>navigate('Chat', {user: 'zhangsan'})}
					style={{}}
					>
					<Text style={{fontSize:23, color:'blue', backgroundColor:'white',}}>点击</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const SimpleApp = StackNavigator({
	Home: {
		screen: StackMainScreen
	},
	Chat: {
		screen: ChatScreen
	}
});

export default SimpleApp;

// const HomeScreen = () => (
// 	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//   </View>
// );

// const DetailsScreen = () => (
// 	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Details Screen</Text>
//   </View>
// );

// const RootNavigator = StackNavigator({
// 	Home: {
// 		screen: HomeScreen,
// 		navigationOptions: {
// 			headerTitle: 'Home',
// 		}
// 	},
// 	Details: {
// 		screen: DetailsScreen,
// 	},
// });

// export default RootNavigator;

const styles = StyleSheet.create({
	contain: {
		flex: 1
	},
	tab: {
		width: 100,
		height: 200,
		display: 'flex',
		flexWrap: 'nowrap'
	},
	left: {
		flex: 1,
		height: 20
	},
	center: {
		flex: 2
	},
	right: {
		flex: 1
	},
	btn: {
		fontSize: 14
	}
})