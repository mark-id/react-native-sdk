import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from '../../../assets/Styles';

export default class StepTwoTexts extends Component {
    constructor(props) {
        super(props);
    }

    render() {  
        return (
            <Text style={ styles.titleText }>
                { this.props.dataResults.messages.stepTwoTextH1 }
                {"\n"}
                {"\n"}
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepTwoTextP1 }
                    {"\n"}
                </Text>
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepTwoTextP2 }
                    {"\n"}
                </Text>
                <Text style={ styles.paragraph }>
                    { this.props.dataResults.messages.stepTwoTextP3 }
                </Text>
            </Text>
        );
    }
}
