
import express from "express";

import fs from "fs";


const app = express();
app.use(express.json());

// load sleep
const sleepLog = fs.existsSync("data.json") 
? JSON.parse(fs.readFileSync("data.json"))
: [];

//load workouts
const workoutLog = fs.existsSync("workouts.json") 
? JSON.parse(fs.readFileSync("workouts.json"))
: [];


// check api
app.get("/api", (req, res)=> {
    res.json({message: "API is running"})
    });


// get sleep
app.get("/api/sleep", (req, res)=> {

    res.json(sleepLog)
 });


// add sleep
 app.post("/api/sleep", (req,res) => {
    const entry = { hours: req.body.hours, minutes: req.body.minutes };
    sleepLog.push(entry);
    fs.writeFileSync("data.json",JSON.stringify(sleepLog));
    res.json(entry);


 });
// get workout
 app.get("/api/workouts", (req, res) => {
   res.json(workoutLog)
 });

 // add workout
 app.post("/api/workouts", (req, res)=>{
   const entry = {exercise : req.body.exercise, sets : req.body.sets, reps : req.body.reps};
   workoutLog.push(entry);
   fs.writeFileSync("workouts.json", JSON.stringify(workoutLog));
   res.json(entry);

 })

// server start
app.listen(3001, () => {
console.log("API is running in http://localhost:3001");
});

