import { Group } from "react-native";
import App from './App';
import Greeting from './src/Screen/Greeting';

export default class R {
    static image = {
        newImage: require('../images/Group.png'),
        cat: require('../images/p_cat2.png'),
        pig: require('../images/giphy.gif'),
    };
    static string = {
        newText: 'Помогай проснуться твоим близким, с помощью общего будильника',
    };
    static color = {
        black: '#000000',
        grey: 'rgba(0, 0, 0, 0.61)',
        blue: '#00BFFF',
        white: '#ffffff',
        green: '#a1c481'
    };

};
