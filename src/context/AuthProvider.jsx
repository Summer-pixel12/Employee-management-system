import  { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [showEmployeeData, setShowEmployeeData] = useState(false)
    const [user, setUser] = useState(null)
    const [data, setData] = useState(null)
    const [adminData, setAdminData] = useState(null)
    const [specificEmployee, setSpecificEmployee] = useState('')
    const [signUp, setSignUp] = useState(false)

    useEffect(() => {
        const dataInLocal=JSON.parse(localStorage.getItem('employees'));

        if(!dataInLocal){
          setLocalStorage();
          const {employees,admins}=getLocalStorage();
          setData(employees)
          setAdminData(admins)
        }
          else{
            const {admins}=getLocalStorage();
            setData(dataInLocal)
            setAdminData(admins)
          }
        },[])
        useEffect(() => {
          if(data!=null)
          {localStorage.setItem('employees',JSON.stringify(data))}         
        },[data])
           
    
  return (
    <div style={{width:'100%',height:'100%'}} >
        <AuthContext.Provider value={ [data,setData,user,setUser,adminData,setAdminData,showEmployeeData,setShowEmployeeData,specificEmployee,setSpecificEmployee,signUp,setSignUp] } >
            {children}
        </AuthContext.Provider>
    </div>
  )
}
export default AuthProvider