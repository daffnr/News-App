import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler'
import HeadlinePanel from './HeadlinePanel'
import CategoryScreen from './CategoryScreen'

const HomeScreen = ({navigation}) => {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text>Headline ={'>'} swipe to see more</Text>
          <HeadlinePanel navigation ={navigation}/>
          <CategoryScreen navigation={navigation}/>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})