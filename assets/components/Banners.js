import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Banners = ({ bannerImagePath, bannerText, boxImagePath, boxText}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Banner 1 */}
        <View style={{ position: 'relative', }}>
          <Image source={bannerImagePath} style={styles.bannerImage} />
          <Text style={styles.bannerText}>
          See the {'\n'}
        <Text style={{fontWeight:'bold'}}>latest bundles</Text></Text>
        </View>

        {/* Banner 2 */}
        <View style={styles.boxContainer}>
          <View style={styles.boxImageContainer}>
            <Image source={boxImagePath} style={styles.boxImage} />
            <Text style={styles.boxText}> See the {'\n'}
        <Text style={{fontWeight:'bold'}}>latest bundles</Text></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'flex-start', 
    marginTop: 20,
    marginLeft:20,
    marginRight:20,
    height:120,
  },
  bannerImage: {
    width: 300,
    height: 120,
    opacity: 0.8,
  },
  bannerText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#FFFFFF', 
    fontSize: 14,
   left:50,
   top:40,
    
  },

  boxContainer: {
    marginLeft: 20,
    marginTop:6,
   
},
  boxImageContainer: {
    width: 300,
    height: 108,
    borderRadius: 40, 
    backgroundColor: '#A7B5F6', // Set your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#FFFFFF',
    opacity: 0.9,
  },
  boxImage: {
    width: 100,
    height: 100,
   
  },
  boxText: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'white', // Set your desired text color
    fontSize: 16,
  },
//   boxText: {
//     alignSelf: 'center',
//     color: '#333', // Set your desired text color
//     fontSize: 14,
//     marginTop: 10,
//   },
});

export default Banners;
