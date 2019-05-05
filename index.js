// Import a library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumsList';

// Create component
const App = () => (
    <View>
        <Header headerText={'Albums!!!'} />
        <AlbumList />
    </View>
);

// Render to device
AppRegistry.registerComponent('albums', () => App);
