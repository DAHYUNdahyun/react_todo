import { useState } from "react";

export default function MyComponent_08() {

  const [name, setName] = useState("Guest")
  const [age, setAge] = useState(0)
  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName("홍길동")
  }

  const updateAge = () => {
    setAge( age + 1 )
  }

  const updateIsEmployed = () => {
    setIsEmployed(!isEmployed)
  }


  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Increment Age</button>

      <p>is Employed: {isEmployed ? "yes" : "no"} </p>
      <button onClick={updateIsEmployed}>Toggle Status</button>
    </div>
  )
}