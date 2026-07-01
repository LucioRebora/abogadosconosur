import React from "react";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <header className={styles.header} id="main-header">
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>
          <a href="#inicio" aria-label="Cono Sur Abogados - Inicio">
            <span className={styles.brandTitle}>CONO SUR</span>
            <div className={styles.brandSubtitle}>
              <span className={styles.line}></span>
              <span className={styles.subtitleText}>ABOGADOS</span>
              <span className={styles.line}></span>
            </div>
          </a>
        </div>
        
        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            <li>
              <a href="#inicio" className={styles.navLink}>Inicio</a>
            </li>
            <li>
              <a href="#areas" className={styles.navLink}>Áreas</a>
            </li>
            <li>
              <a href="#nosotros" className={styles.navLink}>Nosotros</a>
            </li>
            <li>
              <a href="#contacto" className={styles.navLink}>Consulta</a>
            </li>
          </ul>
        </nav>

        <div className={styles.cta}>
          <a href="#contacto" className={styles.ctaButton} id="nav-cta-btn">
            Escríbenos
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
