import React from 'react'

const ComponentA = ({data,setCount}) => {
  return (
    <div>ComponentA {data}
    
    <button onClick={()=>setCount((prev)=>prev+1)}>Update</button>
    </div>
  )
}

export default ComponentA