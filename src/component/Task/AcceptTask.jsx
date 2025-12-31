import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ChangeConform from '../Others/ChangeConform';

const AcceptTask = (e) => {
  const [toConformComplete, setToConformComplete] = useState(false)
  const [toConformFailed, setToConformFailed] = useState(false)
  const [userData, setUserData] = useContext(AuthContext);
  const employeesData = [...userData];
  const ActiveChangeHandeller = (change)=>{

  const UpdatedUserData = employeesData.map((ele)=>{
    if(ele.firstname===e.name){
     
      return  change === 'completed' ? 
      {
        ...ele ,
        tasks: ele.tasks.map((task)=>
          task.title===e.data.title ?  {
              ...task,
              active:false,completed:true
          }
            : task
         
        ),
        taskNumber: { ...ele.taskNumber, active: ele.taskNumber.active -1, completed: ele.taskNumber.completed +1
        } 
      }
      : {
        ...ele ,
        tasks: ele.tasks.map((task)=>
          task.title===e.data.title ?  {
              ...task,
              active:false,failed:true
          }
            : task
         
        ),
        taskNumber: { ...ele.taskNumber, active: ele.taskNumber.active -1, failed: ele.taskNumber.failed +1
        } 
      }
    }
    return ele;
  })

  setUserData(UpdatedUserData);
  localStorage.setItem('employees',JSON.stringify(UpdatedUserData));

 e.loaded(100)
  }
  return (
<div id={e.data.title} className='relative p-4 bg-linear-to-b  from-[#ffd632] border border-t-0 border-[#bfbfbf]  rounded-xl shrink-0  w-[320px] min-h-[250px]  '>
                    <div className='flex justify-between'> <p className='px-1 bg-orange-600 rounded-xs shadow'>{e.data.category}</p> <p className='text-[#141414]'>{e.data.date}</p>
                    </div>
                    <div className='pt-5'><p className='text-xl font-bold pb-1 text-[#141414]'>{e.data.title}</p>
                        <div className='mb-10'>{e.data.description}</div></div>
                         <div className='absolute bottom-5 flex justify-between gap-5 pt-2'>
<button onClick={()=>{setToConformComplete(true);e.loaded(5)}} className='bg-green-400 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow'>Completed</button> <button onClick={()=>{setToConformFailed(true);e.loaded(5)}} className='bg-red-400 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow '>Failed</button>
                        </div>
               {toConformComplete? <ChangeConform conformed={setToConformComplete} handleChange={()=>ActiveChangeHandeller('completed')} Progress={e.loaded} task={'Completed'}/> : ""}
               {toConformFailed? <ChangeConform conformed={setToConformFailed} handleChange={()=>ActiveChangeHandeller('failed')} Progress={e.loaded} task={'Failed'}/> : ""}

                </div>
  )
}

export default AcceptTask
