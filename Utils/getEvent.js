const Event = require("../Models/event.model");

async function getEvent(req, res, next) {
  let event;
  const eventId = req.params.id;

  try {
    event = await Event.findById(eventId);
    if (event === null) {
      return res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  res.event = event;
  next();
  return res.event;
}

module.exports = { getEvent };
