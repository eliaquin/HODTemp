import 'react-native-gesture-handler';
import React from 'react';
import LoginScreen from './src/screens/Login';
import AppWrapperScreen from './src/screens/App/AppWrapper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="AppWrapper" component={AppWrapperScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
