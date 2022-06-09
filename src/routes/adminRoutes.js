const express = require('express');
const adminRouter = express.Router();
const Bookdata = require("../model/Bookdata");

function router(nav){
    // Using the booksRouter
    adminRouter.get('/', function(req, res){
        res.render('addBook',{
            nav,
            title:'Add Book',
        })
    });

    adminRouter.post('/add',function(req, res){
        var item = {
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.body.image
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });

    return adminRouter
}
module.exports = router;