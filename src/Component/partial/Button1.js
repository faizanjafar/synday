import React from 'react'

function Button1(props) {
  return (
    <>
      <button className={`${props.class}`}>{props.text}</button>
    </>
  )
}

export default Button1;