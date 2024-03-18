

// LoginScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import WelcomeUsernameBody from '../components/WelcomeUsernameBody';

const WelcomeUsername = () => {
  return (
    <View style={styles.container}>
      <Header
        headerFlex={0.5}
        customText="WELCOME!"
        headerTextWeight='bold'
        textTop={-14}
        headerTextSize={22}
        imageWidth={200}
        imageHeight={200}
        imageLeft={0}
        imageTop={0}

        imageWidth2={25}
        imageLeft2={-170}
        imageHeight2={25}
        imageTop2={-260}

        Username="User name"
        usernameMarginTop={-30}
        usernameMarginLeft={-175}
        textColor='#FFFFFF'
        textFontSize={17}
        textMarginTop={115}
         textMarginLeft={-165}
        Level="Profile Picture"
        margintop={-20}
        marginleft={-160}
        FontSize={14}
        Color='#9C82E5'
        location="*Not necessary"

        imagePath1={require('../assets/profile-pic-user.png')}
        imagePath2={require('../assets/cross.png')}
      />
      <WelcomeUsernameBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#7051C4",
  },
});

export default WelcomeUsername;