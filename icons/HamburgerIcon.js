// HamburgerIcon.js

import React from 'react';
<<<<<<< HEAD
import { View, Image, TouchableOpacity } from 'react-native';
=======
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443

const HamburgerIcon = ({ onPress }) => {
  return (
    <View>
<<<<<<< HEAD
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assets/icon-hamburguer-menu.png')} 
          style={{ width: 22, height: 18 }}
        />
      </TouchableOpacity>
=======
      <Icon
        name="menu"
        type="material-community"
        color="#fff"
        size={30}
        onPress={onPress}
      />
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    </View>
  );
};

export default HamburgerIcon;
