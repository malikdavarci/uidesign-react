import React from 'react'
import '../styles/person.css'
import PersonPic from '../assets/EllipsePic.svg'
import Map from '../assets/map.svg'

import Links from './Links'


const Person = () => {
  return (
    <>
    <div className='person'>
        <div className="personInfo">
            <img className="personInfoPic" src={PersonPic} alt="Personal Picture" />
            <div className="personInfoLoc">
                <h3>Debra Stephens</h3>
                <div className="personInfoLocImg">
                    <img src={Map} alt="map" />
                    <p>Minneapolis, MN, USA</p>
                </div>
            </div>
        </div>
        <Links />
    </div>
    
    </>
  )
}

export default Person