import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Upcomingbirthdays from '../screens/Upcomingbirthdays';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Search"component={Search} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <Tab.Screen name="Birthday" component={Upcomingbirthdays} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
