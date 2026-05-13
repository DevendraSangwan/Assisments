import React from 'react';
import "./App.css";
import StudentCard  from './StudentCard';

function App(){
  return (
    <div className="App"> 
  <StudentCard 
   name="Rinki"
   course="BCA"
   roll="101"
   />
<StudentCard
   name="Rinku"
   course="MCA"
   roll="102"
   />
   
   <StudentCard
   name="Rinku"
   course="MCA"
   roll="102"
   />
   
</div>


  )
}
export default App;