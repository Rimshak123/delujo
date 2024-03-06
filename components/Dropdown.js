// import React, { useState } from 'react';
// import { View, StyleSheet, Image, Text, TextInput } from 'react-native';

// const Dropdown = ({label}) => {
//     return (
//       <View style={styles.container}>
//         <Image  source={require('../assets/input-Login-removebg-preview.png')}
//         style={styles.image} 
//         resizeMode="cover" />
//         <Text style={styles.imageText}>{label}</Text>
       
//       </View>
//     );
//   };

// const styles = StyleSheet.create({
//     container:{
//        marginTop: 10,
        
//     },

//     image: {
       
//         width: 320,
//         height: 65,
//         top:25,
//        left:42,
      
     
//     },
   
//     imageText: {
//         position: 'absolute',
//         left: 80,
//         top: 50, 
//         fontSize: 13,
//         color: '#868688',
//     },
// });

// export default Dropdown;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';

const Dropdown = () => {
  const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];

  const [selectedOption, setSelectedOption] = useState(dropdownItems[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelect = (item) => {
    setSelectedOption(item);
    setDropdownVisible(false);
  };

  const DropdownList = () => (
    <View style={styles.dropdownList}>
      <FlatList
        data={dropdownItems}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => handleSelect(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Text style={styles.dropdownToggle}>
          {selectedOption}  Click
        </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={dropdownVisible}
        animationType="slide"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <View style={styles.modal}>
          {dropdownVisible && <DropdownList />}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownToggle: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownList: {
    position: 'absolute',
    top: 60, // Adjust the top position to align with the selected option
    right: 10, // Adjust the right position if needed
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
});

export default Dropdown;
