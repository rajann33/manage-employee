import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import ChangeConform from '../Others/ChangeConform'

const CompleteTask = (e) => {
   const [toConform, setToConform] = useState(false)
   const [userData, setUserData] = useContext(AuthContext);
   const CurrentUser= [...userData];
   const CompleteHandeller =()=>{
      const UpdatedUserData= CurrentUser.map((emp)=>{
         if(emp.firstname === e.name){
            return {
               ...emp,
               tasks: emp.tasks.map(task=>
                  e.data.title == task.title ? {...task, completed:false, failed:true} : task 
               ),
               taskNumber : { ...emp.taskNumber, completed: emp.taskNumber.completed -1, failed: emp.taskNumber.failed +1}
            }
         }
         return emp;
      })
      setUserData(UpdatedUserData);
      localStorage.setItem('employees',JSON.stringify(UpdatedUserData))
   }
   return (
<div id={e.data.title} className='relative p-4 bg-linear-to-b  from-[#c7ff83] border border-t-0 border-[#bfbfbf]  rounded-xl shrink-0  w-[320px] min-h-[250px]  '>
                    <div className='flex justify-between'> <p className='px-1 bg-green-600 rounded-xs shadow'>{e.data.category}</p> <p className='text-[#141414]'>{e.data.date}</p>
                    </div>
                    <div className='pt-5'><p className='text-xl font-bold pb-1 text-[#141414]'>{e.data.title}</p>
                        <div className='mb-10'>{e.data.description}</div></div>
                         <div className='absolute bottom-5 flex justify-between gap-5 pt-2'>
<button className='bg-fuchsia-400 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow'>Rate this Task</button> <button onClick={()=>{setToConform(true);e.loaded(5)}} className='bg-red-400 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow '>Failed</button>
                        </div>
                         {toConform? <ChangeConform conformed={setToConform} handleChange={CompleteHandeller}  Progress={e.loaded} task={'Failed'}/> : ""}
                </div>
  )
}

export default CompleteTask
