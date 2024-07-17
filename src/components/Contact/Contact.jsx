import React from 'react';
import styles from './contact.module.css';
import "@fontsource/montserrat";
const Contact = () => {
    return (
        <div className={styles.contactContainer}>
        {/* <div className={styles.details}>Tutaj powinny znaleźć się wszelkie dane kontaktowe, adres, nazwa firmy, REGON, NIP, firma zaznaczona na mapie, itd.
            <p>Wszystko będzie wymagało dodatkowego stylowania - jak będą podane dane, to ładnie to obrobię.</p>
            <p>Do zakładki należy podpiąć jeszcze formularz kontaktowy, za pomocą którego można będzie wysłać maila z zapytaniem na konkretny adres mailowy.</p>
        </div> */}
        <div className={styles.contactSection}>
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