import './App.css'
import Grid from './components/Grid/Grid.jsx'
function App() {
  return (
    <>
      <h1 style={{textAlign:'center',fontFamily:'sans-serif'}}>Developing Tic_Tac Game</h1>
      <Grid  numberofCards={9} />
    </>
  )
}

export default App
