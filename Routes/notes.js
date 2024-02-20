const express = require('express');
const router = express.Router();
const Notes = require('../Models/notes.model');
const getNote= require('../Utils/getNote')

// GET all notes and filter based on query parameters
router.get('/', async (req, res) => {
  try {
    let query = {};
    if (req.query.teacher) {
      query.teacher = req.query.teacher;
    }
    if (req.query.subject) {
      query.subject = req.query.subject;
    }
    if (req.query.category) {
      query.category = req.query.category;
    }
    if (req.query.year){
        query.year = req.query.year;
    }
    if (req.query.title){
        query.title= req.query.title;
    }

    const notes = await Notes.find(query).sort({ date: 'desc' });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific note by ID
router.get('/:id', getNote, (req, res) => {
  res.send(res.note);
});

// POST a new note
router.post('/', async (req, res) => {
    const { title, teacher, subject, category, body, year, date } = req.body;

  if (!title || !teacher || !subject || !body) {
    return res.status(400).json({ message: 'All fields (title, teacher, subject, category, body) are required' });
  }
    const note = new Notes({
      title,
      teacher,
      subject,
      category,
      year,
      body,
      date
    });
  
    try {
      const newNote = await note.save();
      if (!newNote) {
        console.error("Error: Empty response body"); // Log error if response body is empty
        return res.status(500).json({ message: 'Empty response body' });
      }
      res.status(201).send(newNote);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE a note by ID
  router.delete('/:id', getNote, async (req, res) => {
    try {
      await res.note.remove();
      res.json({ message: 'Note deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET comments for a specific note
router.get('/:id/comments', getNote, (req, res) => {
    res.json(res.note.comments);
  });
  
  // POST a new comment for a specific note
  router.post('/:id/comments', getNote, async (req, res) => {
    const comment = req.body.comment;
  
    if (!comment) {
      return res.status(400).json({ message: 'Comment is required' });
    }
  
    try {
      res.note.comments.push(comment);
      await res.note.save();
      res.status(201).json(res.note.comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // PATCH a specific note by ID
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    try {
      const updatedNote = await Notes.findByIdAndUpdate(id, updates, { new: true });
  
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      res.json(updatedNote);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


module.exports = router;