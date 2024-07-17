import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
        <div className={styles.title}>Nagłówek</div>
        <div className={styles.title}>Nr telefonu z odnośnikiem oraz adres mailowy z odnośnikiem</div>
        </div>
    );
};

export default Header;