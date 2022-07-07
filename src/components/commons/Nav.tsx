



const Nav = ()=>{
  return(
    <div className='bg-white  flex items-center justify-center iphone:justify-start w-full h-20 p-4 border-b border-great-blue-500 border-opacity-25  fixed z-40'>
      <div className='w-6/12 flex align-middle justify-center place-items-center'>
        <a href="#about">
          <h6 className='  delay-150 font-F-Logo text-3xl  bg-gradient-to-r to-sky-400 from-pink-300 text-transparent bg-clip-text
          hover:bg-gradient-to-r hover:to-violet-400 hover:from-pink-300  
          '>fran Ui/Ux</h6>
        </a>
      </div>
      <div className='hidden w-6/12 h-6 md:flex justify-center align-middle place-items-center'>
        <a href="#about" className=" ease-in-out duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300">
          <button className="m-6 ">About</button>
        </a>
        <a href="#project" className="ease-in-out duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300">
          <h1 className="m-6 ">Projects</h1>
        </a>
        <a href="#contact" className="ease-in-out duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300">
          <button className="m-6 ">Contact</button>
        </a>
      </div>
    </div>
  )
}
export default Nav