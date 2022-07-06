import express from '../../assets/icons/express.png'
import node from '../../assets/icons/node.png'
import sequelize from '../../assets/icons/sequelize.png'

const Back = ()=>{
  return(
    <div className="w-full flex justify-center flex-wrap p-2">
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
    </div>
  )
}
export default Back