import React from 'react';
import { View, StyleSheet, Alert, Image, Text } from 'react-native';

import Header from '../components/Header';
import ProfileEtiquetteBody from '../components/ProfileEtiquetteBody';
const ProfileEtiquette = () => {

    return (
        <View style={styles.container}>
            <Header
                // headerFlex={0}
                customText="DeLujo Etiquette"
                textTop={-18}
                headerTextSize={16}
                imageWidth={140}
                imageHeight={140}
                imageLeft={-50}
                imageTop={-15}

                imageWidth2={25}
                imageLeft2={-160}
                imageHeight2={20}
                imageTop2={-190}
                imageWidth3={25}
                imageLeft3={160}
                imageHeight3={8}
                imageTop3={-205}

                imageWidth4={15}
                imageLeft4={130}
                imageHeight4={22}
                imageTop4={-90}
                Username="User name"
                Level="Level 3"
                location="Bogota`, Colombia"
                Color='#FFFFFF'
                textColor='#FFFFFF'
                textFontSize={14}
                showRating={true}
                imagePath1={require('../assets/header-profile-pic.png')}
                imagePath2={require('../assets/icon-back.png')}
                imagePath3={require('../assets/icon-threPoints.png')}
                imagePath4={require('../assets/icon-LocationPin.png')}
            />
            <ProfileEtiquetteBody />
        </View>
    );
};

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#7051C4",
    },
});

export default ProfileEtiquette;
