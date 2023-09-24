
const Box = ({icon , content , fn}) => {
  return (
    <div className="box">
      {icon}
      <span>{content}</span>
    </div>
  )
}

export default Box
