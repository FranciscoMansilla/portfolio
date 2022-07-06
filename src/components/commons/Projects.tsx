import Carrousel2 from "./Carrousel2"

const Projects = ()=>{
  return(
    <div className='flex flex-col items-center mb-20 bg-black' id="project">
      <h1 className=" mt-28 mb-6 font-F-Bold text-4xl bg-gradient-to-r to-sky-400 from-pink-300 text-transparent bg-clip-text">Projects</h1>
      <div className=" w-full flex justify-center">
        <Carrousel2/>
      </div>
    </div>
  )
}
export default Projects