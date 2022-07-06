

const SideBar = ()=>{
  return(
    <div className=' fixed -right-60 z-50 flex flex-col w-60 h-full bg-red-400'>
      <div className=" h-20 border-b-2 border-black">
        title
      </div>
      <div className='flex flex-col'>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </div>
  )
}
export default SideBar