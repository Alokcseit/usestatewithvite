import { useState } from 'react'
function App() {
 
 const[name,setName]=useState("")
 const[namelist,setNamelist]=useState([])
 const[error,setError]=useState("")
 const onchangeHandler=(e)=>{
  setName(e.target.value)
  setError("")
 }
 const onclickHandler=()=>{
  if(name.trim()==="")
  {
   setError("please enter a name")
  }
  else{
    setNamelist(prev=>[...prev,name])
    setName("")
  }
 }
 const ondeletehandler=(deletedItem)=>{
  setNamelist(namelist.filter((item)=>item!==deletedItem))
 }
 return (
  <>
    <input type="text" value={name} placeholder='Enter your name' 
     onChange={onchangeHandler}/>
    <button onClick={onclickHandler}>Add Name</button>
    {error??<p style={{color:'aqua'}}>{error}</p>}
    <p>hello {name}</p>
    {
      namelist.map((item)=>{
       return (
        <div style={{display:'flex',flexDirection:'row'}}>
        <h3>{item}</h3>
        <button onClick={()=>ondeletehandler(item)}>delete name</button>
        </div>
        
       )
      })
    }
  </>
 ) 
}

export default App
