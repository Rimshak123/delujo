// CustomBottomTabBar.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomBottomTabBar = ({ state, descriptors, navigation }) => {
  const tabs = [
    { focusedIcon: require('../assets/icon-profile-used.png'), unfocusedIcon: require('../assets/icon-feed-unused.png'), label: 'Feed', focusedIconWidth: 48, focusedIconHeight: 27, unfocusedIconWidth: 46, unfocusedIconHeight: 26,focusedIcontop:-20,focusedIconleft:16, unfocusedIconleft:15,unfocusedIcontop:14  },
    { focusedIcon: require('../assets/shop-removebg-preview (3).png'), unfocusedIcon: require('../assets/icon-shop-unused.png'), label: 'Shop', focusedIconWidth: 50, focusedIconHeight: 50, unfocusedIconWidth: 30, unfocusedIconHeight: 30,focusedIcontop:-28,focusedIconleft:20, unfocusedIconleft:20,unfocusedIcontop:10 },
    { focusedIcon: require('../assets/icon-sell-used.png'), unfocusedIcon: require('../assets/se-removebg-preview.png'), label: 'Sell', focusedIconWidth: 33, focusedIconHeight: 34, unfocusedIconWidth: 35, unfocusedIconHeight: 36,focusedIcontop:-28,focusedIconleft:22, unfocusedIconleft:21,unfocusedIcontop:5 },
    { focusedIcon: require('../assets/news-unused-removebg-preview.png'), unfocusedIcon: require('../assets/icon-news-used.png'), label: 'News', focusedIconWidth: 35, focusedIconHeight: 38, unfocusedIconWidth: 25, unfocusedIconHeight: 32,focusedIcontop:-30,focusedIconleft:24,unfocusedIcontop:8},
    { focusedIcon: require('../assets/profile-used-removebg-preview.png'), unfocusedIcon: require('../assets/icon-profile-unused.png'), label: 'Profile', focusedIconWidth: 50, focusedIconHeight: 33, unfocusedIconWidth: 38, unfocusedIconHeight: 26,focusedIcontop:-25,focusedIconleft:17,unfocusedIcontop:12 },
  ];

  return (
    <View style={styles.tabBar}>
      <Image
        source={require('../assets/footer-base.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.tabsContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const tab = tabs[index];

          return (
            <TouchableOpacity key={index} style={styles.tabItem} onPress={onPress}>
              {isFocused && (
                <Image source={require('../assets/circulo-seleccion.png')} style={styles.backgroundImagePressed} />
              )}
              <Image
                source={isFocused ? tab.focusedIcon : tab.unfocusedIcon}
                style={{
                  ...styles.tabIcon,
                  width: isFocused ? tab.focusedIconWidth : tab.unfocusedIconWidth,
                  height: isFocused ? tab.focusedIconHeight : tab.unfocusedIconHeight,
                  top: isFocused ? tab.focusedIcontop : tab.unfocusedIcontop,
                  left: isFocused ? tab.focusedIconleft : tab.unfocusedIconleft,
                }}
              />
              <Text style={isFocused ? styles.activeLabel : styles.inactiveLabel}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 84, 
    backgroundColor: 'transparent',
    // opacity: 0.8,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: 395,
    height: 90,
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  tabIcon: {
    position: 'absolute', 
    top: 5,
  },
  backgroundImagePressed: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: 90,
    height: 90,
    top: -45,
    left:-5,
  },
  activeLabel: {
    color: '#FCFCFE',
    marginTop: 10,
    fontSize: 14,
  },
  inactiveLabel: {
    color: '#9FA9B1',
    marginTop: 40,
  },
});

export default CustomBottomTabBar;
