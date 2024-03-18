import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Feed"
      tabBarOptions={{
        showLabel: false,
        style: styles.background,
      }}
    >
      {tabItems.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab}
          component={EmptyScreen} // Replace with your actual screen components
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon tab={tab} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <ImageBackground source={require('../assets/footer-base.png')} style={styles.background}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={onPress}
            >
              <TabIcon tab={route.name} focused={isFocused} />
              <Text style={getLabelStyle(isFocused)}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ImageBackground>
  );
};

const TabIcon = ({ tab, focused }) => (
  <>
    {focused && (
      <Image
        source={require('../assets/circulo-seleccion.png')}
        style={styles.behindImage}
      />
    )}
    <Image
      source={getIconSource(tab, focused)}
      style={[
        styles.icon,
        {
          width: focused ? iconMapping[tab].used.width : iconMapping[tab].unused.width,
          height: focused ? iconMapping[tab].used.height : iconMapping[tab].unused.height,
          left: focused ? iconMapping[tab].used.left : iconMapping[tab].unused.left,
          top: focused ? iconMapping[tab].used.top : iconMapping[tab].unused.top,
          marginBottom: focused ? iconMapping[tab].used.marginBottom : iconMapping[tab].unused.marginBottom,
        },
      ]}
    />
  </>
);


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



export default Footer;
