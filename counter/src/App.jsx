import { useState } from "react";

function App(){
  const[count,setCount]=useState(0);
  function increment(){
    if(count<25){
    setCount(count+5);
  }}
  function decrement(){
    if(count>0){
          setCount(count-5);
        }
  }
  return(
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {count === 25 && <p>Maximum Limit Reached</p>}
     
    </div>
  )
}

export default App;