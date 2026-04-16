import React from 'react'
import APPs from './components/Add'
import Update from './components/Update'
import Delete from './components/Delete'
import View from './components/View'

const App = () => {
  return (
    <div style={{border:'7px solid red', padding:'15px', margin:'15px', background:'lightyellow'}}>
      <h1 style={{color:'red', }}>CRUD Function App</h1>

      <App/>
      <Update/>
      <Delete/>
      <View/>

    </div>
  )
}

export default App
