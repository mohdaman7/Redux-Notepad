import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const notes = useSelector((state)=>state.notes)

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className='className="text-lg font-bold"'>NotePad</h1>
      <Link className="mr-4 hover:underline" to="/">Home</Link>
      <Link className="mr-4 hover:underline" to="/create">Create Note</Link>
      <span>Count : {notes.length}</span>
    </nav>
  )
}

export default Navbar
