window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });



    // Timer

    let deadline = '2021-01-01 00:00:00';
    //let deadline = '2020-03-21 13:27:00';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };

    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            let h = t.hours,
                m = t.minutes,
                s = t.seconds;

            if (h < 10) {
                hours.textContent = `0${t.hours}`;
            } else {
                hours.textContent = t.hours;
            }

            if (m < 10) {
                minutes.textContent = `0${t.minutes}`;
            } else {
                minutes.textContent = t.minutes;
            }

            if (s < 10) {
                seconds.textContent = `0${t.seconds}`;
            } else {
                seconds.textContent = t.seconds;
            }


            if (t.total <= 0) {

                clearInterval(timeInterval);
            }
        }
    };

    setClock('timer', deadline);

    //Form

    //Modal



    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptBtn = document.getElementsByClassName('description-btn');

    function learnMore() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';

        close.addEventListener('click', function () {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });


    }


    more.onclick = learnMore;
    for (let i = 0; i < descriptBtn.length; i++) {
        descriptBtn[i].onclick = learnMore;
    }

    let message = {
        loadong: 'загрузка...',
        success: 'Спасибо! Мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                    request.send(data);
                });

            } // End postData
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }




            postData(FormData)
                .then(() => statusMessage.innerHTML = message.loadong)
                .then(() => {
                    thankModal.style.display = 'block';
                    mainModal.style.displey = 'none';
                    statusMessage.innerHTML = '';
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

        });
        //Contact
    }
    let formContact = document.getElementById('form'),
        inputCont = formContact.getElementsByTagName('input'),
        statusMessageCont = document.createElement('div');

    statusMessageCont.classList.add('status');

    formContact.addEventListener('submit', function (event) {
        event.preventDefault();
        formContact.appendChild(statusMessageCont);

        let requestCont = new XMLHttpRequest();
        requestCont.open('POST', 'server.php');
        //request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded' );
        requestCont.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


        let formDataCont = new FormData(formContact);

        let objCont = {};
        formDataCont.forEach(function (value, key) {
            objCont[key] = value;
        });
        let jsonCont = JSON.stringify(objCont);

        requestCont.send(jsonCont);

        //request.send(formData);

        requestCont.addEventListener('readystatechange', function () {
            if (requestCont.readyState < 4) {
                statusMessageCont.innerHTML = message.loading;
            } else if (requestCont.readyState === 4 && requestCont.status == 200) {
                statusMessageCont.innerHTML = message.success;
            } else {
                statusMessageCont.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < inputCont.length; i++) {
            inputCont[i].value = '';
        }

    });


});