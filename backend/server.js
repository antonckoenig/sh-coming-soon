const express = require('express');
const cors = require('cors')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const TOKEN_STORAGE = "/tmp/";

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors({ origin: "http://socialhelix.sh/*", optionsSuccessStatus: 200 }));
app.use(express.json());

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

app.post('/api/waitlist', allowCors, (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({message: 'Invalid email'});
  }

  const emailData = [
    {
      email: email,
      variables: {
        time: new Date(Date.now()).toLocaleString()
      }
    }
  ];

  sendpulse.init(process.env.API_USER_ID, process.env.API_SECRET, TOKEN_STORAGE, function() {
    sendpulse.addEmails(data => {
      if (data !== undefined) {
        if (data.result === true) {
          return res.status(200).json({message: 'Success'});
        } else if (data.result === false) {
          return res.status(400).json({message: 'Email is already registered'});
        }
      }

      return res.status(500).json({message: 'Internal server error'});
    }, process.env.MAILING_LIST_ID, emailData);
  });
}); 

module.exports = app;
