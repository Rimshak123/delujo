import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Allcategory = () => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>City</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Brand</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sale</Text>
        </TouchableOpacity>
      </View>
      {/* New line */}
      <View style={styles.horizontalLine}></View>
    </View>
  )
}

export default Allcategory

const styles = StyleSheet.create({ 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 90,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'transparent', // Set background color to transparent
    //borderBottomWidth: 1, // Add border at bottom
    borderBottomColor: 'black', // Set border color to black
  },
  buttonText: {
    color: '#808080', // Set text color to #808080
    textAlign: 'center',
    fontSize: 12,
  },
  horizontalLine: {
    borderBottomWidth:1, // Add border at bottom
    borderBottomColor: '#a9a9a9', // Set border color to black
    marginTop: 10, // Adjust spacing as needed
  },
})
