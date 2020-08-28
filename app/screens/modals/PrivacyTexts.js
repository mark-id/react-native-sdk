import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrivacyText } from './PrivacyTexts/Text';

export default class PrivacyTexts extends Component {
    render() {
        return (
            <View>
                <Text style={ styles.titleText }>
                    { PrivacyText.Titles.mainTitle }
                </Text>
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionZeroTitle }
                </Text>
                {Object.keys(PrivacyText.SectionZeroParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionZeroParagraphs[newText] }
                        {"\n"}{"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionOneTitle }
                </Text>
                {Object.keys(PrivacyText.SectionOneParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionOneParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionTwoTitle }
                </Text>
                {Object.keys(PrivacyText.SectionTwoParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionTwoParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionThreeTitle }
                </Text>
                {Object.keys(PrivacyText.SectionThreeParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionThreeParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionFourTitle }
                </Text>
                {Object.keys(PrivacyText.SectionFourParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionFourParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionFiveTitle }
                </Text>
                {Object.keys(PrivacyText.SectionFiveParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionFiveParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionSixTitle }
                </Text>
                {Object.keys(PrivacyText.SectionSixParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionSixParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionSevenTitle }
                </Text>
                {Object.keys(PrivacyText.SectionSevenParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionSevenParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionEightTitle }
                </Text>
                {Object.keys(PrivacyText.SectionEightParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionEightParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleHeader }>
                    { PrivacyText.Titles.sectionNineTitle }
                </Text>
                {Object.keys(PrivacyText.SectionNineParagraphs).map((newText, index) => (
                    <Text style={ styles.paragraph } key={index}>
                        { PrivacyText.SectionNineParagraphs[newText] }
                        {"\n"}
                    </Text>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#484848',
        paddingBottom: '15%'
    },
    titleHeader: {
        fontSize: 22,
        lineHeight: 20,
        fontWeight: 'bold',
        color: '#484848',
        paddingBottom: '15%'
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
        overflow: 'scroll'
    }
});