import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class SearchBar extends Component {
    state = { text: '' };

    handleChangeText(newText) {
        const { onChange } = this.props;

        this.setState({
            text: newText,
        }, () => {
            onChange && onChange(newText);
        });
    }

    render() {
        const { text } = this.state;
        const { containerStyle, inputStyle } = styles;

        return (
        <View>
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
    inputStyle: {
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 10
    }
};

export default SearchBar;
