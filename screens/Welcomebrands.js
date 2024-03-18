import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcomebackground from '../components/Welcomebackground'
import Welcomefooter from '../components/Welcomefooter'

const Welcomebrands = () => {
  return (
    <View style={styles.newcontainer}>
      <Welcomebackground
        heading="Follow 3 Brands"
        smallheading="You love!"
        discription="This will help us to make better suggestions"
        discription1="for you in a future"
        imageSource={require('../assets/zara.jpg')}
        imageSource2={require('../assets/adidas.jpg')}
        imageSource3={require('../assets/nike.jpg')}
        imageSource4={require('../assets/mkkk.jpg')}
        
      />
    <Welcomefooter/>
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
