import React, {useEffect} from 'react';
import styles from './aboutus.module.css';
import "@fontsource/montserrat";

const AboutUs = () => {
  useEffect(() => {
    const aboutUsSection = document.getElementById('aboutUs-section');
    if (aboutUsSection) {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
}, []);
    return (
        <div id="aboutus-section" className={styles.aboutusContainer}>
        <div className={styles.title}>O nas</div>
        <div className={styles.details}>
  <h1>Dach R Serwis</h1>
  <h1>Twoje Zaufane Źródło Profesjonalnych Usług Dekarskich i Ciesielskich</h1>
  <p>Z dumą przedstawiamy firmę Dach R Serwis, która od ponad 20 lat dostarcza najwyższej jakości usługi dekarskie i ciesielskie. Nasza firma łączy w sobie doświadczenie, precyzję oraz pasję do wykonywania prac na najwyższym poziomie. Dzięki naszemu zaangażowaniu i indywidualnemu podejściu do każdego projektu, zyskaliśmy zaufanie setek klientów.</p>
  <h2>Dlaczego Warto Wybrać Dach R Serwis</h2>
  <div className={styles.box_container}>
  <div className={styles.box_experience}>
    <div className={styles.box_description}>DOŚWIADCZENIE</div>
    <div className={styles.box_content}>20 lat w branży dekarskiej i ciesielskiej</div>
    </div>
  <div className={styles.box_quality}>
    <div className={styles.box_description}>JAKOŚĆ</div>
    <div className={styles.box_content}>Stosowanie najlepszych matreriałów i najnowszej technologii</div>
    </div>
  <div className={styles.box_professionalism}>
    <div className={styles.box_description}>PROFESJONALIZM</div>
    <div className={styles.box_content}>Zespół wykwalifikowanych specjalistów, którzy dbają o każdy detal</div>
    </div>
  <div className={styles.box_trust}>
    <div className={styles.box_description}>ZAUFANIE</div>
    <div className={styles.box_content}>Setki zadowolonych klientów i udanych realizacji</div>
    </div>
</div>

  <p>Zapraszamy do współpracy z naszą firmą – zaufanym partnerem w dziedzinie usług dekarskich i ciesielskich.</p>
  <p> Skontaktuj się z nami już dziś za pomocą formularza na stronie lub przez zakładkę "KONTAKT", aby uzyskać darmową wycenę i dowiedzieć się więcej o naszej ofercie.</p>
  <h2 className={styles.over}>Twój dach jest w dobrych rękach!</h2>
</div>

        </div>
    );
};

export default AboutUs;