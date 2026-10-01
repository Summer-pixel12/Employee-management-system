import { useContext } from 'react'
import styles from './task.module.css'
import { AuthContext } from '../../../../context/AuthProvider'

const FailedEmployeeTask = ({index}) => {
  const [data,setData,user,setUser,adminData,setAdminData,showEmployeeData,setShowEmployeeData,specificEmployee,setSpecificEmployee]=useContext(AuthContext)

   const convertToCompleted=()=>{
    const temp=[...data];
    temp[specificEmployee].tasks[index].completed=true;
    temp[specificEmployee].tasks[index].failed=false;
    temp[specificEmployee].taskNumbers.completed=temp[specificEmployee].taskNumbers.completed+1
    temp[specificEmployee].taskNumbers.failed=temp[specificEmployee].taskNumbers.failed-1
    setData(temp)
  }
   const convertToActive=()=>{
    const temp=[...data];
    temp[specificEmployee].tasks[index].active=true;
    temp[specificEmployee].tasks[index].failed=false;
    temp[specificEmployee].taskNumbers.active=temp[specificEmployee].taskNumbers.active+1
    temp[specificEmployee].taskNumbers.failed=temp[specificEmployee].taskNumbers.failed-1
    setData(temp)
  }

  return (
     <div  className={`${styles.card} ${styles.failed} `} >
                 <div className={styles.top} >
                   <div> {data[specificEmployee].tasks[index].category} </div>
                   <div>{data[specificEmployee].tasks[index].taskdate}</div>
                 </div>
                 <div className={styles.mid} >
                   <div className={styles.title} >{data[specificEmployee].tasks[index].tasktitle}</div>
                   <div className={styles.desc} >{data[specificEmployee].tasks[index].taskdescription}</div>  
                 </div>
                 <div className={styles.btn} >
                     <button onClick={()=>{convertToCompleted()}} >Mark as Completed</button>
                     <button onClick={()=>{convertToActive()}} >Mark as Active</button>
                 </div>
                 <div className={styles.bottom} >
                   Failed Task
                 </div>
               </div>
  )
}

export default FailedEmployeeTask