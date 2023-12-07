import React from 'react'
import '../styles/day278.css'
import Close from '../components/icons/Close'
import AddMembers from '../components/AddMembers'



const Day278 = () => {
  return (
    <div className='container'>
        <div className="main">
           {/* <button className='close-tag'><Close /></button>  */}
            <div className='close-tag'><Close /></div>
            <AddMembers />
        </div>
    </div>
  )
}

export default Day278