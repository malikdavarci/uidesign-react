import React from 'react'

import '../styles/allow.css'

const Allow = () => {
  return (
    <>
        <p>Allow members to</p>
        
            <label>
                <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Edit</label>

            <label>
                <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Comment</label>

    
            <label>
                <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Add members</label>
       
    </>
  )
}

export default Allow