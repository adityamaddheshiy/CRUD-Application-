import React from 'react'

function Add() {
  return (
    <div style={{border:'2px solid green',padding:'10px'}}>
        <h1>Create User</h1>

        <form action="">
          <label htmlFor="">
            Student_Name:<input type='text'/>
          </label>
          <label htmlFor="">
            Student_age:<input type='text'/>
          </label>
          <button>Save</button>
        </form>
      
    </div>
  )
}

export default Add
