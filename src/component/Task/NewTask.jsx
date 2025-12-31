import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ChangeConform from '../Others/ChangeConform';


const NewTask = (e) => {
  const [ userData, setUserData ] = useContext(AuthContext);
  const [toConform, setToConform] = useState(false)
  const employees = [...userData];
  const handleAccept = () => {
    e.loaded(30)
  const updatedUsers  =  employees.map(emp => {
      if(emp.firstname === e.name){
        return{ ...emp,
          tasks: emp.tasks.map(task =>
            task.title === e.data.title
            ? { ...task, active: true, newTask: false }
            : task
          ),
          taskNumber: {
            ...emp.taskNumber,
            active: emp.taskNumber.active + 1,
            newTask: emp.taskNumber.newTask - 1,
          }
        }
      }
      return emp;
    })
    e.loaded(80)
     
    setUserData(updatedUsers);
    localStorage.setItem('employees', JSON.stringify(updatedUsers));
    e.loaded(100)
    // alert(`Task "${title}" has been accepted by ${e.name}`);
  }

 

  return (
    <>
    <div id={e.data.title} className="relative p-4 bg-linear-to-b from-[#95dbfa] border border-t-0 border-[#bfbfbf] rounded-xl shrink-0 w-[320px] min-h-[250px]">
      <div className="flex justify-between">
        <p className="px-1 bg-cyan-600 rounded-xs shadow">{e.data.category}</p>
        <p className="text-[#141414]">{e.data.date}</p>
      </div>

      <div className="pt-5">
        <p className="text-xl font-bold pb-1 text-[#141414]">{e.data.title}</p>
        <div className="mb-10">{e.data.description}</div>
      </div>

      <div className="absolute bottom-5 flex justify-between gap-5 pt-2">
        <button
          onClick={() =>{e.loaded(5);setToConform(true)}}
          className="bg-amber-300 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow"
        >
          Accept It
        </button>
        

        <button
          className="bg-cyan-400 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow"
        >
          Request for Update
        </button>
      </div>
  {toConform? <ChangeConform conformed={setToConform} handleChange={handleAccept}  Progress={e.loaded} task={'Active'}/> : ""}
    </div>
      
      </>
  );
};

export default NewTask;
