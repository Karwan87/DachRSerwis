import React from 'react';
import styles from './header.module.css';
import "@fontsource/montserrat";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>R</div>
            <div className={styles.contact}>
            <div className={styles.mail_contact}>
        <div className={styles.title}>Email:  </div>
        <a href="mailto:dachrserwis@o2.pl" className={styles.link}>dachrserwis@o2.pl</a>
        </div>
        <div className={styles.phone_contact}>
        <div className={styles.title}>Kontakt:</div>
        <a href="tel:+48605104555" className={styles.link}>+48-605-104-555</a>
        </div>
        </div>
        </div>
    );
};

export default Header;