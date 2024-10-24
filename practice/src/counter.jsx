// com -1
// Counter - label - 0

// com-2
// + -


import React, { useState } from 'react'
import Buttons from './btns';
import './App.css'
const Counter = () => {
  
    const [counter,setCounter] =  useState(0)
    
    function handleAdd(){
        setCounter(counter+1)
    }
    function handleSubtract(){
        setCounter(counter-1)
    }
    
    return (

    <>
        <h1> Counter App</h1>
        <h2>Display : { counter }</h2>
        <Buttons add={handleAdd} sub={handleSubtract} counter={counter}/>
    </>

  )
}

export default Counter;
