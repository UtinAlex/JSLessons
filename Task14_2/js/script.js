let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function () {
        let data = JSON.parse(request.response);
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(inputUsd.value = inputRub.value / data.usd)

                } else {
                    reject(inputUsd.value = "Что-то пошло не так!")
                }


            }, 10);




        });

        return promise;
        /* if (request.readyState === 4 && request.status == 200) {
             let data = JSON.parse(request.response);

             inputUsd.value = inputRub.value / data.usd;
         } else {
             inputUsd.value = "Что-то пошло не так!";
         }*/

    });

});