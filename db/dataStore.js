const fs = require('fs');
const util = require('util');
const express = require('express');

const app = express();

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class Store {
    read() {
        return readNote(path.join(__dirname, "db.json"), "utf8");
    };

    write(note) {
        return writeNote(path.join(__dirname, "db.json"), JSON.stringify(note));
    };

    getNotes() {
        return this.read().then(notes => {
            let parsedNotes = JSON.parse(notes);
            return parsedNotes;
        });
    };

    addNote(newNote) {
        return this.getNotes().then(notes => {
            const newNoteArr = [...notes, newNote];
            console.log(newNoteArr);
            return this.write(newNoteArr);
        });
    };
};

module.exports = new Store();