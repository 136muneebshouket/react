import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Menuitem.styles.scss';
// import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
export default function Menuitem({ title, imageUrl, size, history, linkUrl, match }) {
  const navigate= useNavigate();
 const Navigate = () =>{

  let login = localStorage.getItem('login')
    if(!login){
  navigate('signup')
    }
    else{
      navigate(linkUrl)
    }
 }
// const [link,setLink]=useState('')

// useEffect(() => {
//   let login = localStorage.getItem('login')
//       if(!login){
//         setLink('http://localhost:3000/signup')
//       }
//       else{
//         setLink(linkUrl)
//       }
// }, [])


  return (<>
    
     <div
    className={`${size} menu-item`}
   
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div onClick={Navigate} className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
       <span  className='subtitle'>SHOP NOW</span>
    </div>
  </div>
 </>
  )
}

