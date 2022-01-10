const router = require('express').Router();
const path = require ('path');
const fs = require ('fs');
const dataFile = require('../../db/db.json');
// const { getNotes, saveNote, deleteNote } = require ('../../Develop/public/assets/js/index')

// Pull from db.json
router.get("/notes", function (req, res) {
  let notes = dataFile;
  console.log(`${req.method} received. This is Notes.`)
  res.json(notes)
})


// post to db.json
router.post("/notes", function (req, res) {

  // fs.writeFile('../../db/db.json',(err, data) => {
  //   if (err) throw err;
  
    let notes = JSON.stringify(req.body)
    console.log(`${req.method} received. This is Notes.`, notes)
    res.json(notes)
  })
  // });


module.exports = router;