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
/*
import Investments from "./pages/Investments";
import InvestmentDetail from "./pages/InvestmentDetail"; 
*/

//* DATA
import investmentsList from './data/investmentsList.js';
/* import coursesList from "./data/coursesList"; */
import blogArticles from "./data/blogArticles"


export default function App() {

  const routesList =[
    {
      component: <Home investmentsList={investmentsList} />,
      path: "/"
    },
    /* {
      component: <Learn list={coursesList} />,
      path: "/learn/courses"
    },
    {
      component: <LearnCourse list={coursesList} />,
      path: "/learn/courses/:id"
    }, */
    {
      component: <Learn list={blogArticles} />,
      path: "/learn/blog"
    },
    {
      component: <LearnCourse list={blogArticles} />,
      path: "/learn/blog/:id"
    },
    {
      component: <About />,
      path: "/about"
    },
    {
      component: <Contact />,
      path: "/contact"
    },
    {
      component: <Faq />,
      path: "/faq"
    },
    {
      component: <Error404 />,
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