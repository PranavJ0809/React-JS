import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// IMP
// we have created a separate folder -> components -> where we have a created a file Card.jsx
// this file a common outlet or code for a code -> which can be reused -> used in concept of props 
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-4 text-3xl font-bold underline '>
      Hello world!
    </h1>

    <Card username="chaiaurcode" btnText="click me" />
    <Card username="hitesh" />
    <Card username= {newArr[0]} btnText = "I am an array value" /> 
    {/* <Card username="chaii" someObj = {myObj} />  */}
    {/* <Card username="chaii" someObj = {newArr} />  */}

    </>
  )
}

export default App
