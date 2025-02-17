import Home from './pages/Home';
import Personal from './pages/Personal'
import './App.css';
import {  NavLink, Route, Routes } from 'react-router-dom';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Preview from './pages/Preview';
import Projects1 from './pages/Projects1'

import Certificates from './pages/Certificates';
import Experiance from './pages/Experience';
function App() {
  return (
    
    <>
    <div className='header'>
      <img src='icon.png' alt='icon' width='50px' height='50px'></img>
     
      <div className='links'>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='personal'>Personal</NavLink>
        <NavLink to='education'>Education</NavLink>
        <NavLink to='experience'>Experiance</NavLink>
        <NavLink to='skill'>Skills</NavLink>
        <NavLink to='certificate'>Certificates</NavLink>
       
        <NavLink to='preview'>Preview</NavLink>

        </div>
        </div>

        <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route path='/personal' Component={Personal}></Route>
        <Route path='/education' Component={Education}></Route>
        <Route path='/experience' Component={Experiance}></Route>
        <Route path='/skill' Component={Skills}></Route>
        <Route path='/project' Component={Projects1}></Route>
        <Route path='/certificate' Component={Certificates}></Route>
        
        <Route path='/preview' Component={Preview}></Route>
        </Routes>
    </>
  );
}

export default App;
