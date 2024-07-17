import React, {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import styles from './navigation.module.css';
import "@fontsource/montserrat"

const Navigation = () => {
  const [visible, setVisible] = useState(false); // Początkowo nawigacja jest niewidoczna
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); 
  const navigate = useNavigate();
  const location = useLocation();
  const scrollThreshold = 150; // Próg scrollowania w pikselach
  const hideThreshold = 550; // Próg wysokości w vh
 

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!hidden) { // Sprawdzamy, czy pasek nawigacji nie jest ukryty na stałe
      if (scrollTop > hideThreshold) {
        setVisible(false); // Scrollowanie w dół powyżej hideThreshold, ukryj nawigację
      } else if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        setVisible(true); // Scrollowanie w dół, pokaż nawigację
      } else if (scrollTop < lastScrollTop && scrollTop < scrollThreshold) {
        setVisible(false); // Scrollowanie w górę poniżej scrollThreshold, ukryj nawigację
      } else if (scrollTop < lastScrollTop && scrollTop < hideThreshold) {
        setVisible(true); // Scrollowanie w górę poniżej hideThreshold, pokaż nawigację
      }
    }

    setLastScrollTop(scrollTop); // Aktualizacja ostatniej pozycji scrollowania
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [hidden, lastScrollTop, scrollThreshold, hideThreshold]); // Dodanie dependencies aby useEffect uruchamiał się po zmianie hidden, lastScrollTop, scrollThreshold

useEffect(() => {
  // Resetuj ukrycie nawigacji na stałe po zmianie trasy
  setHidden(false);
}, [location]);

const handleClick = (path) => {
  setVisible(true); // Pokaż nawigację
  setHidden(true); // Ukryj nawigację na stałe
  navigate(path);
};

    return (
      <nav className={`${styles.nav} ${visible ? styles.visible : ''} ${hidden ? styles.hidden : ''}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <button onClick={() => handleClick('/aboutus')}>O nas</button>
        </li>
        <li className={styles.navItem}>
          <button onClick={() => handleClick('/services')}>Usługi</button>
        </li>
        <li className={styles.navItem}>
          <button onClick={() => handleClick('/portfolio')}>Portfolio</button>
        </li>
        <li className={styles.navItem}>
          <button onClick={() => handleClick('/contact')}>Kontakt</button>
        </li>
      </ul>
      </nav>
    );
  };

export default Navigation;