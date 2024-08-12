import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Main from './Main/Main'
import Navigation from './Navigation/Navigation'
import Portfolio from './Portfolio/Portfolio'
import AboutUs from './AboutUs/AboutUs'
import Services from './Services/Services'
import Contact from './Contact/Contact'
// import Footer from './Footer/Footer';
import Header from './Header/Header';
import "@fontsource/montserrat";
import styles from './VAR/styles.module.css'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  return (
    <Router basename="/dachrserwis">
    <div>
      <ScrollToTop/>
      <Main/>
      <div className={styles.layout}>
      <Header/>
      <Navigation/>
            </div>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact /> } />
            </Routes>
           
            {/* <Footer/> */}
    </div></Router>
  );
};
