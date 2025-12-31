import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './component/Auth/Login'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import { AuthContext } from './Context/AuthProvider'
import { setLocalStorage, getLocalStorage } from './Utils/LocalStorage'
import LoadingBar from 'react-top-loading-bar'
import CheatSheet from './component/Others/CheatSheet'

function App() {
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState()
  const [EmpName, setEmpName] = useState()
  const [userDataa] = useContext(AuthContext)

  useEffect(() => {
  //  localStorage.clear()
  //  setLocalStorage()
    getLocalStorage()
    console.log("Hello")
     const loggedInUser = localStorage.getItem("loggedInUser")
     if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setEmpName(userData.name)
        setProgress(100)
     }
  },[])

  // console.log(authData)


  const handleLogin = (email, password) => {
    if (email == 'me@me.com' && password == 123){ 
        setUser('admin'); localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', name:'Sir' })); setProgress(100) 
       } else if (userDataa) {
      const employee = userDataa.find((e) => email == e.email && e.password == password); 
      if (employee) {
         setUser("Employee"); 
         setEmpName(employee.firstname)
         localStorage.setItem('loggedInUser', JSON.stringify({ role:'Employee',name:employee.firstname}))
         setProgress(100)
        }else {
         alert('Invalid User Or Password') 
         setProgress(100)
        }
      }else {
         alert('Something Went Wrong') 
         setProgress(100)
        }
      }


    return (
      <div className="relative">
           <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        {  !user ?  
        <Login loaded={setProgress}  handleLogin={handleLogin} /> 
        : user == 'admin' ?  
        <AdminDashboard user={setUser} loaded={setProgress} /> 
        : user == 'Employee' ? 
        <EmployeeDashboard data={EmpName} user={setUser} loaded={setProgress}/>
        :<div className='text-black bg-white'>Whats New Has Came...?</div>}

        <button className='group absolute bottom-1 right-1 bg-linear-to-r from-red-700 via-indigo-600 to-cyan-500 font-semibold bg-clip-text  text-transparent ' >
    <div className=' hidden group-hover:block group-focus:block text-left'>
      <div className='cursor-pointer' onClick={()=>{localStorage.clear();
   setLocalStorage();window.location.reload()}}>Reset All</div>
      <div onClick={()=>{
        const Cheat= document.getElementById('CheatSheet');
        Cheat.classList.remove('hidden');
      }} className='cursor-pointer' >CheatSheet</div>
   </div>
    <span className='cursor-default '>Need Help ?</span>
   </button>
      <CheatSheet/>
      </div>
    )
  }

  export default App
