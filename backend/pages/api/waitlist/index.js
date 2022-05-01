const sendpulse = require("sendpulse-api");
const NextCors = require('nextjs-cors');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: `Invalid method: ${req.method}. Only POST requests allowed.`});
    }
    /** Run the cors middleware
    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    }); */

    const email = req.body.email;

    if (!email) {
        return res.status(400).json({message: `Invalid email`});
    }

    const emailData = [
        {
        email: email,
            variables: {
                time: new Date(Date.now()).toLocaleString()
            }
        }
    ];

    sendpulse.init(process.env.API_USER_ID, process.env.API_SECRET, undefined, function() {
        sendpulse.addEmails(data => {
            if (data !== undefined) {
                if (data.result === true) {
                    return res.status(200).json({message: 'Success'});
                } else if (data.result === false) {
                    return res.status(400).json({message: 'Email is already registered'});
                }
            }
            return res.status(200).json({message: 'Internal server error'});
        }, process.env.MAILING_LIST_ID, emailData);
    });
}   