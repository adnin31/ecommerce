const express = require ('express')
const app = express()
var bodyParser = require('body-parser');
const loger = require('morgan')
var mongoose = require('mongoose')
const cors =require('cors')
mongoose.connect('mongodb://localhost/gadget')//connect to mongos IMPONT!!

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var items = require('./routers/items')
app.use('/items',items)

var customers = require('./routers/customers')
app.use('/customers',customers)

var transactions = require('./routers/transactions')
app.use('/transactions',transactions)

app.listen(3000)
