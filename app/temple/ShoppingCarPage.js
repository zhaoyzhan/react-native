import React, {
	Component
} from 'react';

import {
	View,
	FlatList,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';

import ShoppingItemComponent from './ShoppingItemComponent'

export default class ShoppingCarPage extends Component {
	static navigationOptions = {
		headerTitle: '基于State购物车',
	};

	constructor(props) {
		super(props);
		this.state = {
			allSelecte: data.isAllSelect,
			totalMoney: data.totalMoney,
		}

	};

	getMoney = (m) => {
		this.state.totalMoney = this.state.totalMoney + m;
		//this.state.totalMoney += m;
		data.totalMoney = this.state.totalMoney;
		this.setState({
			totalMoney: this.state.totalMoney
		});

		let i = 0;
		data.datas.map((item) => {
			if (item.isSelect != true) {
				i += 1;
			}
		});
		if (i == 0) {
			data.isAllSelect = true;
			this.setState({
				allSelecte: true
			})
		} else {
			data.isAllSelect = false;
			this.setState({
				allSelecte: false
			})
		}
	};

	renderItem = (item) => {
		return (
			<ShoppingItemComponent
	        	itemData={item}
	        	money={this.getMoney}
	      	/>
		)
	};

	allSelect = () => {
		data.totalMoney = 0;
		data.isAllSelect = !data.isAllSelect;
		this.state.totalMoney = 0;
		DeviceEventEmitter.emit('allSelect', !this.state.allSelecte);
		this.setState({
			allSelecte: !this.state.allSelecte
		})
	};

	separatorView = () => {
		return (
			<View style={{ height : 10, backgroundColor : '#e9e9e9' }}/>
		)
	};

	keyExtractor = (item) => item.name;

	render() {
		let {
			allSelecte,
			totalMoney
		} = this.state;
		return (
			<View style={styles.container}>
        <FlatList data={data.datas}
             ItemSeparatorComponent={this.separatorView}
             renderItem={({ item }) => this.renderItem(item)}
             keyExtractor={ this.keyExtractor }
        />
        <View style={styles.tool}>
          <View style={{ flex : 1, flexDirection : 'row', alignItems : 'center' }}>
            <TouchableOpacity style={styles.select} onPress={ this.allSelect }>
              <Image source={allSelecte ? require('../img/login_radio_selected.png') : require('../img/login_radio_normall.png')}/>
              <Text style={{ marginLeft : 3 }}>全选</Text>
            </TouchableOpacity>
            <Text style={styles.allMoneyText}>
              ￥{this.state.totalMoney}
            </Text>
          </View>
          <TouchableOpacity style={styles.balance}>
            <Text style={styles.balanceText}>去结算</Text>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}