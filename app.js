'use strict'

const express = require('express')
const app = express()
const port = 3000

// 앱 세팅
app.set('views', './views')
app.set('view engine', 'ejs')

// 미들웨어 사용
const home = require('./routes/home')
app.use('/', home)

app.get('/',(req,res)=>{
    res.render('home/index')
})

app.get('/login', (req,res)=>{
    res.render('home/login')
})

module.exports = app;
