import { useState } from 'react'
import Temp from './Temp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Temp />
      <Temp />
      <Temp />
      <Temp />
    </div>
  
  )
}

export default App;
