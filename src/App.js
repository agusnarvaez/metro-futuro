// Importo React
import React from "react";

import Header from "./components/Header";
import Home from './pages/Home.js'
/* import Investments from "./pages/Investments";
import InvestmentDetail from "./pages/InvestmentDetail"; */
import Learn from "./pages/Learn";
import LearnCourse from "./pages/LearnCourse";
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from "./pages/Faq";
import Error404 from './pages/Error404';
import Footer from "./components/Footer";
import "./assets/css/normalize.css"
import "./assets/css/styles.css"

// React Router Dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importo lista de proyectos
import investmentsList from './data/investmentsList.js';
import coursesList from "./data/coursesList";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home investmentsList={investmentsList} />} />
        {/* <Route path='/investments/list' element={<Investments investmentsList={investmentsList} />} />
        <Route path='/investments/:id' element={<InvestmentDetail investmentsList={investmentsList} />} />*/}
        <Route path='/learn' element={<Learn coursesList={coursesList}/>} />
        <Route path='/learn/:id' element={<LearnCourse coursesList={coursesList}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Faq />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}