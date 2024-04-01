import { useEffect, useState } from "react"

export default function MyComponent_16_1() {
  //렌더링이 일어나서 변경이 될 때마다 화면에도 갱신되게
  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState("green")

  useEffect(() => {
    console.log('useEffect 동작!!')
    return () => {
      console.log('useEffect 정리작업!!!')
    }
  }, [count])

  function addCount() {
    setCount(count => count+1)
  }

  function subCount() {
    setCount(count => count -1)
  }

  function changeColor() {
    setColor(c => c === "green" ? "blue" : "green")
  }

  return(
    <div>
      <p style={{color : color}}>Count: {count} </p>
      <button onClick={addCount}>ADD</button>
      <button onClick={subCount}>SUB</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}