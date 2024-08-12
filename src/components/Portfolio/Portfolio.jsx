import React, {useEffect} from 'react';
import styles from './portfolio.module.css';
// import spacePhoto from '../../pictures/no-photo.svg'

const Portfolio = () => {
  useEffect(() => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
}, []);
  return (
    <div id="portfolio-section" className={styles.portfolioContainer}>
      <div><h1>Portfolio</h1></div>
      <div className={styles.portfolioImage}>
      <img src="https://i.ibb.co/qJmvD1L/Dach1-1.jpg" alt="Dach1-1" />
      <img src="https://i.ibb.co/Nywh1g0/Dach2-2.jpg" alt="Dach2-2" />
      <img src="https://i.ibb.co/Nmq1FYJ/Dach3-3.jpg" alt="Dach3-3" />
      <img src="https://i.ibb.co/MZ1qTTq/Dach4-4.jpg" alt="Dach4-4" />
    </div></div>
  );
};

export default Portfolio;