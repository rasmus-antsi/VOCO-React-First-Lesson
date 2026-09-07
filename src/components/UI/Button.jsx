import './Button.css'

// A styled <button>. Everything between the tags arrives as `children`,
// exactly like in Card. `type` defaults to 'button' so it never submits
// a surrounding form by accident.
function Button({ type = 'button', onClick, children }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
