import express from '../../assets/icons/express.png'
import node from '../../assets/icons/node.png'
import sequelize from '../../assets/icons/sequelize.png'
import postgre from '../../assets/icons/postgre.png'
import mongo from '../../assets/icons/mongodb.png'
import js from '../../assets/icons/javascript.png'




const Back = ()=>{
  return(
    <div className=' w-full flex flex-col items-center mb-20'>
      <h6 className='  delay-150 font-F-Logo text-3xl  bg-gradient-to-r to-sky-400 from-pink-300 text-transparent bg-clip-text
          hover:bg-gradient-to-r hover:to-violet-400 hover:from-pink-300  
      '>
        Backend
      </h6>
      <div className="w-full xl:w-8/12 flex justify-center flex-wrap p-2 mb-10">
          <div className='m-8'>
            <img className=' w-20 h-20 mx-2' src={js} alt="png" />
            <h6 className=' font-F-Medium text-lg'>Javascript</h6>
          </div>
          <div className='m-8'>
            <img className=' w-20 h-20 mx-2' src={express} alt="png" />
            <h6 className=' font-F-Medium text-lg'>Express</h6>

          </div>
          <div className='m-8'>
            <img className=' w-20 h-20 mx-2' src={sequelize} alt="png" />
            <h6 className=' font-F-Medium text-lg'>Sequelize</h6>

          </div>
          <div className='m-8'>
            <img className=' w-20 h-20 mx-2' src={node} alt="png" />
            <h6 className=' font-F-Medium text-lg'>NodeJs</h6>
          </div>
          <div className='m-8'>
            <img className=' w-20 h-20 mx-2' src={postgre} alt="png" />
            <h6 className=' font-F-Medium text-lg'>Postgre</h6>
          </div>
          <div className='m-8'>
            <img className=' w-20 h-20 mx-2' src={mongo} alt="png" />
            <h6 className=' font-F-Medium text-lg'>Mongo db</h6>
          </div>
      </div>
    </div>
  )
}
export default Back