const client = require('twilio')(config.accountSID, config.authToken);

client.calls
    .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: +254714585599,
        from: +18454470787,
    })
    .then((call) => {
        console.log(call.sid);
    })
    .catch((err) => {
        console.log(err);
    });
