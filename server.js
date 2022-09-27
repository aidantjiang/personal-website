const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('sub-pages'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/sub-pages/contact.html');
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'not puttnig this in github :)',
            pass: 'not putting this in github :)'
        }
    })

    const mailOptions = {
        from: req.body.contactmethod,
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