import React from 'react'
import { useState } from "react";


export default function Form() {

    const [name, setName] = useState("");
    const [Value, setValue] = useState([]);
    const [Update,setUpdate]= useState(true);
    const [selectedid, setselectedid]= useState(null);


    const func = (event) => {
        event.preventDefault();
         if (!name) {
            alert("please enter some value");
        }

       const alldata = {id: new Date().getTime().toString() , data : name}
        setValue( [...Value, alldata])

        

        setName('');
    }
    


    const del = (index) => {
      
         const newtodos = Value.filter((item) =>{
             return index != item.id;
              
         });

        // const newtodos = [...Value];
        // newtodos.splice(index, 1);
        setValue(newtodos);


    }

    const edit = (id) => {
    let selectedvalue = Value.find((item) => {
        return item.id === id; 
    })
    console.log(selectedvalue);
    setUpdate(false);

      
        
    setName(selectedvalue.data);
    setselectedid(id);
       
    }

    const update = (event) => {
        event.preventDefault();
        console.log('update');
        setValue(Value.map((elem) =>{
             if(elem.id=== selectedid){
                return {...elem, data :name}

             }
                return elem;
        }))

        setName('');
        setUpdate(true);

    }


    
    return (
        <>
            <form className='form'>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
               { Update ? <button onClick={func}>showit</button> :

                 <button onClick={update}>update</button> 
               }
               
                
            </form>

            <div>
                {Value.map((item) => {
                    return (

                        <div key={item.id}>
                            <div>{item.data} <button onClick={() => del(item.id)}>delete</button>
                                <button onClick={() => edit(item.id)}>edit</button>


                            </div>
                        </div>

                    )
                }

                )}

            </div>
        </>
    )
}
