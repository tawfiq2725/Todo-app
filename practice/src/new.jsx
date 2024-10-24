// import React from 'react'
// import Child from './child'


// // assignment - 1

// const NewApp = () => {
//    const details = [{name:"Tawfiq",age:21},{name:"Kumar",age:22}]
  
//     return (
//     <>
//         <Child arr={details} />
//     </>
//   )
// }


import React from "react"


const NewComponent = (PropsComp)=>{
    return class extends React.Component{
        render(){
            return this.props.Authenticated ? 
            <div><PropsComp/></div> : 
            <div><h1>Please Login</h1></div>
        }
    }
}

export default NewComponent
