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
    marginTop: 75,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'transparent', 
    borderBottomColor: 'black', 
  },
  buttonText: {
    color: '#808080',
    textAlign: 'center',
    fontSize: 14,
  },
  horizontalLine: {
    borderBottomWidth:1,
    borderBottomColor: '#a9a9a9', 
    marginTop: 3,
  },
})
