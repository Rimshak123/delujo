// HamburgerIcon.js

import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const HamburgerIcon = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assets/icon-heart.png')} 
          style={{ width: 26, height: 22,  }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HamburgerIcon;
