import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>Redux Toolkit Todo</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App

// Go to "main.jsx" also,
// we also have to make a few changes there
// there, we have to import Provider and also Store