import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'



const Form = () => {

   const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData)
  //title, date, asignto,  category,  description
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [task, setTask] = useState()
  const data =userData;
  
  
 useEffect(() => {
  if (!task) return; 


  const updatedEmployees = data.map(emp => {
    if (emp.firstname === asignTo) {
      return {
        ...emp,
        tasks: [...emp.tasks, task],
        taskNumber: {
          ...emp.taskNumber,
          newTask: emp.taskNumber.newTask + 1,
        },
      };
    }
    return emp;
  });
  setUserData(updatedEmployees);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  alert("Task has been successfully given to " + asignTo);
  setTitle('');
  setDate('');
  setAsignTo('');
  setCategory('');
  setDescription('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [task]);
  
  

 
  const Submithandeler=(e)=>{
    e.preventDefault()
    console.log("Submiteddddddd")
    // console.log("Title:"+title+"\nDate:"+date+"\nAsign To:"+asignTo+"\nCategory:"+category+"\nDescription:"+description)
    setTask({active: false, newTask: true, completed: false, failed: false ,title,date,category,description});
  }
  // console.log(task)

  return (
    <form onSubmit={(e)=>{
      Submithandeler(e)
    }} className='flex w-full  gap-24'>
        <div className='flex flex-col flex-1/2 gap-3'>
        <div><label >Text Title</label> <br />
        <input  onChange={(e)=>{setTitle(e.target.value)}} value={title} placeholder='Make a UI Design' className='outline-none w-full px-3.5 py-1.5 border border-[#595b5d] mt-1  bg-[#16151a] rounded-[10px] placeholder:text-[#656567] text-[#e5e5e5] ' type="text" />
        </div>
        <div><label htmlFor="">Date</label> <br />
        <input  onChange={(e)=>{setDate(e.target.value)}} value={date} className='outline-none w-full px-3.5 py-1.5 border border-[#595b5d] mt-1  bg-[#16151a] rounded-[10px] placeholder:text-[#656567] text-[#e5e5e5] ' type="date" />
        </div>
        <div><label htmlFor="">Asign To</label> <br />
        <datalist id='mydatalist'>
          {data.map((ele)=>{
            return(
              <option value={ele.firstname} key={ele.id}/>
            )
})}
        </datalist>
        <input required list="mydatalist"  onChange={(e)=>{setAsignTo(e.target.value)}} value={asignTo} placeholder='Employee name' className='outline-none w-full px-3.5 py-1.5 border border-[#595b5d] mt-1  bg-[#16151a] rounded-[10px] placeholder:text-[#656567] text-[#e5e5e5] ' type="text" /> 
        </div>
        <div><label htmlFor="">Category</label> <br />
        <input  onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder='design, dev, etc' className='outline-none w-full px-3.5 py-1.5 border border-[#595b5d] mt-1  bg-[#16151a] rounded-[10px] placeholder:text-[#656567] text-[#e5e5e5] ' type="text" /> 
        </div>
        </div>
        <div className='flex-1/2 flex flex-col justify-between gap-12 '>
            <div className='h-full' >

            <label htmlFor="">Description</label><br />
            <textarea required onChange={(e)=>{setDescription(e.target.value)}} value={description}  className='outline-none w-full px-3.5 py-1.5 border border-[#595b5d] mt-1  bg-[#16151a] rounded-[10px] placeholder:text-[#656567] text-[#e5e5e5]                   flex flex-col h-full '></textarea>
            </div>
            <button className='font-semibold bg-[#ea8e4e] text-[#e5e5e5] grow-0 float-end py-1 w-full text-center rounded-sm' type='submit'>Create Task</button>

        </div>
      </form>
  )
}

export default Form
