import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from '../../../assets/Styles';

export default class StepFourTexts extends Component {
    constructor(props) {
        super(props);
    }

    render() {  
        return (
            <Text style={ styles.titleText }>
                { this.props.dataResults.messages.stepFourTextH1 }
                {"\n"}
                {"\n"}
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepFourTextP1 }
                </Text>
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepFourTextP2 }
                </Text>
            </Text>
        );
    }
}
