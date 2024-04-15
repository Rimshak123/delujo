import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const Rating = () => {
  const [isImageOne, setIsImageOne] = useState(true);

  const handleImagePress = () => {
    setIsImageOne(!isImageOne);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePress}>
      <Image
          source={isImageOne ? require('../assets/icon-star-empty.png') : require('../assets/icon-star-full.png')}
          style={{ width: 20, height: 20 ,}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Rating;
