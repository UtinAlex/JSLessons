'use strict';

// задание 6.2.5
let questionApple = prompt('Ваше отношение к технике Apple?', 'Отличная техника!');
let promptApple = document.getElementById('prompt');
promptApple.textContent = questionApple;
//окончание задания 2.6.5


let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu'),
    column = document.getElementsByClassName('column');



//задание 6.2.1 восстановить порядок в меню, добавитьт 5 пункт

if (menuItem[1].parentNode) {
var oldMI = menuItem[1].parentNode.removeChild(menuItem[1]);
}
var parentMI = menuItem[2].parentNode;
parentMI.insertBefore(oldMI, menuItem[2]);

var clonMI = menuItem[1].cloneNode(true);
clonMI.textContent = 'Пятый пункт';
var parentMI3 = menuItem[3].parentNode;

parentMI3.appendChild(clonMI);
// окончание задания 6.2.1

// задание 6.2.2

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
//окончание задания 2.6.2

// задание 6.2.3

let apple = document.getElementById('title');

apple.textContent = 'Мы продаем только подлинную технику Apple';
//окончание задания 2.6.3

// задание 6.2.4
let adv = document.getElementsByClassName('adv');
adv[0].remove();
//окончание задания 2.6.4

// задание 6.2.5
//let questionApple = prompt('Ваше отношение к технике Apple?', 'Отличная техника!');
//let promptApple = document.getElementById('prompt');
//promptApple.textContent = questionApple;
//окончание задания 2.6.5


//menuItem[1].remove();

//menuItem[1].replaceWith(menuItem[2]);

