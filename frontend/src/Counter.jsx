import React,{useState, useEffect} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = ()=>{
      setCounter((prev)=>{
        console.log(prev)
       return(
        prev+1
       )
      })
    }
  
    const makingError = ()=>{
      if(counter>3){
        throw new Error('Something went wrong')
      }
    }
  
    useEffect(()=>{
      makingError()
    },[counter])
  
    return (
      <>
     
  
      <div>{counter}</div>
     
      <button onClick={handleClick}>Add</button>
      </>
    )
}

export default Counter