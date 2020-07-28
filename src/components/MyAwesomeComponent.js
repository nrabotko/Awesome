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
    Text,
    TouchableOpacity,
} from 'react-native';

function MyAwesomeComponent() {

    return (
        <>
            <Text>Hello, im awesome component</Text>
            <TouchableOpacity onPress={() => {
                alert('Button Pressed');
            }}>
                <Text>Button</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({});

export default MyAwesomeComponent;
