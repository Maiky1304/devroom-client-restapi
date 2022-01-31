const express = require('express');
const router = express.Router();
const ClientModel = require('./models/Client');

router.get('/', (req, res) => {
    ClientModel.find().exec().then(clients => res.status(200).json(clients));
});

router.post('/', (req, res) => {
    ClientModel.create(req.body).then(obj => res.status(201).json(obj));
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    const client = await ClientModel.findById(id);

    if (!client) {
        res.status(404).end();
        return;
    }

    ClientModel.updateOne({ id: client.id }, req.body).then((obj) => res.status(200).json(obj));
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const client = await ClientModel.findById(id);

    if (!client) {
        res.status(404).end();
        return;
    }

    ClientModel.deleteOne({ id: client.id }).then((obj) => res.status(200).json(obj));
});

module.exports = router;