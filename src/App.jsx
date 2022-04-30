import './App.css'
import React, { useState } from "react";
import ListOfStudents from './components/ListOfStudents';


function App() {

  const [number, setNumber] = useState(0)

  const addToNumber = () => {
    setNumber(number + 1)
  }

  const substractToNumber = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <div className="container card mb-3">
      <div className="card-body">
        <h1 className="card-title">Counter</h1>
        <h2 className="card-text">{number}</h2>
        <button className='btn btn-primary' onClick={addToNumber}>+</button>
        <button className='btn btn-danger' onClick={substractToNumber}>-</button>
        </div>
      </div>
      <div className="container card">
      <div className="card-body">

        <h1 className="card-title">Students</h1>
        <ListOfStudents className="card-text" />
        </div>
      </div>


    </div>
  )
}

export default App
