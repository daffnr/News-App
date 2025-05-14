import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/Screens/HomeScreen';


const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
   <NavigationContainer>
    <tab.Navigator>
      <tab.Screen name ="News">
        {
          () => (
          <Stack.Navigator>
            <Stack.Screen name="Home" options={{headerTitle:"Home", headerStyle:{backgroundColor:"#fff"}}} component={HomeScreen}/>
          </Stack.Navigator>
          )
            
        }
      </tab.Screen>
    </tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
