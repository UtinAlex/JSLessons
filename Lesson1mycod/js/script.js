'use strict';

var money;
var time;
var answer1;
var answer2;

var money = prompt("Ваш бюджет на месяц?", "50000");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2020-03-07");

var appData = {
    budget: money,
    timeData: time
};




var list = [];


for (let i = 0; i<2; i++) {
var answer1 = prompt("Введите обязательную статью расходов в этом месяце", "ЖКХ");
var answer2 = prompt("Во сколько обойдётся?", "10000");

var expenses = {
    answer_first: answer1,
    answer_second: answer2
};

list.push(expenses);


}



var optionalExpenses = {};
var income ={};
var savings = false;

var sum =0;
for (let i = 0; i< list.length; i++) {
    
    console.log(list[i].answer_first);
    console.log(list[i].answer_second);
    sum += parseInt(list[i].answer_second);
}

alert("Бюджет на один день = " + ((money - sum)/30));

//for (var key in list) {
 //   console.log(list[key].answer_first);
 //   console.log(list[key].answer_second);
    //console.log(expenses.answer_second);
//  }


//var a = 1;
//let b = 2;

//const pi = 3.14;
//console.log(a);


//alert("Hello World");
//let ask = confirm("Что?");

//console.log(ask);