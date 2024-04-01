import './Card.css'
import profilePic from '../assets/profile.png'

export default function Card() {
  return(
    <div className='card'>
      {/* <img className='card-image' src="https://via.placeholder.com/150" alt="" /> */}
      <img className='card-image' src={profilePic} alt="" />
      <h2 className='card-title'>꽁쥐</h2>
      <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos nisi eos qui pariatur amet eaque neque nemo porro incidunt, inventore iusto officiis quaerat odit obcaecati ex velit omnis excepturi!</p>
    </div>
  )
}