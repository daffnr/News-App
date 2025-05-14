import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const VerticalCards = (props) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
            <View style={styles.leftColumn}>
                <Text>{props.title}</Text>
            </View>

            <View style={styles.rightColumn}>
                {
                    (props.imageUrl)?(
                        <Image style={styles.image} source={{uri: props.imageUrl}}/>
                    ):(
                        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'}}/>
                    )
                }
                
            </View>

        </View>
      </View>
    </View>
  )
}

export default VerticalCards

const styles = StyleSheet.create({
    card: {
        height: 80,
        borderRadius: 6,
        elevation: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#dfdf',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
    },
    cardText: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#333',
        flexWrap: 'wrap'
    },
    leftColumn: {
        flex: 3,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '80%',
        resizeMode: 'contain',
    }
})
