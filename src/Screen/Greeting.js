import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';

import { } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import R from './src/resources/R';
import App from './App';

function HomeScreen() {
    const maxWidth = Dimensions.get('screen').width;
    console.log('maxWidth', maxWidth);
    const maxHeight = Dimensions.get('screen').height;
    console.log('maxHeight', maxHeight);

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
      setHeight(maxHeight);
      setWidth(maxWidth);
    },[]);

  return (
    < NavigationContainer >
      <SafeAreaView style={styles.container}>

          <View style = {styles.image} >
            <Image source = {R.image.newImage}/>
          </View>
          
          <View style = {styles.textalign}>
            <Text style = {styles.text}>{R.string.newText}</Text>
          </View>
          <View style = {styles.button}>
            <Text style = {styles.text1}>Высота: {height} и ширина: {width}</Text>
          </View>

      </SafeAreaView> 
    </NavigationContainer>
    );
};

const Stack = createStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: Constants.statusBarHeight,
  },
  image:{
      marginTop: 80,
      alignItems: 'center'
  },
  textalign: {
    alignSelf: 'center',
    marginTop: 34
  },
  scrollView: {
    marginHorizontal: 20,
    flex: 1
  },
  text: {
    // fontFamily: "Fira Sans Condensed",
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 29,
    color: R.color.black,
    alignItems: 'center',
    textAlign: 'center'
  },
  button: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 50

  },
  text1: {
    fontFamily: "Fira Sans Condensed",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 22,
    color: R.color.grey,
    textAlign: 'center',
  },
});

export default App;
