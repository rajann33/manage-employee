import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const Task = () => {
    const [userData] = useContext(AuthContext);
    // console.log(AuthData.employees);
  return (
    <>
    {userData.map(function(elem){
return (
    <div key={elem.id} className=' bg-[#1a1d20]  rounded-sm px-4 py-1 flex justify-between shadow-[inset_0_7px_7px_-7px_#000,inset_0_-7px_7px_-7px_#8e8e8e] '>
            <p className='w-1/5 font-semibold'>{elem.firstname}</p>
            <p className='w-1/5 text-blue-500 '>{elem.taskNumber.newTask}</p>
            <p className='w-1/5 text-green-500'>{elem.taskNumber.completed}</p>
            <p className='w-1/5 text-yellow-500'>{elem.taskNumber.active}</p>
            <p className='w-1/5 text-red-500'>{elem.taskNumber.failed}</p>
        </div> 
)
    })}
   
    </>
  )
}

export default Task
