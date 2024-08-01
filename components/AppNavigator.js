import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "../screens/NewsScreen";
import ShopScreen from "../screens/ShopScreen";
import SellScreen from "../screens/SellScreen";
import FeedScreen from "../screens/FeedScreen";
import CustomBottomTabBar from "./CustomBottomTabBar";
import ProfileScreen from "../screens/ProfileScreen";
import MyBundles from "../screens/MyBundles";
import MyPurchaseScreen from "../screens/MyPurchaseScreen";
// import FeedbackScreen from "../screens/MyLikes";
import Findfriend from "../screens/Findfriend";
import NewPeople from "../screens/NewPeople";
import FeedbackScreen from "../screens/FeedBackScreen";
// import appTutorial from "../screens/appTutorial";
import GuideScreen from "../screens/GuideScreen";
import AppTutorialScreen from "../screens/AppTutorialScreen";
import Report from "../screens/Report";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabNav">
      <Stack.Screen
        name="TabNav"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppTutorialScreen"
        component={AppTutorialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPeople"
        component={NewPeople}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GuideScreen"
        component={GuideScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
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
