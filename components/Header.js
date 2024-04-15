import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RatingWhiteStars from './RatingWhiteStars';
// import { useNavigation } from '@react-navigation/native';


const Header = ({ headerTextSize, customText,customTextMarginTop, headerTextWeight, headerFlex, imagePath1, imagePath2, imagePath3, imagePath4, onImage2Press, textTop, imageWidth, imageHeight, imageTop,
  imageLeft, imageWidth2, imageLeft2, imageHeight2, imageTop2, imageWidth3, imageLeft3, imageHeight3, imageTop3, imageWidth4, imageLeft4, imageHeight4, imageTop4, Username, Level, location, 
  showRating, textFontSize, textColor, userTextWeight,usernameMarginTop,usernameMarginLeft,textMarginTop,textMarginLeft,margintop,marginleft,FontSize,Color,onPress }) => {
    // const navigation = useNavigation();

  
  return (
    <View style={[styles.container, { flex: headerFlex }]}>
      <View style={[styles.containertext, { top: textTop }]}>
        <Text style={{ fontSize: headerTextSize, fontWeight: headerTextWeight, color: '#FFFFFF',marginTop:customTextMarginTop }}>
          {customText}</Text>
      </View>

      <View style={styles.imageWithTextContainer}>
        <Image
          source={imagePath1}
          style={{ width: imageWidth, height: imageHeight, left: imageLeft, top: imageTop }}
          resizeMode="cover" />
        <View style={{ alignItems: 'center', left: -10 }}>
          <Text style={[styles.imageText, { fontSize: 16,fontWeight:userTextWeight ,marginTop:usernameMarginTop,marginLeft:usernameMarginLeft }]}>{Username}</Text>
          <View style={{ marginBottom: 12, }}></View>
          {showRating && (
            <View style={{ flexDirection: 'row', marginBottom: 2, }}>
              <RatingWhiteStars />
              <RatingWhiteStars />
              <RatingWhiteStars />
              <RatingWhiteStars />
              <RatingWhiteStars />
            </View>
          )}
          <Text style={{
            color: textColor,
            fontSize: textFontSize,
            marginTop:textMarginTop,
            marginLeft:textMarginLeft

          }}>{Level}</Text>
          <View style={{ marginBottom: 15, }} />

          <Text style={[styles.imageText,{ marginTop:margintop,marginLeft:marginleft,color: Color,
            fontSize: FontSize,}]}>{location}</Text>


        </View>
      </View>

      <TouchableOpacity onPress={onImage2Press}>
        <Image
          source={imagePath2}
          style={{ width: imageWidth2, height: imageHeight2, left: imageLeft2, top: imageTop2 }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onImage2Press}>
        <Image
          source={imagePath3}
          style={{ width: imageWidth3, height: imageHeight3, left: imageLeft3, top: imageTop3 }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onImage2Press}>
        <Image
          source={imagePath4}
          style={{ width: imageWidth4, height: imageHeight4, left: imageLeft4, top: imageTop4 }}
          resizeMode="cover" 
          />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#7051C4",
    width: 400,
    height: 250,
    paddingTop: 70,
  },
  containertext: {

    paddingBottom: 10,

  },
  imageWithTextContainer: {
    flexDirection: 'row',
  },
  imageText: {
    color: '#FFFFFF',
    fontSize: 14,
  },

});

export default Header;
