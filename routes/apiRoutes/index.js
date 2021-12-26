const router = require('express').Router();
const { db } = require('../../Develop/db/db.json')

router.get('/api/notes', (req, res) => {
    let results = zookeepers;
    if (req.query) {
        results = filterByQuery(req.query, results);
      }
    res.json(results);
  });

module.exports = router;