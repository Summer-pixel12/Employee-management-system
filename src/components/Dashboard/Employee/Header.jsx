import { useEffect, useState,useContext } from 'react';
import styles from './employee.module.css'
import { AuthContext } from '../../../context/AuthProvider.jsx'

const Header = ({props}) => {
  const [data,setData,user,setUser]=useContext(AuthContext);
  const logOutUser=()=>{
    localStorage.removeItem('loggedInUser');
    setUser(null)
  }
  const [userName, setUserName] = useState(null)
  useEffect(() => {
      if(!props){
    setUserName('Admin');
  }
  else{
    setUserName(props.firstname);
  }
  }, [])
  
  return (
    
    <div className={styles.header} style={{width:'100%',height:'100%'}} >
        <h1>Hello <br /> <span>{userName}👋</span></h1>
        <button onClick={()=>{logOutUser()}} className={styles.logOut} >Log Out</button>
    </div>
  )
}

export default Header
