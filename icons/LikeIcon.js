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
    </View>
  );
};


export default LikeIcon;


