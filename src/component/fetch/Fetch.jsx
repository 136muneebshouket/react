import React,{useState} from 'react'
import { firestore } from '../config/firebase'
import { collection,  getDocs } from 'firebase/firestore'
const Fetch = () => {
    const [documents, setDocuments] = useState([]);



    const ctaFetchHandler= async ()=>{
        let documents = []
        try {
          const snapShots= await getDocs(collection(firestore,"users") )
          snapShots.forEach((item)=>{
            documents.push({ ...item.data(), id: item.id })
          })
        } catch (error) {
            console.log("i am error",error);
        }
        setDocuments(documents);
       
    }
  return (
    <div>
        <button className='btn btn-success' onClick={ctaFetchHandler}>fetch data from firestore </button>
        <div> 
                 {
                  documents.map((doc) => {
                    return (<p key={doc.id} className="text-success text-center">
                             Email: {doc.email} || password: {doc.password}
                    </p>

                     
                    )
                  })
                }
                
                </div>
                </div>
  )
}

export default Fetch