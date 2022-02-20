
console.log('bot started');
var Twit = require('twit');
var weather = require('weather-js');
var outlook = require('./utils/json/outlook.json');
var feelslike = require('./utils/json/feelslike.json');
var timeday = require('./utils/json/time.json');
var month = require('./utils/json/months.json');
var dayWeek = require('./utils/json/dayweek.json');
var prewords = require('./utils/json/prewords.json');
require("dotenv").config();


var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY, // Aqui você coloca a sua chave da API
    consumer_secret: process.env.CONSUMER_SECRET, // Aqui você coloca a sua chave secreta da API
    access_token: process.env.ACCESS_TOKEN, // Aqui você coloca a sua chave do TOKEN
    access_token_secret: process.env.ACCESS_TOKEN_SECRET, // Aqui você coloca a sua chave secreta do TOKEN
    timeout_ms: 60 * 1000
});

var cidade = 'Paudalho, PE';
/* Acada 3 horas o bot manda um tweet informando a temperatura média daquele momento
 na cidade, com isso ele também mostra
 
 */



setInterval(normal, 10800000); // equivale há 3 horas

setInterval(previsao, 86400000);// equivale há 24horas

setInterval(dayTime, 86400000);// equivale há 24horas

dayTime();
normal();
previsao();

function normal() {
    procuratempo(cidade, false);
}
function previsao() {
    procuratempo(cidade, true);
}

function procuratempo(cidade, isForecast) {
    weather.find({ search: cidade, degreeType: 'C' }, function (err, result) {
        if (err) console.log(err);
        if (isForecast) {
            var s = tratarForecast(result);
        } else {
            var s = tratarCurrent(result);
        }
        tweet(s);
    });
}

function tweet(text) {

    T.post('statuses/update', { status: text }, function (err, data, response) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Funcionou");

        }
    });
}

function tratarCurrent(text) {
    var ou;
    if (outlook[text[0].current.skytext]) {
        ou = outlook[text[0].current.skytext].translate + " " + outlook[text[0].current.skytext].emoji;
    } else {
        ou = text[0].current.skytext;
    }

    var temp = sensacao(parseInt(text[0].current.temperature), feelslike);
    var sens = sensacao(parseInt(text[0].current.feelslike), feelslike);

    var mensagem = "Clima em Paudalho:\nTemperatura: " + text[0].current.temperature
        + "ºC " + temp + "\nSensação Térmica: " + text[0].current.feelslike
        + "ºC " + sens + "\nAparência: " + ou
        + "\nUmidade do ar: " + text[0].current.humidity + "%";

    return mensagem;
}

function sensacao(temp, feelslike) {
    if (temp < 16)
        return feelslike["ultra cold"];
    if (temp >= 16 && temp <= 20)
        return feelslike["very cold"];
    if (temp >= 16 && temp <= 20)
        return feelslike["cold"];
    if (temp > 20 && temp <= 25)
        return feelslike["ok"];
    if (temp > 25 && temp <= 30)
        return feelslike["hot"];
    if (temp > 31)
        return feelslike["very hot"];
    if (temp > 35)
        return feelslike["ultra hot"];
}


function tratarForecast(data) {
    var x = forecast(data);
    var p = "0";
    if (x.precip != '') {
        p = x.precip;
    }

    var ou;
    if (outlook[x.skytextday]) {
        ou = outlook[x.skytextday].translate + " " + outlook[x.skytextday].emoji;
    } else {
        ou = x.skytextday;
    }

    var msg = 'Previsão para Hoje:\nMínima: ' + x.low + 'ºC\n' +
        'Máxima: ' + x.high + 'ºC\n' +
        'Aparência: ' + ou + '\n' +
        'Chuva: ' + p + '%';
    return msg;
}
function forecast(data) {
    var today = new Date();
    var date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();

    for (i = 0; i < Object.keys(data[0].forecast).length; i++) {
        if (data[0].forecast[i].date == date) {
            return data[0].forecast[i];
        }
    }
}

function dayTime() {
    var today = new Date();
    var dw = today.getDay();
    var t = today.getHours();
    var d = today.getDate();
    var m = today.getMonth();
    var y = today.getFullYear();
    var hora;
    var mes;

    if (m == 0) {
        mes = month[1];
    }
    if (m == 1) {
        mes = month[2];
    }
    if (m == 2) {
        mes = month[3];
    }
    if (m == 3) {
        mes = month[4];
    }
    if (m == 4) {
        mes = month[5];
    }
    if (m == 5) {
        mes = month[6];
    }
    if (m == 6) {
        mes = month[7];
    }
    if (m == 7) {
        mes = month[8];
    }
    if (m == 8) {
        mes = month[9];
    }
    if (m == 9) {
        mes = month[10];
    }
    if (m == 10) {
        mes = month[11];
    } if (m == 11) {
        mes = month[12];
    }

    if (t >= 5 && t < 12) {
        hora = timeday.MORNING;
    } else if (t >= 12 && t < 18) {
        hora = timeday.AFTHERNOON;
    } else {
        hora = timeday.NIGHT;
    }

    if (dw == 0) {

        var msg = hora + " " + cidade + "\n Hoje é: "
            + dayWeek[0] + " " + d + " de " + mes + " de " + y +
            "\n" + prewords.Domingo;
    }
    if (dw == 1) {

        var msg = hora + " " + cidade + "\n Hoje é: "
            + dayWeek[1] + " " + d + " de " + mes + " de " + y +
            "\n" + prewords.Segunda;
    }
    if (dw == 2) {

        var msg = hora + " " + cidade + "\n Hoje é: "
            + dayWeek[2] + " " + d + " de " + mes + " de " + y +
            "\n" + prewords.Terça;
    }
    if (dw == 3) {

        var msg = hora + " " + cidade + "\n Hoje é: "
            + dayWeek[3] + " " + d + " de " + mes + " de " + y +
            "\n" + prewords.Quarta;
    }
    if (dw == 4) {

        var msg = hora + " " + cidade + "\n Hoje é: "
            + dayWeek[4] + " " + d + " de " + mes + " de " + y +
            "\n" + prewords.Quinta;
    }
    if (dw == 5) {

        var msg = hora + " " + cidade + "\n Hoje é: "
            + dayWeek[5] + " " + d + " de " + mes + " de " + y +
            "\n" + prewords.Sexta;
    }
    if (dw == 6) {

        var msg = hora + " " + cidade + "\n Hoje é: "
            + dayWeek[6] + " " + d + " de " + mes + " de " + y +
            "\n" + prewords.Sabado;
    }

    return tweet(msg);
}

