import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
function App() {
  return (
    <>
    
      
      <BrowserRouter basename='/crud-operations'>
      <Navbar/>
       <Routes>
       <div className='container mt-5'>
        <Route exact path="/" element={<Create/>}></Route>
        <Route  path="/read" element={<Read/>}></Route>
        <Route  path="/update" element={<Update/>}></Route>
        </div>
       </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
