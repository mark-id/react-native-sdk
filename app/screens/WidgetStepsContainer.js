import React, { Component } from 'react';
import axios from 'axios';
import StepZero from '../screens/Widget/StepZero';
import Error from '../screens/Widget/Error';
import { MarkIdInitializationUrl } from '../config';

export default class WidgetStepsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepZero: false,
            dataSuccess: false,
            dataResults: {},
            defaultErrorMessage: 'Could not connect to the server',
        }
    }

    handleSetCurrentStateStepZero = () => {
        this.setState({ currentStepZero: true});
    }

    componentDidMount() {
        this.handleSetCurrentStepZero();
    }

    handleSetCurrentStepZero = async () => {
        axios
        .get(MarkIdInitializationUrl)
        .then((data) => {
            this.setState({
                dataSuccess: true,
                dataResults: data.data,
            });
        })
        .catch(error => {
            if (error.message === "Network Error") {
                this.setState({
                    dataSuccess: false,
                    defaultErrorMessage: 'Could not connect to the server'
                });
            } else {
                this.setState({
                    dataSuccess: false,
                    defaultErrorMessage: error.response.data.message
                });
            }
        });
    }

    render() {
        if (this.state.dataSuccess) {
            return (
                <StepZero 
                    onPress={ this.handleSetCurrentStateStepZero }
                    dataResults= { this.state.dataResults }>
                </StepZero>
            );
        }

        return (
            <Error onPress={ this.handleSetCurrentStepZero } errorMessage={ this.state.defaultErrorMessage }/>
        );
    }
}