import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Frame from '../components/Frame';
import Medal from '../components/Medal';

const ProfileEtiquetteBody = () => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Your Badges
        </Text>
      </View>

    
     <View style={{flexDirection:'row', marginTop:30,}}>
      <Medal source={require('../assets/medal-01.png')} 
       badge='First Sell'
      text="You made your first sale in DeLujo"
      />
       <Medal source={require('../assets/medal-04.png')} 
      badge='Super Star'
      text='You kept the ranking higher than 4 stars'
      />
      </View>
      <View style={{flexDirection:'row', marginTop:20,}}>
      <Medal source={require('../assets/medal-02.png')} 
       badge='Hi 5'
      text="You sold more than 5 items!"
      />
       <Medal source={require('../assets/medal-03.png')} 
      badge='+100'
      text='You sold more than a 100 items!'
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: "#F3F3F3",
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    width: 400,
  },

  header: {
    justifyContent: 'center',
    alignItems:'flex-start',
    width: '100%',
    paddingTop: 30,
    left:40,
  },
  headerText: {
    fontSize: 20,
    color: "#7051C4",
  },
  topRightText: {
    fontSize: 14,
    color: "#ADADAD",
    paddingRight: 30,
  },
  secondaryText: {
    fontSize: 16,
    color: "#8E8E94",
    left: 18,
    marginTop: 15,

  },
});

export default ProfileEtiquetteBody;
