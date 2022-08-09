import Front from "./Front"
import Back from './Back';
import { useState } from "react";
import Card from "./Card";

const About = ()=>{
  const [tech, setTech] = useState('front')
  return(
    <div id="about" className=' mx-10'>
      <div className=" flex flex-col items-center md:flex-row my-20">
        <div className="p-4 w-full my-2 md:my-10 md:w-7/12 flex flex-col place-items-center">
          <h2 className=' font-F-SemiBold text-sm'>FrontEnd Developer</h2>
          <h1 className="font-F-Bold text-6xl m-3">Francisco Mansilla</h1>
          <p className="text-base w-full md:w-6/12">Beautifully designed and crafted components and templates built for a better user experience. The perfect starting point for your next project.</p>
          <div className=" my-4 md:my-12 p-4">
            <Card/>
          </div>
        </div>
        <div className="w-full md:w-4/12 flex  ">
          <svg className=" fill-current text-red-200 w-full md:max-w-3xl" width="460" height="458" viewBox="0 0 460 458">
            <path id="pc_1" data-name="pc 1"  d="M70.9,22h76.718V295.129h21.41V96.977l33.9-54.447,1.784,0.893,32.115,53.555V295.129H474.114V143.391c0-15.988,4.5-47.272-2.677-58.018-8.319-12.467-40.4-8.034-60.661-8.033H236.822V63.059h176.63c27.654,0,56.945-3.458,68.69,12.5,9.785,13.291,6.245,44.412,6.245,66.943V304.947c0,26.87,3.627,56.983-11.6,68.729-19.054,14.7-112.315,7.429-147.192,7.14v48.2c39.949-1.205,45.8,10.1,44.6,49.984H145.83c-1.157-39.923,4.626-51.138,44.6-49.984v-48.2l-135.6-.892c-9.122-2.807-17.96-11.1-21.41-19.637-6.463-15.992-1.784-47.3-1.784-66.943V132.68c0-33.447-2.97-59.594,22.3-67.836l4.46,12.5c-16.95,17.224-12.489,36.6-12.489,69.621V295.129H70.9V22ZM85.169,36.281V51.455h32.115V65.736H85.169v12.5h17.842V92.514H85.169v12.5h32.115v14.281H85.169v12.5h17.842v14.281H85.169v12.5h32.115v14.282H85.169v12.5h17.842v14.281H85.169v12.5h32.115V226.4H85.169v12.5h17.842v14.282H85.169v12.5h32.115v14.281H85.169v15.174h48.172V36.281H85.169ZM202.031,70.2L186.866,98.762l16.057,8.925,16.949-9.818Zm47.28,19.637h41.927v14.281H277.857V268.352h13.381v14.281H249.311V268.352h14.273V104.117H249.311V89.836Zm55.308,0H461.624V166.6h-157V89.836Zm14.274,14.281v48.2H447.351v-48.2H318.893ZM183.3,259.426h39.252V113.043l-19.626,11.6-19.626-11.6V259.426Zm12.489-121.391H210.06v45.522H195.786V138.035Zm108.833,41.059h72.258v49.984H304.619V179.094Zm84.747,0h72.258v49.984H389.366V179.094Zm-70.473,14.281V214.8H362.6V193.375H318.893Zm84.747,0V214.8h43.711V193.375H403.64Zm-207.854,2.678H210.06v14.281H195.786V196.053Zm0,26.777H210.06v23.207H195.786V222.83Zm115.97,23.207h32.115v14.281H311.756V246.037Zm44.6,0h14.273v14.281H356.36V246.037Zm40.143,0h32.115v14.281H396.5V246.037Zm44.6,0H455.38v14.281H441.107V246.037ZM183.3,273.707v21.422h39.252V273.707H183.3ZM45.918,309.41c-0.231,21-3.771,47.743,9.813,55.34,12.5,6.99,69.326,1.786,88.315,1.785H371.525c20.908,0,83.879,4.977,95.452-3.57,10.689-7.895,7.336-35.245,7.137-53.555H45.918Zm180.2,21.422H240.39v14.281H226.117V330.832Zm26.762,0h14.273v14.281H252.879V330.832Zm26.762,0h14.274v14.281H279.641V330.832Zm-74.934,49.984v48.2H315.324v-48.2H204.707Zm-44.6,83.9H359.928c0.346-8.811-.61-13.895-3.568-18.744-28.413-9.518-105.343-2.678-141.84-2.678-17.89,0-41.411-2.305-52.632,4.463Q161,456.238,160.1,464.719Z" transform="translate(-29.5 -21.5)"/>
          </svg>
        </div>
      </div>
      <div className=" my-10 flex flex-col items-center " >
        <h1 className=" w-full md:w-5/12 font-F-Italic text-3xl text-gray-500 m-1">"Creativity comes from a conflict of ideas"</h1>
        <h2 className=" w-11/12 md:w-4/12 text-m font-F-SemiBold flex justify-end">-Donatella Versace</h2>
      </div>
      <div className="mt-32 py-10 w-full flex flex-col items-center">
        <h2 className=" mb-4 font-F-Bold text-3xl">My Tech Skills</h2>
        <p className=" w-full md:w-6/12">FullStack Developer specialized in FrontEnd, with more than a thousand hours of internships, I have trained at Henry's Bootcamp, there I was a Teacher Assistant where I was in charge of leading and integrating a group of students through the theory dictated.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className=' w-full flex flex-col items-center md:justify-center md:flex-row '>
          <button onClick={(e:any)=>setTech(e.target.value)} value='front' 
            className=" text-white font-F-Medium shadow-lg w-8/12 md:w-2/12 bg-gradient-to-r to-sky-400 from-pink-300 hover:bg-gradient-to-l hover:to-rose-300 hover:from-pink-400 m-2 py-2 px-4 rounded
            hover:scale-105 ease-in-out duration-200 ">
            Front
          </button>
          <button onClick={(e:any)=>setTech(e.target.value)} value='back' 
            className=" text-white font-F-Medium shadow-lg w-8/12 md:w-2/12 bg-gradient-to-r to-sky-400 from-pink-300 hover:bg-gradient-to-l hover:to-rose-300 hover:from-pink-400 m-2 py-2 px-4 rounded
            hover:scale-105 ease-in-out duration-200 ">
            Back
          </button>
        </div>
        {
          tech==='front'?
          <Front/>
          :
          <Back/>          
        }
        
      </div>
    </div>
  )
}
export default About