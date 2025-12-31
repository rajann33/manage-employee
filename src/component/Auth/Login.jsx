import { useState } from 'react';

const Login = (ee) => {
     const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
     const [passwordType, setPasswordType] = useState('password')
    const SubmitHandeller = (e)=>{
      ee.loaded(30);
      ee.handleLogin(Email,Password);
    e.preventDefault();
    console.log("Form Submmitted");
    // console.log("Id:" + Email+" \nPassword:" + Password)
    }
    
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-10 md:gap-16 pb-[5%] text-[#ebebeb]  bg-linear-to-br  from-[#9a9a9a] to-[#080808]'>
      <div className=' flex flex-col items-center gap-3 p-8 text-xl font-mono font-semibold text-white  bg-[#575757] shadow-[6px_6px_10px_#1a1a1a,-6px_-6px_10px_#fafafa]  rounded-4xl'>WELCOME</div>
      <div className='p-3' >
        <form onSubmit={(e)=>SubmitHandeller(e)}  className=' flex flex-col items-center gap-4  p-10   bg-[#575757] shadow-[6px_6px_10px_#0d0d0d,-6px_-6px_10px_#fafafa]  rounded-4xl'>
            <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} required placeholder='Enter Your Email' className=' w-full rounded-full px-4 py-2 bg-[#575757] shadow-[3px_3px_4px_#1f1f1f,-3px_-3px_4px_#fafafa] hover:shadow-[inset_3px_3px_4px_#1f1f1f,inset_-3px_-3px_4px_#fafafa] focus:shadow-[inset_3px_3px_4px_#1f1f1f,inset_-3px_-3px_4px_#fafafa] hover:text-white focus:text-black focus:bg-[#a2a2a2] focus:placeholder:text-gray-800   outline-none placeholder:text-[#bbbbbb]'  type="email" />
            <div className=' relative flex items-center'>
            <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder='Enter Your Password' className='peer w-full rounded-full pl-4 pr-8 py-2 bg-[#575757] shadow-[3px_3px_4px_#1f1f1f,-3px_-3px_4px_#fafafa] hover:shadow-[inset_3px_3px_4px_#1f1f1f,inset_-3px_-3px_4px_#fafafa] focus:shadow-[inset_3px_3px_4px_#1f1f1f,inset_-3px_-3px_4px_#fafafa] hover:text-white focus:text-black focus:bg-[#a2a2a2] focus:placeholder:text-gray-800 outline-none placeholder:text-[#bbbbbb]'  type={passwordType} />
             {passwordType=='password'?<i onClick={()=>setPasswordType('text')} className=' absolute right-2 cursor-pointer fa fa-eye text-[#bbbbbb] peer-focus:text-gray-800'></i> : <i onClick={()=>setPasswordType('password')} className=' absolute right-2 cursor-pointer fa fa-eye-slash text-[#bbbbbb] peer-focus:text-gray-800'></i>}
            </div>
            <button  className='mt-5 w-full rounded-full px-4 py-2 bg-[#575757] shadow-[3px_3px_4px_#1f1f1f,-3px_-3px_4px_#fafafa]  focus:shadow-[inset_3px_3px_4px_#1f1f1f,inset_-3px_-3px_4px_#fafafa] transition-shadow duration-300 outline-none font-semibold cursor-pointer' type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
