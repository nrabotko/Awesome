/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet
} from 'react-native';

import { } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Greeting from './src/Screen/Greeting';

const Stack = createStackNavigator();

function App() {

  return (
    < NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Greeting.HomeScreenrun} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
