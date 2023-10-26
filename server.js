const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');



const { readdirSync } = require('fs')

const app = express();



app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.json({ limit: '10mb' }));

readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/' + r)))

app.listen(5000, () => console.log('listening on port 5000'))