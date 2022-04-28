import React,{ useState }  from 'react'
// import Values from "./Values";


export {Fullname, Cnic, Branchcode, Accountnumber, Initialdeposit };


let Fullname ;
let Cnic ;
let Branchcode ;
let Accountnumber ;
let Initialdeposit ;



export default function Form() {
  
  const [fullname,setfullname]=useState('');
  const [cnic,setcnic]=useState('');
  const [branchcode,setbranchcode]=useState('');
  const [accountnumber,setaccountnumber]=useState('');
  const [initialdeposit,setinitialdeposit]=useState('');

  const [value1,setvalue1]=useState('');
  const [value2,setvalue2]=useState('');
  const [value3,setvalue3]=useState('');
  const [value4,setvalue4]=useState('');
  const [value5,setvalue5]=useState('');
//   let Fullname =fullname;
//   let Cnic =cnic;
//   let Branchcode =branchcode;
//   let Accountnumber =accountnumber;
//   let Initialdeposit =initialdeposit;

 Fullname =value1;
 Cnic =value2;
 Branchcode =value3;
 Accountnumber =value4;
 Initialdeposit =value5;

  const show=(e)=>{
    e.preventDefault();

     setvalue1(fullname);
     setvalue2(cnic);
     setvalue3(branchcode);
     setvalue4(accountnumber);
     setvalue5(initialdeposit);

   


  }

 
  return (<>
    <div><h3>Form</h3></div>

  <form >
  <div><input  value={fullname} placeholder='fullname' type="text"  onChange={(e) => setfullname(e.target.value)}/></div>

   <div><input  value={cnic}   placeholder='cnic' maxLength={13} type="number"  onChange={(e) => setcnic(e.target.value)}/></div>

   <div> <input value={branchcode}    placeholder='branchcode' type="number" onChange={(e) => setbranchcode(e.target.value)}/></div>

  <div><input  value={accountnumber}   placeholder='account number' type="number"  onChange={(e) => setaccountnumber(e.target.value)}/></div>

  <div><input  value={initialdeposit}   placeholder='initial deposit' type="number" onChange={(e) => setinitialdeposit(e.target.value)}/></div>

   <button onClick={show} >create</button>
  </form>
    
    






  





    </>
  )
}
