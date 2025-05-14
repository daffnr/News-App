import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

let dimenensions = Dimensions.get("window");
let imageHeight = Math.round((dimenensions.width*9)/16);
let imageWidth = dimenensions.width;
const Cards = (props) => {
  return (
    <View style={styles.cardContainer}>
     <View style={styles.card}>
        <View style={styles.cardContent}>
            <Image 
            style={{width: imageWidth*0.7, height: imageHeight*0.7}} 
            source={{uri:props.image}}/>
            <Text style={styles.cardText}>
                {props.children}
            </Text>
        </View>
     </View>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    card:{
        height: imageHeight*1.15,
        width: imageWidth*0.8,
        borderRadius: 6,
        elevation: 3,
        backgroundColor:'#fff',
        shadowOffset:{width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent:{
        marginLeft: 20,
        marginHorizontal: 18,
        marginVertical: 20
    },
    cardText:{
        marginTop: 15,
        fontWeight: 'normal' 
    }
})