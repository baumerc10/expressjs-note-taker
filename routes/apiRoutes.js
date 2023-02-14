const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');
const app = express();

// GET
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw (err);
        let note = JSON.parse(data);
        res.json(note);
    })
});

// POST
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err) => {
        if (err) throw (err);
        let newNote = {
            text: req.body.text,
            title: req.body.title
        };
    db.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => res.json(db));
    })
}
);

// Bonus


module.exports = app;