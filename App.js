import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen2 from "./screens/LoginScreen2";
import LoginScreen from "./screens/LoginScreen";
import AppNavigator from './components/AppNavigator';
import { StripeProvider } from "@stripe/stripe-react-native";
const STRIPE_KEY ='pk_test_51PVEchG56SCh1jDVnTIIG4uiTKvcEh4hAfFmlgGIqBu5dZ0nRbLnaJ0n2fvE3iVZJz5B4f332O9oLpjQtH7ZU3rQ00stcOOU5D'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen2"
          component={LoginScreen2}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </StripeProvider>
  );
}

// import React from 'react';
// import AppNavigator from './components/AppNavigator';

// const App = () => {
//   return (
//   <AppNavigator/>
//   );
// };

// export default App;


  


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <UploadImage />
//       <Text>Upload photo</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });