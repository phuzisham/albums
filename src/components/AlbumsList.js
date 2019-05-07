import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import searchMock from '../api/SearchMock';

class AlbumList extends Component {
    state = { songs: [] };

    async componentDidMount() {
        const newSongs = await searchMock({
            offset: 0,
            limit: 100,
            q: 'Shpongle',
        });
    
        this.setState({
            songs: newSongs,
        });
    }

    renderSongs() {
        return this.state.songs.map(song => <AlbumDetail key={song.id} song={song} />);
    }

    render() {
        return (
            <ScrollView>
                {this.renderSongs()}
            </ScrollView>
        );
    }
}

export default AlbumList;
