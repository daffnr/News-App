import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const CategoryPanel = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableOpacity style={styles.myButton} onPress={()=>props.setSelectedCategory("Finance")}>
            <Text style={styles.buttonText}>Finance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton} onPress={()=>props.setSelectedCategory("Politics")}>
            <Text style={styles.buttonText}>Politics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton} onPress={()=>props.setSelectedCategory("Sports")}>
            <Text style={styles.buttonText}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton}>
            <Text style={styles.buttonText}>Travles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton}>
            <Text style={styles.buttonText}>Finance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton}>
            <Text style={styles.buttonText}>Automotive</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default CategoryPanel

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'#fff',
        width:'100%'
    },
    myButton:{
        padding:15,
        borderRadius: 20,
        backgroundColor: 'red',
        margin: 3
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    }
})