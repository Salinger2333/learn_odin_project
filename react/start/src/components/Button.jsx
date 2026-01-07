export function Button({text, color, fontSize, handleClick}){
  const buttonSyle = {
    color,
    fontSize: fontSize + 'px'
  }
  return (
    <button onClick={handleClick} style={buttonSyle}>{text}</button>
  )
}