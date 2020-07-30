/**
 * 1. Необходимо вывести этот компонент в App.js (по желанию можно полностью очистить старый App.js и выводить туда только этот компонент посередине экрана)
 * 2. Рассмотреть структуру компонента, понять в чем отличия от App.js, написать мне
 * 3. Создать стэйт переменную которая будет отвечать за количество нажатий на кнопку
 * 4. Создать функцию, которая будет срабатывать при нажатии на кнопку, изменяя стэйт нажатия кнопки
 * 5. Выводить кол-во нажатий вместо текста 'Hello, im awesome project'
 * 6. Стилизовать текст: текст кол-ва нажатий должен быть жирным и голубого цвета, расстояние между кнопкой тесктом и кнопкой должно быть 15, размер текста по усмотрению
 * 7. Стилизовать кнопку: кнопка должна быть зеленого цвета, текст внутри нее белый, должна быть обводка кнопки шириной 1, кнопка должна быть округлена радиусом который тебе по вкусу, добавить паддинги в кнопку
 * 8. Добавить еще один компонент в App.js (Должны быть 2 компонента в одном ряду)
 *
 * ЕСЛИ НА ЧЕМ-ТО ЗАСТРЯЛА ПИСАТЬ МНЕ, КАК ГОВОРИТСЯ:
 *
 * Лучше спросить и показаться дураком на 5 минут,
 * Чем не спрашивать и остаться дураком навсегда ☝🏼
 */

import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import R from '../resources/R';

function MyAwesomeComponent() {

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container1}>
            <View style = {styles.image} >
                <Image source = {R.image.cat}/>
            </View>
                <View style={styles.countContainer}>
                    <Text >Количество нажатий: 
                    <Text style={styles.innerText}> {count}</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
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

export default MyAwesomeComponent;
