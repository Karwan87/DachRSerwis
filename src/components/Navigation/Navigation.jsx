import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import styles from './navigation.module.css';
import "@fontsource/montserrat"

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavVisible(true); 
      } else {
        setIsNavVisible(false); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const handleClick = (path, sectionId) => {
    if (location.pathname === path) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          console.log(`Navigated and found section: ${sectionId}`);
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log(`Navigated but section not found: ${sectionId}`);
        }
      }, 500);
    }

    if (window.innerWidth < 768) {
      toggleNavVisibility(); 
    }
  };
  
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

    return (<>
      <button onClick={toggleNavVisibility} className={styles.menuButton}>
        <div className={styles.menuIcon}>icon.svg</div></button>
      <nav className={`${styles.nav} ${isNavVisible ? styles.visible : ''}`}>
      <ul className={styles.navList}>
      <li className={styles.navItem}>
          <button onClick={() => handleClick('/aboutus', 'about-us-section')}>O nas</button>
        </li>
        <li className={styles.navItem}>
          <button onClick={() => handleClick('/services', 'services-section')}>Usługi</button>
        </li>
        <li className={styles.navItem}>
          <button onClick={() => handleClick('/portfolio', 'portfolio-section')}>Portfolio</button>
        </li>
        <li className={styles.navItem}>
          <button onClick={() => handleClick('/contact', 'contact-section')}>Kontakt</button>
        </li>
      </ul>
      </nav></>
    );
  };

export default Navigation;