import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../assets/Styles';

export default class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorTitle: 'Įvyko klaida. Klaidos žinutę galite pamatyti apačioje. Prašome patikrinti duomenis.',
            buttonTitle: 'Bandyti dar kartą'
        };
    }

    handleSetCurrentStepZero = () => {
        this.props.onPress()
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.titleText }>
                    { this.state.errorTitle }
                </Text>
                <Text style={ styles.errorMessage }>
                    { this.props.errorMessage }
                    {"\n"}
                </Text>
                <TouchableOpacity style={styles.buttonOnPress} onPress={this.handleSetCurrentStepZero}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{this.state.buttonTitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}