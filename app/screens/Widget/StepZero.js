import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView } from 'react-native';
import ConditionsTexts from "../modals/ConditionsTexts";
import PrivacyTexts from "../modals/PrivacyTexts";
import StepOne from '../../screens/Widget/StepOne';

export default class StepZero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText:  'Tapatybės nustatymo tvarka',
            paragraphText: 'Atliekant tapatybės nustatymą bus daromas vaizdo įrašas, Jūsų bei Jūsų asmens tapatybės dokumento nuotraukos bei generuojama identifikavimo ataskaita. Spausdami mygtuką "Pradėti identifikaciją", Jūs sutinkate su asmens tapatybės nustatymo ',
            buttonText: 'Pradėti Identifikaciją',
            currentStepOne: false,
            termsModalVisible: false,
            policyModalVisible: false,
        }
    }

    handleTermsModal = () => {
        this.setState(prevState => ({
            termsModalVisible: !prevState.termsModalVisible
        }));
    }

    handlePolicyModal = () => {
        this.setState(prevState => ({
            policyModalVisible: !prevState.policyModalVisible
        }));
    }

    handleSetCurrentStepZero = () => {
        this.setState({ currentStepOne: true});
    }

    render() {
        if (this.state.currentStepOne) {
            return (<StepOne dataResults={this.props.dataResults}/>);
        }

        return (
            <View style={ styles.container }>
                <Text style={ styles.titleText }>
                    { this.state.titleText }
                    {"\n"}
                    {"\n"}
                    <Text style={ styles.paragraph }>
                        { this.state.paragraphText }
                        <Text style={ styles.links } onPress={ this.handleTermsModal }>
                            sąlygomis
                        </Text>
                        <Text> ir </Text>
                        <Text style={ styles.links } onPress={ this.handlePolicyModal }>
                            privatumo politika
                        </Text>
                    </Text>
                </Text>
                <Modal style={ styles.modal } transparent={ true } visible={ this.state.termsModalVisible }>
                    <View style={{ backgroundColor: '#000000aa' }}>
                        <ScrollView style={styles.scrollView}>
                            <View style={ styles.closeButton }>
                                <Text style={styles.closeButtonX} onPress={ this.handleTermsModal }>X</Text>
                            </View>
                            <ConditionsTexts />
                        </ScrollView>
                    </View>
                </Modal>
                <Modal style={ styles.modal } transparent={ true } visible={ this.state.policyModalVisible }>
                    <View style={{ backgroundColor: '#000000aa' }}>
                        <ScrollView style={styles.scrollView}>
                            <View style={ styles.closeButton }>
                                <Text style={styles.closeButtonX} onPress={ this.handlePolicyModal }>X</Text>
                            </View>
                            <PrivacyTexts />
                        </ScrollView>
                    </View>
                </Modal>
                <TouchableOpacity style={ styles.buttonOnPress } onPress={ this.handleSetCurrentStepZero }>
                    <View style={ styles.button}>
                        <Text style={ styles.buttonText }>{ this.state.buttonText }</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: '5.5%',
        paddingRight: '5.5%',
        marginTop: '30%',
    },
    scrollView: {
        backgroundColor: '#fff', 
        marginTop: 30, 
        marginLeft: 30, 
        marginRight: 30, 
        padding: 30, 
        flexDirection: 'column', 
    },
    titleText: {
        fontSize: 30,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#484848',
        paddingBottom: '15%'
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
        overflow: 'scroll'
    },
    button: {
        backgroundColor: '#66BB6A',
        paddingLeft: '13%',
        paddingRight: '13%',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderColor: '#66BB6A',
        borderWidth: 4,
        borderRadius: 0
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 24,
    },
    buttonOnPress: {
        backgroundColor: '#66BB6A',
        color: '#fff'
    },
    links: {
        fontWeight: 'bold',
    },
    modal: {
        backgroundColor: '#000',
    },
    closeButton: {
        position: 'relative',
        left: '85%',
        fontSize: 18,
        textAlign: 'center',
    },
    closeButtonX: {
        width: 40,
        borderColor: '#000',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderWidth: 2,
        borderRadius: 0
    }
});