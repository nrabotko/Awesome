/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import {
 
} from 'react-native/Libraries/NewAppScreen';
import R from './src/resources/R';

const App = () => {
  return (
      <View 
      style={{
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'space-between',
        // alignItems: 'center'
      }}>
        
      <Image
          source = {R.image.newImage}
        />

      </View>   
  );
};

const styles = StyleSheet.create({

});

export default App;
