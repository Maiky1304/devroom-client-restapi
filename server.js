require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB!'));

app.use(require('body-parser').json());
app.use('/clients', require('./clients'));

app.listen(3000, () => console.log('Running on port 3000'));