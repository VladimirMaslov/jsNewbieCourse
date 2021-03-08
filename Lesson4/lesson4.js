/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */


function numToObj(userNumber)
{
    let arrNumber = userNumber.splice('');
    while (arrNumber.lenght < 3) 
    {
        arrNumber.unshift(0);
    }
    const myNumberObj = {};
    if(arrNumber.lenght > 3) 
    {
        return null;
    }
    else 
    {
        myNumberObj['сотни'] = +arrNumber[0]; 
    	myNumberObj['десятки'] = +arrNumber[1]; 
    	myNumberObj['единицы'] = +arrNumber[2];
        return myNumberObj;
    }
}

let userNumber = prompt("Введите число от 0 до 999: ");
let userObj = numToObj(userNumber);
if (myNumberObj == null) 
{
    console.log ("Пустой обьект" + myNumberObj);
}
else
{
    console.log(myNumberObj); 
}

/* 2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу. */

const basket = {
    cart: [
        {
            id_product: 1,
            name_product: "item1",
            price: 50,
            quantity: 5
        },
        {
            id_product: 2,
            name_product: "item2",
            price: 100,
            quantity: 4 
        },
        {
            id_product: 3,
            name_product: "item3",
            price: 150,
            quantity: 3 
        },
        {
            id_product: 4,  
            name_product: "item4",
            price: 200,
            quantity: 2 
        }
    ],
    basketPrice(){
        return this.cart.reduce((totalPrice, carItem) => totalPrice + (carItem.price * carItem.quantity), 0);
    }
};
console.log(basket.basketPrice());