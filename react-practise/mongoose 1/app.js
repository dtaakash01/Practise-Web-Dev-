const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


const animalSchema = new mongoose.Schema({
  name: String,
  age: Number,
  legs: Number
})

const Animal = mongoose.model("Animal", animalSchema);

const animal = new Animal ({
  name: "Dog",
  age: 8,
  legs: 2
})

animal.save();
