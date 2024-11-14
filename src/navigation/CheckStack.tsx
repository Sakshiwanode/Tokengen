import React from 'react';
import {useSelector} from 'react-redux';

import AuthStack from './AuthStack';
import RootStack from './RootStack';

const CheckStack = () => {
  const authToken = useSelector((state: any) => state.appState.authToken);

  return authToken !==null ? <RootStack /> : <AuthStack />;
};

export default CheckStack;
