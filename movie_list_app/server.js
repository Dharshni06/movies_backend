const express = require("express");
const dotenv = require('dotenv');  //allow to separate credentials from source code
const morgan = require('morgan'); //allow to log request on the console
const bodyparser = require('body-parser'); //parse request

const { dbConnect }= require('./server/database/connection');

const app = express();


//dotenv
dotenv.config({path:'config.env'}) //specify the path of the config file
const PORT = process.env.PORT || 8080

//morgan
app.use(morgan('tiny'));

//mongo db connection
dbConnect();

//middleware
app.use(express.json()); //pass incoming data

//body-parser
app.use(bodyparser.urlencoded({extended:true})); //parse the request of the content type from url encoded

//loading the routers
app.use('/movieList', require('./server/routes/router'));

app.listen(PORT,()=>{console.log('Server is Running  on http://localhost:'+PORT)});