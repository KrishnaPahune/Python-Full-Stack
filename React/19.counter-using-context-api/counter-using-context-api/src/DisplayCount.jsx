import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { countContext } from './context/CountContext'

function DisplayCount() {
    const {count} = useContext(countContext)
  return (
    <div>
        <h1>{count}</h1>
        <Button />
    </div>
  )
}

export default DisplayCount