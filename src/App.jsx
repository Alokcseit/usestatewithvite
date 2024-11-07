import { useState } from 'react'
function App() {
  const[name,setName]=useState([])
  const[currentname,setcurrentname]=useState("")

  const onchangeHandler=(e)=>{
   setcurrentname(e.target.value)
  }
  const Setnewname=()=>{
     setName(prev=>[...prev,currentname])
     setcurrentname("")
  }
  console.log(name)
  return (
    <>
       <input type='text' value={currentname} placeholder='enter your name' onChange={onchangeHandler} />
       <button onClick={Setnewname} >Add Name</button>
       <p>Name are</p>
       <ul>
        {
        name.map(names=>(<li>{names}</li>))
        }
       </ul>
    </>
  )
}

export default App
