import React from 'react'
import '../styles/day278.css'
import Close from '../components/icons/Close'
import AddMembers from '../components/AddMembers'
import { Link } from 'react-router-dom'



const Day278 = () => {
  return (
    <div className='container'>
        <div className="main">
            <Link className='close-tag' to="/"><Close /></Link>
            <AddMembers />
        </div>
    </div>
  )
}

export default Day278