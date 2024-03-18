import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcomebackground from '../components/Welcomebackground'
import Friendsfooter from '../components/Friendsfooter'
const Findfriend = () => {
  return (
    <View style={styles.newcontainer}>
      <Welcomebackground
        heading="Find your Friends"
        smallheading="Here is a list of friends who are already enjoying "
        discription= "Delujo! Ping them to see what they"
        discription1="are up to, or just to say hi!"
        imageSource={require('../assets/profile-pic.png')}
        Image1="Monita"
        Image5="@Monita6"
        imageSource2={require('../assets/profile-pic2.png')}
        Image2="Sam"
        Image6="@Sam45"
        imageSource3={require('../assets/th.jpg')}
        Image3="Michael"
        Image7="@Michael2"
        imageSource4={require('../assets/pro2.jpg')}
        Image4="Lisa"
        Image8="@Lisa22"
        
      />
    <Friendsfooter/>
    </View>
  )
}

export default Findfriend

const styles = StyleSheet.create({
    newcontainer: {
        backgroundColor: '#f3f3f3', 
        justifyContent: 'center',
        alignItems: 'center',
      },
     

})