import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import arrayElements from './index.jsx'

function App() {
  const persons =[
    {
      name : "Viktor",
      age : 23,
      hobbies : ["Swimming", "Shopping","Playing Games","Feeding squirrels"],
      bio : " Viktor is a sweet, caring person who's always available for his friends and families."
    },
    {
      name: "Danny",
      age : 24,
      hobbies :["Painting","Swimming", "Singing","Architecture"],
      bio : "Danny is a lovely individual with a perseverance to accomplish higher goals in life.",
    },
    {
      name: "CJ",
      age : 25,
      hobbies : ["Coding","Traveling","Playing Basketball", "Sports"],
      bio : "CJ is an extremely passionate person who loves sports and gym."
    },
  ];
 const eachPerson = persons.map(arrayElements);
  return (
    <>
     <div className="container">
      <div className="nav">
        <h1>ABOUT</h1>
        <h1>SHOP</h1>
        <h1>SALE</h1>
        <h1>CONTACT</h1>
      </div>
      <div className="section">
      <p>Let's Get To Know Our Friends</p>
      </div>
      <div className="main">{eachPerson}</div>
     </div>
    </>
  )
}

export default App
