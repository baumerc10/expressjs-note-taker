const router = require('express').Router();
const dataStore = require('../db/dataStore');

// GET
router.get('/notes', function(req, res) {
    dataStore
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST
router.post('/notes', function(req, res) {
    dataStore  
        .addNote(req.body)
        .then((notes) => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// Bonus


module.exports = router;