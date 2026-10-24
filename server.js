
import express from "express";


const app = express();
app.use(express.json());

const sleepLog = [];


app.get("/api", (req, res)=> {
    res.json({message: "API is running"})
    });

    app.get("/api/sleep", (req, res)=> {

    res.json(sleepLog)
 });

 app.post("/api/sleep", (req,res) => {
    const entry = { hours: req.body.hours, minutes: req.body.minutes };
    sleepLog.push(entry);
    res.json(entry);


 });


app.listen(3001, () => {
console.log("API is running in http://localhost:3001");
});

