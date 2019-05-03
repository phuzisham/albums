// Import a library to create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create component
const App = () => <Text>Some Text</Text>;

// Render to device
AppRegistry.registerComponent('albums', () => App);
