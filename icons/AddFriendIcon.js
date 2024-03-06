// AddFriendIcon.js

import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const AddFriendIcon = ({ onPress }) => {
  return (
    <View>
      <Icon
        name="person-add"
        type="material-icons"
        color="#fff"
        size={30}
        onPress={onPress}
      />
    </View>
  );
};

export default AddFriendIcon;
