const NextCors = require('nextjs-cors');
const axios = require('axios');

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

    const oauthReqBody = {
        "grant_type": "client_credentials",
        "client_id": process.env.API_USER_ID,
        "client_secret": process.env.API_SECRET
    }

    const oauthResponse = await axios.post("/oauth/access_token", oauthReqBody);

    axios.defaults.baseURL = "https://api.sendpulse.com";

    const emails = [
        {
        email: email,
            variables: {
                time: new Date(Date.now()).toLocaleString()
            }
        }
    ];
    
    const doubleOptReqBody = {
        "emails": emails,
        "confirmation": "force",
        "sender_email": "admin@socialhelix.sh",
        "template_id": "a3e45169-7ae7-4a39-b457-72fd04401f2l",
        "message_lang": "en"
    }
    
    const data = await axios.post(`addressbooks/${process.env.MAILING_LIST_ID}/email`, doubleOptReqBody);
    if (data !== undefined) {
        if (data.result === true) {
            return res.status(200).json({message: 'Success'});
        } else if (data.result === false) {
            return res.status(400).json({message: 'Email is already registered'});
        }
    }
    return res.status(200).json({message: 'Internal server error'});
}   