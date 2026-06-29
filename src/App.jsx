import { useState } from 'react'

function App() {
  const [count, setCount] = useState(
    localStorage.getItem("color") || "olive"
  );
  const colorchange = (color) =>{
     localStorage.setItem("color",color);
     setCount(color);
  }
  
  return (
    <div className='h-screen duration-200 w-full' style={{backgroundColor:count}}>
          <div className='w-full fixed flex flex-wrap bottom-12 justify-center insert-x-0 rounded-2xl'>
                  <div className='px-2.5 py-2.5 flex flex-wrap border-2 bg-white rounded-3xl justify-center gap-5 shadow-2xs'>
                        <button onClick={()=>colorchange("red")} className='outline-none rounded-xl px-2.5 text-white' style={{backgroundColor: "red"}}>Red</button>
                        <button onClick={()=>colorchange("blue")}  className='outline-none rounded-xl px-2.5 text-white' style={{backgroundColor: "blue"}}>Blue</button>
                        <button onClick={()=>colorchange("green")}  className='outline-none rounded-xl px-2.5 text-white' style={{backgroundColor: "green"}}>Green</button>
                        <button onClick={()=>colorchange("yellow")}  className='outline-none rounded-xl px-2.5 text-white' style={{backgroundColor: "yellow"}}>Yellow</button>
                        <button onClick={()=>colorchange("purple")}  className='outline-none rounded-xl px-2.5 text-white' style={{backgroundColor: "purple"}}>Purple</button>
                        <button onClick={()=>colorchange("white")}  className='outline-none rounded-xl px-2.5 text-black' style={{backgroundColor: "white"}}>white</button>
                        <button onClick={()=>colorchange("black")}  className='outline-none rounded-xl px-2.5 text-white' style={{backgroundColor: "black"}}>Black</button>
                        <button onClick={()=>colorchange("olive")}  className='outline-none rounded-xl px-2.5 text-white' style={{backgroundColor: "olive"}}>Olive</button>
                  </div>
          </div>
    </div>
  )
}

export default App
