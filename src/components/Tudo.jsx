import React from 'react'
import useFetch from '../hooks/useFetch'

function Tudo() {
    const result=useFetch('https://jsonplaceholder.typicode.com/todos')
    console.log(result);
  return (
    <>
        <h1 className='text-center text-primary'>All Tudo List</h1>
        <div className="container">
        <table className='table shadow mt-5'>
            <thead>
                <tr>
                <th>USER ID</th>
                <th> ID</th>
                <th>TITLE</th>
                <th>COMPLETED</th>
                </tr>
            </thead>
            <tbody id='row'>
              
            </tbody>
        </table>

        </div>

    </>
  )
}

export default Tudo
