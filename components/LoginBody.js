import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import NormalButton from '../components/NormalButton';
import CustomButton from '../components/CustomButton';
import Textbar from '../components/Textbar';
const LoginBody = () => {
    const [inputText, setInputText] = useState('');
    const handleInputChange = (text) => {
        setInputText(text);
    };
    return (
        <View style={styles.container}>
            {/* Custom Button */}
            <View style={styles.custombuttonContainer}>
                <CustomButton />
            </View>
            {/* FaceBook signup*/}
            <View style={styles.facebook}>
                <NormalButton title="   Signup with FaceBook" iconType="facebook" width={300} height={60} marginTop={40} borderRadius={20} />
            </View>

            {/* Google Signup */}
            <View style={styles.google}>
                <NormalButton title="   Signup with Google" iconType="google" width={300} height={60} marginTop={40} borderRadius={20} />
            </View>

            {/* Text bar Email address */}
            <View>
                <Textbar
                    imagePath={require('../assets/graySpace.png')}
                    labelText="EMAIL ADDRESS"
                    placeholder="Esteban@innovationsmedia.com"
                    handleInputChange={handleInputChange}
                    value={inputText}
                />
            </View>

            {/* Login Button */}
            <View style={styles.buttonContainer}>
                <NormalButton title="Login" width={130} height={40} borderRadius={15} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
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

export default LoginBody;
