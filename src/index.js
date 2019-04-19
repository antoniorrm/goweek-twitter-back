const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://antoniorrm:qwe123@ds233581.mlab.com:33581/twitter', 
    {
    useNewUrlParser: true
    }
);

app.use(express.json())
app.use(require('./router'))

app.listen(3000, () => {
    console.log('Server started on port 3000');
});