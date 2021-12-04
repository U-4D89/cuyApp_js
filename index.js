const express = require('express');
const app = express();
const session = require('express-session');



//connect with db
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongo')(session);
const database = 'mongodb://localhost:27017/cuyApp';

mongoose.connect( database, {
    useNewUrlParser: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected!!');
});



app.get('/', (request, response) => {
    response.send('Working!!')
})



//Express port
const port = 2583
app.listen(port, () => {
    console.log(` - - Serving on ${port} port - - `)
})