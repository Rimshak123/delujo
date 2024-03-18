import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Mylikesheader from '../components/Mylikesheader'
import Header from '../components/Header'
import Mylikesbody from '../components/Mylikesbody'
const MyLikes = () => {
  return (
    <View style={styles.container}>
      <Header
       customText="My Likes"
       customTextMarginTop={-25}
        headerTextSize={20} 
        headerTextWeight="bold"
        headerFlex={0}
        imageWidth2={25}
        imageLeft2={-160}
        imageHeight2={20}
        imageTop2={-120}     
        imagePath2={require('../assets/icon-back.png')}   
        />
    <Mylikesbody/>
 </View>
  )
}
MyLikes.options = {
  headerShown: false,
};

export default MyLikes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7050C3',
  },
});