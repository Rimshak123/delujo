import React from 'react';
import { View, StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonProfile from './ButtonProfile';

const ProfileBody = () => {
  const navigation = useNavigation();

  const MyBundles = () => {
    navigation.navigate('MyBundles');
  };
  const MyPurchaseScreen = () => {
    navigation.navigate('MyPurchaseScreen');
  };
  const MyLikes = () => {
    navigation.navigate('MyLikes');
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.textSocial}>Social</Text>
        <ButtonProfile text="Your Guide to DeLujo" marginTop={70} imageLeft={90} imageRight={85} />
        <ButtonProfile text="Refer and earn cash!" marginTop={130} imageLeft={90} imageRight={87} />
        <ButtonProfile text="Find people" marginTop={190} imageLeft={115} imageRight={110} />
        <Text style={styles.textMystore}>My store</Text>
        <ButtonProfile text="My Clothes" marginTop={305} imageLeft={118} imageRight={110} />
        <ButtonProfile text="My Bundles" onPress={MyBundles}  marginTop={365} imageLeft={118} imageRight={110} />
        <ButtonProfile text="My Size" marginTop={425} imageLeft={125} imageRight={118} />
        <Text style={styles.textHistroy}>History</Text>
        <ButtonProfile text="My Likes"   onPress={MyLikes} marginTop={540} imageLeft={125} imageRight={120} />
        <ButtonProfile text="My Purchases"  onPress={MyPurchaseScreen} marginTop={600} imageLeft={110} imageRight={106} />
         <Text style={styles.textPayment}>Payment</Text>
        <ButtonProfile text="My Payment Methods " marginTop={710} imageLeft={95} imageRight={85} />
        <ButtonProfile text="My Addresses" marginTop={770} imageLeft={115} imageRight={105} />
        
      </View>
      <View style={styles.logout}>
      <TouchableOpacity style={{left:40,}}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 400,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  textSocial: {
    color: "#6F50C2",
    fontSize: 20,
    marginTop: 25,
    padding: 10,
    paddingLeft:40,
    
  },
  textMystore: {
    color: "#6F50C2",
    fontSize: 20,
    marginTop: 190,
    padding: 10,
    paddingLeft:40,
  },
  textHistroy: {
    color: "#6F50C2",
    fontSize: 20,
    marginTop: 185,
    padding: 10,
    paddingLeft:40,
  },
  textPayment: {
    color: "#6F50C2",
    fontSize: 20,
    marginBottom: 110,
    marginTop:125,
    padding: 10,
    paddingLeft:40,
  },
  logout: {
    width: 400,
    height: 55,
    backgroundColor: '#D4526A',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logoutText: {
    fontSize: 15,
    color: 'white',
  },
});

export default ProfileBody;
