import React,{useState} from 'react'
import  fire from '../config/firebase';
export default function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // firebase 
    const  handleSubmit = (event) =>{
      event.preventDefault()
      console.log(email,password);
      fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
        alert("Login success")
      }).catch((error)=>{
        alert("No user exist | ",error);
      })
    }
  
    const Logout = ()=>{
      fire.auth().signOut();
      alert("Log out Successfully")
    }


  return (
  
  
  <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(ev)=>setEmail(ev.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(ev)=>setPassword(ev.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <button onClick={Logout} type="button" style={{marginTop:"10px"}} className="btn btn-primary">
          Log Out
        </button>
    </div>
  
    
  )
}

