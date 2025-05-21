import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const CategoryPanel = ({setSelectedCategory}) => {
    // console.log(props, 'props category')

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <TouchableOpacity style={styles.myButton} onPress={()=>setSelectedCategory("Finance")}>
            <Text style={styles.buttonText}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton} onPress={()=>setSelectedCategory("Politics")}>
            <Text style={styles.buttonText}>Politics</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.myButton} onPress={()=>setSelectedCategory("Economy")}>
            <Text style={styles.buttonText}>Economy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton} onPress={()=>setSelectedCategory("Tech")}>
            <Text style={styles.buttonText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton} onPress={()=>setSelectedCategory("Sports")}>
            <Text style={styles.buttonText}>Sports</Text>
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
        width:'100%'
    },
    myButton:{
        padding:15,
        borderRadius: 20,
        backgroundColor: 'red',
        margin: 5
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    }
})