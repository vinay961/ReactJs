
// import { useState } from "react"

// function App() {
//   let [x,setx] = useState(0);
//   return (
//     <>
//       Count: {x} is {(x%2 == 0) ? 'Even' : 'Odd'}
//       <button onClick={()=>{setx(x+=1)}}>Inc</button>
//       <button onClick={()=>{setx(x-=1)}}>Dec</button>
//     </>
//   )
// }


import { useState } from "react"
// import Image from './Image.jsx'

function App() {
  let [todos , setTodo] = useState(['todo1','todo2']);
  return (
    <>
      {/* {todos.map((todo) => { return <li>{todo}</li> })}
      <button onClick={() => {setTodo([...todos,'todo3'])}}>Click</button> */}
      {/* <Image src="https://www.bing.com/th?id=OIP.iAhcp6m_91O-ClK79h8EQQHaFj&w=127&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" height={100} width={100} /> */}

      {todos.map((t,index)=>{return <li key={index}>{t}</li> })}


    </>
  )
}
export default App
