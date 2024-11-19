import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';

import DrawerNavigator from './DrawerNavigator';

import Search from '../screens/Search';
import Home from '../screens/Home';
import MainTabNavigator from './TabNavigator';
import ApplyNewLeaveRequest from '../screens/ApplyNewLeaveRequest';
import AppliedLeaveRecordList from '../screens/AppliedLeaveRecordList';
import AcceptedLeaveRecordList from '../screens/AcceptedLeaveRecordList';
import CancelLeaveRequest from '../screens/CancelLeaveRequest';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false,}}/>
      <Stack.Screen name="Home"component={Home}options={{headerShown: false,}}/>
      {/*<Stack.Screen name="Drawer"component={DrawerNavigator}options={{headerShown: false,}}/> */}
      <Stack.Screen name="Search"component={Search}options={{headerShown: false,}}/>
      <Stack.Screen name="ApplyNewLeaveRequest" component={ApplyNewLeaveRequest} />
      <Stack.Screen name="AppliedLeaveRecordList" component={AppliedLeaveRecordList} />
      <Stack.Screen name="AcceptedLeaveRecordList" component={AcceptedLeaveRecordList} />
      <Stack.Screen name="CancelLeaveRequest" component={CancelLeaveRequest} />
      <Stack.Screen name="Main"component={MainTabNavigator}options={{headerShown: false,}}/>
    </Stack.Navigator>
  );
};

export default RootStack;
