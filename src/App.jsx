import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar.jsx'
import TodoList from './components/TodoMain.jsx'
import TodoItems from './components/TodoItems.jsx'

function App() {

  return (
    <>
      <NavBar />
      <TodoList />
      <TodoItems />
    </>
  )
}

export default App
