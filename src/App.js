
import React from 'react';


import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
import {ContactForm} from './components/ContactForm';
import {Footer} from './components/Footer'; 
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const[isDarkMode, setIsDarkMode] = useState(false);


  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };



  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <NavBar />
      <Banner toggleTheme={toggleTheme} />
      <Skills/>
      <Projects/>
      <ProjectCard/>
      <ContactForm/>
     
      <Footer/>
 

      
    </div>
  );
}

export default App;
