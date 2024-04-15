import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profilebody1 from '../components/Profilebody1'
import Header from '../components/Header'
const MyProfile = () => {
  return (
    <View style={styles.container}>

      <Header
        // headerFlex={0}
        customText="My Profile"
        textTop={-15}
        headerTextSize={18}
        imageWidth={110}
        imageHeight={110}
        imageLeft={0}
        imageTop={5}

        imageWidth2={25}
        imageLeft2={-160}
        imageHeight2={20}
        imageTop2={-270}

        imageWidth3={25}
        imageLeft3={160}
        imageHeight3={8}
        imageTop3={-280}

        
        Username="Omar J"
        usernameMarginTop={130}
        usernameMarginLeft={-80}
        userTextWeight={700}
        Level="@oj82"
        textMarginTop={-8}
        textMarginLeft={-80}
        
        Color='#FFFFFF'
        textColor='#FFFFFF'
        textFontSize={14}
        showRating={false}
        imagePath1={require('../assets/profile-pic2.png')}
        imagePath2={require('../assets/icon-back.png')}
        imagePath3={require('../assets/icon-threPoints.png')}
      />
      <Profilebody1 />
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container:
  {
    backgroundColor: "#7051C4",
  },


})