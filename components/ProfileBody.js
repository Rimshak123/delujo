import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonProfile from './ButtonProfile';

const ProfileBody = () => {
  const navigation = useNavigation();

  const GuideScreen = () => {
    navigation.navigate('GuideScreen');
  };

  const AppTutorialScreen = () => {
    navigation.navigate('AppTutorialScreen');
  };
  
  const FeedbackScreen = () => {
    navigation.navigate('FeedbackScreen');
  };

  const Report = () => {
    navigation.navigate('Report');
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => navigation.navigate('LoginScreen')
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.textSocial}>Social</Text>
        <ButtonProfile text="Your Guide to DeLujo" onPress={GuideScreen} marginTop={70} imageLeft={90} imageRight={85} />
        {/* <ButtonProfile text="Refer and earn cash!" marginTop={130} imageLeft={90} imageRight={87} /> */}
        <Text style={styles.textMystore}>Help and Support</Text>
        <ButtonProfile text="Feedback" onPress={FeedbackScreen} marginTop={250} imageLeft={118} imageRight={110} />
        <ButtonProfile text="App Tutorial" onPress={AppTutorialScreen} marginTop={310} imageLeft={118} imageRight={110} />
        {/* <Text style={styles.textPayment}>Payment</Text>
        <ButtonProfile text="My Payment Methods" marginTop={420} imageLeft={95} imageRight={85} />
        <ButtonProfile text="My Addresses" marginTop={480} imageLeft={115} imageRight={105} /> */}
      </View>
      <View style={styles.logout}>
        <TouchableOpacity style={{ left: 40 }} onPress={Report }>
          <Text style={styles.logoutText}>Admin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logout}>
        <TouchableOpacity style={{ left: 40 }} onPress={handleLogout}>
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
    marginTop: 0,
  },
  textSocial: {
    color: "#6F50C2",
    fontSize: 20,
    marginTop: 25,
    padding: 10,
    paddingLeft: 40,
  },
  textMystore: {
    color: "#6F50C2",
    fontSize: 20,
    marginTop: 130,
    padding: 10,
    paddingLeft: 40,
  },
  textHistroy: {
    color: "#6F50C2",
    fontSize: 20,
    marginTop: 185,
    padding: 10,
    paddingLeft: 40,
  },
  textPayment: {
    color: "#6F50C2",
    fontSize: 20,
    marginBottom: 110,
    marginTop: 125,
    padding: 10,
    paddingLeft: 40,
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
