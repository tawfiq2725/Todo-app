// import './App.css'
// const ConditionalComponent = () => {
//     const obj = {
//         isLogin:true
//     }
//     return (
//     <>
//         <Child isLoggedin={obj.isLogin} />
//     </>
//   )
// }

// const Child = ({isLoggedin})=>{
//     return isLoggedin?<h1>Hi User</h1>:<h1>Please Login</h1>
// }

// export default ConditionalComponent



import { useState } from 'react'
import './App.css'

const ConditionalComponent = ()=>{
    const [hide,setHide] =  useState(false)
    const handleBtn = ()=>{
        setHide(prevState=>!prevState)
    }
    return(
        
        
        
        <>
            <h1>Show/Hide Functionality</h1>
            {hide?<h3>Hello Kumar</h3>:null}
            <button onClick={handleBtn}>{hide?<p>Hide</p> : <p>Show</p>}</button>
        </>
    )
}

export default ConditionalComponent