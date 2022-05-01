const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const TOKEN_STORAGE = "/tmp/";

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
module.exports = app;
