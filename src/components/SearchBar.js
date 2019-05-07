import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

export default class Seacrh extends Component {
  constructor() {
    super();

    this.state = {
        text: '',
      };
    }
  
    handleChangeText(newText) {
      this.setState({
        text: newText,
    });
  }

  render() {
    const { text } = this.state;
    const { containerStyle, inputStyle } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={inputStyle}
          value={text}
          placeholder="Search here..."
          onChangeText={newText => this.handleChangeText(newText)}
        />
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
