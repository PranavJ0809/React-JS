import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  // this userid variable, was introduced in "main.jsx" and hence same is being used here

  const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User