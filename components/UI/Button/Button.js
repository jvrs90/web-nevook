
const Button = ({ onClick, children }) => {
  return (
    <>
      <button className="btn-secondary" onClick={onClick} > {children} </button>
    </>
  )
}

export default Button
