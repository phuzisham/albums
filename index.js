import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumsList';
import SearchBar from './src/components/SearchBar';

const handleSearchChange = (text) => {
    console.log('search text is', text);
};

const App = () => (

    <View style={styles.windowStyle}>
        <Header headerText={'Albums!!!'} />
        <SearchBar onChange={text => handleSearchChange(text)} />
        <AlbumList />
    </View>
);

const styles = {
    windowStyle: {
        backgroundColor: '#DBDBDB',
        flex: 1
    }
};

AppRegistry.registerComponent('albums', () => App);
