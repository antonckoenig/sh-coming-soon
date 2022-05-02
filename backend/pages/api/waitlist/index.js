import NextCors from 'nextjs-cors';
import axios from 'axios';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if (req.method !== 'POST') {
        return res.status(405).send({ message: `Invalid method: ${req.method}. Only POST requests allowed.`});
    }

    const email = req.body.email;

    if (!email) {
        return res.status(400).json({message: `Invalid email`});
    }

    const oauthReqBody = {
        "grant_type": "client_credentials",
        "client_id": process.env.API_USER_ID,
        "client_secret": process.env.API_SECRET
    }

    const oauthResponse = await axios.post("https://api.sendpulse.com/oauth/access_token", oauthReqBody);
    const token = oauthResponse.data.access_token;

    const emails = [
        {
            email: email,
            variables: {
                time: new Date(Date.now()).toLocaleString()
            }
        }
    ];

    const config = {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
    
    const doubleOptReqBody = {
        "emails": emails,
        "confirmation": "force",
        "sender_email": "admin@socialhelix.sh",
        "message_lang": "en"
    }
    
    const data = (await axios.post(`https://api.sendpulse.com/addressbooks/${process.env.MAILING_LIST_ID}/emails`, doubleOptReqBody, config)).data;
    
    if (data !== undefined) {
        if (data.result === true) {
            return res.status(200).json({message: 'Success'});
        } else if (data.result === false) {
            return res.status(400).json({message: 'Email is already registered'});
        }
    }

    return res.status(500).json({message: 'Internal server error'});
}   