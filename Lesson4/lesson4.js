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



const cart = 
{
    item1:
    {
        cost: 50,
        count: 5
    },
    item2:
    {
        cost: 100,
        count: 4
    },
    item3:
    {
        cost: 150,
        count: 3
    },
    item4:
    {
        cost: 200,
        count: 2
    }
};
