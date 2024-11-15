import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './TabNavigator'; 
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="Homescreen"component={MainTabNavigator}options={{headerShown: false}}/>
        <Drawer.Screen name="Profile"component={Profile}options={{headerShown: false}}/>
        <Drawer.Screen name="logout" component={Logout} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
