import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    /** GENERAL HOUSE KEEPING STYLES */
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: '5.5%',
        paddingRight: '5.5%',
        marginTop: '15%',
    },
    cameraContainer: {
        marginBottom: '5%',
        width: '90%',
        height: '34%',
        borderWidth: 0.3,
        borderColor: '#000',
        borderRadius: 2,
        backgroundColor: 'transparent'
    },
    buttonContainer: {
        textAlign: 'center',
        width: '90%'
    },
    radioButtonsContainer: {
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'left',
        marginRight: '20%'
    },
    errorMessage: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        fontSize: 16
    },

    /** HEADINGS AND TEXTS STYLES */
    titleText: {
        fontSize: 30,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#484848',
        paddingBottom: '8%'
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
    },
    pictureTakenMessage: {
        paddingBottom: 10,
        textAlign: "center",
    },
    docTypeTitle: {
        borderColor: '#000',
        borderWidth: 0.3,
        borderRadius: 5,
        paddingTop: '7%',
        paddingBottom: '7%',
        paddingLeft: '20%',
        paddingRight: '20%',
        marginTop: 0
    },
    repeatButtonText: {
        color: '#000',
        fontSize: 22,
        lineHeight: 24,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        lineHeight: 24,
        textAlign: 'center'
    },
    
    /** IMAGES AND CAMERA */
    image: {
        width: 270,
        height: 163,
    },
    span: {
        height: 10,
        marginBottom: 10
    },
    cameraTurn: {
        position: 'absolute',
        right: 0,
        width: 40,
        height: 40, 
        backgroundColor: '#ffffffaa'
    },

    /** BUTTONS */
    button: {
        textAlign: 'center',
        backgroundColor: '#66BB6A',
        paddingLeft: '12%',
        paddingRight: '12%',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderColor: '#66BB6A',
        borderWidth: 4,
        borderRadius: 0,
    },
    repeatButton: {
        backgroundColor: '#fff',
        paddingLeft: '12%',
        paddingRight: '12%',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderColor: '#ccc',
        borderWidth: 4,
        borderRadius: 0,
    },
    buttonOnPress: {
        backgroundColor: '#66BB6A',
        color: '#fff'
    },
    nextStepButton: {
        textAlign: 'center',
        paddingBottom: 10,
        width: '90%',
        marginLeft: '4%',
        paddingLeft: '4%'
    },
    repeatStepButton: {
        textAlign: 'center',
        paddingBottom: 10,
    }
});

