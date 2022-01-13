const router = require ('express').Router();
const {data} = require ('../../db/db.json')

router.get('/notes', (req, res) => {
  res.send("hello")
})

module.exports = router;