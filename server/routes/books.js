const express = require('express')

const router = express.Router()
const { User } = require('../models/book.model')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const book_controller= require('../controllers/book')

router.post('/create', book_controller.book_create);
router.get('/:id',book_controller.book_details);
router.put('/:id/update',book_controller.book_update);
router.delete('/:id/delete',book_controller.book_delete);
router.get('/',[auth, librarian], book_controller.book_list);

// router.get('/lend', [middlware], ...)

router.post('/', async (req, res) => {
 

    const { name,subtitle,description,author } = req.body  
    // pass bookReq <- will contain all validated fields
 //book_controller.book_delete

 // whether we are going to response from route or controller
})
    
/*
router.post('/', async (req, res) => {
  //  const { error, value: userReq } = validate(req.body)
  // if (error) res.status(400).send(error.details[0].message)

    const { name,subtitle,description,author } = req.body  

    res.send(name,subtitle,description,author)
})

router.get('/', async (req, res) => {
  //  const { error, value: userReq } = validate(req.body)
  // if (error) res.status(400).send(error.details[0].message)
    res.send("All Books")
})
*/
module.exports = router