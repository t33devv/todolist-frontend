import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar.jsx'
import TodoList from './components/TodoMain.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <TodoList />
    </>
  )
}

export default App
