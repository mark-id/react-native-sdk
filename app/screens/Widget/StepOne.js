import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import { StepsUrl } from '../../config';
import StepTwo from '../Widget/StepTwo';
import styles from '../../assets/Styles';
import { widgetSteps, TakenPictureText } from '../../WidgetSteps';
import StepOneTexts from './Partials/StepOneTexts';

export default class StepZero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepTwo: false,
            hasPermission: null,
            type: Camera.Constants.Type.front,
            currentStateTakePicture: true,
            isPictureTaken: false,
            facePictureUri: '',
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
    
        if (this.state.type === front) {
            newType = back;
        } else if (this.state.type === back) {
            newType = front;
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

            this.setState({ 
                currentStateTakePicture: false,
                isPictureTaken: true,
                imageUploadForm: this.handleFormPopulate(data.base64), 
            });

            await this.uploadTakenPicture();
        }
    }

    handleFormPopulate = (base64String) => {
        const formData = new FormData();

        formData.append('type', 'face');
        formData.append('request', this.props.dataResults.requestEntity.request);
        formData.append('base64_data', base64String);

        return formData;
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
                facePictureUri: response.data.photo_url,
                currentStep: response.data.current_step,
            }); 
        })
        .catch(error => {
            this.setState({
                isSuccessfullUpload: false,
                failedUploadResponse: error.response.data.message
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
            currentStepTwo: true
        });
    }

    render() {  
        if (this.state.currentStep === widgetSteps.DOCTYPE && this.state.currentStepTwo) {
            return <StepTwo dataResults={ this.props.dataResults }/>
        }

        return (
            <View style={ styles.container }>
                <StepOneTexts dataResults={ this.props.dataResults }/>
                <View style={ styles.cameraContainer }>
                { this.state.isPictureTaken === false && 
                    <Camera 
                        style = {{ flex: 1 }} 
                        type = { this.state.type } 
                        ref = {ref => {
                            this.camera = ref;
                        }}>
                        <TouchableOpacity onPress={ this.handleCameraType }>
                            <Image style={styles.cameraTurn} source={require('../../assets/camera.png')}/>
                        </TouchableOpacity>
                    </Camera>
                }
                { this.state.isPictureTaken === true && this.state.facePictureUri !== '' &&
                    <Image style = {{ flex: 1,  transform: [{ rotateY: '180deg'}]}}  source = {{ uri: this.state.facePictureUri }}/>
                }
                </View>
                { this.state.isPictureTaken === true && this.state.currentStateTakePicture === false && 
                    <View style={ styles.buttonContainer }>
                        <Text style={ styles.pictureTakenMessage }>{ TakenPictureText }</Text>
                        <TouchableOpacity style={ styles.nextStepButton } onPress={ this.takeStepTwo }>
                            <View style={ styles.button }>
                                <Text style={ styles.buttonText }>{ this.props.dataResults.messages.nextStepButtonText }</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.repeatStepButton } onPress={ this.repeatTakePicture }>
                            <View style={ styles.repeatButton }>
                                <Text style={ styles.repeatButtonText }>{ this.props.dataResults.messages.repeatFacePhotoButtonText }</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                {this.state.currentStateTakePicture === true && 
                    <TouchableOpacity style={ styles.buttonOnPress } onPress={ this.takePicture }>
                        <View style={ styles.button }>
                            <Text style={ styles.buttonText }>{ this.props.dataResults.messages.takePhotoButtonText }</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}
