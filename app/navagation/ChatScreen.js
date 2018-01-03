import React, {
    Component
} from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";

export default class ChatScreen extends React.Component {
    static navigationOptions = ({
        navigation
    }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        const {
            params
        } = this.props.navigation.state;
        return (
            <View>
                <Text>Hello {params.user}</Text>
            </View>
        );
    }
}