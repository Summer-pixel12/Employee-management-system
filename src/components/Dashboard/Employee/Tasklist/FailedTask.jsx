import styles from '../employee.module.css'


const FailedTask = ({props,idx}) => {
  return (
    <div className={styles.task}   >
              <div className={` ${styles.failedCard} ${styles.mainCard} `} >
                      <div className={styles.top} >
                        <div>{props.tasks[idx].category}</div>
                        <div>{props.tasks[idx].taskdate}</div>
                      </div>
                      <div className={styles.mid} >
                        <div className={styles.title} >{props.tasks[idx].tasktitle}</div>
                        <div className={styles.desc} >{props.tasks[idx].taskdescription}</div>
                        <button style={{color:'transparent',backgroundColor:'transparent'}} >Mark as Completed</button>
                      </div>
                      <div className={styles.bottom} >
                        Task Failed
                      </div>
                    </div>
            </div>
  )
}

export default FailedTask