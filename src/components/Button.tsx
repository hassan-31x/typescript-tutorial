import React from "react"

// if we are passing event handlers as props
type ButtonProps = {
    // handleClick: () => void
    //if we want to pass an event in event handler
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="py-2 px-3 border border-black bg-gray-300 rounded-md" onClick={props.handleClick}>Click Here</button>
    </div>
  )
}

export default Button
