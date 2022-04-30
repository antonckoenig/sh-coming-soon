const express = require('express');
const sendpulse = require("sendpulse-api");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const TOKEN_STORAGE = "/tmp/";

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());

app.post('/api/waitlist', (req, res) => {
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
