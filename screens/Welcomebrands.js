import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcomebackground from '../components/Welcomebackground'
<<<<<<< HEAD
import Footer from '../components/Footer'
=======
import Welcomefooter from '../components/Welcomefooter'
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443

const Welcomebrands = () => {
  return (
    <View style={styles.newcontainer}>
      <Welcomebackground
        heading="Follow 3 Brands"
<<<<<<< HEAD
         heading2="You love!"
        text="This will help us to make better suggestions for you in a future"
=======
        smallheading="You love!"
        discription="This will help us to make better suggestions"
        discription1="for you in a future"
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
        imageSource={require('../assets/zara.jpg')}
        imageSource2={require('../assets/adidas.jpg')}
        imageSource3={require('../assets/nike.jpg')}
        imageSource4={require('../assets/mkkk.jpg')}
        
      />
<<<<<<< HEAD
   
    <Footer
    text='Do it later'
    />
=======
    <Welcomefooter/>
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    </View>
  );
}

export default Welcomebrands

const styles = StyleSheet.create({
  newcontainer: {
    backgroundColor: '#f3f3f3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
})
