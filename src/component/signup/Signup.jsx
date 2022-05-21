import React,{useState} from 'react'
import fire from '../config/firebase';
// import {addDoc,collection} from "firebase/firestore"
// import { async } from '@firebase/util';
const Signup = () => {
    // const [userData, setUserData]=useState({});
    // const [userArray, setUserArray]=useState([]);
    
//   const   handleSubmit =(e)=>{
//         e.preventDefault();
//         const {name,value}=e.target;
//         setUserData(s=>( {...s,[name]:value } ));
//     }
//    const  addToArray= async (e)=>{
//         e.preventDefault();
//         let obj={
//             email:userData.email,
//             password:userData.password,
//         }
        
//         try {
//             const docRef = await addDoc(collection(firestore,"users"),obj);
//             console.log("i am docRef",docRef);
//             console.log("i am docRef id",docRef.id);
//         } catch (error) {
//             console.log("i am error",error);
//         }
//             setUserArray([...userArray,obj]);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("")

const  handleSubmit = (event) =>{
  event.preventDefault()
  console.log(email,password);
  // Firebase
  fire.auth().createUserWithEmailAndPassword(email,password)
  .then(()=>{
    alert("User Created")
  }).catch(()=>{
    alert("Error Occured or user not created")
  })
    }

    return (<>
        {/* <div className='container col-3'>
            <form className='form-controls'>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={ctaHandler}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={ctaHandler}/>
                </div>
              
                <button type="submit" className="btn btn-primary" onClick={addToArray}>Submit</button>
            </form>

        </div> */}

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
          Signup
        </button>
      </form>
    </div>
    </>
    )
}

export default Signup