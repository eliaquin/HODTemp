import 'react-native-gesture-handler';
import React from 'react';
import LoginScreen from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
