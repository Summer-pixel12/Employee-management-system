import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import styles from './login.module.css'
const SignUp = () => {

      const [data,setData,user,setUser,adminData,setAdminData,showEmployeeData,setShowEmployeeData,specificEmployee,setSpecificEmployee,signUp,setSignUp]=useContext(AuthContext)
      const [firstName, setfirstName] = useState('')
      const [email1, setEmail1] = useState('')
      const [password1, setPassword1] = useState('')
      const [password2, setPassword2] = useState('')
      const [retype, setRetype] = useState('')
    
      const submitHandler=(e)=>{
        e.preventDefault();
        if(password1!=password2){
            setRetype('Password Mismatch')
        }
        else if(password1==''|| password2==''){
          setRetype("Password can't be empty")
        }
        else if(email1==''){
          setRetype("Email can't be empty")
        }
        else if(firstName==''){
          setRetype("FirstName can't be empty")
        }
        else{
          const temp=[...data];
          const myObj={id:1,
            firstname:firstName,
            email:email1,
            password:password1,
            taskNumbers:{active:0,newtask:0,completed:0,failed:0},
            tasks:[]
          }
          temp.push(myObj);
          setData(temp)
          setEmail1('')
          setfirstName('')
          setPassword1('')
          setPassword2('')
        }
      }

  return (
      <div className={styles.parent}>
              <div className={styles.heading} ><h1>Sign Up</h1></div>
              <form className={styles.myform} onSubmit={(e)=>{submitHandler(e)}} >
                  <input onChange={(e)=>{setfirstName(e.target.value)}} value={firstName}  type="text" placeholder='Enter FirstName' />
                  <input onChange={(e)=>{setEmail1(e.target.value)}} value={email1}  type="email" placeholder='Enter Email' />
                  <input onChange={(e)=>{setPassword1(e.target.value)}} value={password1}  type="password" placeholder='Enter password' />
                  <input onChange={(e)=>{setPassword2(e.target.value)}} value={password2}  type="password" placeholder='Retype password' />
                  <h2>{retype}</h2>
                  <button>Sign Up</button>
              </form>
                  <button onClick={()=>{setUser(null);setSignUp(false)}} className={styles.signUp}  >Login</button>
          </div>
  )
}

export default SignUp