const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

//to get a new note
router.get('/fetchdata',fetchuser , async (req, res)=>  {
    try {
        const notes = await Notes.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

});

//to add a new note
router.post('/adddata',fetchuser ,[ 
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('description', 'Enter a valid email').isLength({ min: 3 }),
] , async (req, res)=>  {

    try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { name , description} = req.body;

    const note = new Notes({
        name, description, user: req.user.id
    });
    const savednotes = await note.save();

    res.json(savednotes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
});

//to update a note

router.put('/updatenote/:id',fetchuser , async (req, res)=>  {
    const {name, description} = req.body;

    try {
        const newnote = {};
        if(name){newnote.name = name};
        if(description){newnote.description = description};

        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")};

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newnote}, {new: true});
        res.json({note});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
});

//to delete a note

router.delete('/deletenote/:id',fetchuser , async (req, res)=>  {

    try{
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")};

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({"Success": "Note has been deleted", note: note});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
});

module.exports = router;