import css from '../../assets/icons/css.png'
import html from '../../assets/icons/html.png'
import react from '../../assets/icons/react.png'
import typescript from '../../assets/icons/typescript_logo.png'
import bootstrap from '../../assets/icons/bootstrap.png'

const Front = ()=>{
  return(
    <div className="w-full flex justify-center flex-wrap p-2">
      <div className='m-8'>
        <img className='w-28 h-28 mx-2' src={typescript} alt="png" />
        <h6 className=' font-F-Medium text-lg'>Typescript</h6>
      </div>
      <div className='m-8'>
        <img className='w-28 h-28 mx-2' src={css} alt="png" />
        <h6 className=' font-F-Medium text-lg'>CSS</h6>
        
      </div>
      <div className='m-8'>
        <img className='w-28 h-28 mx-2' src={html} alt="png" />
        <h6 className=' font-F-Medium text-lg'>HTML</h6>
        
      </div >
      <div className='m-8'>
        <img className='w-28 h-28 mx-2' src={react} alt="png" />
        <h6 className=' font-F-Medium text-lg'>ReactJs</h6>
        
      </div>
      <div className='m-8'>
        <img className='w-28 h-28 mx-2' src={bootstrap} alt="png" />
        <h6 className=' font-F-Medium text-lg'>Bootstrap</h6>

      </div>
      <div className='m-8'>
        <svg className= ' fill-current text-black w-36 h-28 mx-2' viewBox='0 0 50 31'>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" ></path>
        </svg>
        <h6 className=' font-F-Medium text-lg'>Tailwind</h6>

      </div>

    </div>
  )
}
export default Front