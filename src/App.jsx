import { createContext, useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import Admin from './components/Dashboard/admin/Admin.jsx'
import Employee from './components/Dashboard/Employee/Employee.jsx'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
import EmployeeTasks from './components/Dashboard/admin/EmployeeTasks.jsx'
import SignUp from './components/auth/SignUp.jsx'

const App = () => {

  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [data,setData,user,setUser,adminData,setAdminData,showEmployeeData,setShowEmployeeData,specificEmployee,setSpecificEmployee,signUp,setSignUp]=useContext(AuthContext);

  useEffect(() => {  
    const loggedIn=JSON.parse(localStorage.getItem('loggedInUser'));
    
   if(loggedIn){
    setUser(loggedIn.role);
    setLoggedInUserData(loggedIn.data)
    if(loggedIn.role=='admin'){
      const showEmployeeDataForAdmin=JSON.parse(localStorage.getItem('showEmployeeDataForAdmin'))
      const specificEmployeeData=JSON.parse(localStorage.getItem('specificEmployee'))
      if(showEmployeeDataForAdmin){
        setShowEmployeeData(true)
        setSpecificEmployee(specificEmployeeData)
      }
    }
   }

  }, [])
    
  const handleLogin = (email, password) => {
    if (data) {
      const employee = data.find((e) => email == e.email && password == e.password);
      const adminLogin = adminData.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}));
      }
      else if(adminLogin){
        setUser('admin');
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}));
      }
      else {
        alert('Invalid Credentials');
      }
    }
  }
  

  return (      
      <div style={{width:'100%',height:'100%'}} >
        { !user?<Login handleLogin={handleLogin} />:'' }
        { user=='employee'?loggedInUserData? <Employee  props={loggedInUserData}  /> :'' :'' }
        {user=='admin' && !showEmployeeData ?<Admin data={data} />:''}
        {showEmployeeData?<EmployeeTasks/>:''}
        { signUp?<SignUp/>:'' }
      </div>
  )
}

export default App