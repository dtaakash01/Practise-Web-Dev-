
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser({urlencoded:true}));

app.get('/', function (req, res){
  res.sendFile(__dirname +"/bmiCalculator.html");
})

app.post('/bmiCalculator.html', function (req, res){
  var num1  = Number(req.body.weight);
  var num2 = Number(req.body.height);

  res.send("Your bmi is");
})


app.listen(3000, function (){
  console.log("Server has started");
})
