import React from 'react'
import CompB from './CompB'
import { createContext } from 'react'

export const FirstName = createContext();
const CompA = () => {
  return (
    <div>
        <CompB/>
    </div>
  )
}

export default CompA
