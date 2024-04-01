import './Component.css'
import ComponentC from './ComponentC'

export default function ComponentB(userContext) {
  return(
    <div className="box">
      <h1>ComponentB</h1>
      {/* <h2>{props.user}</h2> */}
      <ComponentC />
    </div>
  )
}