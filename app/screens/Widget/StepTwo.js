import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import axios from 'axios';
import { StepsUrl } from '../../config';
import StepThree from '../Widget/StepThree';
import styles from '../../assets/Styles';
import { widgetSteps, MarkIDSupportedDocumentTypes } from '../../WidgetSteps';
import StepTwoTexts from './Partials/StepTwoTexts';

export default class StepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepThree: false,
            data: [
                {
                    label: this.props.dataResults.messages.stepTwoChoiceOne,
                    size: 16,
                    selected: true,
                    value: MarkIDSupportedDocumentTypes.ID,
                },
                {
                    label: this.props.dataResults.messages.stepTwoChoiceTwo,
                    size: 16,
                    value: MarkIDSupportedDocumentTypes.PASSPORT,
                },
                {
                    label: this.props.dataResults.messages.stepTwoChoiceThree,
                    size: 16,
                    value: MarkIDSupportedDocumentTypes.PERMIT,
                },
            ],
            selectedDocType: '',
            uploadFormData: '',
            currentStep: ''
        }
    }

    componentDidMount() {
        let formData = new FormData();
        formData.append('request', this.props.dataResults.requestEntity.request);
        formData.append('document_type', MarkIDSupportedDocumentTypes.ID);

        this.setState({
            selectedDocType: MarkIDSupportedDocumentTypes.ID,
            uploadFormData: formData,
        });
    }

    takeStepThree = async () => {
        await this.uploadSelectedDocType(this.state.uploadFormData);

        this.setState({
            currentStepThree: true
        });
    }

    selectDocType = async () => {
        const selectedButton = this.state.data.find(e => e.selected === true);

        const formData = new FormData();
        formData.append('request', this.props.dataResults.requestEntity.request);
        formData.append('document_type', selectedButton.value);

        this.setState({
            selectedDocType: selectedButton.value,
            uploadFormData: formData,
        });
    }

    uploadSelectedDocType = async () => {
        axios({
            method: 'POST',
            url: StepsUrl,
            data: this.state.uploadFormData,
        })
        .then((response) => {
            this.setState({
                isSuccessfullUpload: true,
                successfullUploadResponse: response.data,
                currentStep: response.data.current_step,
            }); 
        })
        .catch(error => {
            this.setState({
                isSuccessfullUpload: false,
                failedUploadResponse: error.response.data
            });
        });
    }
    
    render() {  
        if (this.state.currentStep === widgetSteps.DOC && this.state.currentStepThree) {
            return <StepThree dataResults={ this.props.dataResults }/>
        }

        let selectedButton = this.state.data.find(e => e.selected === true);
        selectedButton = selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={ styles.container }>
                <StepTwoTexts dataResults={ this.props.dataResults }/>
                <Text style={ styles.docTypeTitle }>
                    { this.props.dataResults.messages.stepTwoTextInnerP }
                </Text>

                <View style={ styles.radioButtonsContainer }>
                    <RadioGroup radioButtons={ this.state.data } onPress={ this.selectDocType } />
                </View>
                <TouchableOpacity style={ styles.buttonOnPress } onPress={ this.takeStepThree }>
                    <View style={ styles.button}>
                        <Text style={ styles.buttonText }>{ this.props.dataResults.messages.startButtonText }</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
