// Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import UserDetails from './UserDetails';
import NextScreen from './NextScreen'; // Import the NextScreen component
import ReminderScreen from './ReminderScreen'; // Import the ReminderScreen component

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Medication Reminder App' }}
        />
        {/* <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: 'User Details' }} /> */}
        <Stack.Screen name="NextScreen" component={NextScreen} options={{ title: 'Basic Information' }} />
        <Stack.Screen
          name="ReminderScreen"
          component={ReminderScreen}
          options={{ title: 'Set Reminder' }} // Set the title for ReminderScreen
        />
        {/* Define other screens and navigation options here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
