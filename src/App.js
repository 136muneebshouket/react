// App.js

import React from 'react'
// import fire from './component/auth/Auth';
// import Header from "./component/header/Header";
// import Signup from "./component/signup/Signup";
// import Fetch from "./component/fetch/Fetch";
// import Delete from "./component/delete/Delete";
// import Auth from "./component/auth/Auth";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
import Registe from "./component/REGISTER/Registe";
function App() {

  
  return (<>
   
   
    {/* <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Signup/>} path="/"></Route>
    </Routes>
    {/* <Routes>
      <Route element={<Delete/>} path="/delete"></Route>
    </Routes>
    <Routes>
      <Route element={<Fetch/>} path="/fetch"></Route>
    </Routes> */}
    {/* <Routes>
      <Route element={<Auth/>} path="/login"></Route>
    </Routes>
    </BrowserRouter>   */} 
       <Registe/>
    </>
  )
 }

export default App
