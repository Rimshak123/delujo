import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image
        source={require('../assets/footer-base.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icon-feed-unused.png')}
            style={styles.icon1}
          />
          <Text style={styles.iconText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icon-shop-unused.png')}
            style={styles.icon2}
          />
          <Text style={styles.iconText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icon-sell-used.png')}
            style={styles.icon3}
          />
          <Text style={styles.iconText}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icon-news-used.png')}
            style={styles.icon4}
          />
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
          <View style={styles.circle}></View>
          <Text style={styles.iconText}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icon-profile-unused.png')}
            style={styles.icon5}
          />
          <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    width: '100%',
    height: 100,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 22,
    left: 0,
    right: 0,
  },
  iconButton: {
    alignItems: 'center',
  },
  icon1: {
    width: 35,
    height: 20,
    marginTop: 10,
  },
  icon2: {
    width: 32,
    height: 32,
    marginBottom: 0,
  },
  icon3: {
    width: 32,
    height: 32,
    marginBottom: 2,
  },
  icon4: {
    width: 29,
    height: 32,
    marginTop: 9,
  },
  icon5: {
    width: 43,
    height: 29,
    marginBottom: 5,
  },
  iconText: {
    color: '#808080',
  },
  notificationBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    top: -8,
    right: -20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:'#7252C5',
    zIndex: -1,
  },
});

export default Footer;
