import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profilebody1 from '../components/Profilebody1'
import Header from '../components/Header'
const MyProfile = () => {
  return (
    <View style={styles.container}>

      <Header
        // headerFlex={0}
        customText="My Proggfile"
        textTop={-15}
        headerTextSize={18}
        imageWidth={110}
        imageHeight={110}
        imageLeft={0}
        imageTop={5}       
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