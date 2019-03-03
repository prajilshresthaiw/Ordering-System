const bodyParser 		= require('body-parser');
const cookieParser  	= require('cookie-parser')
const express 			= require('express');
const mongoose 		= require('mongoose');
const morgan 			= require('morgan');
const path				= require('path');

const app 		 		= module.exports = express();

const database 		= require('./database');
const connection 		= database.url();

mongoose.Promise 		= global.Promise;
mongoose.connect(connection, { useNewUrlParser: true });

mongoose.connection
.once('open', () => console.log('Database connected'))
.on('error', (error) => {
 	console.log(error,'error');
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({limit : '500kb','extended': 'true'}));
app.use(bodyParser.json({limit : '500kb'}));
app.use(express.static(path.join(__dirname, '../../client')));

app.use(cookieParser());
