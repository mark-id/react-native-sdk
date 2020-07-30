import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../assets/Styles';
import { NotifyAgentUrl, IdentificationReportUrl } from '../../config';
import axios from "axios";
import { IdentificationStatus } from '../../WidgetSteps';

export default class StepFive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAgentAnswerNotified: false,
            getAgentNotificationFunctionResponse: '',
            identificationStatus: '',
            hasAgentAnswerBeenReceived: false,
            agentIdentificationResponse: '',
            isIdentificationSuccess: false,
            returnUrl: this.props.dataResults.tokenEntity.returnUrl
        }
    }

    componentDidMount() {
        this.handleGetRequestStatus();
    }

    handleGetRequestStatus = () => {
        setTimeout( () => {
            this.getAgentNotification();
        }, 1000);

        setTimeout( () => {
            this.getIdentificationResults();
        }, 3000);
    }

    getAgentNotification = () => {
        axios({
            method: 'GET',
            url: NotifyAgentUrl + '?request=' + this.props.dataResults.requestEntity.request,
        })
        .catch(error => {
            this.setState({
                isAgentAnswerReceived: false,
                getAgentNotificationFunctionResponse: error
            });
        });
    }

    setStateSuccess = () => {
        this.setState({
            isIdentificationSuccess: true,
            identificationStatus: IdentificationStatus.SUCCESS
        });
    }

    setStateFail = (answer) => {
        this.setState({
            isIdentificationSuccess: true,
            agentIdentificationResponse: answer,
            identificationStatus: IdentificationStatus.REJECTED
        });
    }

    getIdentificationResults = () => {
        clearTimeout(null);
        axios({
            method: 'GET',
            url: IdentificationReportUrl + '?request=' + this.props.dataResults.requestEntity.request,
        })
        .then((response) => {
            if (
                response.data.request.status === IdentificationStatus.WAITING_AGENT || 
                response.data.request.status === IdentificationStatus.INITIALIZATION
            ){
                setTimeout( () => {
                    this.getIdentificationResults();
                }, 3000);
            } 
            else if (response.data.request.status === IdentificationStatus.SUCCESS) {
                this.setStateSuccess();
            } else if (response.data.request.status === IdentificationStatus.REJECTED) {
                this.setStateFail(response.data.request.agent_answer);
            }
        })
        .catch(error => {
            this.setState({
                isAgentAnswerReceived: false,
                getAgentNotificationFunctionResponse: error
            });
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                {!this.state.isIdentificationSuccess &&
                <Text style={ styles.titleText }>
                    { this.props.dataResults.messages.stepFiveTextH1 }
                    {"\n"}
                    {"\n"}
                </Text>
                }
                {!this.state.isIdentificationSuccess &&
                    <Image source={require('../../assets/loading.gif')}/>
                }
                {this.state.isIdentificationSuccess && this.state.identificationStatus === IdentificationStatus.SUCCESS &&
                    <Text style={ styles.titleText }>
                        {this.props.dataResults.messages.SuccessMessage}
                    </Text>
                }
                {this.state.isIdentificationSuccess && this.state.identificationStatus === IdentificationStatus.REJECTED &&
                    <Text style={ styles.titleText }>
                        {this.props.dataResults.messages.FailMessage}
                    </Text>
                }
                {
                    this.state.isIdentificationSuccess && 
                    this.state.identificationStatus === IdentificationStatus.REJECTED &&
                    this.state.agentIdentificationResponse !== 'undefined' && 
                    this.state.agentIdentificationResponse.map( (texts, index) => (
                        <Text style={ styles.paragraph } key={index}>
                            { texts }
                            {"\n"}
                        </Text>
                    ))
                }
            </View>
        );
    }
}
