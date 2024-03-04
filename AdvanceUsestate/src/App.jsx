import { useState } from 'react'
import './App.css'
function App() {

  const [data,setData] = useState(0);
  return (
    <>
      <div className="header">
        <h1>Advance UseState</h1>
        <p>What “batching” is and how React uses it to process multiple state updates
          How to apply several updates to the same state variable in a row</p>
      </div>

      {/* Here we are defining a btn and inside that button we try to increment the number by 3 on sigle click but we can observe that it get increment only by one. Why this happens? */}
      {/* <div className="btn">
        {data}
        <button onClick={()=>{
          setData(data+1)
          setData(data+1)
          setData(data+1)
        }}>Inc by 3</button>
      </div> */}
      {/* In order to increment the value by 3 we can use callback functions. */}
      <div className="btn">
        {data}
        <button onClick={()=>{
          setData(data => data+1)
          setData(data => data+1)
          setData(data => data+1)
        }}>Inc by 3</button>
      </div>
    </>
  )
}
onabort
export default App
