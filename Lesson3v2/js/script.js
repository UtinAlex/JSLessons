'use strict';

let money = +prompt("Ваш бюджет на месяц?", "40000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-03-07");




var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            var a = prompt("Введите обязательную статью расходов в этом месяце", "ЖКХ");
            var b = +prompt("Во сколько обойдётся?", "10000");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (a)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDey = (appData.budget / 30).toFixed(2);
        appData.detectLevel();
        alert("Бюджет на один день = " + appData.moneyPerDey);
    },
    detectLevel: function () {
        if (appData.moneyPerDey < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDey > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Введите не обязательную статью расходов в этом месяце", "Салют");

            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let itemYet,
            items;
        do {
            items = prompt("Что принесёт дополнителшьный доход? (Перечислите через запятую)", '');

        }
        while (!((typeof (items)) === 'string' && items != '' &&
                (typeof (items)) != null));
        appData.income = items.split(', ');
        do {
            itemYet = prompt('Может что-то ещё?');
            appData.income.push(itemYet);
        }
        while (!((typeof (itemYet)) === 'string' && itemYet != '' &&
                (typeof (itemYet)) != null));
        appData.income.sort();
        this.income.forEach(function (item, i) {
            if (i > 0) {
                alert("Способы доп. заработка: " + item);
            }
        })

    }

}

appData.chooseExpenses();
appData.detectDayBudget();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

for (var key in appData) {
    console.log("Наша программа включает в себя данные: "+ key + " - "  + appData[key]);
}