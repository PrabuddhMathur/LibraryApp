// Importing express module
const express = require("express");

// Creating a new router handler for the books page
const booksRouter = express.Router();

const Bookdata = require("../model/Bookdata");
// We have to create a called function for catching it from the calling function.
function router(nav){
    // Using the booksRouter
    booksRouter.get('/', function(req, res){
        Bookdata.find()
        .then(function(books){
            res.render('books',{
                nav,
                title:'Books',
                books
            });
        })
    });
    
    booksRouter.get('/:id', function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title: book.title,
                book
            });
        })
    });

    return booksRouter;
}


module.exports = router;