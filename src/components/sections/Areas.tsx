import React from "react";
import styles from "./Areas.module.css";

interface AreaDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  services: string[];
}

export const Areas: React.FC = () => {
  const practiceAreas: AreaDetail[] = [
    {
      id: "areas-civil",
      title: "Derecho Civil",
      subtitle: "Asesoramiento y representación en tus relaciones jurídicas cotidianas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="5" y1="7" x2="19" y2="7" />
          <path d="M5 7c0 4 3 6 3 6s3-2 3-6M13 7c0 4 3 6 3 6s3-2 3-6" />
          <path d="M4 22h16" />
        </svg>
      ),
      services: [
        "Sucesiones y testamentos",
        "Redacción y revisión de contratos (alquileres, compraventas)",
        "Desalojos y reclamos de expensas",
        "Daños y perjuicios por incumplimientos",
        "Asesoramiento preventivo y mediaciones",
      ],
    },
    {
      id: "areas-transito",
      title: "Accidentes de Tránsito",
      subtitle: "Defendemos tus derechos y gestionamos tu indemnización frente a siniestros viales.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="8" rx="2" />
          <path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
          <circle cx="7" cy="15" r="1.5" />
          <circle cx="17" cy="15" r="1.5" />
        </svg>
      ),
      services: [
        "Reclamo administrativo y judicial contra terceros",
        "Asesoramiento y pericias mecánicas o médicas",
        "Reclamos por lesiones corporales e incapacidad",
        "Defensa de conductores y transportistas",
        "Negociaciones extrajudiciales",
      ],
    },
    {
      id: "areas-seguros",
      title: "Reclamos a Seguros",
      subtitle: "Que las compañías de seguros cumplan con las pólizas y coberturas acordadas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      services: [
        "Rechazos de siniestro injustificados",
        "Demoras excesivas en liquidaciones",
        "Cálculo y reclamo por destrucción total",
        "Seguro de vida y accidentes personales",
        "Mediaciones previas obligatorias",
      ],
    },
    {
      id: "areas-laboral",
      title: "Derecho Laboral",
      subtitle: "Protegemos tus derechos frente a conflictos en el ámbito de tu trabajo.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      services: [
        "Despidos injustificados o encubiertos",
        "Trabajo no registrado (en negro)",
        "Accidentes de trabajo y enfermedades profesionales (ART)",
        "Diferencias salariales y horas extras impagas",
        "Acoso laboral (mobbing) y maltrato",
      ],
    },
  ];

  return (
    <section className={styles.section} id="areas">
      <div className="container">
        
        <div className={styles.header}>
          <span className={styles.subtitle}>SERVICIOS LEGALES</span>
          <h2 className={styles.title}>NUESTRAS ÁREAS DE PRÁCTICA</h2>
          <span className={styles.dividerDiamond}>♦</span>
        </div>

        <div className={styles.grid}>
          {practiceAreas.map((area) => (
            <div key={area.id} id={area.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{area.icon}</div>
                <h3 className={styles.cardTitle}>{area.title}</h3>
              </div>
              <p className={styles.cardSubtitle}>{area.subtitle}</p>
              
              <div className={styles.servicesListWrapper}>
                <h4 className={styles.servicesListTitle}>¿En qué te ayudamos?</h4>
                <ul className={styles.servicesList}>
                  {area.services.map((service, idx) => (
                    <li key={idx} className={styles.serviceItem}>
                      <span className={styles.bulletGold}>♦</span>
                      <span className={styles.serviceText}>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.cardFooter}>
                <a href="#contacto" className={styles.cardLink}>
                  Consultar sobre esta área →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summaryBox}>
          <p className={styles.summaryText}>
            Cada caso es único y merece un análisis detallado. Si tu situación no se encuadra exactamente en estas áreas, podés realizarnos tu consulta igualmente para que podamos orientarte.
          </p>
        </div>

      </div>
    </section>
  );
};
export default Areas;
