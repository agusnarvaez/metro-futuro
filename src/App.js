// Importo React
import React from "react";

import Header from "./components/Header";
import Home from './pages/Home.js'
/* import Investments from "./pages/Investments";
import InvestmentDetail from "./pages/InvestmentDetail";
import Academy from "./pages/Academy"; */
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from "./pages/Faq";
import Error404 from './pages/Error404';
import Footer from "./components/Footer";
import "./assets/css/normalize.css"
import "./assets/css/styles.css"

// React Router Dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const investmentsList = [
    {
      id: 0,
      title:"Edificio Nita - 3A",
      cover:"../assets/images/projects/cadizCover.png",
      address: "Valencia 18",
      city: "Cadiz",
      country: "España",
      estimatedEarnings: "15%-18%",
      contractExpiration: "30/06/25",
      area: "47.8",
      areaValue: "$500"
    },
    {
      id: 1,
      title:"Edificio Nita - 3A",
      cover:"../assets/images/projects/nitaCover.png",
      address: "Valencia 18",
      city: "Cadiz",
      country: "España",
      estimatedEarnings: "15%-18%",
      contractExpiration: "30/06/25",
      area: "47.8",
      areaValue: "$500"
    },
    {
      id: 2,
      title:"Edificio Nota - 2A",
      cover:"../assets/images/projects/nitaCover.png",
      address: "Colon 18",
      city: "Cadiz",
      country: "España",
      estimatedEarnings: "15%-18%",
      contractExpiration: "30/06/25",
      area: "47.8",
      areaValue: "$500"
    }]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home investmentsList={investmentsList} />} />
        {/* <Route path='/investments/list' element={<Investments investmentsList={investmentsList} />} />
        <Route path='/investments/:id' element={<InvestmentDetail investmentsList={investmentsList} />} />
        <Route path='/academy' element={<Academy />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Faq />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
