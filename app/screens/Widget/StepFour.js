import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import { StepsUrl } from '../../config';
import StepFive from '../Widget/StepFive';
import styles from '../../assets/Styles';
import { widgetSteps, TakenPictureText } from '../../WidgetSteps';
import StepFourTexts from '../Widget/Partials/StepFourTexts';

export default class StepFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepFive: false,
            hasPermission: null,
            type: Camera.Constants.Type.back,
            currentStateTakePicture: true,
            isPictureTaken: false,
            docBackPictureUri: '',
            imageUploadForm: '',
            isSuccessfullUpload: false,
            successfullUploadResponse: '',
            failedUploadResponse: '',
            currentStep: ''
        }
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }

    handleCameraType = () => {
        let newType;
        const { back, front } = Camera.Constants.Type;
    
        if (this.state.type === back) {
            newType = front;
        } else if (this.state.type === front) {
            newType = back;
        }

        this.setState({ type: newType });
    }

    takePicture = async () => {
        if (this.camera) {
            const options = {
                quality: 0.8,
                base64: true,
                ratio: '4:3',
                exif: true,
            };
            const data = await this.camera.takePictureAsync(options);
            const formData = new FormData();

            formData.append('type', 'docBack');
            formData.append('request', this.props.dataResults.requestEntity.request);
            formData.append('base64_data', data.base64);

            this.setState({ 
                currentStateTakePicture: false,
                isPictureTaken: true,
                imageUploadForm: formData, 
            });

            this.uploadTakenPicture();
        }
    }

    uploadTakenPicture = async () => {
        axios({
            method: 'POST',
            url: StepsUrl,
            data: this.state.imageUploadForm,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
            this.setState({
                isSuccessfullUpload: true,
                successfullUploadResponse: response,
                docBackPictureUri: response.data.photo_url,
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

    repeatTakePicture = async () => {
        this.setState({ 
            currentStateTakePicture: true,
            isPictureTaken: false,
        });

        await this.takePicture();
    }

    takeStepTwo = async () => {
        this.setState({
            currentStepFive: true
        });
    }

    render() {  
        if (this.state.currentStep === widgetSteps.STATUS && this.state.currentStepFive) {
            return <StepFive dataResults={ this.props.dataResults }/>
        }

        return (
            <View style={ styles.container }>
                <StepFourTexts dataResults={ this.props.dataResults }/>
                <View style={ styles.cameraContainer }>
                { this.state.isPictureTaken === false && 
                    <Camera 
                        style = {{ flex: 1 }} 
                        type = {this.state.type} 
                        ref = {ref => {
                            this.camera = ref;
                        }}>
                        <TouchableOpacity onPress={ this.handleCameraType }>
                            <Image style={styles.cameraTurn} source={require('../../assets/camera.png')}/>
                        </TouchableOpacity>
                    </Camera>
                }
                { this.state.isPictureTaken === true && this.state.docBackPictureUri !== '' &&
                    <Image style = {{ flex: 1 }}  source = {{ uri: this.state.docBackPictureUri }}/>
                }
                </View>
                { this.state.isPictureTaken === true && this.state.currentStateTakePicture === false && 
                    <View style={ styles.buttonContainer }>
                        <Text style={ styles.pictureTakenMessage }>{ TakenPictureText }</Text>
                        <TouchableOpacity style={ styles.nextStepButton } onPress={ this.takeStepTwo }>
                            <View style={ styles.button}>
                                <Text style={ styles.buttonText }>{ this.props.dataResults.messages.finishButtonText }</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.repeatStepButton } onPress={ this.repeatTakePicture }>
                            <View style={ styles.repeatButton}>
                                <Text style={ styles.repeatButtonText }>{ this.props.dataResults.messages.repeatFacePhotoButtonText }</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                { this.state.currentStateTakePicture === true && 
                    <TouchableOpacity style={ styles.buttonOnPress } onPress={ this.takePicture }>
                        <View style={ styles.button}>
                            <Text style={ styles.buttonText }>{ this.props.dataResults.messages.takePhotoButtonText }</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}
