import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

export default class Seacrh extends Component {
  constructor() {
    super();
  }

  render() {
    const { containerStyle, inputStyle } = styles;

    return (
      <View style={containerStyle}>
        <TextInput style={inputStyle} value="Search" />
      </View>
    );
  }
}

const styles = {
    containerStyle: {},
    inputStyle: {
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white'
    }
};
