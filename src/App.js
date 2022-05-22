import './App.css';
import Header from './component/header/Header';
import Homepage from './component/pages/homepage/Homepage';
import Shoppage from './component/pages/shoppage/Shoppage';
import Signup from './component/signup/Signup'
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (<>
     <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Homepage/>} path="/"></Route>
    </Routes>
    <Routes>
      <Route element={<Shoppage/>} path="/shop"></Route>
    </Routes>
    <Routes>
      <Route element={<Signup/>} path="/signup"></Route>
    </Routes>
    </BrowserRouter>   
        </>
  );
}

export default App;
