import React from 'react'
import { useState } from "react";


export default function Form2() {

    const [name, setName] = useState("");
    const [Value, setValue] = useState([]);
    const [Update, setUpdate] = useState(true);
    const [selectedid, setselectedid] = useState(null);


    const func = (event) => {
        event.preventDefault();
        if (!name) {
            alert("please enter some value");
        }

        else {

            // const alldata = { id: new Date().getTime().toString(), data: name }
            setValue([...Value, name])

            setName('');
        }
    }



    const del = (index) => {

        // const newtodos = Value.filter((item) => {
        //     return index != item.id;

        // });

        const newtodos = [...Value];
        newtodos.splice(index, 1);
        setValue(newtodos);

    }

    const edit = (index) => {
        // let selectedvalue = Value.find((item) => {
        //     return item.id === id;
        // })
        // console.log(selectedvalue);

        // setUpdate(false);

        // setName(selectedvalue.data);

        // setselectedid(id);
        const newtodos = [...Value];

        setName(newtodos[index]);
        setValue(newtodos);
        setUpdate(false);
        setselectedid(newtodos[index]);

    }

    const update = (event) => {
        event.preventDefault();
        // console.log('update');
        // setValue(Value.map((elem) => {
        //     if (elem.id === selectedid) {
        //         return { ...elem, data: name }
        //     }
        //     return elem;
        // }))

        // setName('');

        // setUpdate(true);
        let selectedvalue = Value.findIndex((item) => {
            return item === selectedid;
        })
        console.log(selectedvalue);
        const newtodos = [...Value];
        newtodos[selectedvalue] = name;
        setValue(newtodos);
        setUpdate(true);
        setName('');
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
                {Update ? <button onClick={func}>showit</button> :

                    <button onClick={update}>update</button>
                }


            </form>

            <div>
                {Value.map((item, index) => {
                    return (

                        <div key={index}>
                            <div>{item} <button onClick={() => del(index)}>delete</button>
                                <button onClick={() => edit(index)}>edit</button>


                            </div>
                        </div>

                    )
                }

                )}

            </div>
        </>
    )
}
