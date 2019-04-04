const express = require('express');
const router = express.Router();
const model = require('../models/index');

router.get('/books', (req, res) => {

	model.Product.findAll({})
		.then(product => res.json({
			products: product
		}))
		.catch(error => res.json({
			error: true,
			error: error
		}));
});

router.get('/book/:id', (req, res) => {

    model.Product.findByPk(req.params.id)
        .then(book => res.json({
            book: book
        }))
        .catch(error => res.json({
            error: true,
            error:error
        }));
});

router.delete('/book/:id', (req, res) => {

    const bookId = req.params.id;

    model.Product.destroy({where: {
        id: bookId
    }})
        .then(book => res.json({
            response: 'Success'
         }))
         .catch(error => res.json ({
            error: true,
            error: error
         }));
});

router.post('/book', (req, res) => {

    model.Product.create({
        name: req.body.name,
        category: req.body.category,
        value: req.body.value
    })
        .then(book => res.status(201).json({
            book: book
        }))
        .catch(error => res.status(500).json({
            error: true,
            error: error
        }));
});

router.put('/book/:id', (req, res) => {

    model.Product.update({
        name: req.body.name,
        category: req.body.category,
        value: req.body.value
    }, {
        where: {
            id: req.params.id
        }
   })
   .then(product => res.json ({
        book: product
    }))
    .catch(error => res.json({
        error: true,
        error: error
        }));
});

module.exports = router;