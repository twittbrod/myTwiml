// accountSid and authToken are set in environment variables
const client = require('twilio')();

client.calls.create({
        url: 'http://raw.githubusercontent.com/twittbrod/myTwiml/master/conference.xml',
        to: process.env.MY_TEST_NUMBER,
        from: process.env.TWILIO_NUMBER,
    },
    function (error, call) {
        if (error) {
            console.log(error);
        } else {
            console.log(call.sid);
        }
    }
)

