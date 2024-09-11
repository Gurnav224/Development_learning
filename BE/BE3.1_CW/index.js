const express = require('express');

const app = express();



app.get('/',(req , res)=>{
    res.send('Hello , Express')
})


app.get('/about',(req , res)=>{
    res.send('This is about page')
})


app.get('/contact',(req , res)=>{
    res.send('contact us at contact@example.com')
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})