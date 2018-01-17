import React, {
	Component,
	PropTypes
} from 'react';

import {
	View,
	FlatList,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';

export default class ShoppingItemComponent extends Component {

	static propTypes = {
		itemData: PropTypes.object.isRequired,
		money: PropTypes.func,
	};

	static defaultProps = {
		money: () => null,
	};

	componentDidMount() {
		this.subscription = DeviceEventEmitter.addListener('allSelect', (isSelAll) => {
			this.props.itemData.isSelect = isSelAll;
			this.setState({
				isSel: isSelAll
			});
			if (isSelAll) {
				this.setMoney(this.state.money * this.state.selNum);
			}

		})
	};

	componentWillUnmount() {
		this.subscription && this.subscription.remove();
	};

	constructor(props) {
		super(props);
		this.state = {
			isSel: this.props.itemData.isSelect,
			selNum: this.props.itemData.count,
			money: this.props.itemData.money,
			name: this.props.itemData.name,
			description: this.props.itemData.description,
			img: this.props.itemData.img,
		}
	};

	itemSelect = (item) => {
		this.setState({
			isSel: !this.state.isSel
		}, () => {
			if (this.state.isSel) {
				this.setMoney(this.state.money * this.state.selNum)
			} else {
				this.setMoney(-this.state.money * this.state.selNum)
			}
		});
	};

	itemIncrease = (i) => {
		i++;
		this.setState({
			selNum: i
		}, () => {
			if (this.state.isSel) {
				this.setMoney(this.state.money)
			} else {
				this.setState({
					isSel: true
				});
				this.setMoney(this.state.money * this.state.selNum);
			}
			this.props.itemData.count = i;
		});
	};

	itemReduce = (i) => {
		if (i <= 1) {
			if (this.state.isSel) {
				this.setState({
					isSel: !this.state.isSel
				});
				this.setMoney(-this.state.money)
			}
			return;
		}
		i--;
		this.setState({
			selNum: i
		}, () => {
			if (this.state.isSel) {
				this.setMoney(-this.state.money)
			} else {
				this.setState({
					isSel: true
				});
				this.setMoney(this.state.money * this.state.selNum);
			}
			this.props.itemData.count = i;
		});

	};

	setMoney = (money) => {
		if (this.props.money) {
			this.props.money(money);
		}
	};

	render() {
		let {
			itemData
		} = this.props;
		let {
			isSel,
			selNum,
			money,
			name,
			description,
			img
		} = this.state;
		return (
			<View style={ styles.container }>
        <TouchableOpacity
          style={{ marginLeft : 15 }}
          onPress={() => this.itemSelect(itemData)}>
          <Image source={isSel ?
			require('../img/login_radio_selected.png')
            : require('../img/login_radio_normall.png')}/>
        </TouchableOpacity>
        <Image style={ styles.icon } source={{ uri : img }}/>
        <View style={ styles.right }>
          <Text style={ styles.nameStyle } numberOfLines={ 2 }>{ name }</Text>
          <Text style={ styles.descriptionStyle } numberOfLines={1}>{ description }</Text>
          <View style={ styles.right_bot}>
            < Text style={ styles.moneyStyle }>￥{ money }</Text>
            <View style={ styles.numControllStyle }>
              <TouchableOpacity style={ styles.reduceStyle } onPress={() => this.itemReduce(selNum)}>
                <Text style={{ color : selNum <= 1 ? 'red' : 'black' } }>-</Text>
              </TouchableOpacity>
              <View style={ styles.numberViewStyle }>
                <Text style={ styles.numberStyle }>{ selNum }</Text>
              </View>
              <TouchableOpacity style={ styles.increaseStyle } onPress={() => this.itemIncrease(selNum)}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
		);
	}
}