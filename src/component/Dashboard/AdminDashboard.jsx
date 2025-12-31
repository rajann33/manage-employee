import React from 'react'
import Header from '../Others/Header'
import Form from '../Others/Form'
import Task from '../Others/Task'

const AdminDashboard = (e) => {
  
  return (
    <div className='bg-[#18181c] text-[#595b5d]'>
      <Header name={'Admin'} user={e.user}/>
      <div className='bg-[#1a1c20] px-8 mt-3  pt-4 pb-7 shadow-[inset_0_6px_6px_-6px_#909090]'>
      <Form loaded={e.loaded}/>
      </div>
        <div className='bg-[#18181c] px-10  py-10  text-center shadow-[inset_0_10px_10px_-10px_#000]'>
        <div className='bg-[#212327] font-semibold  text-white rounded-sm px-4 py-1 flex justify-between shadow-[inset_0_6px_6px_-6px_#858585,0_10px_10px_-10px_#070707] '>
            <h2 className='w-1/5'>Name</h2>
            <h2 className='w-1/5'>New Task</h2>
            <h2 className='w-1/5'>Completed</h2>
            <h2 className='w-1/5'>Active</h2>
            <h2 className='w-1/5'>Failed</h2>
                   </div>
                   <div className=' text-white overflow-auto scrollbar-hide space-y-2.5 mt-3 ' >
<Task/>
                   </div>
        </div>
    </div>
  )
}

export default AdminDashboard
