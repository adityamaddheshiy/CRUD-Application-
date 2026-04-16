import React from 'react'

const Update = () => {
  return (
    <div style={{border:'2px solid green ',padding:'10px'}}>
      <h1 style={{color:green}}>Update User</h1>

      <form action="">
        <label htmlFor="">
            student_roll:<input type='text'/>
        </label>
        <label htmlFor="">
            student_Name:<input type='text'/>
        </label>
        <label htmlFor="">
            Student_age:<input type='text'/>
        </label>
        <button>SAVE Data</button>
      </form>
    </div>
  )
}

export default Update
