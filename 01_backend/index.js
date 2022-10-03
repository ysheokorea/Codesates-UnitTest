const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res)=>{
    res.json("hello world");
})

app.post('/', (req, res)=>{
    const data = req.body;
    res.json(data);
})

app.listen(9991, ()=>{
    console.log('server is listening on 9991');
})

module.exports = app;