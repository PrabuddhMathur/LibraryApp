// Importing express module
const express = require("express");

// Creating an instance of it by calling the express function.
const app = express();

// Create the nav array to make use of it globally later. Also we have to make sure to create this before passing it to any router files.
const nav = [
    {
        link:'/books', name:'Books'
    },
    {
        link:'/authors', name: 'Authors'
    },
    {
        link:'/admin', name: 'Add Book'
    }
]

// Importing the modules from the bookRoutes file to make it work here.
const booksRouter = require("./src/routes/bookRoutes")(nav); //passing nav to bookRoutes.js

// Importing the modules from the adminRoutes file to make it work here.
const adminRouter = require("./src/routes/adminRoutes")(nav); //pasing nav to adminRoutes.js

app.use(express.urlencoded({extended:true})); //Defining the middleware to access the post request
app.use(express.static("./public")) //The static files, i.e., the css or the js files are not active from default in express. We have to explicitly use it using this function, in order for them to work.

// Template engine are used to easily embed js and html files together,i.e., software to combine templates with a data model to produce result documents.
// Setting up Template Engine to ejs
app.set('view engine','ejs'); //The first argument is 'view engine' to set the 'view engine' and the next is the name of the template engine which we are going to use, in this case 'ejs'.


app.set('views', __dirname+'/src/views'); // Secondly, setting up the path of all files that is being visible to the users upon request.


app.use('/books', booksRouter); // This is to tell the server whenever there is a request is made for books, it has to use booksRouter Router.

app.use('/admin', adminRouter); // To tell server whenever a request has been made for /author it has to use adminRouter for the action

// using .get keyword it is responding with the output.
app.get('/', function(req,res){
    // .sendFile() is used to send any file as response.
    // res.sendFile(__dirname+"/src/views/index.html");

    // .render() is used to send file off of the template engine.
    // here we have to mention only the name of file because the path is already been defined above.
    res.render('index',
    {
        nav,
        title:'Library'
    }); 
});

// To create a port for the webserver to show output to.
app.listen(5000);