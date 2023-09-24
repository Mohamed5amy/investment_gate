
const Button = ({color , text}) => {
  return (
    <button className="btn-17" style={{ backgroundColor : color || "white" }} >
      <span className="text-container">
        <span className="text"> {text ? "Send" : "Contact us"} </span>
      </span>
    </button>
  )
}

export default Button
