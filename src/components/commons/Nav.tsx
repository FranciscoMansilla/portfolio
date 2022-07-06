
const Nav = ()=>{
  return(
    <div className='flex items-center w-full h-20 p-4 border-b border-great-blue-500 border-opacity-25 bg-white fixed z-40'>
      <div className='w-6/12 flex align-middle justify-center place-items-center'>
        <h6 className=' font-F-Logo text-3xl  bg-gradient-to-r to-sky-400 from-pink-300 text-transparent bg-clip-text'>fran Ui/Ux</h6>
      </div>
      <div className='w-6/12 h-6 flex justify-center align-middle place-items-center'>
        <a href="#about" className=" hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300">
          <button className="m-6 ">About</button>
        </a>
        <a href="#project" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300">
          <h1 className="m-6 ">Projects</h1>
        </a>
        <a href="#contact" className=" hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-sky-400 hover:from-pink-300">
          <button className="m-6 ">Contact</button>
        </a>
      
      </div>
    </div>
  )
}
export default Nav