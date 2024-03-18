import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import NormalButton from './NormalButton';
import Dropdown from './Dropdown';
import Textbar from './Textbar';
const WelcomeUsernameBody = () => {
    const option1 = [' Colombia', 'Pakistan', 'India'];
    const option2 = ['English', 'Urdu', 'Arabic'];
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    const [inputText, setInputText] = useState('');
    const handleInputChange = (text) => {
        setInputText(text);
    };
   
    return (
       
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginTop: -430,paddingBottom:60, }}>
                <Dropdown options={option1} onSelect={handleSelect} 
                imageWidth={320}
                imageHeight={65}
                imageLeft={42}
                imageTop={25}
                label='COUNTRY'
                labelLeft={70}
                labelTop={-65}
                selectOptionTop={-31}
                selectOptionLeft={187}
                selectOptionWidth={170}
                selectOptionHeight={48}
                textMarginLeft={40}
                iconWidth={30}
                iconHeight={25}
                iconLeft={20}
                iconTop ={5}
                />
            </View>
            
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginTop: -900 , }}>
                <Dropdown options={option2} onSelect={handleSelect} 
                imageWidth={320}
                imageHeight={65}
                imageLeft={42}
                imageTop={25}
                label='LANGUAGE'
                labelLeft={70}
                labelTop={-65}
                selectOptionTop={-31}
                selectOptionLeft={187}
                selectOptionWidth={170}
                selectOptionHeight={48}
                textMarginLeft={40}
                iconWidth={30}
                iconHeight={25}
                iconLeft={35}
                iconTop ={5}
                />
            </View>
            
            <View >
                <Textbar
                    imagePath={require('../assets/graySpace.png')}
                    labelText="PAYMENT"
                    placeholder="See More..."
                    handleInputChange={handleInputChange}
                    value={inputText}
                    textbarMarginTop={-200}
                    textbarMarginLeft={45}
                    labelLeft={45}
                />
                <Textbar
                    imagePath={require('../assets/graySpace.png')}
                    labelText="ADDRESS"
                    placeholder="Carrera 8B # 21-45"
                    handleInputChange={handleInputChange}
                    value={inputText}
                    textbarMarginTop={-150}
                    textbarMarginLeft={45}
                    labelLeft={45}
                />
                <Textbar
                    imagePath={require('../assets/graySpace.png')}
                    labelText="ZIP CODE"
                    placeholder="**********"
                    handleInputChange={handleInputChange}
                    value={inputText}
                    textbarMarginTop={-150}
                    textbarMarginLeft={45}
                    labelLeft={50}
                />
                 <View style={styles.buttonContainer}>
                <NormalButton title="Next" width={130} height={40} borderRadius={15} />
            </View>
            </View>
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
    textInput: {
        position: 'absolute',
        top: 12, 
        left: 20, 
        width: 290,
        height: 35, 
        backgroundColor: '#F3F3F3', 
        borderRadius: 20,
    },
    imageText: {
        position: 'absolute',
        left: 33,
        bottom: 55, 
        fontSize: 11,
        color: '#868688',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 60,
        left:120,
    },
});

export default WelcomeUsernameBody;
