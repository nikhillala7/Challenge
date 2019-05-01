import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, Image } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavScreen from '../screens/Fav';
import ItenaryScreen from '../screens/Itenary';
import MikeScreen from '../screens/Mike';
import FeedScreen from '../screens/Feed';



const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="md-checkmark-circle" size={32} color="green" />


  ),
};


const FavStack = createStackNavigator({
  Fav: FavScreen,
});

FavStack.navigationOptions = {
  tabBarLabel: 'Favorite',
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-heart" size={32} color="black"  />


  ),
};



const MikeStack = createStackNavigator({
  Mike: MikeScreen,
});

MikeStack.navigationOptions = {
  tabBarLabel: 'Mike',
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="md-microphone" size={32} color="black"  />


  ),
};




const ItenaryStack = createStackNavigator({
  Itenary: ItenaryScreen,
});

ItenaryStack.navigationOptions = {
  tabBarLabel: 'Itenary',
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-calendar" size={32} color="black"  />


  ),
};



const FeedStack = createStackNavigator({
  Feed: FeedScreen,
});

FeedStack.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-flash" size={32} color="#1702F3"  />


  ),
};



export default createBottomTabNavigator({
  MikeStack,
  FeedStack,
  FavStack,
  ItenaryStack,
});
