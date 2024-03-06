import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyBundles from "./screens/MyBundles";
import LoginScreen from "./screens/LoginScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FeedScreen from "./screens/FeedScreen";
import WelcomeUsername from "./screens/WelcomeUsername";

export default function App() {
  return (
  // <DetailsScreen/>
    // <MyBundles/>
        // <LoginScreen/>
  <WelcomeUsername/>
  // <FeedScreen/>
  );

}
