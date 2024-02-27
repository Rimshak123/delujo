import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import LoginScreen from "./screens/login";                    //1nd screen
//import{ createAppContainer} from "react-navigation";
//import { createStackNavigator } from "@react-navigation/stack";
//import Login2 from "./screens/Login2";
import CustomButton from "./components/CustomButton";
import NormalButton from "./components/NormalButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <LoginScreen/>
    </SafeAreaView>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})






