// AppNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import LoginScreen from "../screens/LoginScreen.js";
import NewsScreen from "../screens/NewsScreen";
import ShopScreen from "../screens/ShopScreen";
import SellScreen from "../screens/SellScreen";
import FeedScreen from "../screens/FeedScreen";
import CustomBottomTabBar from "./CustomBottomTabBar";
import ProfileScreen from "../screens/ProfileScreen.js";
import MyBundles from "../screens/MyBundles.js";
import MyPurchaseScreen from "../screens/MyPurchaseScreen.js";
import MyLikes from "../screens/MyLikes.js";
// import DetailsScreen from "../screens/DetailsScreen.js";
import Findfriend from "../screens/Findfriend.js";
import NewPeople from "../screens/NewPeople.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNav">
        {/* <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="TabNav"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Findfriend"
          component={Findfriend}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPeople"
          component={NewPeople}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyBundles"
          component={MyBundles}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyPurchaseScreen"
          component={MyPurchaseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyLikes"
          component={MyLikes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTabBar {...props} />}>
      <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SellScreen"
        component={SellScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
