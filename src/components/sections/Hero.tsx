import React from "react";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.splitWrapper}>
        
        {/* LEFT COLUMN: Dark Green, Law Specialties and Brand Statement */}
        <div className={styles.leftCol}>
          <div className={styles.leftContent}>
            
            <div className={styles.statementBadge}>
              <span className={styles.badgeDiamond}>♦</span>
              <span className={styles.badgeText}>ESTUDIO JURÍDICO</span>
              <span className={styles.badgeDiamond}>♦</span>
            </div>

            <h1 className={styles.headline}>
              DERECHO, COMPROMISO<br />
              <span className={styles.goldText}>Y SOLUCIONES.</span>
            </h1>

            <p className={styles.description}>
              En <strong className={styles.strongGold}>Cono Sur Abogados</strong> brindamos asesoramiento y representación legal con profesionalismo, cercanía y dedicación.
            </p>

            <div className={styles.dividerLines}>
              <span className={styles.lineGold}></span>
              <span className={styles.diamondGold}>♦</span>
              <span className={styles.lineGold}></span>
            </div>

            {/* Quick Specialties Icons */}
            <div className={styles.specialtiesWrapper}>
              <h3 className={styles.specialtiesTitle}>NUESTRAS ÁREAS</h3>
              <div className={styles.specialtiesGrid}>
                <a href="#areas-civil" className={styles.specCard}>
                  <div className={styles.specIcon}>
                    {/* Scale SVG Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <line x1="5" y1="7" x2="19" y2="7" />
                      <path d="M5 7c0 4 3 6 3 6s3-2 3-6M13 7c0 4 3 6 3 6s3-2 3-6" />
                      <path d="M4 22h16" />
                    </svg>
                  </div>
                  <span className={styles.specLabel}>Derecho Civil</span>
                </a>

                <a href="#areas-transito" className={styles.specCard}>
                  <div className={styles.specIcon}>
                    {/* Car SVG Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="8" rx="2" />
                      <path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                      <circle cx="7" cy="15" r="1.5" />
                      <circle cx="17" cy="15" r="1.5" />
                    </svg>
                  </div>
                  <span className={styles.specLabel}>Accidentes de Tránsito</span>
                </a>

                <a href="#areas-seguros" className={styles.specCard}>
                  <div className={styles.specIcon}>
                    {/* Shield SVG Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className={styles.specLabel}>Reclamos a Seguros</span>
                </a>

                <a href="#areas-laboral" className={styles.specCard}>
                  <div className={styles.specIcon}>
                    {/* Briefcase SVG Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <span className={styles.specLabel}>Derecho Laboral</span>
                </a>
              </div>
            </div>

            {/* Defense Banner */}
            <div className={styles.defenseBanner}>
              <div className={styles.shieldCheckIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <p className={styles.defenseText}>
                Defendemos tus derechos con <strong className={styles.strongGold}>seriedad, transparencia</strong> y <strong className={styles.strongGold}>compromiso.</strong>
              </p>
            </div>

            {/* DM CTA */}
            <div className={styles.dmCTA}>
              <div className={styles.chatBubbleIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className={styles.dmText}>
                ESTAMOS PARA AYUDARTE. ESCRIBINOS POR DM.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Light Cream, Brand Logo and Core Pillars */}
        <div className={styles.rightCol}>
          <div className={styles.rightContent}>
            
            {/* Elegant Main Logo */}
            <div className={styles.brandContainer}>
              <span className={styles.brandTitle}>CONO SUR</span>
              <div className={styles.brandSubtitle}>
                <span className={styles.lineGoldRight}></span>
                <span className={styles.subtitleTextRight}>ABOGADOS</span>
                <span className={styles.lineGoldRight}></span>
              </div>
              <div className={styles.brandLogoDiamond}>♦</div>
            </div>

            <p className={styles.taglineRight}>
              Somos un estudio jurídico dedicado al asesoramiento y representación en diferentes áreas del derecho.
            </p>

            <div className={styles.dividerLinesRight}>
              <span className={styles.lineRight}></span>
              <span className={styles.diamondRight}>♦</span>
              <span className={styles.lineRight}></span>
            </div>

            {/* Pillars list (vertical) */}
            <div className={styles.pillarsList}>
              <div className={styles.pillarItem}>
                <div className={styles.pillarIcon}>
                  {/* User Profile SVG Icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.pillarText}>
                  <h4 className={styles.pillarTitleText}>ATENCIÓN PERSONALIZADA</h4>
                  <p className={styles.pillarDescText}>
                    Tratamiento cercano y soluciones adaptadas a cada caso.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <div className={styles.pillarIcon}>
                  {/* Shield Check SVG Icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                </div>
                <div className={styles.pillarText}>
                  <h4 className={styles.pillarTitleText}>COMPROMISO PROFESIONAL</h4>
                  <p className={styles.pillarDescText}>
                    Trabajamos con ética, responsabilidad y dedicación en cada etapa del proceso.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <div className={styles.pillarIcon}>
                  {/* Clock SVG Icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className={styles.pillarText}>
                  <h4 className={styles.pillarTitleText}>RESPUESTA RÁPIDA</h4>
                  <p className={styles.pillarDescText}>
                    Valoramos tu tiempo, respondemos y acompañamos en cada consulta.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Banner CTA */}
            <div className={styles.emailBannerContainer}>
              <a href="mailto:conosurabogados@gmail.com" className={styles.emailBanner} id="email-banner-btn">
                <div className={styles.envelopeCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className={styles.emailAddress}>CONOSURABOGADOS@GMAIL.COM</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
export default Hero;
