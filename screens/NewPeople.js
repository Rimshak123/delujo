import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
    </View>
  )
}

NewPeople.options = {
  headerShown: false,
};
export default NewPeople

const styles = StyleSheet.create({

  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },

})