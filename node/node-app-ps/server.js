const express =  require('express');
const path = require

const app = express();

app.get('', (req,res) => {
 

    res.send('<h1>Hello</h1>');
})

app.listen(3000, (req,res) => {
    console.log("Server on 3000");
})