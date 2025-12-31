import React from 'react'

const FaildTask = (e) => {
  return (
                <div id={e.data.title} className='relative p-4 bg-linear-to-b  from-red-300 border border-t-0 border-[#bfbfbf]  rounded-xl shrink-0  w-[320px] min-h-[250px]  '>
                    <div className='flex justify-between'> <p className='px-1 bg-red-600 rounded-xs shadow'>{e.data.category}</p> <p className='text-[#141414]'>{e.data.date}</p>
                    </div>
                    <div className='pt-5'><p className='text-xl font-bold pb-1 text-[#141414]'>{e.data.title}</p>
                        <div className='mb-10'>{e.data.description}</div></div>
                         <div className='absolute bottom-5 flex justify-between gap-5 pt-2'>
<button className='bg-lime-300 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow'>Request Change</button> <button className='bg-emerald-300 text-[#141414] text-xs font-semibold px-3 py-1 rounded-sm shadow '>Request Forward</button>
                        </div>
                </div>
  )
}

export default FaildTask
