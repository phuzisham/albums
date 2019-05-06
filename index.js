// Import a library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumsList';

// Create component
const App = () => (
    <View style={styles.windowStyle}>
        <Header headerText={'Albums!!!'} />
        <AlbumList />
    </View>
);

const styles = {
    windowStyle: {
        backgroundColor: '#DBDBDB',
        flex: 1
    }
};

// Render to device
AppRegistry.registerComponent('albums', () => App);
