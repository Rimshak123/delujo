
import React, { useState } from 'react';
import { View, TextInput, StyleSheet , Image, TouchableOpacity} from 'react-native';

const SearchBar = ({ onSearch , onIconPress }) => {
  const [searchText, setSearchText] = useState('');

  const handleTextChange = (text) => {
    setSearchText(text);
    onSearch(text); // You can pass the entered text back to the parent component if needed
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for stuff!"
        placeholderTextColor="#ADA5C4"
        
        value={searchText}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
        <Image
          source={require('../assets/icon-MagnGlass.png')} // Replace with the path to your image
          //          source={require('../assets/icon-add-user.png')} 
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:220,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10, // Adjusted marginTop to separate from the above content
  },
  input: {
    flex: 1,
    height: 34,
  },
  iconContainer: {
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 15,
  },
});

export default SearchBar;







// container: {
//   padding: 10,
// },
// input: {

//   width:220,
//   height: 34,
//   backgroundColor:'#F3F3F3',
//   borderRadius:20,
//   paddingLeft: 50,
// },
// iconContainer: {
//   position: 'absolute',
//   left: 10, },
// icon: {
//   width: 20,
//   height: 15,
//    marginLeft: 190,
//   marginTop:20,
// },
// });

// export default SearchBar;

