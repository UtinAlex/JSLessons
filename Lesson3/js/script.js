'use strict';

let money = +prompt("Ваш бюджет на месяц?", "40000"),
    time= prompt("Введите дату в формате YYYY-MM-DD", "2020-03-07");




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
var b = +prompt("Во сколько обойдётся?", "10000");

if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null 
&& a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
}
else
{
    i--;
}

}
function detectDayBudget(moneyBudget, deteclLevel) {
    let PerDey = moneyBudget/30;
    deteclLevel(PerDey);

    alert("Бюджет на один день = " + PerDey);
    
}

detectDayBudget(appData.budget, deteclLevel);

function deteclLevel (PerDeymoney)
{
    if (PerDeymoney < 100)
    {
        console.log("Минимальный уровень достатка");
    }
    else if (PerDeymoney > 100 && PerDeymoney < 2000)
    {
        console.log("Средний уровень достатка");
    }
    else if (PerDeymoney > 2000)
    {
        console.log("Высокий уровень достатка");
    }
    else
    {
        console.log("Произошла ошибка");
    }
}
let optionalExpenses = {};

function chooseOptExpenses () {
    for(let i =0; i<3; i++)
    {
    let answer = prompt("Введите не обязательную статью расходов в этом месяце", "Салют");

        optionalExpenses[i] = answer;
    }
    console.log(optionalExpenses);
    for(let key in optionalExpenses) {
    console.log("Номер: "+key+" не обязательная статья расходов - "+optionalExpenses[key]);
    }
}
chooseOptExpenses();
