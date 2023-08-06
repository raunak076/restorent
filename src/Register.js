import React,{useState,useEffect} from 'react'
import "./register.css"

const Register =()=> {
let [count,setCount]=useState(true)
let [submit,setSubmit]=useState("next");
  const submitHandler=(e)=>{
    e.preventDefault();
    setCount(false)
   setSubmit("Submit")
    

  }
   const [uname,setUname]=useState("");
   const [upass,setUpass]=useState("");
  return (
    <div >
      <form  onSubmit={submitHandler}>
        <div className='form'>
          {count?<>
          <label className='lb' >Enter Username or Email</label>
       <input className='ip' type='text' value={uname} onChange={(e)=>{setUname(e.target.value)}} />
       </>
       :<>
       <label  className='lb'>Enter Password</label>
    <input className='ip' type='Password' value={upass} onChange={(e)=>{setUpass(e.target.value)}} />
    </>}
        
       <button  type='submit'>{submit}</button>
       </div>
       </form>
    </div>
  )
}

export default Register