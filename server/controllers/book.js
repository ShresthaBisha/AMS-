const Book = require('../models/book');

// std js with tab index of 4

// add async
exports.book_create = async (req,res)=>{
    const { error, value: bookReq } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const {name} = bookReq
    let book= await Book.findOne({name}) // change to ISBN later ex: ISBN uniq <- given ISBN
    if (book) return res.status(400).send("Book already exists")
    book= new Book({bookReq});
    
    await book.save()
    res.send(book)
};

exports.book_list=(req,res)=>{
    Book.find((err,book)=>{
        if(err) return next(err);
        res.send(book)
    })
};

exports.book_details=async (req,res)=>{
/*
    Book.findById(req.params.id,(err,book)=>{
        if(err) return next(err);
        res.send(book.toJSON())
    })
*/
    const book=await Book.findById(req.params.id)
    if(!book) return res.status(400).send("Book not found")
    res.send(book)
};

exports.book_update=async (req,res)=>{
    const {error,value : bookReq}=validate(req.body)
    if (error) res.status(400).send(error.details[0].message)

    await Book.findByIdAndUpdate(req.params.id,{$set:bookReq},(err,book)=>{
        if(err) return next(err);
        res.send(book.toJSON())
    })
}

exports.book_delete=(req,res)=>{
    Book.findByIdAndRemove(req.params.id,(err,book)=>{
        if(err) return next(err);
        res.send(book.toJSON())
    })
}