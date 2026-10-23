
import express from "express";


const app = express();


app.get("/api", (req, res)=> {
res.json({message: "API is running"})
 });




app.listen(3001, () => {
console.log("API is running in http://localhost:3001");
});

