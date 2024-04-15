<<<<<<< HEAD
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
=======
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
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    </View>
  );
};

export default AddFriendIcon;
