
//* Importo Hooks y ReactGA (Google Anlytics)
import {useState, useEffect, Suspense, lazy } from "react"
import ReactGA from 'react-ga'
//* REACT-ROUTER-DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//* #######################
//* ##### STYLESHEETS #####
//* #######################
import "./assets/css/normalize.css"
import "./assets/css/header.css"
import "./assets/css/home.css"
import "./assets/css/learn.css"
import "./assets/css/learnCourse.css"
import "./assets/css/about.css"
import "./assets/css/contact.css"
import "./assets/css/faqPage.css"
import "./assets/css/footer.css"
import "./assets/css/whatsappButton.css"
import "./assets/css/investments.css"
import "./assets/css/terms.css"
import "./assets/css/investmentDetail.css"
import "./assets/css/404NotFound.css"

//* ### COMPONENTS ###
import Header from "./components/Header"

/* import WhatsappButton from './components/WhatsappButton' */
import Footer from "./components/Footer/Footer"

//* DATA
import metaData from "./data/metaData"

//* Lazy Loading de las páginas
const Home = lazy(()=> import('./pages/Home'))
const Investments= lazy(()=>import('./pages/Investments'))
const InvestmentDetail = lazy(()=> import("./pages/InvestmentDetail"))
const Learn = lazy(()=> import("./pages/Learn"))
const LearnCourse = lazy(()=> import("./pages/LearnCourse"))
const About = lazy(()=> import('./pages/About'))
const Contact = lazy(()=> import('./pages/Contact'))
const Faq = lazy(()=> import("./pages/Faq"))
const Error404 = lazy(()=> import('./pages/Error404'))
const Terms = lazy(()=> import("./pages/Terms"))
const InvestmentPlatform = lazy(()=> import("./pages/InvestmentPlatform"))
const InversorGuide = lazy(()=> import("./pages/InversorGuide"))
const CookiesPolitics = lazy(()=> import("./pages/CookiesPolitics"))
export default function App() {

  const [articles,setArticles]=useState([])
  const [learnArticles,setLearnArticles]=useState([])
  const [blogArticles,setBlogArticles]=useState([])
  const [investments,setInvestments]=useState([])
  const routesList =[
    {
      component: <Home metaData={metaData.home}  list={articles} setList={setArticles} investments={investments} setInvestments={setInvestments} />,
      path: "/"
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
      component: <Investments list={articles} setList={setArticles} investments={investments} setInvestments={setInvestments} metaData={metaData.investments} />,
      path: "/inmuebles"
    },
    {
      component: <InvestmentDetail list={articles} setList={setArticles} investments={investments} setInvestments={setInvestments} metaData={metaData.investmentDetail} />,
      path: "/inmuebles/:id"
    },
    {
      component: <Learn list={articles} metaData={metaData.blog} setList={setArticles} learnArticles={blogArticles} setLearnArticles={setBlogArticles} />,
      path: "/blog"
    },
    {
      component: <LearnCourse list={articles} setList={setArticles} metaData={metaData.blogArticle} learnArticles={blogArticles} setLearnArticles={setBlogArticles} />,
      path: "/blog/:id"
    },
    {
      component: <About metaData={metaData.about} />,
      path: "/sobre-nosotros"
    },
    {
      component: <Contact metaData={metaData.contact} />,
      path: "/contacto"
    },
    {
      component: <Faq metaData={metaData.faq} />,
      path: "/ayuda"
    },
    {
      component: <Terms metaData={metaData.terms} />,
      path: "/terminos-y-condiciones"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/*"
    },
    {
      component: <InvestmentPlatform />,
      path: "/plataforma-de-inversiones"
    },
    {
      component: <InversorGuide metaData={metaData.inversorGuide} />,
      path: "/guia-del-inversor"
    },
    {
      component: <CookiesPolitics metaData={metaData.cookiesPolitics} />,
      path: "/politica-de-cookies"
    }
  ]
  useEffect(() => {
    ReactGA.initialize('G-ZHYMQ1QR1B')
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Suspense fallback={<div className="loading">Cargando...</div>}>
      <BrowserRouter>

        <Header />
          <Routes>
            {routesList.map((route, key) => { return (<Route key={key} path={route.path} element={route.component} />)})}
          </Routes>
        {/* <WhatsappButton /> */}

        <Footer />

      </BrowserRouter>
    </Suspense>
  )
}