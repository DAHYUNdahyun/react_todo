import { useContext } from 'react'
import './Component.css'
import { userContext } from './ComponentA'

export default function ComponentD() {
  const user = useContext(userContext)
  return(
    <div className="box">
      <h1>ComponentD</h1>
      {/* <h2>{props.user}</h2> */}
      <h2>{user}</h2>
    </div>
  )
}