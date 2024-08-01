// import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome icons are used

// const PhotoElement = (props) => {
//   const containsUri = !!props.uri;
//   const uri = containsUri ? props.uri : TabsImages.sellIcon; // Assuming TabsImages.sellIcon is defined somewhere
//   const imgStyle = styles.addImg;

//   const containerStyle = containsUri
//     ? styles.photoContainer2
//     : [styles.photoContainer, styles.borderedContainer];
//   const resizeMode = "contain";

//   // Define colors directly within the component
//   const colors = {
//     red400: '#FF5733',
//     // Define other colors here
//   };

//   return (
//     <View style={containerStyle}>
//       <Image resizeMode={resizeMode} style={imgStyle} source={{ uri }} />

//       {containsUri && (
//         <TouchableOpacity
//           style={styles.removeBtn}
//           onPress={() => props.removeAction(uri)}
//         >
//           {/* Use directly defined color */}
//           <Icon name="trash" size={25} color={colors.red400} />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   borderedContainer: {
//     borderStyle: "solid",
//     // borderColor: "#7152c4",
//     // borderWidth: 3,
//     borderRadius: 10, // Replace hp(4) with a fixed value
//     // paddingRight: 20,
//   },
//   photoContainer: {
//     margin: 10, // Replace (10 * hp(8)) / 100 with a fixed value
//     height: 110,
//     width: "100%",
//     backgroundColor: "#7252C5",
//     // justifyContent: "center",
//   },
//   photoContainer2: {
//     margin: 10, // Replace (10 * hp(8)) / 100 with a fixed value
//     height: 110,
//     width: "100%",
//     borderWidth: 1,
//     borderRadius: 10, // Replace hp(4) with a fixed value
//     overflow: "hidden",
//     // backgroundColor: "#7152c4",
//     // justifyContent: "center",
//   },
//   addImg: {
//     width: 120, // Replace (150 * hp(8)) / 100 with a fixed value
//     height: 120, // Replace (150 * hp(8)) / 100 with a fixed value
//     alignSelf: "center",
//     // marginRight: (30 * hp(8)) / 100,
//     // marginLeft: (10 * hp(8)) / 100,
//   },
//   displayImg: {
//     width: 120, // Replace (150 * hp(8)) / 100 with a fixed value
//     height: 120, // Replace (150 * hp(8)) / 100 with a fixed value
//     alignSelf: "center",
//     // flex: 1,
//     // alignSelf: "stretch",
//   },
//   removeBtn: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     padding: 10,
//   },
// });

// export default PhotoElement;



import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome icons are used

const PhotoElement = (props) => {
  const containsUri = !!props.uri;
  const uri = containsUri ? props.uri : TabsImages.sellIcon; // Assuming TabsImages.sellIcon is defined somewhere
  const imgStyle = styles.addImg;

  const containerStyle = containsUri
    ? styles.photoContainer2
    : [styles.photoContainer, styles.borderedContainer];
  const resizeMode = "contain";

  // Define colors directly within the component
  const colors = {
    red400: '#FF5733',
    // Define other colors here
  };

  return (
    <View style={containerStyle}>
      <Image resizeMode={resizeMode} style={imgStyle} source={{ uri }} />

      {containsUri && (
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => props.removeAction(uri)}
        >
          {/* Use directly defined color */}
          <Icon name="trash" size={25} color={colors.red400} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  borderedContainer: {
    borderStyle: "solid",
    // borderColor: "#7152c4",
    // borderWidth: 3,
    borderRadius: 10, // Replace hp(4) with a fixed value
    // paddingRight: 20,
  },
  photoContainer: {
    margin: 10, // Replace (10 * hp(8)) / 100 with a fixed value
    height: 110,
    width: "100%",
    backgroundColor: "#7152c4",
    // justifyContent: "center",
  },
  photoContainer2: {
    margin: 10, // Replace (10 * hp(8)) / 100 with a fixed value
    height: 110,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10, // Replace hp(4) with a fixed value
    overflow: "hidden",
    // backgroundColor: "#7152c4",
    // justifyContent: "center",
  },
  addImg: {
    width: 120, // Replace (150 * hp(8)) / 100 with a fixed value
    height: 120, // Replace (150 * hp(8)) / 100 with a fixed value
    alignSelf: "center",
    // marginRight: (30 * hp(8)) / 100,
    // marginLeft: (10 * hp(8)) / 100,
  },
  displayImg: {
    width: 120, // Replace (150 * hp(8)) / 100 with a fixed value
    height: 120, // Replace (150 * hp(8)) / 100 with a fixed value
    alignSelf: "center",
    // flex: 1,
    // alignSelf: "stretch",
  },
  removeBtn: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 10,
  },
});

export default PhotoElement;
