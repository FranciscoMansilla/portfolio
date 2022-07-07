
import { useState } from 'react';


const SideBar = ()=>{
  const [state, setState] = useState({
    option:true,
    sidebar:'-right-80',
    button:'right-8'
  }) 
  
  const handleClick = ()=>{
    if(state.option){
      setState({
        option:false,
        sidebar:'right-0',
        button:'right-64'
      })
      return
    }
    if(!state.option){
      setState({
        option:true,
        sidebar:'-right-80',
        button:'right-8'
      })
      return
    }
  }

  return(
    <div className={`md:hidden ease-in-out duration-200 fixed z-50 flex flex-col w-80 h-full bg-white border-l-2 border-great-blue-500 border-opacity-10 ${state.sidebar}`}>
      <button onClick={handleClick} className={` hover:scale-105 hover:text-black text-gray-800 ease-in-out duration-200 text-4xl fixed top-5 ${state.button}`}>&#9776;</button>
      <div className=" h-20  flex justify-center items-center">
        <h6 className='ease-in-out duration-200 iphone:hidden font-F-Logo text-2xl  bg-gradient-to-r to-sky-400 from-pink-300 text-transparent bg-clip-text'>fran Ui/Ux</h6>
      </div>
      <div className='flex flex-col'>
        <a href="#about" onClick={handleClick} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300 ">
          <button className='m-6 text-xl' >About</button>
        </a>
        <a href="#project" onClick={handleClick} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300  ">
          <button className='m-6 text-xl' >Projects</button>
        </a>
        <a href="#contact" onClick={handleClick} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300  ">
          <button className='m-6 text-xl' >Contact</button>
        </a>
      </div>
    </div>
  )
}
export default SideBar