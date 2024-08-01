import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const AppTutorialScreen = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>App Tutorial</Text>
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 1</Text>
          <Image source={require('../assets/img1.jpeg.jpeg')} style={styles.image} />
          <Text style={styles.stepText}>
            "Design a straightforward registration screen with fields for email, username, password, and confirmation. Validate inputs instantly and include clear buttons for account creation and optional cancellation. Ensure links to Terms, Privacy Policy, and a 'Forgot Password?' option are readily accessible for user convenience and security."
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 2</Text>
          <Image source={require('../assets/img2.jpeg.jpeg')} style={styles.image} />
          <Text style={styles.stepText}>
            "The login screen includes fields for email and password with clear instructions and icons. Users can log in with a single click after entering their credentials, or they can use the 'Forgot Password?' link for recovery. A 'Create Account' option directs new users to the registration page, designed for simple navigation and security with password visibility control."
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 3</Text>
          <Image source={require('../assets/img3.jpeg.jpeg')} style={styles.image} />
          <Text style={styles.stepText}>"The Feed screen lets users search and browse products with ease. Each item can be liked, commented on, and shared effortlessly, fostering engagement. It's designed for intuitive navigation and includes social sharing options for seamless content distribution across platforms."</Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 4</Text>
          <Image source={require('../assets/img4.jpeg.jpeg')} style={styles.image} />
          <Text style={styles.stepText}>"The Sell screen enables users to upload product images, add details like name, price, and description, and specify sizes and tags for organization. Sellers can also include contact information for buyer inquiries, streamlining communication. Designed for simplicity, it guides users through listing products with intuitive prompts for effective showcasing and informed purchases."</Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 5</Text>
          <Image source={require('../assets/img0.jpeg')} style={styles.image} />
          <Text style={styles.stepText}>"The Shop screen simplifies shopping by letting users browse products, add items to their cart, and securely complete purchases within the app. Each product features clear descriptions and pricing details, ensuring informed buying decisions. Integrated payment systems guarantee smooth transactions, prioritizing convenience and security for users."</Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 6</Text>
          <Image source={require('../assets/img6.jpeg.jpeg')} style={styles.image} />
          <Text style={styles.stepText}>"The News screen provides updates on registered users and newly added products. In the "People" section, users can view profiles and activities of community members, fostering connections and interaction. The "Offers" section features detailed descriptions and promotions of recently added products, keeping users informed about new offerings and opportunities within the platform. This screen serves as a dynamic space for community engagement and discovery of exciting updates.."</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container: {
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6F50C2',
    marginLeft:100,
    marginTop:10,
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepHeading: {
    fontSize: 20,
    marginLeft: 130,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#7252C5",
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  stepText: {
    fontSize: 14,
    color: '#7252C5',
    marginLeft: 10,
    
  },
});

export default AppTutorialScreen;