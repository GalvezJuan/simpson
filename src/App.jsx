import { useState } from 'react'
import './App.css'
import { Search } from './Components/Search'
import { Peticion } from './Components/Peticion'

function App() {
  const [count, setCount] = useState("")

  return (
    <>
      <h1>Los Simpsons</h1>
      <Search search={setCount}/>
      <Peticion pet={count}/>
    </>
  )
}

export default App
