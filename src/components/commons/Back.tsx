import express from '../../assets/icons/express.png'
import node from '../../assets/icons/node.png'
import sequelize from '../../assets/icons/sequelize.png'
import postgre from '../../assets/icons/postgre.png'
import mongo from '../../assets/icons/mongodb.png'
import js from '../../assets/icons/javascript.png'




const Back = ()=>{
  return(
    <div className="w-full xl:w-8/12 flex justify-center flex-wrap p-2">
        <div className='m-8'>
          <img className=' w-28 h-28 mx-2' src={js} alt="png" />
          <h6 className=' font-F-Medium text-lg'>Javascript</h6>
        </div>
        <div className='m-8'>
          <img className=' w-28 h-28 mx-2' src={express} alt="png" />
          <h6 className=' font-F-Medium text-lg'>Express</h6>

        </div>
        <div className='m-8'>
          <img className=' w-28 h-28 mx-2' src={sequelize} alt="png" />
          <h6 className=' font-F-Medium text-lg'>Sequelize</h6>

        </div>
        <div className='m-8'>
          <img className=' w-28 h-28 mx-2' src={node} alt="png" />
          <h6 className=' font-F-Medium text-lg'>NodeJs</h6>
        </div>
        <div className='m-8'>
          <img className=' w-28 h-28 mx-2' src={postgre} alt="png" />
          <h6 className=' font-F-Medium text-lg'>Postgre</h6>
        </div>
        <div className='m-8'>
          <img className=' w-28 h-28 mx-2' src={mongo} alt="png" />
          <h6 className=' font-F-Medium text-lg'>Mongo db</h6>
        </div>
    </div>
  )
}
export default Back