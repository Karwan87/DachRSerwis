import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import styles from './navigation.module.css';
import "@fontsource/montserrat"

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (path, sectionId) => {
    if (location.pathname === path) {
      // Jeśli już jesteśmy na odpowiedniej stronie, przewiń do sekcji
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Przekieruj do odpowiedniej strony i przewiń do sekcji po załadowaniu
      navigate(path);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Mała przerwa na załadowanie strony
    }
  };

    return (
      <nav className={styles.nav}>
      <ul className={styles.navList}>
      <li className={styles.navItem}>
          <button onClick={() => handleClick('/aboutus', 'aboutus-section')}>O nas</button>
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
      </nav>
    );
  };

export default Navigation;