import { useContext } from 'react';
import styles from '../employee.module.css'
import { AuthContext } from '../../../../context/AuthProvider';


const NewTask = ({props,idx}) => {

    const [data,setData,user,setUser]=useContext(AuthContext);

  
  
  const convertToAccepted=()=>{
    const prev=[...data]
    data.forEach((e,index)=>{
      if(e.firstname==props.firstname){
        if( !(prev[index].tasks[idx].active) )prev[index].taskNumbers.active=prev[index].taskNumbers.active+1
        prev[index].tasks[idx].active=true
        prev[index].tasks[idx].newtask=false
        prev[index].tasks[idx].failed=false
        prev[index].tasks[idx].completed=false
        prev[index].taskNumbers.newtask=prev[index].taskNumbers.newtask-1
      }
    })
    setData(prev);
  }
 
  return (
    <div className={styles.task}   >
          <div className={` ${styles.newCard} ${styles.mainCard} `} >
                  <div className={styles.top} >
                    <div>{props.tasks[idx].category}</div>
                    <div>{props.tasks[idx].taskdate}</div>
                  </div>
                  <div className={styles.mid} >
                    <div className={styles.title} >{props.tasks[idx].tasktitle}</div>
                    <div className={styles.desc} >{props.tasks[idx].taskdescription}</div>
                    <button onClick={()=>{convertToAccepted();}} >Accept Task</button>
                  </div>
                  <div className={styles.bottom} >
                    New Task
                  </div>
                </div>
        </div>
  )
}

export default NewTask