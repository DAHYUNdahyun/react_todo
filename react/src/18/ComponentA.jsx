import { createContext, useState } from 'react'
import './Component.css'
import ComponentB from './ComponentB'

export const userContext = createContext()

export default function ComponentA() {
  const [user, setUser] = useState("Guest")
  return(
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>

      <userContext.Provider value={user}>
        <ComponentB />
      </userContext.Provider>
     
    </div>
  )
}