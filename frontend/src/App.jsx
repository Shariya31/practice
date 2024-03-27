import React, {useState, useEffect} from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async()=>{
    const url = ' http://localhost:9900/person'
    let response = await fetch(url)
    let parsedData  = await response.json()
    // console.log(parsedData)
    setData([
      ...data,
      ...parsedData
    ])
  }

  useEffect(()=>{
    getData();
  },[])

  console.log(data)

  return (
    <div>
      {data.map((val)=>(
        <div key={val._id}>
          <h3>{val.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default App