import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App () {
    
    const onPress = () => {
        setCount(count+1);
    }
    const [count, setCount] = useState(0);
    
        return (
        <SafeAreaView style={styles.container}> 
            <MyAwesomeComponent count = {count} onPress = {onPress}/> 
            <MyAwesomeComponent count = {count} onPress = {onPress}/> 
        </SafeAreaView>
        )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;