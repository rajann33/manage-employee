
const ChangeConform = (e) => {
  return (
    <div className='absolute bg-white/20 text-xl p-10 z-10 text-black backdrop-blur-sm inset-0 h-full w-full rounded-xl flex flex-col justify-center items-center text-center '><div>Are you Sure to make this task as"<span className='text-indigo-800 font-semibold'>{e.task}</span>"</div>
     <div className='flex justify-evenly pt-5 w-full'>
    <button className='bg-white hover:bg-black hover:text-white hover:transition duration-300 shadow-2xl rounded-sm px-7 text-[15px] py-1 font-semibold' onClick={()=>{e.handleChange();e.Progress(100)}}>Yes</button>
    <button className='bg-white hover:bg-black hover:text-white hover:transition duration-300 shadow-2xl rounded-sm px-7 text-[15px] py-1 font-semibold' onClick={()=>{e.conformed(false);e.Progress(100)}}>No</button>
    </div></div>
  )
}

export default ChangeConform
