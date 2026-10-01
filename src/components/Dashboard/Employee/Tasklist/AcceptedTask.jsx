import { useContext} from 'react';
import styles from '../employee.module.css'
import { AuthContext } from '../../../../context/AuthProvider';

const AcceptedTask = ({props,idx}) => {

  const [data,setData,user,setUser]=useContext(AuthContext);

  
  
  const convertToComplete=()=>{
    const prev=[...data]
    data.forEach((e,index)=>{
      if(e.firstname==props.firstname){
        prev[index].tasks[idx].active=false
        prev[index].tasks[idx].newtask=false
        prev[index].tasks[idx].failed=false
        prev[index].tasks[idx].completed=true
        prev[index].taskNumbers.active=prev[index].taskNumbers.active-1
        prev[index].taskNumbers.completed=prev[index].taskNumbers.completed+1
      }
    })
    setData(prev);
  }

  return (
    <div className={styles.task}  >
      <div className={` ${styles.acceptedCard} ${styles.mainCard} `}  >
        <div className={styles.top} >
          <div>{props.tasks[idx].category}</div>
          <div>{props.tasks[idx].taskdate}</div>
        </div>
        <div className={styles.mid} >
          <div className={styles.title} >{props.tasks[idx].tasktitle}</div>
          <div className={styles.desc} >{props.tasks[idx].taskdescription}</div>
          <button onClick={()=>{convertToComplete();}} >Mark as Completed</button>
        </div>
        <div className={styles.bottom} >
          Accepted Task
        </div>
      </div>
    </div>
  )
}

export default AcceptedTask