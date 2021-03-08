'use strict'

/* 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. */

const board = document.querySelector('#boardChessId');
const boardContent = board.getContext('2d');
const rowCount = 8;
// const colCount = 8;
let width = board.width / rowCount;
let height = width;
// console.log(width, height)

const drawRect = (x, y, color) => {
    boardContent.fillStyle = color;
    boardContent.fillRect(x * width, y * height, width, height);
}
drawRect(7, 3, '#369');

const creatBoard = () => {
    boardContent.fillStyle = '#222';
    boardContent.fillRect(0, 0, height, width);
}
creatBoard();

