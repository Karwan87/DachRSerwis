import React, {useEffect} from 'react';
import styles from './contact.module.css';
import "@fontsource/montserrat";
const Contact = () => {
    useEffect(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <div className={styles.contactContainer}>
     
        <div id="contact-section" className={styles.contactSection}>
        <div className={styles.title}>
            <h1>Kontakt</h1>
            <p>DACH RSERWIS ROMAN SZELIGA</p>
            <p>Jawor 59-400</p>
            <p>ul. Wrocławska 29 A m. 2</p>
            <p>tel. 605 104 555</p>
            <p>e-mail: <a href="mailto:dachrserwis@o2.pl">dachrserwis@o2.pl</a></p>
        </div>
    </div></div>
    
    );
};

export default Contact;