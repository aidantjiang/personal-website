const express = require('express');
require('dotenv').config({path: __dirname + '/.env'});
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;
const SERVICE = process.env.SERVICE;
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;

//Middleware
app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/home.html');
})

app.post('/', (req, res) => {
    console.log(process.env);
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: SERVICE,
        auth: {
            user: EMAIL,
            pass: EMAIL_PASS
        }
    })

    const mailOptions = {
        from: `tag/email blank ${req.body.contactmethod}`,
        to: 'aidantjiang@gmail.com',
        subject: `Message from ${req.body.contactmethod}`,
        text: req.body.message,
    }

    transporter.sendMail(mailOptions, (e, info) => {
        if (e) {
            console.log(e);
            res.send('error');
        } else {
            console.log('Email sent:' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})