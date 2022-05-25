import Header from "./components/Header";
import Home from './pages/Home.js'
import Investments from "./pages/Investments";
import InvestmentDetail from "./pages/InvestmentDetail"
import Academy from "./pages/Academy"
import About from './pages/About'
import Contact from './pages/Contact';
import NotFound404 from './pages/NotFound404';
import Footer from "./components/Footer";
import "./assets/css/normalize.css"
import "./assets/css/styles.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/investments/list' element={<Investments />} />
        <Route path='/investments/:id' element={<InvestmentDetail />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
