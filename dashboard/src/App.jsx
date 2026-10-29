import {useState, useEffect} from "react";


function App () {



  const [sleep,setSleep] = useState([]);


useEffect(() => {
 fetch("http://localhost:3001/api/sleep")
 .then((res) => res.json())
 .then((data) => setSleep(data));
}, [])

  return (
    <div>
    <h1>My Dashboard</h1>
    <p>{sleep.length} nights logged</p>
    {sleep.map((entry,index) =>(
    <p key={index}>{entry.hours} h {entry.minutes} min</p>

  ))}
    </div>
  );

  
}

export default App;






















