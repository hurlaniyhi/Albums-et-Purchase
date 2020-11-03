import React from 'react'
import {Text, StyleSheet, View, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from "./button"



const AlbumDetail = ({data}) => {

    const {title, artist, thumbnail_image, image, url} = data
   
    return (
        <Card >
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image style={styles.headerThumbnail} source={{uri: thumbnail_image}}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={{uri: image}} />
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: "space-around"
    },
    headerText: {
        fontSize: 18
    },
    headerThumbnail: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
  });

export default AlbumDetail