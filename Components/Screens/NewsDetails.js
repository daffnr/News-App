import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

let dimensions= Dimensions.get("window");
let imageHeight= Math.round((dimensions.height*9)/16);
let imageWidth= dimensions.width;

const NewsDetails = ({route}) => {

    const {title, author, urlToImage, content} = route.params;
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <Text style={styles.headline}>{title}</Text>
        <Text style={styles.authorName}>{author}</Text>
        {
          (urlToImage)?(
            <Image style ={styles.image} source={{uri: urlToImage}}></Image>
          ):(
            <Image style ={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'}}></Image>
          )
        }
        
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </GestureHandlerRootView>
    
  )
}

export default NewsDetails

const styles = StyleSheet.create({
  headline: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 32
  },
  authorName: {
    marginVertical: 10,
    fontSize: 12,
  },
  image: {
    width: imageWidth,
    height: imageHeight
  },
  content:{
    marginVertical: 10,
    fontSize: 16
  }
})