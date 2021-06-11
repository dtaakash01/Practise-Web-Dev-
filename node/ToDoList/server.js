const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

var items = [];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res){

  day = date();

  res.render('index', {listTitle: day, newListItems: items});


})


app.post('/', function(req,res){
  var toDo = req.body.toDolist;



  if(req.body.list === "Work" && toDo != ""){
    workItems.push(toDo);
    res.redirect('/work');
  }
  else{
    if(toDo != ""){
      items.push(toDo);
      res.redirect('/');
    }
  }

})

app.get('/work', function(req, res){
  res.render("index", {listTitle: "Work", newListItems: workItems});
})




app.listen(8080, function(){
  console.log("Server Hosted");
})
