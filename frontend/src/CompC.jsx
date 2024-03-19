import React from 'react'
import { useContext } from 'react'
import { FirstName } from './CompA'
const CompC = () => {
  const {name, id} = useContext(FirstName)
  return (
    <div>CompC {name} {id}</div>
  )
}

export default CompC