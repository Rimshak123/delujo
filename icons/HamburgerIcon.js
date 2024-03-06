// HamburgerIcon.js

import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const HamburgerIcon = ({ onPress }) => {
  return (
    <View>
      <Icon
        name="menu"
        type="material-community"
        color="#fff"
        size={30}
        onPress={onPress}
      />
    </View>
  );
};

export default HamburgerIcon;
