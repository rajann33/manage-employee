import React from 'react'
import App from '../../App'
// import { setLocalStorage } from '../../Utils/LocalStorage'

const Header = (e) => {
  const LogoutUser =()=>{
   localStorage.setItem('loggedInUser',"")
  e.user("")
  }


  return (
    <div className='flex justify-between items-end px-10 py-2 text-white'>
      <div className='text-xl '>Hello <br /> <span className='text-2xl text-[#ea8e4e] font-semibold'>{e.name}👋</span></div>
      <button  onClick={LogoutUser} className=' bg-red-500 px-2 py-1 rounded-xs font-semibold' >LogOut</button>
    </div>
  )
}

export default Header
