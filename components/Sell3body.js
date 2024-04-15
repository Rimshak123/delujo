import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Sell3body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pricing</Text>
      <Text style={styles.heading1}>Original Price</Text>
      <TouchableOpacity style={styles.textbox} onPress={() => console.log("Text 1 pressed")}>
        <View style={[styles.left, {backgroundColor: '#ffffff'}]}>
          <Text style={styles.text1}>40.000</Text>
        </View>
        <View style={[styles.right, {backgroundColor: '#7252C5'}]}>
          <Text style={styles.price}>$100</Text>
        </View>
      </TouchableOpacity>
      
      <Text style={styles.heading2}>Listing Price</Text>
      <TouchableOpacity style={styles.textbox} onPress={() => console.log("Text 2 pressed")}>
        <View style={[styles.left, {backgroundColor: '#ffffff'}]}>
          <Text style={styles.text1}>40.000</Text>
        </View>
        <View style={[styles.right, {backgroundColor:'#7252C5'}]}>
          <Text style={styles.price}>$200</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.heading3}>You earn</Text>
      <TouchableOpacity style={styles.textbox} onPress={() => console.log("Text 3 pressed")}>
        <View style={[styles.left, {backgroundColor: '#7252C5'}]}>
          <Text style={styles.text2} >0,00</Text>
        </View>
       
        <View style={[styles.right, {backgroundColor:'#7252C5'}]}>
          <Text style={styles.price}>$300</Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
   // padding: 20,
    alignItems: 'center',
    height:700,
    marginTop:-90,
    borderTopRightRadius:50,
    borderTopLeftRadius:50, 
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    marginTop:10,
    color: '#7252C5',
  },
  textbox: {
    flexDirection: 'row',
    marginBottom: 10,
   // borderColor:'#7252C5',
    width:260,
  },
 
  left: {
    flex: 1,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    padding: 10,
   // width:10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60, // You can specify the width here
},
  price: {
    color: '#ffffff',
  },
  text1:{
color:'#d3d3d3',
marginLeft:-120,
  },
  text2:{
color:'#ffffff',
marginLeft:-120,
  },
  heading1:{
marginLeft:-160,
color:'#242124',
marginBottom:5,
  },
  heading2:{
    marginLeft:-160,
    color:'#242124',
    marginBottom:5,
  },
  heading3:{
    marginLeft:-180,
    color:'#242124',
    marginBottom:5,
  },
});

export default Sell3body;

