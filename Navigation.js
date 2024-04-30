// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screen/SplScreen';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" options={{headerShown:false}}>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
