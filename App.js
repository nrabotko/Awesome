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
      <View>
        <View style = {styles.imageStyles} >
          <Image source = {R.image.newImage}/>
        </View>
        
        <View style = {styles.textalign}>
          <Text style = {styles.text}>{R.string.newText}</Text>
        </View>

        <View style = {styles.textalign1}>
          <View style = {styles.align}>
            <Text style = {styles.text1}>Пропустить</Text>
          </View>
        </View>

      </View>   
  );
};

const styles = StyleSheet.create({
  imageStyles:{
      flex: 1,
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'space-between',
      marginTop: 80,
      alignItems: 'center'
  },
  text: {
    fontFamily: "Fira Sans Condensed",
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 29,
    color: "black",
    alignItems: 'center',
    textAlign: 'center',
    height: 87,
    marginTop: 460,
    // ...palette.text, ...{
    //   marginHorizontal: 8,
    //   marginVertical: 10
    // }
  },
  textalign: {
    position: 'absolute',
    alignSelf: 'center',
  },
  textalign1: {
    marginRight: 92,
    alignSelf: 'center',
    marginTop: 780
  },
  align: {
    position: 'absolute',
    bottom:0
  },
  text1: {
    fontFamily: "Fira Sans Condensed",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 22,
    color: "rgba(0, 0, 0, 0.61)",
    alignItems: 'center',
    textAlign: 'center',
    height: 87
  },
});

export default App;
