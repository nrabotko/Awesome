import React, {useState} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import R from './src/resources/R';

function App () {
    const [count, setCount] = useState(0);
    //const onPress = () => setCount(prevCount => prevCount + 1);
    
    return <Counter value={count}/>;
}

function Counter(props) {
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <View style={styles.container1}>
                <View style = {styles.image} >
                    <Image source = {R.image.cat}/>
                </View>
                    <View style={styles.countContainer}>
                        <Text >Количество нажатий: 
                        <Text style={styles.innerText}> {props.value}</Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.button}
                    >
                        <Text style={styles.baseText}>Нажми!</Text>
                    </TouchableOpacity>    
                </View>
    );
}


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

