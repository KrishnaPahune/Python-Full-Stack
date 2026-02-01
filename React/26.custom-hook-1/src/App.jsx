import React from 'react'
import useWindowWidth from './useWindowWidth'

function App() {
  const windowWidth = useWindowWidth()
  return (
    <div>
      <h1>Custom window resize hook</h1>
      <h2>Window Width: {windowWidth}</h2>
    </div>
  )
}

export default App
