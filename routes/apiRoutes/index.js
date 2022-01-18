const router = require('express').Router();
const notes = require('../../db/db.json');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    const response = {
      status: 'success',
      body: newNote,
    };

    notes.push(newNote);

    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(notes, null, 2)
    );

    res.json(notes);
 
  } else {
    res.json('Error in posting note.');
  }
});

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  
  const updatedNotes = notes.filter(note=> note.id != id)
  console.log (updatedNotes)

  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(updatedNotes, null, 2)
  );
 
  }
);




module.exports = router;