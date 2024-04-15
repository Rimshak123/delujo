// HamburgerIcon.js

import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddFriendIcon = () => {
  const navigation = useNavigation();

  const NewPeople = () => {
    navigation.navigate('NewPeople');
  };
  return (
    <View>
      <TouchableOpacity onPress={NewPeople}>
        <Image
          source={require('../assets/icon-add-user.png')} 
          style={{ width: 25, height: 23 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddFriendIcon;
