import React from "react";
import styles from "./WhyUs.module.css";

export const WhyUs: React.FC = () => {
  const values = [
    {
      title: "Trato Cercano",
      desc: "Entendemos que detrás de cada consulta hay una persona. Te escuchamos sin prisas y te acompañamos paso a paso.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Orientación Clara",
      desc: "Traducimos el lenguaje técnico del derecho a explicaciones claras, sinceras y comprensibles para vos.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    },
    {
      title: "Análisis Riguroso",
      desc: "Cada caso merece ser evaluado con la máxima seriedad técnica para encontrar la mejor alternativa legal.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Solución de Conflictos",
      desc: "Buscamos soluciones eficientes. Priorizamos la vía del acuerdo, pero defendemos tus derechos en juicio si es necesario.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.section} id="nosotros">
      <div className="container">
        
        <div className={styles.grid}>
          {/* Left Column: Ethos, Welcome Text */}
          <div className={styles.introCol}>
            <span className={styles.label}>NUESTROS VALORES</span>
            <h2 className={styles.title}>NUESTRO COMPROMISO CON VOS</h2>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              Bienvenidos a <strong>Cono Sur Abogados</strong>. Este espacio nace con el objetivo de acercar el derecho a las personas de una manera clara, seria y accesible.
            </p>
            
            <p className={styles.paragraph}>
              Sabemos que muchas veces dar el primer paso para hacer una consulta genera dudas. Por eso, queremos que este sea un espacio donde puedas plantear tu situación y recibir una orientación clara sobre las alternativas disponibles.
            </p>
            
            <p className={styles.emphasis}>
              Cada caso merece ser escuchado y evaluado con seriedad.
            </p>
            
            <div className={styles.brandSign}>
              <span className={styles.firmName}>Cono Sur Abogados</span>
              <span className={styles.firmTag}>Estudio Jurídico</span>
            </div>
          </div>

          {/* Right Column: Key Pillars details */}
          <div className={styles.pillarsCol}>
            <div className={styles.pillarsGrid}>
              {values.map((val, idx) => (
                <div key={idx} className={styles.pillarCard}>
                  <div className={styles.iconBox}>{val.icon}</div>
                  <h3 className={styles.pillarTitle}>{val.title}</h3>
                  <p className={styles.pillarDesc}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default WhyUs;
