import { useContext, useState } from 'react'
import Header from '../Employee/Header.jsx'
import styles from './admin.module.css'
import AllTasks from './AllTasks.jsx'
import { AuthContext } from '../../../context/AuthProvider.jsx'
const Admin = (props) => {

  const [data,setData,user,setUser] = useContext(AuthContext);

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const submitHandler= (e)=>{
    e.preventDefault();
    const prev=[...data]
    const newTask={active: false, newtask: true, completed: false, failed: false,
      tasktitle:taskTitle , taskdescription: taskDescription,
       taskdate: date, category: category  }

       data.map((e,idx)=>{
          if(e.firstname===assignTo){
          prev[idx].tasks.push(newTask);
          prev[idx].taskNumbers.newtask=prev[idx].taskNumbers.newtask+1
          }
       })
        setData(prev);       
       setDate('')
       setCategory('')
       setTaskTitle('')
       setTaskDescription('')
       setAssignTo('')
  }

  return (
    <div className={styles.admin} >
        <div style={{width:'100%',height:'12%'}} ><Header/></div>


        <div className={styles.createTask}>
            <h1 style={{textAlign:'center',color:'white'}} >Create Task</h1>
            <form  onSubmit={(e)=>{submitHandler(e)}} >
                <div className={styles.leftbox}>
                <h2>Date</h2>
                <input onChange={(e)=>{setDate(e.target.value)}} value={date} type="date" />
                <h2>Category</h2>
                <input onChange={(e)=>{setCategory(e.target.value)}} value={category} type="text" placeholder='Enter Category' />
                <h2>Task Title</h2>
                <input onChange={(e)=>{setTaskTitle(e.target.value)}} value={taskTitle} type="text" placeholder='Enter the title' />
                
                <h2>Assign To</h2>
                <input onChange={(e)=>{setAssignTo(e.target.value)}} value={assignTo} type="text" placeholder='Employee Name' />
                
                </div>
                <div className={styles.rightbox}>
                <h2>Description</h2>
                <textarea onChange={(e)=>{setTaskDescription(e.target.value)}} value={taskDescription} rows={4} ></textarea>
                <button>Create Task</button>
                </div>
            </form>
        </div >

        <div  className={styles.taskShowing} style={{width:'100%'}} >
            <AllTasks data1={props.data} />
        </div>

    </div>
  )
}

export default Admin