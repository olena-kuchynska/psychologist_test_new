const path = require('path'); // module for working with path
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src'));
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

const mailer = massege => {
    transporter.sendMail( massege, (err, info) => {
        if(err) return console.log(err);
        console.log('Email send:', info);
    })
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

/* app.get('/consultation', (req, res) => {
    fs.readFile(path.join(__dirname,'consult.html'), 'utf8', 
        function(error,data){
            console.log("Асинхронное чтение файла");
            if(error) throw error; // если возникла ошибка
            res.send(data);
    }); 
    
});

app.get('/cabinet', (req, res) => {
    res.sendStatus(200);
});

app.get('/consultation#feedbacks', (req, res) => {

    res.sendStatus(200);
}); */

app.post('/', (req, res) => {
    let massege = {
        to: 'bulatova853@gmail.com',
        subject: 'Запись на прием',
        text: req.body.name
    }
    mailer(massege);
    massege = req.body;
    res.sendStatus(200);
    /* res.redirect('/'); */
});

app.listen(port_number, () => {
    console.log('Server running...');
    console.log('Listening at localhost:' + port_number );
})  