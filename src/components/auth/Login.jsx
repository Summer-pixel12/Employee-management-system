import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import styles from './login.module.css'
const Login = ({handleLogin}) => {

    const [data,setData,user,setUser,adminData,setAdminData,showEmployeeData,setShowEmployeeData,specificEmployee,setSpecificEmployee,signUp,setSignUp]=useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setEmail('');
        setPassword('');
    }

  return (
    <div className={styles.parent}>
        <div className={styles.heading} ><h1>Login</h1></div>
        <form className={styles.myform} onSubmit={(e)=>{submitHandler(e)}}>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter Email' />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter password' />
            <button>Log in</button>
        </form>
            <button className={styles.signUp} onClick={()=>{setSignUp(true);setUser('signUp')}} >Not a User? Sign Up Now</button>
    </div>
  )
}

export default Login