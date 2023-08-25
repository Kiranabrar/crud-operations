import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
function App() {
  return (
    <>
    <Navbar/><div className='container mt-5'>
      
      <BrowserRouter basename='/crud-operations'>
      
       <Routes>
       
        <Route exact path="/" element={<Create/>}></Route>
        <Route exact path="/read" element={<Read/>}></Route>
        <Route exact path="/update" element={<Update/>}></Route>
        
       </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
