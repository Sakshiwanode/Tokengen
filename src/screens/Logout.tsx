import { View, Text, Button } from 'react-native';
import React from 'react';


const Logout = ({navigation}: any) => {

  const handleLogout = () => {
   
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Logout</Text>
      <Button title="Go to Login" onPress={handleLogout} />
    </View>
  );
}

export default Logout;
