const express = require('express');
const router = express.Router();
const model = require('../models/index');

router.get('/clients', (req, res) => {

    model.Client.findAll({})
        .then(client => res.json({
            clients: client
        }))
        .catch(error => res.json ({
            error: true,
            error: error
        }));

});

router.get('/client/:id', (req, res) => {

    model.Client.findByPk(req.params.id)
        .then(client => res.json ({
            client: client
        }))
        .catch(error => res.json ({
            error: true,
            error: error
        }));
});

router.post('/client', (req, res) => {

    model.Client.create({
        name: req.body.name
    })
        .then(client => res.json ({
            client: client
        }))
        .catch(error => res.json ({
            error: true,
            error: error
        }));
});

router.delete('/client/:id', (req, res) => {

    model.Client.destroy({where: {
       id: req.params.id
    }})
        .then(client => res.status(204).json ({
        }))
        .catch(error => res.status(400).json({
            error: true,
            error: error
        }));
});

router.put('/client/:id', (req, res) => {

    model.Client.update({
        name: req.body.name
    },{ where: {
        id: req.params.id
    }})
    .then(client => res.json({
        client: client
    }))
    .catch(error => res.status(500).json({
        error: true,
        error: error
    }));
});

module.exports = router;