import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Newsbody from '../components/Newsbody'
import HeaderWithSearchBar from '../components/HeaderWithSearchBar'
// import Shopheader from '../components/Shopheader'
const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearchBar/>
      <Newsbody/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },
});
NewsScreen.options = {
  headerShown: false,
};
export default NewsScreen;
