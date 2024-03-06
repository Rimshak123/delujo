import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import NormalButton from '../components/NormalButton';
import Dropdown from '../components/Dropdown';
import Textbar from '../components/Textbar';
const WelcomeUsernameBody = () => {
    const [inputText, setInputText] = useState('');
    const handleInputChange = (text) => {
        setInputText(text);
    };
    return (
        <View style={styles.container}>
          {/* <Dropdown
          label="COUNTRY"/>
          <Dropdown
           label="LANGUAGE"/> */}

           <Dropdown/>

           

            {/* Next Button */}
            {/* <View style={styles.buttonContainer}>
                <NormalButton title="Next" width={150} height={40} borderRadius={15} />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 400,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
    
    },
    facebook: {
        position: 'absolute',
        top: 80,
    },
    google: {
        position: 'absolute',
        top: 160,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 80,
    },
    custombuttonContainer: {
        position: 'absolute',
        top: 40,
    },
    image: {
        width: 320,
        height: 65,
    },
    textInput: {
        position: 'absolute',
        top: 12,
        left: 20,
        width: 290,
        height: 35,
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
    },
    email: {
        position: 'absolute',
        left: 33,
        bottom: 55,
        fontSize: 11,
        color: '#868688',
    },
});

export default WelcomeUsernameBody;
