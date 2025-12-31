import { useContext, useMemo, useState } from 'react'
import Header from '../Others/Header'
import AcceptTask from '../Task/AcceptTask'
import CompleteTask from '../Task/CompleteTask'
import FaildTask from '../Task/FaildTask'
import NewTask from '../Task/NewTask'
import { AuthContext } from '../../Context/AuthProvider'

const EmployeeDashboard = (e) => {

    const GetNoTaskMessage = () => {
  switch(taskk) {
    case "NewTask": return "No New task to show☺️. Complete Active task to get NewTask😁 or You will it soon🙂";
    case "FailedTask": return "No Failed task😳. You Are Genius🫡";
    case "ActiveTask": return "No Task Taken🧐. If No NewTask, Its Okey You Will get It Soon😊";
    case "CompletedTask": return "Not Completed any task🧐? What are you doing? Aru are recently hired : Its Okey☺️ All the best😇";
    default: return "";
  }
};

    var taskAvailable = false;
    const [userdata] = useContext(AuthContext);
    console.log(userdata)
    console.log(e.data)
    const employeeData = useMemo(()=>userdata.find((ee)=>ee.firstname==e.data),[e.data,userdata])
    {!employeeData?console.log("SMth Went wrong"):""}
    const [taskk, setTaskk] = useState('NewTask')
    return (
        <div className='bg-[#1C1C1C] h-screen text-white'>
            <Header name={employeeData.firstname}  user={e.user}/>
            <div className='py-5 px-10 flex justify-around gap-5 font-semibold '>
                <div className='   text-[18px] grow px-3 py-4 bg-linear-to-b from-cyan-400 to-[#1C1C1C] onc:text-black border border-gray-400 rounded-xl '><p className='text-3xl'>{employeeData.taskNumber.newTask}</p><p>New Task</p></div>
                <div className=' text-[18px] grow px-3 py-4 bg-linear-to-t from-green-400 to-[#1C1C1C] onc:text-black rounded-xl border border-gray-400  '><p className='text-3xl'>{employeeData.taskNumber.completed}</p><p>Completed Task</p></div>
                <div className=' text-[18px] grow px-3 py-4 bg-linear-to-b from-yellow-400 to-[#1C1C1C]  onc:text-black rounded-xl border border-gray-400 '><p className='text-3xl'>{employeeData.taskNumber.active}</p><p>Accepted Task</p></div>
                <div className=' text-[18px] grow px-3 py-4 bg-linear-to-t from-red-400 to-[#1C1C1C] onc:text-black rounded-xl  border border-gray-400 '><p className='text-3xl'>{employeeData.taskNumber.failed}</p><p>Failed Task</p></div>
            </div>

            <div >
                <ul className='px-12 text-white/30 flex gap-10 select-none'>
                    <li onClick={()=>setTaskk('NewTask')} className={taskk=='NewTask'?'text-[#dfdfdf]  cursor-default':"cursor-pointe cursor-context-menu"}>New Task</li>
                    <li onClick={()=>setTaskk('CompletedTask')} className={taskk=='CompletedTask'?'text-[#dfdfdf]  cursor-default':"cursor-pointe cursor-context-menu"}>Completed Task</li>
                    <li onClick={()=>setTaskk('ActiveTask')} className={taskk=='ActiveTask'?'text-[#dfdfdf]  cursor-default':"cursor-pointe cursor-context-menu"}>Active Task</li>
                    <li onClick={()=>setTaskk('FailedTask')} className={taskk=='FailedTask'?'text-[#dfdfdf]  cursor-default':"cursor-pointe cursor-context-menu"}>Failed Task</li>
                    <li onClick={()=>setTaskk('AllTask')} className={taskk=='AllTask'?' bg-linear-to-r from-yellow-300 via-pink-500 to-blue-500 font-semibold text-transparent bg-clip-text cursor-default':"cursor-pointe cursor-context-menu"}>All Task</li>
                </ul>
            </div>
            <div className='relative'>
            <div className=' m-5 p-5 flex gap-5 overflow-x-scroll scrollbar-hide'>
               { employeeData.tasks.slice().reverse().map((ele)=>{

                   
                   if(ele.newTask && (taskk=="NewTask" || taskk=="AllTask")){ taskAvailable=true;
                    return(<NewTask loaded={e.loaded} data={ele} key={'1'+ele.title} name={employeeData.firstname}/>)
                   }
                   if(ele.active &&( taskk=="ActiveTask" || taskk=="AllTask") ){ taskAvailable=true;
                       return(<AcceptTask key={'2'+ele.title} loaded={e.loaded} data={ele} name={employeeData.firstname}/>)
                   }
                   if(ele.completed && (taskk=="CompletedTask" || taskk=="AllTask")){ taskAvailable=true;
                    return(<CompleteTask key={'3'+ele.title} loaded={e.loaded} data={ele} name={employeeData.firstname}/>)
                   }
                   if(ele.failed && (taskk=="FailedTask" || taskk=="AllTask")){ taskAvailable=true;
                    return(<FaildTask key={'4'+ele.title} loaded={e.loaded} data={ele} name={employeeData.firstname}/>)
                   }
                  


               }).concat(
      !taskAvailable ? <div key="notask" className="flex  text-white text-lg font-semibold"><GetNoTaskMessage/></div> : []
    )

               
               
               }
            
            </div>
           <div className='absolute top-0 left-5 w-6 bg-linear-to-r from-[#1C1C1C] to-white/0  rounded-full h-full'></div>
           <div className='absolute top-0 right-5 w-10 bg-linear-to-l from-[#1C1C1C] to-white/0  rounded-full h-full'></div>
            </div>
        </div>
    )
}

export default EmployeeDashboard
