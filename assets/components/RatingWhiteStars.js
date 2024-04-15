import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const RatingWhiteStars = () => {
  const [isImageOne, setIsImageOne] = useState(true);

  const handleImagePress = () => {
    setIsImageOne(!isImageOne);
  };

  return (
    <View styles={{ padding:15}}>
      <TouchableOpacity onPress={handleImagePress}>
      <Image
          source={isImageOne ? require('../assets/icon-whiteStar.png') : require('../assets/icon-whiteStar (2).png')}
          style={{ width: 15, height: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RatingWhiteStars;
