const express = require('express');
require('dotenv').config({path: __dirname + '/.env'});
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;
const SERVICE = process.env.SERVICE;
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;

const Flickr = require("flickr-sdk")
const flickr = new Flickr(process.env.FLICKR_API_KEY);

//Middleware
app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/home.html');
})

app.get('/photos', (req, data) => {
    flickr.photosets.getPhotos({
        api_key: process.env.FLICKR_API_KEY,
        photoset_id: "72177720303272931",
        user_id: "195440118@N04"
    }).then( (res) => {
        let linkArray = [];
        const photoset = res.body.photoset;
 
        for (let i = 0; i < photoset.photo.length; i++) {
 
            //requirements for generating unique photo url
            let server_id = photoset.photo[i].server;
            let id = photoset.photo[i].id;
            let secret = photoset.photo[i].secret;
            //size of photo
            let size = "w"
 
            //generate link
            let link = `https://live.staticflickr.com/${server_id}/${id}_${secret}_${size}.jpg`;
            linkArray.push(link);
        }
        //send formatted data up
        data.json(linkArray);
    }).catch( (err) => {
        console.error('bonk', err);
    });
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