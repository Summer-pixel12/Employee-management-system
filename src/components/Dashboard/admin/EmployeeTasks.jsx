import { useContext } from 'react'
import  AcceptedEmployeeTask from './EmployeeTasks/AcceptedEmployeeTask'
import  CompletedEmployeeTask from './EmployeeTasks/CompletedEmployeeTask'
import  FailedEmployeeTask from './EmployeeTasks/FailedEmployeeTask'
import  NewEmployeeTask from './EmployeeTasks/NewEmployeeTask'
import { AuthContext } from '../../../context/AuthProvider'

const TaskList = () => {
  const [data,setData,user,setUser,adminData,setAdminData,showEmployeeData,setShowEmployeeData,specificEmployee,setSpecificEmployee]=useContext(AuthContext)
  const goback=()=>{
    setShowEmployeeData(false)
    localStorage.setItem('showEmployeeDataForAdmin','false')
  }
  return (
    <div  style={{width:'100%',minHeight:'100%',backgroundColor:'#1c1c1c'}} >
       <button style={{margin:'4px',padding:'4px',borderRadius:'5px'}} onClick={()=>{goback()}} >Go Back</button>
     <div style={{display:'flex',flexWrap:'wrap'}} >{  (data[specificEmployee].tasks).map((e,idx)=>{
        return(<div>
        {e.newtask?<NewEmployeeTask index={idx} />:''}
        {e.active?<AcceptedEmployeeTask index={idx} />:''}
        {e.failed?<FailedEmployeeTask index={idx} />:''}
        {e.completed?<CompletedEmployeeTask index={idx} />:''}
        </div>)}
        )}
        </div>
      
       
        
    </div>
  )
}

export default TaskList 