import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcomebackground from '../components/Welcomebackground'
import Footer from '../components/Footer'

const Welcomebrands = () => {
  return (
    <View style={styles.newcontainer}>
      <Welcomebackground
        heading="Follow 3 Brands"
         heading2="You love!"
        text="This will help us to make better suggestions for you in a future"
        imageSource={require('../assets/zara.jpg')}
        imageSource2={require('../assets/adidas.jpg')}
        imageSource3={require('../assets/nike.jpg')}
        imageSource4={require('../assets/mkkk.jpg')}
        
      />
   
    <Footer
    text='Do it later'
    />
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
