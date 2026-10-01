import styles from './employee.module.css'
const TaskNumbers = ({props}) => {
  return (
    <div className={styles.taskinfo} style={{width:'100%',height:'100%'}} >
        <div style={{backgroundColor:'#679bf0'}} >{props.taskNumbers.newtask}<br/>New Task</div>
        <div style={{backgroundColor:'#67f082'}} >{props.taskNumbers.completed}<br/>Completed Task</div>
        <div style={{backgroundColor:'#e4f067',color:'black'}} >{props.taskNumbers.active}<br/>Accepted Task</div>
        <div style={{backgroundColor:'#f06e67'}} >{props.taskNumbers.failed}<br/>Failed Task</div>
    </div>
  )
}

export default TaskNumbers