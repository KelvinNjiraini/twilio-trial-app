require('dotenv').config();
const express = require('express');
const config = require('./config');

const app = express();
const client = require('twilio')(config.accountSID, config.authToken);

app.get('/login', (req, res) => {
    client.verify
        .services(config.serviceId)
        .verifications.create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel,
        })
        .then((data) => {
            res.status(200).send(data);
        });
});

app.get('/verify', (req, res) => {
    client.verify
        .services(config.serviceId)
        .verificationChecks.create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code,
        })
        .then((data) => {
            res.status(200).send(data);
        });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
