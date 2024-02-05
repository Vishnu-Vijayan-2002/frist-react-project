import React from 'react'
import User from './User'

function Sample() {
    const handleSubmit=()=>{
        alert('Please Enter Username!!!!!')
    }
    const handleGetName=(event)=>{
        console.log(event.target.value);
    }
    const data="Message from parent(sample)"
    
  return (
    <>
      <h2>Inside Sample Components</h2>
      <label style={{margin:'20px'}} htmlFor="uname">Username:
      <input type="text" id='uname' onChange={(event)=>handleGetName(event)} />
      </label>
      <button onClick={handleSubmit} className="btn btn-primary">Sumit</button>
      <User shear={data}/>
    </>
  )
}

export default Sample
