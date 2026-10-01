import { useContext } from 'react'
import styles from './admin.module.css'
import { AuthContext } from '../../../context/AuthProvider'

const AllTasks = ({data1}) => {
  const [data,setData,user,setUser,adminData,setAdminData,showEmployeeData,setShowEmployeeData,specificEmployee,setSpecificEmployee]=useContext(AuthContext)

  const employeeTask=(idx)=>{
    setShowEmployeeData(true); 
    localStorage.setItem('showEmployeeDataForAdmin','true')
    localStorage.setItem('specificEmployee',JSON.stringify(idx))
    setSpecificEmployee(idx)
    window.scrollTo(0,0)
  }
  return (
    <div className={styles.alltasks} >
      <div  className={`${styles.task} ${styles.markings}`} >
            <div></div>
            <div>Name</div>
            <div>Active Tasks</div>
            <div>New Tasks</div>
            <div>Completed Tasks</div>
            <div>Failed Tasks</div>
      </div>
        {data1.map((e,idx)=>{
          return (<div key={idx} className={`${styles.task} ${styles.numbers} `} >
            <button style={{height:'80%'}} onClick={()=>{employeeTask(idx)}}>show Tasks</button>
            <div>{e.firstname}</div>
            <div>{e.taskNumbers.active}</div>
            <div>{e.taskNumbers.newtask}</div>
            <div>{e.taskNumbers.completed}</div>
            <div>{e.taskNumbers.failed}</div>
            <hr />
          </div>)
        })}
    </div>
  )
}

export default AllTasks