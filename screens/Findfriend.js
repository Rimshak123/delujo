import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcomebackground from '../components/Welcomebackground'
<<<<<<< HEAD
import Footer from '../components/Footer'
=======
import Friendsfooter from '../components/Friendsfooter'
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
const Findfriend = () => {
  return (
    <View style={styles.newcontainer}>
      <Welcomebackground
        heading="Find your Friends"
<<<<<<< HEAD
        text="Here is a list of friends who are already enjoying Delujo! Ping them to see what they are up to, or just to say hi! "
=======
        smallheading="Here is a list of friends who are already enjoying "
        discription= "Delujo! Ping them to see what they"
        discription1="are up to, or just to say hi!"
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
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
<<<<<<< HEAD
      />
    <Footer
    text='Do it later'
    />
    </View>
  )
}
Findfriend.options = {
  headerShown: false,
};
=======
        
      />
    <Friendsfooter/>
    </View>
  )
}
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443

export default Findfriend

const styles = StyleSheet.create({
    newcontainer: {
        backgroundColor: '#f3f3f3', 
        justifyContent: 'center',
        alignItems: 'center',
      },
     

})