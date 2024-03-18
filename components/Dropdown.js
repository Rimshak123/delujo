import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const Dropdown = ({ options, onSelect, imageWidth, imageHeight, imageTop,
  imageLeft,label,labelLeft,labelTop,selectOptionTop,selectOptionLeft,selectOptionWidth,selectOptionHeight,textMarginLeft,iconWidth,iconHeight,iconLeft,iconTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };
  return (
    <View style={styles.container}>
      {/* Background image */}
      <Image source={require('../assets/input-Login-removebg-preview.png')}
        style={{ width: imageWidth, height: imageHeight, left: imageLeft, top: imageTop }}
        resizeMode="cover" />

      <View style={{ zIndex: 1 }}>
        <View style={[styles.selectOption,{top: selectOptionTop, left: selectOptionLeft, width: selectOptionWidth, height: selectOptionHeight}]}>
          <Text style={{marginLeft: textMarginLeft, color: '#FFFFFF' }}>{selectedOption}</Text>
          <TouchableOpacity onPress={toggleDropdown}>
            <Image
              source={require('../assets/icon-whitechevron.png')}
              style={{width: iconWidth, height:iconHeight, left: iconLeft, top: iconTop}} />
          </TouchableOpacity>
        </View>

        {isOpen && (
          <View style={{ position: 'absolute' }}>
            {options.map((option, index) => (
              <View style={styles.container1}>
                <TouchableOpacity key={index} onPress={() => handleSelect(option)}>
                  <Text style={styles.option}> {option}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
      {/* Label for the Dropdown */}
      <View style={{ marginLeft: labelLeft, marginTop: labelTop }}>
        <Text style={{ fontSize: 16, color: '#5B5B5D' }}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  selectOption:{
    flexDirection: 'row',
     alignItems: 'center',
      backgroundColor: '#7152C5',
      borderRadius: 10,
  },
  container1: {
    padding: 5,
    marginTop: 0.5,
    backgroundColor: '#7152C5',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    top: 10,
    left: 187,
    height: 30,
    width: 170,
  },
  option: {
    color: '#FFFFFF',
    marginLeft: 29,
  },
});

export default Dropdown;
