'use strict'

const express = require('express')
const router = express.Router()
const ctrl = require('./home.ctrl')

router.get('/', ctrl.home)

router.get('/login', ctrl.login)

// app.js 에서 사용할수있게 외부로 내보내기
module.exports = router;