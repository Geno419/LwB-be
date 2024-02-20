const Quiz = require("../Models/quiz.model");

async function getQuizById(req, res, next){
    let quiz;

    try{
        quiz = await Quiz.findById(req.params.id);
        if(quiz === null){
            return res.status(404).json({message: "Can't find quiz"});
        }
    }catch(err){
        console.error(err);
    }
    res.quiz = quiz;
    next();
    return res.quiz;
}
module.exports = { getQuizById };