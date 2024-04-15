// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import MyBundles from "./screens/MyBundles";
// import LoginScreen2 from "./screens/LoginScreen2";
// import LoginScreen from "./screens/LoginScreen";
// import DetailsScreen from "./screens/DetailsScreen";
// import FeedScreen from "./screens/FeedScreen";
// import WelcomeUsername from "./screens/WelcomeUsername";
// import ProfileScreen from "./screens/ProfileScreen";
// import NewsScreen from "./screens/NewsScreen";
// import MyPurchaseScreen from "./screens/MyPurchaseScreen";
// import ProfileEtiquette from "./screens/ProfileEtiquette";
// import NewsScreen from "./screens/NewsScreen";
// import NewPeople from "./screens/NewPeople";
// import Findfriend from "./screens/Findfriend";
// import Welcomebrands from "./screens/Welcomebrands";
// import MyProfile from "./screens/MyProfile";

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
    // <DetailsScreen/>
    // <MyBundles/>
    // <LoginScreen />
    // <LoginScreen2 />
    // <WelcomeUsername/>
    // <FeedScreen/>
    // <NewsScreen/>
    // <ProfileScreen/>
    // <MyPurchaseScreen/>
    // <ProfileEtiquette/>
    // <NewPeople/>
    // {/* <Findfriend/> */}
    // {/* <Welcomebrands/> */}
    // {/* <MyProfile/> */}
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginScreen">
//         <Stack.Screen
//           name="LoginScreen"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="LoginScreen2"
//           component={LoginScreen2}
//           options={{ headerShown: false }}
//         />
//  </Stack.Navigator>
// </NavigationContainer>
     
     


//   );
// }

import React from 'react';
import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
  <AppNavigator/>
  );
};

export default App;
