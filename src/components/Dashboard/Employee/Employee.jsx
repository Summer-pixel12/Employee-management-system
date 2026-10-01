import Header from "./Header"
import TaskList from "./TaskList"
import TaskNumbers from "./TaskNumbers"

const Employee = ({props}) => {
  return (
    <div style={{width:'100%',height:'100%'}} >
      <div style={{width:'100%',height:'12%'}} ><Header props={props} /></div>
      <div style={{width:'100%',height:'18%'}} ><TaskNumbers props={props} /></div>
      <div style={{width:'100%',height:'70%'}} ><TaskList props={props} /></div>
    </div>
  )
}

export default Employee