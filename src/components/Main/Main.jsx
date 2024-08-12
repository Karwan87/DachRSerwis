import React, {useEffect, useState} from "react";
import styles from './main.module.css';
import mobileLogo from '../../pictures/DachRserwis desktop LOGO.jpg';
import tabletLogo from '../../pictures/DachRserwis desktop LOGO.jpg';
import desktopLogo from '../../pictures/DachRserwis desktop LOGO.jpg';
import "@fontsource/montserrat";

const Main = () => {
    const [logo, setLogo] = useState(mobileLogo);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const opacityThreshold = 100; // Próg scrollowania w pikselach

    const updateLogo = () => {
    const width = window.innerWidth;
    if (width <768) {
        setLogo(mobileLogo);
    } else if (width <1280) {
        setLogo(tabletLogo);
    } else {
        setLogo(desktopLogo)
    }
};

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newOpacity = Math.max(0.3, 1 - (scrollPosition / opacityThreshold) * 0.7);
        setScrollOpacity(newOpacity);
    };

useEffect(() => {
    updateLogo();
    window.addEventListener('resize', updateLogo);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('resize', updateLogo);
    // window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo" className={styles.logo} style={{opacity: scrollOpacity}}/>
        </div>
    );
};

export default Main