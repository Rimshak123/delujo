import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'
import HeaderWithSearchBar from '../components/HeaderWithSearchBar'
import Sellbody from '../components/Sellbody'

const SellScreen = () => {
  return (
    
      <View style={styles.container}>
        <HeaderWithSearchBar />
        <Sellbody />
      </View>
    
  )
}

export default SellScreen

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },
})