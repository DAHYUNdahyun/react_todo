import { useEffect, useRef } from "react"

export default function MyComponent19_3() {

  const inputRef = useRef()

  useEffect(() => {
    console.log(inputRef)
    inputRef.current.focus()
  }, [])

  const login = () => {
    alert(`Hello! ${inputRef.current.value}~`)
    inputRef.current.value=""
    inputRef.current.focus()
  }

  const handleOnKeyUp = (e) => {
    if(e.key == 'Enter'){
      login()
    }
  }

  return(
    <div>
      <input type="text" placeholder="username" ref={inputRef} onKeyUp={handleOnKeyUp}/>
      <button onClick={login}>로그인</button>
    </div>
  )
}