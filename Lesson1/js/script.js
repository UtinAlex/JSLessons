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



for (let i = 0; i<2; i++)
 {
var a = prompt("Введите обязательную статью расходов в этом месяце", "ЖКХ");
var b = prompt("Во сколько обойдётся?", "10000");

if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null 
&& a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
}

}

appData.monyPerDay = appData.budget/30;
alert("Бюджет на один день = " + appData.monyPerDay);

if (appData.monyPerDay < 100)
{
    console.log("Минимальный уровень достатка");
}
else if (appData.monyPerDay > 100 && appData.monyPerDay < 2000)
{
    console.log("Средний уровень достатка");
}
else if (appData.monyPerDay > 2000)
{
    console.log("Высокий уровень достатка");
}
else
{
    console.log("Произошла ошибка");
}
