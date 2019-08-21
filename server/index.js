const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const mainRoutes = require('./routes/costs');
const cors = require('cors')

const PORT = process.env.PORT || 3170;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(mainRoutes);

async function start() {
    try{
        await mongoose.connect('mongodb://localhost:27017/test_base', {
            useNewUrlParser: true,
            useFindAndModify: false
        });

        app.listen(PORT, ()=>{
            console.log('started...');
        });
    } catch (e) {
        console.log(e);
    }
};





start();
