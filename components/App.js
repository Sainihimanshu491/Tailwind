import React, { useState} from 'react'
//import logo from './logo.svg';
//import './App.css';
import {Navbar}from './components/Navbar';
//import Products from './components/Products';
import {TextForm} from './components/TextForm';
//import {Name} from './components/Name';
import {Alert} from './components/Alert';
import { Darkmode } from './components/Darkmode';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [Mode,setMode] = useState("light")
   const removeClasses =() =>{
    document.body.classList.remove('bg-primary') 
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const handleToogle = (cls)=>{
    removeClasses()
     document.body.classList.add('bg-'+cls)
    if(Mode ==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#192734"
    showAlert("Dark Mode Has Been Enabled","success")

    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enabled","success")
    }
  }
  const [alert,setAlert] = useState(null)
  const showAlert = (msg, type) =>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  return (
    <>
    <Router>
    <Navbar  con="Contact Us" suc="About Us" mode={Mode} toggle={handleToogle}/>
    <Alert alert = {alert} />
    <div className="container my-3" >
           <Routes>
          <Route path="/about" element ={ <Darkmode mode={Mode}/>}></Route>
          <Route path="/" element={<TextForm mode={Mode} showAlert ={showAlert}/>}>
          </Route>
        </Routes>     
    </div>
    {/*<div className="container my-3">*/}
    {/*<Name mode={Mode} />*/}
    </Router>
    </>
  );
}

export default App;
