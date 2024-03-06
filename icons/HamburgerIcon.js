// HamburgerIcon.js

import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const HamburgerIcon = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assets/icon-hamburguer-menu.png')} 
          style={{ width: 22, height: 18 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HamburgerIcon;
