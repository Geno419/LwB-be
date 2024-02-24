const express = require("express");
const router = express.Router();
const Event = require("../Models/event.model");
const { getEvent } = require("../Utils/getEvent");

router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send({ events });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const event = new Event({
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
    url: req.body.url,
  });
  try {
    const newEvent = await event.save();
    res.status(201).send({ newEvent: newEvent });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.patch("/:id", getEvent, async (req, res) => {
  if (req.body.title != null) {
    res.event.title = req.body.title;
  }
  if (req.body.start != null) {
    res.event.start = req.body.start;
  }
  if (req.body.end != null) {
    res.event.end = req.body.end;
  }
  if (req.body.url != null) {
    res.event.url = req.body.url;
  }

  try {
    const updatedEvent = await res.event.save();
    res.status(200).send({ updatedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.delete("/:id", getEvent, async (req, res) => {
  try {
    await res.event.deleteOne();
    res.status(200).send({ message: "Delete successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
