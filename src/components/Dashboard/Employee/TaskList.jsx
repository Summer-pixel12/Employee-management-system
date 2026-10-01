import styles from './employee.module.css'
import AcceptedTask from './Tasklist/AcceptedTask.jsx'
import FailedTask from './Tasklist/FailedTask.jsx'
import NewTask from './Tasklist/NewTask.jsx'
import CompletedTask from './Tasklist/CompletedTask.jsx'

const TaskList = ({props}) => {
  
  return (
    <div  className={styles.taskList} style={{width:'100%',height:'100%',backgroundColor:'#1c1c1c'}} >
        {props.tasks.map((e,idx)=>{
          if(e){
          if(e.failed)return( <FailedTask idx={idx} props={props} /> )
          if(e.completed)return( <CompletedTask idx={idx} props={props} /> )
          if(e.active)return( <AcceptedTask idx={idx} props={props} /> )
          if(e.newtask && !(e.active) )return( <NewTask idx={idx} props={props} /> )}
        })}
        
    </div>
  )
}

export default TaskList