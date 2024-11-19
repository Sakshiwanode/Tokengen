import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'; 
import StackNavigator from './src/navigation/StackNavigator';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
    </PaperProvider>
  );
};

export default App;
