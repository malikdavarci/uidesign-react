import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/startPage.css'

const StartPage = () => {
  return (
    <div>
      <button className="button-31">
        <Link to="/day278">Day 278</Link>
      </button>
      <button className="button-31">
        <Link to="/day1570">Day 1570</Link>
      </button>
    </div>
  )
}

export default StartPage