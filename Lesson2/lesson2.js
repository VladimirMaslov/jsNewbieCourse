"use strict";
//  1. Дан код:

/* var a = 1, b = 1, c, d;
c = ++a; alert(c);           // ++а увеличивает на 1, возвращает новое значение равное 2
d = b++; alert(d);           // b++ увеличивает на 1, но возвращает старое значение, до увеличения равное 1
c = (2+ ++a); alert(c);      // к значению 2 прибавляется увеличенное значение параметра а равное 2, в сумме получаем 5
d = (2+ b++); alert(d);      // инкремент увеличивает b на 1, но возвращает старое значение 2, к которому прибавляем 2 получаем 4
alert(a);                    //  а = 3 , три раза увеличивали на 1
alert(b);                    // b = 3, три раза увеличивали на 1, но в выражениях использовали старое значение

//  Почему код даёт именно такие результаты? */


/* 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);  // x = 5, сначала выполнится  в скобках возведение a = 2 в степень 2 и присвоение а = 4, потом прибавление 1 */


/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

/* var a = +prompt('Введите целое число: '),
    b = +prompt('Введите целое число: ');

if (a >= 0 && b >= 0) {
    console.log('a - b = ' + `${a - b}`);
} else if (a < 0 && b < 0) {
    console.log ('a * b = ' + `${a * b}`);
} else if ( a >= 0 && b < 0 || a <0 && b >= 0) {
    console.log ('a + b = ' + `${a + b}`);
} */

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

/* function getRecursion(a){
    switch (a){
        case 0: return getRecursion(a + 1) + ' ' + a; 
        case 1: return getRecursion(a + 1) + ' ' + a; 
        case 2: return getRecursion(a + 1) + ' ' + a; 
        case 3: return getRecursion(a + 1) + ' ' + a; 
        case 4: return getRecursion(a + 1) + ' ' + a; 
        case 5: return getRecursion(a + 1) + ' ' + a; 
        case 6: return getRecursion(a + 1) + ' ' + a; 
        case 7: return getRecursion(a + 1) + ' ' + a; 
        case 8: return getRecursion(a + 1) + ' ' + a; 
        case 9: return getRecursion(a + 1) + ' ' + a; 
        case 10: return getRecursion(a + 1) + ' ' + a; 
        case 11: return getRecursion(a + 1) + ' ' + a; 
        case 12: return getRecursion(a + 1) + ' ' + a; 
        case 13: return getRecursion(a + 1) + ' ' + a; 
        case 14: return getRecursion(a + 1) + ' ' + a; 
        case 15: return '15'; 
        default: return 'Null';
            break;
    }
}
console.log(getRecursion(+prompt('Задайте число от 0 до 15: ')));  */


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

/* 
function getmathOperation(arg1 = 1 , arg2 = 1) {
     const mathSumm = arg1 + arg2;
     const mathSubtraction = arg1 - arg2;
     const mathMultiplication = arg1 * arg2;
     const mathDivision = arg1 / arg2;
    return console.log (`arg1 + arg2 = ${mathSumm}\n 
arg1 - arg2 =  ${mathSubtraction}\n
arg1 * arg2 = ${mathMultiplication}\n 
arg1 / arg2 = ${mathDivision}` );
}
getmathOperation( +prompt('Введите arg1'),+prompt('Введите arg2')); */



/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch). */
/* 
function getmathOperation(arg1 = 1 , arg2 = 1, operation) {
    switch(operation){
        case 1: return console.log(`arg1 + arg2 = ${arg1 + arg2}`);
        case 2: return console.log(`arg1 - arg2 = ${arg1 - arg2}`);
        case 3: return console.log(`arg1 * arg2 = ${arg1 * arg2}`);
        case 4: return console.log(`arg1 / arg2 = ${arg1 / arg2}`);
        default: return console.log('такой операции незадано'); 
            break;

    }
}
getmathOperation( +prompt('Введите arg1'), +prompt('Введите arg2'), +prompt('введите номер операции, где 1 - сумма, 2 - вычитание, 3 - умножение, 4 - деление')); */


// 7. *Сравнить null и 0. Попробуйте объяснить результат.

/* null обозначает отсутствие какого-либо значения, если рассмотреть тип данных, то
typeof null будет "object", тогда как typeof 0 будет "number". Вывод такой, что 0 это число, которым мы можем оперировать, тогда как null это ничто. */

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.


 function power(val, pow){
    //if (Number.isInteger(val) || Number.isInteger(pow)) return 'Задайте целое число';
    if (pow === 1){
        return val;
    } else {
        return val * power(val, pow - 1);
    }    
}
console.log(power(+prompt('Задайте число '), +prompt('Задайте степень, в которую нужно возвести число ')));
