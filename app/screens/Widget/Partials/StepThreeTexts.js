import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from '../../../assets/Styles';

export default class StepThreeTexts extends Component {
    constructor(props) {
        super(props);
    }

    render() {  
        return (
            <Text style={ styles.titleText }>
                { this.props.dataResults.messages.stepThreeTextH1 }
                {"\n"}
                {"\n"}
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepThreeTextP1 }
                </Text>
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepThreeTextP2 }
                </Text>
            </Text>
        );
    }
}
