import './Component.css'
import ComponentD from './ComponentD'
import { userContext } from './ComponentA'

export default function ComponentC() {

  return(
    <div className="box">
      <h1>ComponentC</h1>
      {/* <h2>{props.user}</h2> */}
      <ComponentD/>
    </div>
  )
}