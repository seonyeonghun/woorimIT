'use strict'

// 모듈 최적화
const app = require('../app')
const port = 3000
app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})