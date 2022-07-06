import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = ()=>{
  const [text, setText ] = useState({
    message:'',
    name:'',
    email:'',
  })
  const empty = ():boolean=>{
    if(text.email==='')return true
    if(text.name==='')return true
    if(text.message==='')return true
    return false
  }
  const sendMessage = (e:any)=>{
    e.preventDefault()
    console.log(text)
    /*emailjs.send("service_xc9wrx8","template_ml36vaj",text)
    .then(r=>console.log(r));*/
  }
  return(
    <div id="contact" className='flex flex-col justify-center items-center mb-20'>
      <h1 className=" mt-28 mb-6 font-F-Bold text-3xl">Contact Me</h1>
      <a 
        className=" shadow-md w-8/12 md:w-4/12 mt-4 bg-gray-400 hover:bg-gray-300 text-white font-F-Medium py-2 px-4 border-b-4 border-gray-600 hover:border-gray-400 rounded hover:text-black"
        href="https://github.com/FranciscoMansilla"
        target="_blank">
        Via GitHub
      </a>
      <a 
        className=" shadow-md w-8/12 md:w-4/12 mt-4 bg-blue-500 hover:bg-blue-400 text-white font-F-Medium py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        href="https://www.linkedin.com/in/franciscomansilla/"
        target="_blank">
        Via LinkedIn
      </a>
      <span className="my-10 shadow-sm w-5/12">or</span>
      <div className="w-full max-w-2xl">
        <form onSubmit={sendMessage} className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className=" mb-6 my-2 font-F-SemiBold text-xl">Leave me a message</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tell me your name
            </label>
            <input
              onChange={(e:any)=>setText({...text,name:e.target.value})} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Put your name"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Your contact email
            </label>
            <input
              onChange={(e:any)=>setText({...text,email:e.target.value})} 
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Message
            </label>
            <textarea
              rows={6}
              onChange={(e:any)=>setText({...text,message:e.target.value})} 
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder=". . .">
            </textarea>
          </div>
          <div className="flex items-center justify-between">
            <button 
              disabled={empty()}
              className="bg-blue-500 hover:bg-blue-400 text-white shadow-xl font-F-Medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact