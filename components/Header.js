import React from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native';

  const Header = ({ showImage, headerTextSize, customText ,headerTextWeight , headerFlex, imagePath, onImagePress}) => {
  return (
    <View style={[styles.container, { flex: headerFlex }]}>
    <View>
      <Text style={{ fontSize: headerTextSize,fontWeight: headerTextWeight ,color: '#FFFFFF'}}>
        {customText}
      </Text>
    </View>
    {/* {showImage && (
      <View style={styles.imageContainer}>
        <Image
          source={imagePath}
          // source={require('../assets/DeLujo-Logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    )} */}

{showImage && (
        <View style={styles.imageContainer}>
          
          {onImagePress ? (
            <TouchableOpacity onPress={onImagePress}>
               <Image
                source={imagePath}
                style={styles.image}
                resizeMode="cover"
              /> 
           
            </TouchableOpacity>
          ) : (
            <Image
              source={imagePath }
              style={styles.image}
              resizeMode="cover"
            />
             //renderImage()
          )}
        </View>
      )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'flex-Start',
    alignItems: 'center',
    backgroundColor:"#7051C4",
    width:400, 
    // margin:40,
    paddingTop:70,

  },
//   header: {
//     marginBottom: 20,
//   },
  headerText: {
    fontSize: 16,
    color:"#FFFFFF",
  },
  imageContainer: {
    paddingTop:10,
    //alignSelf: 'flex-start',
  },
 
  image: {
    width: 65, // Adjust the width and height according to your image size
    height: 55,
  },
});

export default Header;
