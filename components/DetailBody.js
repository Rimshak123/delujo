import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import NormalButton from './NormalButton';
import Rating from './Rating';

const Detailscroll = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ordenador LENOVO</Text>   
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
           {/* Horizontal Scroll- Laptop Images*/}
          <ScrollView horizontal  showsHorizontalScrollIndicator={false}>   
            <View style={styles.imageRow}>
              <View style={[styles.imageContainer, { width: 220, height: 180, marginLeft: 25 }]}>
                <Image
                  source={require('../assets/laptop-pic001.png')}
                  style={styles.image}
                  resizeMode="cover"/>
              </View>
                <View style={styles.space} />
              <View style={[styles.imageContainer, { width: 230, height: 180, backgroundColor: '#E8E8E8F8' }]}>
                <Image
                  source={require('../assets/laptop-pic002.png')}
                  style={[styles.image, { width: 230, height: 180, backgroundColor: '#E8E8E8F8' }]}
                  resizeMode="cover"/>
              </View>
            </View>
          </ScrollView>

          <View>
            <Text style={{ color: '#000000', fontSize: 14, paddingTop: 15, paddingLeft: 30, paddingBottom: 20 }}>
                ThinkPad E15 Gen 2-Negra</Text>
            <Text style={{ color: '#684BBA', fontSize: 13, fontWeight: 'bold', paddingLeft: 30, }}>
                Single Item</Text>
            <Text style={{ color: '#74757C', fontSize: 13, paddingLeft: 26, }}>
                Measurements</Text>
            <Text style={{ color: '#684BBA', fontSize: 13, fontWeight: 'bold', paddingTop: 20, paddingLeft: 29, }}>
                Single Item</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 29, }}>
              <Text style={styles.number}>36.9 cm</Text>
              <Text style={styles.number}>10.2 cm</Text>
              <Text style={styles.number}>20 cm</Text>
            </View>

            {/* Buttons */}        
          <View style={styles.buttonContainer}>
            <NormalButton title="Computers" width={130} height={40} borderRadius={15} marginTop={10} />
              <View style={styles.buttonSpacer} />
            <NormalButton title="Laptop" width={130} height={40} borderRadius={15} marginTop={10}/>
          </View>
          <View style={styles.buttonContainer}>
            <NormalButton title="Tech" width={130} height={40} borderRadius={15}marginTop={10} />
              <View style={styles.buttonSpacer} />
            <NormalButton title="Work" width={130} height={40} borderRadius={15} marginTop={10}/>
          </View>
            {/* Order Details */} 
          <View style={styles.ordercontainer}>
            <View style={styles.orderStatus}>
              <Text style={styles.statusText}>Ordered:</Text>
              <Text style={styles.dateText}>08 Sep 2021</Text>
            </View>
            <View style={styles.orderStatus}>
              <Text style={styles.statusText}>Delivered:</Text>
              <Text style={styles.dateText}>10 Sep 2021</Text>
            </View>
          </View>
            {/* Rating */} 
            <Text style={{color: '#7252C5', fontSize: 14, fontWeight: 'bold', textAlign: 'center',textAlignVertical: 'center',}}>Your Rate</Text>
              <View style={styles.rating}>
                <Rating />
                <Rating />
                <Rating />
                <Rating />
                <Rating />
              </View>
            {/* Review */} 
          <Text style={{ color: '#7252C5', fontSize: 14, fontWeight: 'bold', paddingLeft: 40, }}>
            Your Review</Text>
            <View style={styles.reviewContainer}>
              <Text style={{ color: '#74757C', padding: 20, fontSize: 13, }}>
                La verdad esperba mas pero funciona bien.</Text>
            </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 400,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  text:
  {
    color: '#7051C4',
    fontSize: 24,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 30,
  },
  imageRow:
  {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    height: '45%',
  },
  imageContainer:
  {
    width: 150,
    height: 180,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:
  {
    width: '90%',
    height: '80%',
  },
  space:
  {
    width: 40,
  },
  number:
  {
    color: '#74757C',
    fontSize: 13,
    marginRight: 80,
  },
  buttonContainer:
  {
    flexDirection: 'row',
    marginLeft: 30,
  },
  buttonSpacer:
  {
    width: 35,
  }, 
  orderStatus:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusText:
  {
    color: '#7252C5',
    marginRight: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
  dateText:
  {
    color: '#77787F',
    fontSize: 13,
  },
  ordercontainer:
  {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
  reviewContainer:
  {
    backgroundColor: "#F8F8F8",
    marginTop: 5,
    height: 320,
    width: 320,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginBottom: 10,
  },

});

export default Detailscroll;

