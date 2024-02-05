import React from 'react'

function User({shear}) {
    const handleShow=(data)=>{
        alert(`${data},
        Message${shear}`)
      }
  return (
    <>
     <h3>Inside User Compontents</h3> 
      <button onClick={()=>handleShow("This is vishnu")} className='btn btn-success'>Show</button>
    </>
  )
}

export default User
