const express = require("express");
const router = express.Router();
const Year = require("../Models/year.model");

// GET ALL YEARS
router.get("/", async (req, res)=>{
    try{
        const years = await Year.find();
        res.status(200).send({years})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// POST
router.post("/", async (req, res)=>{
    const year = new Year({
        year: req.body.year
    });
    try{
        const newYear = await year.save();
        res.status(201).send({ newYear });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router;