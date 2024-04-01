import { useEffect, useState } from "react"

export default function MyComponent_16_2() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  // window.addEventListener("resize", handleResize)
  // console.log("이벤트 리스너 추가")

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log("이벤트 리스너 추가")

    return () => {
      window.removeEventListener("resize", handleResize)
      console.log("이벤트 리스너 제거")
    }
  }, [])

  useEffect(() => {
    document.title = `Size: ${width} * ${height}`
  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return(
    <div>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </div>
  )
}