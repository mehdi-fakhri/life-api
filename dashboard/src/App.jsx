import {useState, useEffect} from "react";

function App () {



  const [sleep,setSleep] = useState([]);
  const [workouts,setWorkouts] = useState([]);
  const [books,setBooks] = useState([]);

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  

const [exercise, setExercise] = useState("");
const [sets, setSets] = useState("");
const [reps, setReps] = useState("")


const [title, setTitle] = useState("");
const [status, setStatus] = useState("");








useEffect(() => {
 fetch("http://localhost:3001/api/sleep")
 .then((res) => res.json())
 .then((data) => setSleep(data));
}, [])


useEffect(() => {
fetch("http://localhost:3001/api/workouts")
.then((res) => res.json())
.then((data) => setWorkouts(data));
}, [])


useEffect(() => {
  fetch("http://localhost:3001/api/books")
  .then((res) => res.json())
  .then((data) => setBooks(data));
  
}, [])



function logSleep(){
  fetch("http://localhost:3001/api/sleep", {
    method: "post",
    headers :{"Content-Type" : "application/json"},
    body: JSON.stringify({hours, minutes}),
  })
.then((res) => res.json())
.then((data) => setSleep([...sleep, data ]))

}

function logWorkout(){
  fetch("http://localhost:3001/api/workouts" , {
  method: "post",
  headers: {"Content-Type" : "application/json"},
  body: JSON.stringify({exercise, sets, reps})
  })

  .then((res) => res.json())
  .then((data) => setWorkouts([...workouts, data]))

}


function logBooks (){
   fetch("http://localhost:3001/api/books" , {
    method: "post",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({title, status}) 
}) 

.then((res) => res.json())
.then((data) =>setBooks ([...books, data]) )

   }



  return (
    <div >
    <h1>My Dashboard</h1>
    <h2>nights logged</h2>
    <p>{sleep.length} </p>
    {sleep.map((entry,index) =>(
    <p key={index}>{entry.hours} h {entry.minutes} min</p>

 ))}
      <h2>Workouts</h2>
      {workouts.map((entry, index) =>(
        <p key={index}>{entry.exercise} {entry.sets} {entry.reps}</p>
      ))}

      <h3>Books</h3>
      {books.map((entry, index) =>
      <p key={index}> {entry.title} title {entry.status} status</p>
      )}

 <input
    value={hours}
    onChange={(e) => setHours(e.target.value)}
    placeholder="Hours"
    />

    <input
    value={minutes}
    onChange={(e) => setMinutes(e.target.value)}
    placeholder="Minutes"
    />

    <input
    value={sets}
    onChange={(e) => setSets(e.target.value)}
    placeholder="Sets"
    />

    <input
    value={exercise}
    onChange={(e) => setExercise(e.target.value)}
    placeholder="Exercise"
    />


<input
    value={reps}
    onChange={(e) => setReps(e.target.value)}
    placeholder="Reps"
    />

    
<input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Title"
    />

    
<input
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    placeholder="Status"
    />


   
    
<button onClick={logSleep}>Log sleep</button>       
<button onClick={logWorkout}>Log workout</button>      
<button onClick={logBooks}>Log book</button>      




    </div>
  );
}

  


export default App;






















