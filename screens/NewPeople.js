import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
<<<<<<< HEAD
// import Headerbackground from '../components/Headerbackground'
import BodyofPs from '../components/BodyofPs'
import Header from '../components/Header'
import FeedScreen from './FeedScreen'
// import Footer from "../components/Footer";
const NewPeople = () => {
  return (
    <View style={styles.container}>
    <Header
       
       customText="New People"
       customTextMarginTop={-20}
        headerTextSize={20} 
        headerTextWeight="bold"
        headerFlex={3.7}
        imageWidth2={25}
        imageLeft2={-160}
        imageHeight2={20}
        imageTop2={-125}
        
        imagePath2={require('../assets/icon-back.png')}
       
        
        />
     <BodyofPs/>
=======
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
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    </View>
  )
}

<<<<<<< HEAD
NewPeople.options = {
  headerShown: false,
};
=======
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
export default NewPeople

const styles = StyleSheet.create({

<<<<<<< HEAD
  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },
=======
    container: {
        flex: 1,
        //justifyContent: 'center',
        ///alignItems: 'center',
        //backgroundColor:"#7051C4",
      },

>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443

})