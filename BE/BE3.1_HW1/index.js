const express = require('express');

const app = express();



app.get('/',(req , res)=>{
    res.send('Hello , Express')
})


app.get('/products',(req , res)=>{
    res.send('Browse our products here')
})


app.get('/services',(req , res)=>{
    res.send('Explore our Services')
})

app.get('/faq',(req,res)=>{
    res.send('Frequently Asked Questions.')
})


app.get('/gallery', (req, res)=>{
    res.send('View our gallery.')
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})