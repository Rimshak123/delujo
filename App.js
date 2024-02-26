import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
//import LoginScreen from "./screens/login";
import CustomButton from "./components/CustomButton";
import NormalButton from "./components/NormalButton";
import login from "./components/LoginControls";


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
