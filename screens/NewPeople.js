import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headerbackground from '../components/Headerbackground'
import BodyofPs from '../components/BodyofPs'
//import Headerbackground from "./components/Headerbackground";
import Footer from "../components/Footer";
const NewPeople = () => {
  return (
    <View style={styles.container}>
      <Headerbackground/>
     <BodyofPs/>
     <Footer/>
    </View>
  )
}

export default NewPeople

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //justifyContent: 'center',
        ///alignItems: 'center',
        //backgroundColor:"#7051C4",
      },


})