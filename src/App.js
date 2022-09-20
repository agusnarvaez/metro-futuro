//* REACT

//* REACT-ROUTER-DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//* STYLESHEETS
import "./assets/css/normalize.css"
import "./assets/css/styles.css"
import "./assets/css/header.css"
import "./assets/css/home.css";
import "./assets/css/learn.css";
import "./assets/css/learnCourse.css";
import "./assets/css/about.css";
import "./assets/css/contact.css";
import "./assets/css/faqPage.css";
import "./assets/css/footer.css";

//*TODO:INVESTMENTS
import "./assets/css/investments.css";
import "./assets/css/investmentDetail.css"

import "./assets/css/404NotFound.css"

//* ### COMPONENTS ###
import Header from "./components/Header";
import Home from './pages/Home.js'
import Learn from "./pages/Learn";
import LearnCourse from "./pages/LearnCourse";
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from "./pages/Faq";
import Error404 from './pages/Error404';
import Footer from "./components/Footer/Footer";

//TODO: INVESTMENTS
/* TODO:
import Investments from "./pages/Investments";
import InvestmentDetail from "./pages/InvestmentDetail"; 
*/

//* DATA
import investmentsList from './data/investmentsList.js';
import blogArticles from "./data/blogArticles"
import metaData from "./data/metaData";
/* import coursesList from "./data/coursesList"; */


export default function App() {

  const routesList =[
    {
      component: <Home investmentsList={investmentsList} metaData={metaData.home} />,
      path: "/"
    },
    /* {
      component: <Learn list={coursesList} metaData={metaData} />,
      path: "/learn/courses"
    },
    {
      component: <LearnCourse list={coursesList} />,
      path: "/learn/courses/:id"
    }, */
    {
      component: <Learn list={blogArticles} metaData={metaData.blog} />,
      path: "/learn/blog"
    },
    {
      component: <LearnCourse list={blogArticles} metaData={metaData.blogArticle} />,
      path: "/learn/blog/:id"
    },
    {
      component: <About metaData={metaData.about} />,
      path: "/about"
    },
    {
      component: <Contact metaData={metaData.contact} />,
      path: "/contact"
    },
    {
      component: <Faq metaData={metaData.faq} />,
      path: "/help"
    },
    {
      component: <Error404 metaData={metaData.error404} />,
      path: "/*"
    }
  ]
  
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {routesList.map((route, key) => { return (<Route key={key} path={route.path} element={route.component} />)})}
        
      </Routes>


      <Footer />

    </BrowserRouter>
  );
}