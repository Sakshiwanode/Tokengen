import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './TabNavigator'; 
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator>
       
     
        <Drawer.Screen
          name="Homescreen"
          component={ MainTabNavigator}
          options={{
            headerShown: false,
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={focused ? '#ffffff' : color} 
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name="person-outline"
                size={size}
                color={focused ? '#57b95a' : color} 
              />
            ),
          }}
        />
        <Drawer.Screen
        name='logout'
        component={Logout}/>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    
    flexDirection: 'column',
    alignItems: 'center',
  },
  backArrow: {
    padding: 10,
    alignSelf: 'flex-start',
    marginBottom: -50
   
  },
  logo: {
    alignSelf: 'center',
    width: 170, 
    height: 150,
   
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
   
   
  
  },
  drawerItemsContainer: {
    flex: 1,
  },
  logoutContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ccc',
    padding: 11,
  },
  logoutButton: {
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#ff3333',
    fontWeight: 'bold',
  },
  logoContainer:{
    marginTop: 0
   
  },
  textContainer:{
 
  }
});
