// import libraries for component
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// styling
const styles = {
    viewStyle: {
        backgroundColor: '#551A8B',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20,
        color: '#F8F8F8'
    }
};

// make component available for other parts of app
export default Header;
