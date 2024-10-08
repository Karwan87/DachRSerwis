import React, {useEffect} from 'react';
import styles from './services.module.css';
import "@fontsource/montserrat";

// Import the images using the correct paths
import Services1 from '../../pictures/Services2.jpg';
import Services2 from '../../pictures/Services1.jpg';

const Services = () => {
    useEffect(() => {
        const servicesSection = document.getElementById('servicesSection');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <div id="services-section" className={styles.servicesContainer}>
            <div  className={styles.title}><h1>Usługi</h1></div>
                <div className={styles.offers}>
                <div className={styles.offer_first}>
                    <img src={Services1} alt="Oferta Dekarska" className={styles.imageLeft} />
                    <div className={styles.text}>
                        <h2>Oferta Dekarska</h2>
                        <p>Nasza oferta dekarska obejmuje szeroki zakres usług, które zapewnią Twojemu dachowi trwałość, estetykę oraz bezpieczeństwo:</p>
                        <ul>
                            <li>Nowe Pokrycia Dachowe: Profesjonalny montaż nowych dachów, dostosowanych do Twoich potrzeb i preferencji.</li>
                            <li>Kompleksowe Remonty Starych Dachów: Odnowienie i modernizacja starych dachów, przywracając im pełną funkcjonalność i wygląd.</li>
                            <li>Murowanie Kominów: Solidne i trwałe kominy, które doskonale wpisują się w konstrukcję Twojego dachu.</li>
                            <li>Obróbki Blacharskie: Precyzyjne wykonanie obróbek blacharskich, które zabezpieczają dach przed wpływem czynników atmosferycznych.</li>
                            <li>Montaż Komunikacji Dachowej: Instalacja systemów komunikacji dachowej, umożliwiających bezpieczne poruszanie się po dachu.</li>
                            <li>Rynny (PCV, Tytan-Cynk, Miedź, Powlekanie): Kompleksowy montaż i serwis rynien, dostosowanych do Twojego domu.</li>
                            <li>Okna Dachowe (Velux, Fakro, Roto): Profesjonalny montaż okien dachowych, które zapewniają doskonałe doświetlenie wnętrz.</li>
                            <li>Instalacje Odgromowe: Skuteczne systemy odgromowe, które chronią dom przed uderzeniami piorunów.</li>
                            <li>Odśnieżanie Dachów: Bezpieczne i efektywne usługi odśnieżania dachów w sezonie zimowym.</li>
                        </ul>
                    </div>
                    </div>
               
                    <div className={styles.offer_second}>
                    <img src={Services2} alt="Oferta Ciesielska" className={styles.imageRight} />
                    <div className={styles.text}>
                        <h2>Oferta Ciesielska</h2>
                        <p>W naszej ofercie ciesielskiej znajdziesz usługi, które podkreślą charakter Twojej przestrzeni zewnętrznej i zapewnią jej funkcjonalność:</p>
                        <ul>
                            <li>Więźby Dachowe (Strugane lub do Zabudowy): Solidne konstrukcje dachowe, dostosowane do indywidualnych wymagań projektowych.</li>
                            <li>Podbitka: Estetyczne wykończenie dachów, które nada Twojemu domowi wyjątkowy wygląd.</li>
                            <li>Budowa Wiat i Altan: Przestrzenie do relaksu na świeżym powietrzu, idealne na każdą porę roku.</li>
                            <li>Zabudowa Tarasów i Balkonów: Funkcjonalne i estetyczne zabudowy, które zwiększą komfort użytkowania Twojej przestrzeni zewnętrznej.</li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Services;
