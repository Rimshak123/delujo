import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Foot= () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handlePress = (tab) => {
    setSelectedTab((prevSelectedTab) => (prevSelectedTab === tab ? null : tab));
  };

  return (
    <ImageBackground
      source={require('../assets/footer-base.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        {tabItems.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => handlePress(tab)}
          >
            {selectedTab === tab && (
              <Image
                source={require('../assets/circulo-seleccion.png')}
                style={styles.behindImage}
              />
            )}
            <Image
              source={getIconSource(tab, selectedTab === tab)}
              style={[
                styles.icon,
                {
                  width: selectedTab === tab ? iconMapping[tab].used.width : iconMapping[tab].unused.width,
                  height: selectedTab === tab ? iconMapping[tab].used.height : iconMapping[tab].unused.height,
                  left: selectedTab === tab ? iconMapping[tab].used.left : iconMapping[tab].unused.left,
                  top: selectedTab === tab ? iconMapping[tab].used.top : iconMapping[tab].unused.top,
                  marginBottom: selectedTab === tab ? iconMapping[tab].used.marginBottom : iconMapping[tab].unused.marginBottom,

                },
                selectedTab === tab && { },
              ]}
            />
            <Text style={getLabelStyle(selectedTab === tab)}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const tabItems = ['Feed', 'Shop', 'Sell', 'News', 'Profile'];

const iconMapping = {
  'Feed': {
    unused: {
      source: require('../assets/icon-feed-unused.png'),
      width: 40,
      height: 22,
      left:3,
      // top:-18,
    },
    used: {
      source: require('../assets/icon-profile-used.png'),
      width: 39,
      height: 22,
      left:3,
      top:-15,
      marginBottom:8,
    },
  },
  'Shop': {
    unused: {
      source: require('../assets/icon-shop-unused.png'),
      width: 25,
      height: 25,
    },
    used: {
      source: require('../assets/shop-removebg-preview (3).png'),
      width: 40,
      height: 40,
      left:10,
      top:-14,
      marginBottom:-3,
    },
  },
  'Sell': {
    unused: {
      source: require('../assets/se-removebg-preview.png'),
      width: 40,
      height: 30,
    },
    used: {
      source: require('../assets/icon-sell-used.png'),
      width: 31,
      height: 32,
      left:8,
      top:-18,
      marginBottom:3,
    },
  },
  'News': {
    unused: {
      source: require('../assets/icon-news-used.png'),
      width: 22,
      height: 28,
    },
    used: {
      source: require('../assets/news-unused-removebg-preview.png'),
      width: 30.5,
      height:32.5,
      left:8,
      top:-18,
      marginBottom:3,
    },
  },
  'Profile': {
    unused: {
      source: require('../assets/icon-profile-unused.png'),
      width: 35,
      height: 24,
    },
    used: {
      source: require('../assets/profile-used-removebg-preview.png'),
      width: 42,
      height: 30,
      left:5,
      top:-15, 
      marginBottom:3,
    },
  },
};

const getIconSource = (tab, isSelected) => {
  const { used, unused } = iconMapping[tab];
  return isSelected ? used.source : unused.source;
};

const getLabelStyle = (isSelected) => {
  return {
    color: isSelected ? '#FFFFFF' : '#9D9D9D',
    fontSize: isSelected ? 13 : 12,
    top: isSelected ? -18 : 1,
    left: isSelected ? 6 : 2,
  };
};

const styles = StyleSheet.create({
  background: {
    width: 395,
    height: 90,
    backgroundColor: '#F3F3F3',
  },
  container: {
    top: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
  },
  item: {
    alignItems: 'center',
    position: 'relative',
  },
  behindImage: {
    position: 'absolute',
    top: -35,
    height: 85,
    width: 85,
    left: -20,
  },
  icon: {
    marginBottom: 5,
  },
});

export default Foot;
