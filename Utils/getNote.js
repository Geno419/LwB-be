const Notes= require ("../Models/notes.model")

async function getNote(req, res, next) {
    let note;
    try {
      note = await Notes.findById(req.params.id);
      if (note == null) {
        return res.status(404).json({ message: 'Cannot find note' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.note = note;
    next();
    return res.note;
  }

  module.exports= getNote;