import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#5C8492',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;
