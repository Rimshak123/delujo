import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Mylikesheader from '../components/Mylikesheader'
import Mylikesbody from '../components/Mylikesbody'
import Mylikesfooter from '../components/Mylikesfooter'
const MyLikes = () => {
  return (
    <View style={styles.container}>
    <Mylikesheader/>
    <Mylikesbody/>
    <Mylikesfooter/>
     
 </View>
  )
}

export default MyLikes

const styles = StyleSheet.create({})