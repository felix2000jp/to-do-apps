require('dotenv').config()
const ejs      = require('ejs')
const path     = require('path')
const mongoose = require('mongoose')
const express  = require('express')

const router = require('./routes/todo')

const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use('/', router)

// We connect to the DB and start the application
mongoose.connect(process.env.DB_KEY).then(() => {console.log('Connected to db')}).catch(() => {console.log('Not connected to db')})
app.listen(process.env.PORT, () => {console.log(`http://localhost:${process.env.PORT}`)})