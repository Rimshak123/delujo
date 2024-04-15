import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

const Medal = ({ text,source,badge }) => {
  // Split the text into two parts
  const textParts = text.split(' ');

  // Calculate the midpoint to determine where to split the text
  const midpoint = Math.ceil(textParts.length / 2);

  // Join the text parts back together with a space in between
  const firstLine = textParts.slice(0, midpoint).join(' ');
  const secondLine = textParts.slice(midpoint).join(' ');

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
         <Image
        source={source}
        style={styles.image}
      />
      <Text  style={styles.badge}>{badge}</Text>
      <Text style={styles.text}>{firstLine}</Text>
      <Text style={styles.text}>{secondLine}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
    },
    badge:{
        color:'#7051C4',
        fontWeight:'bold',
        fontSize:18,
    },
    text: {
    color:'#A1A1A1',
    fontSize:14,
    },
  });
  


export default Medal;
