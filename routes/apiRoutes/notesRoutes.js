const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const notes = require('../../Develop/db/db.json');


router.get('/notes', (req, res) => {
    
    
    res.json(notes);
});



router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    notes.push(req.body);

    fs.writeFileSync(
        path.join(__dirname, '../../Develop/db/db.json'),
        JSON.stringify(notes, null, 2)
    )
    res.json(req.body);
});

module.exports = router;