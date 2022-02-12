require('dotenv').config();
const express = require('express');
const config = require('./config');

const VoiceResponse = require('twilio').twiml.VoiceResponse;
const app = express();

app.post('/voice', (req, res) => {
    const twml = new VoiceResponse();
    twml.say('Hello from your pals at twilio. Have fun!');

    res.type('text/xml');
    res.send(twml.toString());
});

const port = 1337;
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
