import { useState } from 'react'
import Auto from './Auto'
import Dealer from './Dealer'
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
        <Dealer name="Lajos" location="Gyöngyös" zip={4}></Dealer>
        <Dealer name="Józsika" location="Budapest" zip={10}></Dealer>
      </div>
    </>
  )
}

export default App
