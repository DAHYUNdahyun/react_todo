import { useState, useRef } from "react"
export default function MyComponent19_1() {

  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  let countVar = 0

  const incrementState = () => {
    setCount(count + 1)
    //현재값(이전값이 출력됨)
    console.log(`State: `, count)
    console.log(`Ref: `, countRef.current)
    console.log(`Var: `, countVar)
  }

  const incrementRef = () => {
    countRef.current = countRef.current + 1
    console.log(`State: `, count)
    console.log(`Ref: `, countRef.current)
    console.log(`Var: `, countVar)
  }

  const incrementVar = () => {
    countVar = countVar + 1
    console.log(`State: `, count)
    console.log(`Ref: `, countRef.current)
    console.log(`Var: `, countVar)
  }


  return(
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={incrementState}>state 증가</button>
      <button onClick={incrementRef}>ref 증가</button>
      <button onClick={incrementVar}>var 증가</button>
    </div>
  )
}