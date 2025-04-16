import React, { useState } from 'react';

import './components/App.css'
import Navbar from './components/Navbar.jsx';
import Section1 from './components/Section1.jsx';
import  Section2 from './components/Section2.jsx';
import Section3 from './components/Section3.jsx';
import Section4 from './components/Section4.jsx';
import Section5 from './components/Section5.jsx';
import Section6 from './components/Section6.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return<>
   <Navbar/>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   <Section6/>
   <Footer/> 
  </> 


}

export default App;
   