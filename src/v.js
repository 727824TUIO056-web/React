import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [c100, setC100] = useState(100)

  useEffect(() => {
    console.log(`Count has changed to: ${count}`)
  }, [count])

  useEffect(() => {
    console.log(`Above 100 Count has changed to: ${c100}`)
  }, [c100])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h1>Above 100: {c100}</h1>
      <button onClick={() => setC100(c100 + 1)}>Increment</button>
    </div>
  )
}

export default App
 