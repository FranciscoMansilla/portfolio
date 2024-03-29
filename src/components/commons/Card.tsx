import fran from '../../assets/fran.png'

const Card = ()=>{
  return(
  <a className='w-full' target="_blank" href="https://www.linkedin.com/in/franciscomansilla/">
    <div className='
      flex  h-20 p-4 bg-white rounded-lg  border border-gray-400 border-b-4 border-solid items-center shadow-md 
      hover:scale-105 ease-in-out duration-200'>
      <img className=' w-16 h-16 rounded-full' src={fran} alt="img" />
      <h6 className=' font-F-Medium text-md mx-4 w-full'>LinkedIn</h6>
        <svg className='w-16 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"  width="30" height="30" focusable="false">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
    </div>
  </a>
  )
}
export default Card