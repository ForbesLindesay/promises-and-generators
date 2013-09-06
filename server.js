'use strict'

var jade = require('transform')('jade')
var express = require('express')
var app = express()

app.get('/', jade('./index.jade'))
app.use(express.static(__dirname))

app.listen(3000)