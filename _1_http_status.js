const express=require('express')
const app=express()

app.get('/',(re1,res)=>{
  // res.sendStatus(200) //OK
  // res.sendStatus(400) //Bad request
  // 403 : forbidden
  // 404 : not found
  // 500 : internal server error
  // 503 : service unavailable
})

app.listen(3000,()=>{
  console.log('start listening 3000')
})