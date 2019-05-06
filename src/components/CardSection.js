import React from 'react';
import { View } from 'react-native';

const CardDetail = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 2,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#5C8492',
        position: 'relative'
    }
};

export default CardDetail;