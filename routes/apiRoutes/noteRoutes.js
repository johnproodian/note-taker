const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    
    notes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify({ notes }, null, 2)
    );
    res.json(notes);
});

// router.delete('/notes/:id', (req, res) => {

// })

module.exports = router;