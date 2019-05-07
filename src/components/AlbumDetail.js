import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ song }) => {
    console.log({ song });
    const { id, imageUri, title } = song;
    const { 
        thumbnialStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        headerTextStyle,
        imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnialStyle}
                        source={{ uri: imageUri }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: imageUri }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL('www.spotify.com')}>
                    <Text>Buy Now!</Text>
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18  
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    },
    thumbnialStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;
