import React from 'react'

const View = () => {
  return (
    <div style={{border:'2px solid red', padding:'10px' }}>
      <h1 style={{color:'green'}}> Show Data</h1>

      <table style={{border:'2px solid red ', background:'greenyellow', width:'100%'}}>
        <tr>
            <th>Student_roll </th>
            <th>Student_Name </th>
            <th>Student_Age </th>
        </tr>
      </table>
    </div>
  )
}

export default View
