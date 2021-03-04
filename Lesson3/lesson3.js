/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

let arr = [],
   numberArr = 1;

while (numberArr <= 100) {  
    numberArr++;
    arr.push(numberArr);
}
let i = 2;
let j = 2;
while (i <= 100){
    i += j;
    arr.splice(arr.indexOf(i), 1);
}
console.log(arr);


/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

const cart = [
    ['item1', 50 , 5],
    ['item2', 100 , 4],
    ['item3', 150 , 3],
    ['item4', 200 , 2],
];
function cartCountPrice(cart)
{
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++){
        totalPrice += cart[i][1] * cart[i][2];
    }
    return totalPrice;
}
console.log(cartCountPrice(cart));


/* 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто} */

for (let g = 0; g < 10; console.log (g++)){
    // здесь пусто
};


/*  *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5: */

let str = '';
for (let i = 0; i < 20; i++) 
{
	str += 'x';
    console.log(str); 
}

