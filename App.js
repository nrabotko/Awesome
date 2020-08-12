import React, {useState} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import R from './src/resources/R';
import MyAwesomeComponent from './src/components/MyAwesomeComponent';


function App () {

        return <SafeAreaView style={styles.container}> <MyAwesomeComponent/> </SafeAreaView>
    
}

function Counter (props) {
        
    const [count, setCount] = useState(0);

    onPress = () => {
        setCount(count+1);
    }
    return <Counter value={count}/>;
};
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },

    container1: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: "center",
        paddingHorizontal: 10
    },

    container2: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: "center",
        paddingHorizontal: 10
    },

    image:{
        right: 0,
        left: 0,
        alignItems: 'center',
        marginTop: 10

    },
    button: {
        alignItems: "center",
        backgroundColor: R.color.green,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 7,
        padding: 15
      },
      countContainer: {
        alignItems: "center",
        padding: 15

      },
      baseText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: R.color.white
      },
      innerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: R.color.blue
      }
});

export default App;

