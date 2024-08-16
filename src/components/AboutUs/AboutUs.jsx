import React, {useEffect} from 'react';
import styles from './aboutus.module.css';
import "@fontsource/montserrat";

const AboutUs = () => {
  useEffect(() => {
    const AboutUsSection = document.getElementById('AboutUsSection');
    if (AboutUsSection) {
      AboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
}, []);
    return (
        <div id="about-us-section" className={styles.aboutusContainer}>
        <div className={styles.title}>
          <h1>O nas</h1></div>
        <div className={styles.details}>
 <h2>Dach R Serwis</h2>
  <div className={styles.content}>
    <h3>Twoje Zaufane Źródło Profesjonalnych Usług Dekarskich i Ciesielskich</h3>
  <p>Z dumą przedstawiamy firmę Dach R Serwis, która od ponad 20 lat dostarcza najwyższej jakości usługi dekarskie i ciesielskie. Nasza firma łączy w sobie doświadczenie, precyzję oraz pasję do wykonywania prac na najwyższym poziomie. Dzięki naszemu zaangażowaniu i indywidualnemu podejściu do każdego projektu, zyskaliśmy zaufanie setek klientów.</p>
  </div>
  <h3>Dlaczego Warto Wybrać Dach R Serwis</h3>
  <div className={styles.aboutus_container}>
  <div className={styles.box}>
    <div className={styles.box_title}>DOŚWIADCZENIE</div>
    <div className={styles.box_content}>
    <div className={styles.experience_icon}>icon.svg
    </div>
    <div className={styles.box_description}>20 lat w branży dekarskiej i ciesielskiej</div>
    </div>
    </div>
    <div className={styles.box}>
    <div className={styles.box_title}>JAKOŚĆ</div>
    <div className={styles.box_content}>
    <div className={styles.quality_icon}>icon.svg
    </div>
    <div className={styles.box_description}>Stosowanie najlepszych matreriałów i najnowszej technologii</div>
    </div>
    </div>
    <div className={styles.box}>
    <div className={styles.box_title}>PROFESJONALIZM</div>
    <div className={styles.box_content}>
    <div className={styles.professionalism_icon}>icon.svg
    </div>
    <div className={styles.box_description}>Zespół wykwalifikowanych specjalistów, którzy dbają o każdy detal</div>
    </div>
    </div>
    <div className={styles.box}>
    <div className={styles.box_title}>ZAUFANIE</div>
    <div className={styles.box_content}>
    <div className={styles.trust_icon}>icon.svg
    </div>
    <div className={styles.box_description}>Setki zadowolonych klientów i udanych realizacji</div>
    </div>
    </div>
</div>
<div className={styles.content}>
  <p>Zapraszamy do współpracy z naszą firmą – zaufanym partnerem w dziedzinie usług dekarskich i ciesielskich.</p>
  <p> Skontaktuj się z nami już dziś za pomocą formularza na stronie lub przez zakładkę "KONTAKT", aby uzyskać darmową wycenę i dowiedzieć się więcej o naszej ofercie.</p>
  <h2 className={styles.over}>Twój dach jest w dobrych rękach!</h2>
</div></div>

        </div>
    );
};

export default AboutUs;