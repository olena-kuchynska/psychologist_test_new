const path = require('path'); // module for working with path
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: false }))

const port_number = 3000;
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'appointmentbot01@gmail.com',
        pass: '58462587136rt'
    }
}, {
    from : 'Bot Appointment <appointmentbot01@gmail.com>',});

const mailer = message => {
    transporter.sendMail( message, (err) => {
        if(err) return console.log(err);
        console.log('Email send');
    })
}

let textMessage = (name, phone, inputDate, inputComments) => {
    let elemOfText = `
        <h2>Запись на консультацию</h2>
        <p>Имя клиента: <i>${name}</i></p>
        <p>Номер телефона: <i>${phone}</i></p>`;

    if(inputDate || inputComments) {
        if(inputDate) {
            let month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
            let dayOfWeek = ['Воскресенье', 'Понедельник', 'Четверг', 'Среда', 'Пятница', 'Суббота'];
 
            let date = new Date(inputDate);
            let hours =  date.getHours() < 10 ? `0${date.getHours()}`: date.getHours();
            let minutes =  date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
            let dateStr = `${dayOfWeek[date.getDay() - 1]},${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}, ${hours}:${minutes}`;
            elemOfText += `<p>Желаемая дата встречи: <i>${dateStr}</i></p>`;
        }
        if(inputComments) elemOfText += `<p>Ожидание от встречи: <i>${inputComments}</i></p>`;
    }

    return elemOfText;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/:name', (req, res) => {
    res.redirect('/');
});

app.post('/', (req, res) => {   

    let message = {
        to: 'tawiw98077@eurazx.com',
        subject: `Запись на консультацию, ${req.body.name}`,
        html: textMessage(req.body.name, req.body.phone, req.body.inputDate, req.body.inputComments),
    }

    mailer(message);
    res.sendStatus(200);
});

app.listen(port_number, () => {
    console.log('Server running...');
    console.log('Listening at localhost:' + port_number );
})  