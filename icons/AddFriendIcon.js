// HamburgerIcon.js

import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const HamburgerIcon = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assets/icon-add-user.png')} 
          style={{ width: 25, height: 23 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HamburgerIcon;
