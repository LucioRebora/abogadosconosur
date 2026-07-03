import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Bottom Bar Info Pillars from Images */}
      <div className={styles.pillarsSection}>
        <div className={`${styles.pillarsContainer} container`}>
          <div className={styles.pillar} id="pillar-instagram">
            <div className={styles.iconCircle}>
              {/* Paper Plane SVG Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.svgIcon}
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
            <div className={styles.pillarContent}>
              <span className={styles.pillarTitle}>CONSULTAS POR DM</span>
              <span className={styles.pillarDesc}>EN INSTAGRAM</span>
            </div>
          </div>

          <div className={styles.pillar} id="pillar-location">
            <div className={styles.iconCircle}>
              {/* Location Pin SVG Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.svgIcon}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className={styles.pillarContent}>
              <span className={styles.pillarTitle}>CIUDAD AUTÓNOMA</span>
              <span className={styles.pillarDesc}>DE BUENOS AIRES</span>
            </div>
          </div>

          <div className={styles.pillar} id="pillar-confidential">
            <div className={styles.iconCircle}>
              {/* Lock SVG Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.svgIcon}
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className={styles.pillarContent}>
              <span className={styles.pillarTitle}>ATENCIÓN CONFIDENCIAL</span>
              <span className={styles.pillarDesc}>Y PROFESIONAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className={styles.mainFooter}>
        <div className={`${styles.mainFooterContainer} container`}>
          <div className={styles.footerBrand}>
            <span className={styles.brandTitle}>CONO SUR</span>
            <span className={styles.brandSubtitle}>ABOGADOS</span>
            <p className={styles.brandTagline}>
              Acercando el derecho a las personas de una manera clara, seria y accesible.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.sectionTitle}>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#areas">Áreas de Práctica</a></li>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#contacto">Realizar Consulta</a></li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <p>
              E-mail:{" "}
              <a href="mailto:conosurabogados@gmail.com" className={styles.emailLink}>
                conosurabogados@gmail.com
              </a>
            </p>
            <p>Atención: Lunes a Viernes</p>
            <p>Zona: Capital Federal y GBA</p>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className={styles.copyrightBar}>
        <div className={`${styles.copyrightContainer} container`}>
          <p>© {currentYear} Cono Sur Abogados. Todos los derechos reservados.</p>
          <div className={styles.disclaimerRow}>
            <p className={styles.legalDisclaimer}>
              La información brindada en esta web es de carácter orientativo y no constituye asesoramiento legal formal.
            </p>
            <p className={styles.developerCredit}>
              Desarrollado con <span className={styles.heart}>♥</span> por{" "}
              <a href="https://itia.ar" target="_blank" rel="noopener noreferrer" className={styles.developerLink}>
                itia.ar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
