export default function Button() {

  const handleClick = () => console.log("아얏!")
  const handleCiick2 = (name) => console.log(`${name} 고만 눌러잉`)

  let count = 0
  const handleClick3 = (name) => {
    if(count<3){
      count++;
      console.log(`${name} you clicked me ${count}번`)
    }else{
      console.log(`${name} stop clicking me!`);
    }
  }
  const handleCiick4 = (e) => {
    console.log(e)
    e.target.textContent = "잠와요"
  }

  return(
    <>
      <button onClick={handleClick}>빙수 먹고 시퍼용~🍨</button>
      <button onClick={() => {handleCiick2("홍길동")}}>클릭클릭</button>
      <button onClick={() => handleClick3("홍길동")}>카운트{count}</button>
      <button onClick={(e) => handleCiick4(e)}>안녕하세요안녕아녕</button>
    </>
  )
}