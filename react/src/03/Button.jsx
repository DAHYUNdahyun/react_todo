// import './Button.css'
// import styles from './Button.module.css'

export default function Button() {
  const styles = {
    backgroundColor: "rgb(151, 230, 151)",
    color: "green",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  }
  return(
    // <button className='button'>
    //   Click me~ 누를까말까 눌러주세염
    // </button>
    <button style={styles}>
      Click me~
    </button>
  )
}