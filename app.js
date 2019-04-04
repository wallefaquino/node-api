const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRoute = require('./routes/index');
const booksRoute = require('./routes/books');
const clientRoute = require('./routes/clients');

app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/v1/store/', booksRoute);
app.use('/v1/store/', clientRoute);


app.listen(3000); 

module.exports = app;