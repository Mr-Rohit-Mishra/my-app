
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import{BrowserRouter,Routes,Route,}from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
  }

  
  const DarkMode = ()=>{
    setMode('dark');
    showAlert("Dark mode Has Been Enabled","success");
  }

  const LightMode = ()=>{
    setMode('light');
    showAlert("Light mode Has Been Enabled","success");
  }
  return (
    <>
      <BrowserRouter>
        <Header mode={mode} LightMode={LightMode} DarkMode={DarkMode}/>
        <Alert alert={alert}/>

          <Routes>
            <Route exact path="/" element={<Main formheading="Submit Your Details To Check Availability" head2="Change your text to Uppercase" mode={mode} LightMode={LightMode} DarkMode={DarkMode}/>}/>
            <Route exact path="/About" element={<About mode={mode} LightMode={LightMode} DarkMode={DarkMode}/>}/>
          </Routes>

        <Footer mode={mode} LightMode={LightMode} DarkMode={DarkMode}/>
      </BrowserRouter>
    </>
  );
}

export default App;
