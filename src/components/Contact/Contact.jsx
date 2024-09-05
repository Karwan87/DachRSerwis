import React, {useEffect, useState} from 'react';
import styles from './contact.module.css';
import "@fontsource/montserrat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
      // Zarządzanie stanem formularza
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Możesz dodać obsługę formularza tutaj, np. wysyłanie danych do serwera
    console.log(formData);
  };
    useEffect(() => {
        const contactSection = document.getElementById('contactSection');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <div id="contact-section" className={styles.contactContainer}>
     
        <div className={styles.contactSection}>
        
        <div section id="contact" className={styles.title}>
          <h1>Napisz do nas</h1>
          <div className={styles.contactWrapper}>
            <form id="contact-form" className={styles.formHorizontal} role="form" onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <div className={styles.textArea}>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="name"
                    placeholder="NAME"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
        </div>
        <div className={styles.formGroup}>
                <div className={styles.textArea}>
                  <input
                    type="email"
                    className={styles.formControl}
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
    </div> 
    <div></div>
    <div className={styles.messageWindow}><textarea
                className={styles.formControl}
                rows="10"
                placeholder="MESSAGE"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <button className={styles.sendButton} id="submit" type="submit">
                <div className={styles.altSendButton}>
                  <FontAwesomeIcon icon={faPaperPlane} /><span className={styles.altSendButton}>WYŚLIJ WIADOMOŚĆ</span>
                </div>
              </button></div>
            </form>
            <div className= {styles.directContactContainer}>
              <ul className={styles.contactList}>
              <li className={styles.listItem}>
                  <div className={styles.icons}><FontAwesomeIcon icon={faAddressBook} /></div>
                  <span>DachRSerwis Roman Szeliga</span>
                </li>
                <li className={styles.listItem}>
                <div className={styles.icons}><FontAwesomeIcon icon={faMapMarkerAlt} /></div><span>59-400 Jawor, Polska</span>
                </li>
                <li className={styles.listItem}>
                <div className={styles.icons}> <FontAwesomeIcon icon={faPhone} /></div><span>
                    <a href="tel:+48605 104 555" title="Masz pytania? Zadzwoń">+48 605 104 555</a>
                  </span>
                </li>
                <li className={styles.listItem}>
                <div className={styles.icons}> <FontAwesomeIcon icon={faEnvelope} /></div><span>
                    <a href="mailto:#" title="Napisz, czego potrzebujesz, doradzimy.">dachrserwis@o2.pl</a>
                  </span>
                </li>
              </ul>
              <hr></hr>
              <div className={styles.copyright}>&copy; ALL OF THE RIGHTS RESERVED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Contact;