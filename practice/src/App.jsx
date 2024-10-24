// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomeComponent from './components/home';
// import AboutComponent from './components/about';
// import Profile from './components/profile';

// function App() {
//   return (
//     <>
//       <Router>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             {/* Example with dynamic profile link (you can change the '1' to any id) */}
//             <li><Link to="/profile/1">Profile 1</Link></li>
//             <li><Link to="/profile/2">Profile 2</Link></li>
//           </ul>
//         </nav>
        
//         <Routes>
//           <Route path="/" element={<HomeComponent />} />
//           <Route path="/about" element={<AboutComponent />} />
//           {/* Dynamic Route: ":id" makes it dynamic */}
//           <Route path="/profile/:id" element={<Profile />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;


// Create counter app

// import {useState , useEffect, useRef} from 'react'
// const App = ()=>{
//     const [counter,setCounter] = useState(0)
//     const handleAdd = () => setCounter(counter+1)
//     const handleSub = ()=>setCounter(counter-1)
//     const handleReset = ()=>setCounter(0)
//     useEffect(()=>{
//       console.log('Mounted')
//       document.title = `Counter ${counter}`
//       return ()=>{
//         console.log('clean up done , unmounted')
//       }
//     },[])
//     return(
//         <>
//         <h1>Counter App</h1>
//             <strong>Display :  {counter}</strong>
//             <br/>
//             <button onClick={handleAdd}>Add</button>
//             <button onClick={handleSub}>Subtract</button>
//             <button onClick={handleReset}>Reset</button>
//         </>
//     )
// }


// Create the Timer component:

// const App = ()=>{
//   const [timer,setTimer] = useState(0)
//   const [interid,setInterid] = useState(null)
  
//   const handleStart = ()=>{
//   if(!interid){
//     const id = setInterval(() => {
//       setTimer(timer => timer+1)
//     }, 1000);
//     setInterid(id)
//   }
//   }

//   const handleStop = ()=>{
//     if(interid){
//       clearInterval(interid)
//       setInterid(null)
//     }
//   }
//   const handleReset = ()=>{
//     handleStop()
//     setTimer(0)
//   }
//   return (
//     <>
//       <h1>Timer App</h1>
//       <strong>Display : {timer}</strong>
//       <br />
//       <br />
      
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//     </>
//   )
// }



// const App = ()=>{
 
//   const [time,setTime] =  useState(0)
//   const [isRunning,setisRunning] = useState(false)
//   const timerRef = useRef(null)
//   useEffect(()=>{
//     if(isRunning){
//       timerRef.current = 
//       setInterval(()=>{
//         setTime(elem=>elem+1)
//       },1000)
//     }else{
//       clearInterval(timerRef.current)
//     }

//     return ()=>clearInterval(timerRef.current)
    
//   },[isRunning])
 
//   const handleStart = ()=>{setisRunning(true)}
//   const handleStop = ()=>{setisRunning(false)}

//   return(
//     <>
//     <h1>Timer</h1>
//     <strong >Display : {time}</strong>
//     <button onClick={handleStart}>Start</button>
//     <button onClick={handleStop}>Stop</button>
//     </>
//   )
// }

// const App = ()=>{

//   const [ coloR , setColoR ] = useState('#ffffff')

//   const changeColor = ()=>{
//     let char ='0123456789ABCDEF'
//     let color = '#'
//     for(let i=0; i<6; i++){
//       color+=char[Math.floor(Math.random()*16)]
//     }
//     setColoR(color)
//   }
//   return(
//     <>
//     <body style={{display:'flex',flexDirection:'column', backgroundColor:coloR}}>
//     <h1>
//       Color Changer
//     </h1>
//     <br />
//     <br />
//     <div>
//     <button onClick={changeColor}>Chnage Color</button>
//     </div>
//     </body>


//     </>
//   ) 
// }

// import {v4 as uuidv4} from 'uuid'
// uuidv4();
// const App =  ()=>{
//   const [select,setSelect] = useState('')
//   const handleSelect = (e)=>{
//     setSelect(e.target.value)
//   }
//   return(
//     <>
//       <h1>Drop Down</h1>

//       <select value={select} onChange={handleSelect}>
//       <option >Select One</option>
//       <option id={uuidv4()} value="Full stack">Full stack</option>
//       <option id={uuidv4()} value="Frontend">Frontend</option>
//       <option id={uuidv4()} value="Backend">Backend</option>
//       <option id={uuidv4()} value="Devops">Devops</option>

//       </select>

//       <h1>Selected option is : {select} and ID is :{select.id}</h1>
//     </>
//   )
// }


export default App