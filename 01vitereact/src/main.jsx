import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
  return(
    <div>
    <h1>Custom App !!!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " chai aur react"
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to go to GOOGLE',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <MyApp /> 

    <App /> 

    // anotherElement

    // reactElement

  // </StrictMode>,
)
