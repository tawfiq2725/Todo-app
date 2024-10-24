import React from 'react'

const Buttons = ({add,sub,counter}) => {
  return (
    <>
        <button onClick={add}>Add</button>
        <button onClick={sub}  disabled={counter<1} >Subtract</button>
    </>
  )
}

export default Buttons