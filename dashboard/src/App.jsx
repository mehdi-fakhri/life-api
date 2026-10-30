import {useState, useEffect} from "react";


function App () {



  const [sleep,setSleep] = useState([]);
  const [workouts,setWorkouts] = useState([]);


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





  return (
    <div >
    <h1>My Dashboard</h1>
    <p>{sleep.length} nights logged</p>
    {sleep.map((entry,index) =>(
    <p key={index}>{entry.hours} h {entry.minutes} min</p>

 ))}
      <h2>Workouts</h2>
      {workouts.map((entry, index) =>(
        <p key={index}>{entry.exercise} {entry.sets} {entry.reps}</p>
      ))}




    </div>
  );
}

  


export default App;






















