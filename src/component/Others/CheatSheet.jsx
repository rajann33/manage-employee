import React from 'react'

const CheatSheet = () => {
    return (
        <div id='CheatSheet' className='hidden inset-0 absolute  h-full overflow-visible  w-full  backdrop-blur-sm bg-black/60'>
            <div className='text-white sticky top-0 py-10 px-5 md:px-20 font-semibold h-screen overflow-y-scroll scrollbar-hide'>
                <h3 className='text-xl md:text-3xl  pb-5 font-semibold text-center'>Welcome to Employee Management System's CheatSheet</h3>
                <h4 className='text-center  md:text-xl'>User Email and Password:</h4>
                <table className='max-md:text-[13px] border-4 text-center w-full mb-5'>
                    <tr>
                        <th className='border-2 p-1'>User</th>
                        <th className='border-2 p-1'>Name</th>
                        <th className='border-2 p-1'>Email</th>
                        <th className='border-2 p-1'>Password</th>
                    </tr>
                    <tr>
                        <td className='border p-1'>Admin</td>
                        <td className='border p-1'>Admin</td>
                        <td className='border p-1'>me@me.com</td>
                        <td rowSpan={6} className='text-xl md:text-2xl'>123</td>
                    </tr>
                    <tr>
                        <td className='border p-1'>Employee 1</td>
                        <td className='border p-1'>सुरज</td>
                        <td className='border p-1'>e1@e.c</td>
                    </tr>
                    <tr>
                        <td className='border p-1'>Employee 2</td>
                        <td className='border p-1'>राजन</td>
                        <td className='border p-1'>e2@e.c</td>
                    </tr>
                    <tr>
                        <td className='border p-1'>Employee 3</td>
                        <td className='border p-1'>बिबेक</td>
                        <td className='border p-1'>e3@e.c</td>
                    </tr>
                    <tr>
                        <td className='border p-1'>Employee 4</td>
                        <td className='border p-1'>अनुजा</td>
                        <td className='border p-1'>e4@e.c</td>
                    </tr>
                    <tr>
                        <td className='border p-1'>Employee 5</td>
                        <td className='border p-1'>सीता</td>
                        <td className='border p-1'>e5@e.c</td>
                    </tr>
                </table>

                <h3 className='md:text-xl pb-2'>Some Important Notes:</h3>
                <div className='max-md:text-[14px]'>
                <ul className='list-disc'>
                    <li className='list-none pb-1'>Using Admin Id:</li>
                    <li>You can give task to anyone</li>
                    <li>You can find the number of specific task that is given to specific Employee and see their progress</li>
                </ul>
                 <ul className='list-disc py-1'>
                    <li className='list-none'>Using Employee Id:</li>
                    <li>You can see new task and its details that is given by Admin</li>
                    <li>You can Accept the task and clicking will automatically change the data in localstorage</li>
                    <li>You can Set Failed or Completed to that task after You Accept it.</li>
                </ul>
                <br />
                  <ul className='list-disc'>
                    <li>The data is stored in localstorage of your computer so any changes on task will be limited to your computer.</li>
                    <li>You Open one account and close the application then again reopen the application: it will load that account automatically with all changes being stored.</li>
                    <li>To <span className='font-bold'>Resore Previous Data</span> of Employees: Just Hover on 'Need Help?'-that will be always with you at right bottom corner-  and At upper side 'Reset' and 'CheatSheet' options will appear. Now click on "Reset All". And You will be directed to Login Page With every thing being reset.</li>
                </ul>
</div>





                <span className='absolute top-5 right-5 cursor-pointer bg-white text-black hover:transition hover:bg-gray-700 hover:text-white duration-200 rounded-sm px-5  ' onClick={()=>{
        const Cheat= document.getElementById('CheatSheet');
        Cheat.classList.add('hidden');
  }}>Close</span>
            </div>
        </div>
    )
}

export default CheatSheet
