import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
        <div className={styles.title}>Stopka</div>
        <div className={styles.title}>W stopce powinny być ikony z odnośnikami do social mediów, nazwa firmy i adres w jednym wierszu</div>
        </div>
    );
};

export default Footer;