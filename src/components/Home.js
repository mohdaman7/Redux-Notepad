import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const notes = useSelector((state)=>state.notes)

  return (
    <div className='p-4'>
      <h2 className="text-2xl font-semibold mb-4">Notes</h2>
      <ul className='space-y-4'>
        {notes.map((note,index)=>(
            <li key={index} className={`p-4 rounded shadow-md`} style={{backgroundColor:note.color}}>
                <h3 className="text-lg font-bold">{note.title}</h3>
                <p>{note.description}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
