import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Components/Screens/HomeScreen";
import NewsDetails from "./Components/Screens/NewsDetails";
import SplashScreen from "./Components/Screens/SplashScreen";

const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="NewsApp">
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                options={{
                  headerShown: false,
                  header: () => <CustomHeader title="Home" />,
                  headerStyle: { backgroundColor: "#fff" },
                }}
                component={HomeScreen}
              />
              <Stack.Screen
                name="news"
                options={{
                  headerShown: false,
                  header: () => <CustomHeader title="News" />,
                  headerStyle: { backgroundColor: "#fff" },
                }}
                component={NewsDetails}
              />
            </Stack.Navigator>
          )}
        </tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60, 
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 1,
    color: "#333",
  },
});
