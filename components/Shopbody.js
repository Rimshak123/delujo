import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Shopimages from "../components/Shopimages"

const Shopbody = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.shopContainer}>
          <Text style={styles.shopTitle}>Shop</Text>
        
          <Shopimages
            peopleText="People"
            viewAllText="View all"
            imageSource={require('../assets/pro2.jpg')}
            imageSource1={require('../assets/pic0.jpg')}
            imageSource2={require('../assets/th.jpg')}
            imageSource3={require('../assets/header-profile-pic.png')}
            view1="Monita"
            view2="Meaf72"
            view3="Jackson5"
            view4="Mominshaf"
          />
        </View>

        <View style={styles.shopContainer2}>
          <Shopimages
            peopleText="Brands"
            viewAllText="View all"
            imageSource={require('../assets/adidas.jpg')}
            imageSource1={require('../assets/zara.jpg')}
            imageSource2={require('../assets/mkkk.jpg')}
            imageSource3={require('../assets/nike.jpg')}
            view1="Adidas"
            view2="Zara.Br"
            view3="ManKomi"
            view4="Nike"
          />
        </View>

        <View style={styles.shopContainer3}>
          <Shopimages
            peopleText="Likes"
            viewAllText="View all"
            imageSource={require('../assets/dogPic2.png')}
            imageSource1={require('../assets/bag1.jpg')}
            imageSource2={require('../assets/mobl.jpg')}
            imageSource3={require('../assets/mochila001.png')}
            view1="Pets"
            view2="Bags"
            view3="Movie"
            view4="Dails"
          />
        </View>
        <View style={styles.shopContainer3}>
          <Shopimages
            peopleText="Wmn"
            viewAllText="View all"
           
          />
        </View>
        <View style={styles.shopContainer4}>
          <Shopimages
            peopleText="Kids"
            viewAllText="View all"
           
          />
        </View>
        <View style={styles.shopContainer4}>
          <Shopimages
            peopleText="Men"
            viewAllText="View all"
           
          />
        </View>
        <View style={styles.shopContainer5}>
          <Shopimages
            peopleText="Hme"
            viewAllText="View all"
           
          />
          
        </View>
        <View style={styles.shopContainer4}>
          <Shopimages
            peopleText="People"
            viewAllText="View all"
            imageSource={require('../assets/women.png')}
            imageSource1={require('../assets/men.png')}
            imageSource2={require('../assets/house.png')}
            imageSource3={require('../assets/dogPic.png')}
            view1="Women"
            view2="Men"
            view3="House"
            view4="Pets"
          />
          
        </View>
          
        
      </View>
    </ScrollView>
  );
}

export default Shopbody;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 358,
    backgroundColor: '#f3f3f3',
    marginBottom:-300,
  },
  shopContainer: {
    padding: 5,
    height: 650,
    marginTop: -100,
    paddingBottom: 260,
  },
  shopTitle: {
    marginRight: 10,
    fontSize: 27,
    left: 140,
    marginTop: 110,
    marginBottom:-20,
    fontWeight: 'bold',
    color: '#7252C5',
  },
  shopContainer2: {
    padding: -6,
    paddingBottom: 350,
    height: 650,
    marginTop: -330,
  },
  shopContainer3: {
    padding: -10,
    height: 640,
    paddingBottom: 350,
    marginTop: -430,
  },
  shopContainer4: {
    padding: -10,
    height: 640,
    paddingBottom: 350,
    marginTop: -601,
    
  },
  shopContainer5: {
    padding: -10,
    height: 640,
    paddingBottom: 370,
    marginTop: -599,
    
  },
  })