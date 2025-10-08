import { useState } from 'react'
import Auto from './Auto'
import Gomb1 from './Gomb1'
import Gomb2 from './Gomb2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='btn btn-primary'>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Gomb1></Gomb1>
        <Gomb2></Gomb2>
        <Auto color="piros" type="Jó" brand="Opel"></Auto>
        <Auto color="sárga" type="Közepes" brand="Wolkswagen"></Auto>
        <Auto color="kék" type="Rossz" brand="Renault"></Auto>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
