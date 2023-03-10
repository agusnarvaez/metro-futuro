
//* Importo Hooks y ReactGA (Google Anlytics)
import {useState,useEffect} from "react";
import ReactGA from 'react-ga';
//* REACT-ROUTER-DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//* #######################
//* ##### STYLESHEETS #####
//* #######################
import "./assets/css/normalize.css"
import "./assets/css/header.css"
import "./assets/css/home.css";
import "./assets/css/learn.css";
import "./assets/css/learnCourse.css";
import "./assets/css/about.css";
import "./assets/css/contact.css";
import "./assets/css/faqPage.css";
import "./assets/css/footer.css";
import "./assets/css/whatsappButton.css";
import "./assets/css/investments.css";
import "./assets/css/terms.css";

//*TODO:INVESTMENTS
import "./assets/css/investmentDetail.css"
import "./assets/css/404NotFound.css"

//* ### COMPONENTS ###
import Header from "./components/Header";
import Home from './pages/Home.js'
import Investments from './pages/Investments';
import InvestmentDetail from "./pages/InvestmentDetail"; 
import Learn from "./pages/Learn";
import LearnCourse from "./pages/LearnCourse";
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from "./pages/Faq";
import Error404 from './pages/Error404';
import WhatsappButton from './components/WhatsappButton'
import Footer from "./components/Footer/Footer";
import Terms from "./pages/Terms";

//* DATA
import investmentsList from './data/investmentsList.js';
/* import blogArticles from "./data/blogArticles" */
import metaData from "./data/metaData";
/* import coursesList from "./data/coursesList"; */


export default function App() {
  
  const [articles,setArticles]=useState([])
  const [learnArticles,setLearnArticles]=useState([])
  const [blogArticles,setBlogArticles]=useState([])
  const [investments,setInvestments]=useState([])
  const routesList =[
    {
      component: <Home investmentsList={investmentsList} metaData={metaData.home} />,
      path: "/"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/*"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/aprende/*"
    },
    {
      component: <Learn list={articles} metaData={metaData.courses} setList={setArticles} learnArticles={learnArticles} setLearnArticles={setLearnArticles} />,
      path: "/aprende"
    },
    {
      component: <LearnCourse list={articles} setList={setArticles} metaData={metaData.course} learnArticles={learnArticles} setLearnArticles={setLearnArticles} />,
      path: "/aprende/:id"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/aprende/:id/*"
    },
    {
      component: <Investments list={articles} setList={setArticles} investments={investments} setInvestments={setInvestments} metaData={metaData.investments} />,
      path: "/inmuebles"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/inmuebles/*"
    },
    {
      component: <InvestmentDetail list={articles} setList={setArticles} investments={investments} setInvestments={setInvestments} metaData={metaData.investmentDetail} />,
      path: "/inmuebles/:id"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/inmuebles/:id/*"
    },
    {
      component: <Learn list={articles} metaData={metaData.blog} setList={setArticles} learnArticles={blogArticles} setLearnArticles={setBlogArticles} />,
      path: "/blog"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/blog/*"
    },
    {
      component: <LearnCourse list={articles} setList={setArticles} metaData={metaData.blogArticle} learnArticles={blogArticles} setLearnArticles={setBlogArticles} />,
      path: "/blog/:id"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/blog/:id/*"
    },
    {
      component: <Learn list={articles} setList={setArticles} metaData={metaData.blog} />,
      path: "/aprende"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/aprende/*"
    },
    {
      component: <LearnCourse list={articles} setList={setArticles} metaData={metaData.blogArticle} />,
      path: "/aprende/:id"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/aprende/:id/*"
    },
    {
      component: <About metaData={metaData.about} />,
      path: "/sobreNosotros"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/sobreNosotros/*"
    },
    {
      component: <Contact metaData={metaData.contact} />,
      path: "/contacto"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/contacto/*"
    },
    {
      component: <Faq metaData={metaData.faq} />,
      path: "/ayuda"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/ayuda/*"
    },
    {
      component: <Terms metaData={metaData.faq} />,
      path: "/terminosYCondiciones"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/terminosYCondiciones/*"
    }
  ]
  useEffect(() => {
    ReactGA.initialize('G-ZHYMQ1QR1B');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        {routesList.map((route, key) => { return (<Route key={key} path={route.path} element={route.component} />)})}
      </Routes>

      <WhatsappButton />

      <Footer />

    </BrowserRouter>
  );
}