import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
