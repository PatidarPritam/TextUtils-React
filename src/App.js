import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';  // lecture 7
import React, { useState } from 'react'    //lecture 12

  // import {
  //  BrowserRouter as Router,
  //   Routes,
  //   Route,
  //   //Link
  // } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
     setTimeout(()=>{
      setAlert(null)
     },1000);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled!","success")
      document.title ="TextUtils -DarkMode";
      

    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled!","success")
      document.title ="TextUtils -LightMode"
    }
  }
  return (
    
     <> 
    
     {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
    
      {/* <Routes>
          {/* <Route exact path="/about" */}
           {/* element= {<About />}> */}
          {/* </Route> */} 
          {/* <Route path="/" element={ */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
           {/* }> */}
           {/* </Route> */}
     {/* </Routes>  */}
     </div>  
     {/* </Router> */}
      
     </>
  );
}
export default App;
