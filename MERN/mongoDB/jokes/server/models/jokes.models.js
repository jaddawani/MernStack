const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    name: String,
    age: Number
});
 
const joke = mongoose.model('joke', JokeSchema);
 
module.exports = joke;