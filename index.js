// Import a library to create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
    <Header headerText={'Albums!!!'} />
);

// Render to device
AppRegistry.registerComponent('albums', () => App);
