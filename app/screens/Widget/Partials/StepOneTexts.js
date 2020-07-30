import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from '../../../assets/Styles';

export default class StepOneTexts extends Component {
    constructor(props) {
        super(props);
    }

    render() {  
        return (
            <Text style={ styles.titleText }>
                { this.props.dataResults.messages.stepOneTextH1 }
                {"\n"}
                {"\n"}
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepOneTextP1 }
                </Text>
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepOneTextP2 }
                </Text>
            </Text>
        );
    }
}
