import React from 'react'

const Delete = () => {
  return (
    <div style={{border:'2px solid green',padding:'10px'}}>
      <h1 style={{color:'green'}}>Delete USERs</h1>

      <form action="">
        <label htmlFor="">
            student_roll:<input type='text'/>
            <button>Delete Users</button>
        </label>
      </form>
    </div>
  )
}

export default Delete
