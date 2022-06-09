const mongoose = require('mongoose'); //importing mongoose module
mongoose.connect('mongodb://localhost:27017/library') //connecting to the database using localhost and port number and creating a new database named library
const Schema = mongoose.Schema; //accessing Schema from mongoose module

// Creating Schema for the database
const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

// To use the Schema definition, we have to convert BookSchema into a model.
// Instance of a model is called Document

// Creating the model //Bookdata variable contains the collection name that we are going to add into the database.
var Bookdata = mongoose.model('bookData',BookSchema); //the first argument is the name of the collection we want to give into the database and the second is the Schema that we are going to use. // the collection name will automatically turn into a plural form by mongodb in the database.

module.exports = Bookdata;