'use strict';

let money = prompt("Ваш бюджет на месяц?", "40000"),
    time= prompt("Введите дату в формате YYYY-MM-DD", "2020-03-07");
var answer1;
var answer2;



var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};



for (let i = 0; i<2; i++) {
var a = prompt("Введите обязательную статью расходов в этом месяце", "ЖКХ");
var b = prompt("Во сколько обойдётся?", "10000");

appData.expenses[a] = b;


}



alert("Бюджет на один день = " + (appData.budget/30));


