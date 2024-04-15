<<<<<<< HEAD
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
=======
// LikeIcon.js

import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const LikeIcon = ({ onPress }) => {
  return (
    <View>
      <Icon
        name="favorite"
        type="material-icons"
        color="#fff"
        size={30}
        onPress={onPress}
      />
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    </View>
  );
};

<<<<<<< HEAD
export default HamburgerIcon;
=======

export default LikeIcon;


>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
