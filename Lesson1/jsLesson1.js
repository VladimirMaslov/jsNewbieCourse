/* Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию */

let 
    Tf = 0;
    Tc = 0;
Tc = prompt('Введите температуру в градусах Цельсия: ');
Tf = (9 / 5) * Tc + 32;
alert ('температура в градусах по Фаренгейту = ' + Tf);

/* Работа с переменными. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»). */

let 
    name = 'Василий'
    admin = name;    
console.log ('name = ' + `${admin}`);

/*  *Чему будет равно JS-выражение 1000 + "108"/ */

console.log('Чему будет равно JS-выражение 1000 + "108"/ =' + 1000 + "108");