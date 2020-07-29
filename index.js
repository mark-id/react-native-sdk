import React from 'react';
import { View } from 'react-native';
import MarkIDWidget from 'react-native-sdk';

export default class App extends React.Component() {
   render () {
        return (
            <View>
                <MarkIDWidget />
            </View>
        )
   } 
}