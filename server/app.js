const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const deliversRouter = require('./routes/delivers');

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/deliver', deliversRouter);

app.listen(PORT, () => console.log(`*Server started at http://localhost:${PORT}`));
