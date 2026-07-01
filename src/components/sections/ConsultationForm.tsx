"use client";

import React, { useActionState, useEffect, useRef } from "react";
import styles from "./ConsultationForm.module.css";
import { submitConsultaAction, FormState } from "@/app/actions/consulta";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export const ConsultationForm: React.FC = () => {
  const [state, formAction, isPending] = useActionState(submitConsultaAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Clear form inputs on success
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <section className={styles.section} id="contacto">
      <div className="container">
        
        <div className={styles.grid}>
          {/* Left Column: Welcome / Informative block */}
          <div className={styles.infoCol}>
            <span className={styles.label}>CONTÁCTENOS</span>
            <h2 className={styles.title}>INICIÁ TU CONSULTA HOY</h2>
            <div className={styles.divider}></div>
            
            <p className={styles.text}>
              Sabemos que dar el primer paso genera dudas. Por eso, diseñamos este canal directo para que puedas plantear tu caso con total comodidad y confidencialidad.
            </p>

            <div className={styles.bullets}>
              <div className={styles.bulletItem}>
                <div className={styles.bulletCheck}>✓</div>
                <div>
                  <strong>Atención 100% Confidencial:</strong> Toda la información compartida está protegida por el secreto profesional.
                </div>
              </div>

              <div className={styles.bulletItem}>
                <div className={styles.bulletCheck}>✓</div>
                <div>
                  <strong>Análisis Personalizado:</strong> Evaluamos las particularidades de tu situación para sugerir alternativas reales.
                </div>
              </div>

              <div className={styles.bulletItem}>
                <div className={styles.bulletCheck}>✓</div>
                <div>
                  <strong>Orientación Sin Compromiso:</strong> Te brindamos claridad sobre la viabilidad jurídica de tu reclamo de entrada.
                </div>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <p className={styles.emailText}>
                O si lo preferís, envianos un correo directo a:
                <a href="mailto:conosurabogados@gmail.com" className={styles.email}>
                  conosurabogados@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formHeader}>Formulario de Consulta</h3>
              <p className={styles.formSubheader}>Todos los campos con (*) son requeridos.</p>

              {/* Status Banner */}
              {state.message && !state.success && (
                <div className={styles.errorBanner} role="alert">
                  <p>{state.message}</p>
                </div>
              )}

              {state.success ? (
                <div className={styles.successCard} role="status">
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className={styles.successTitle}>¡Consulta Recibida!</h4>
                  <p className={styles.successMessage}>{state.message}</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className={styles.resetButton}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form action={formAction} ref={formRef} className={styles.form}>
                  {/* Name field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre" className={styles.formLabel}>
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      defaultValue={state.data?.nombre || ""}
                      className={`${styles.formInput} ${state.errors?.nombre ? styles.inputError : ""}`}
                      placeholder="Ej. Juan Pérez"
                      required
                      disabled={isPending}
                    />
                    {state.errors?.nombre && (
                      <span className={styles.errorText}>{state.errors.nombre}</span>
                    )}
                  </div>

                  {/* Grid for Email & Phone */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={state.data?.email || ""}
                        className={`${styles.formInput} ${state.errors?.email ? styles.inputError : ""}`}
                        placeholder="Ej. juan@correo.com"
                        required
                        disabled={isPending}
                      />
                      {state.errors?.email && (
                        <span className={styles.errorText}>{state.errors.email}</span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="telefono" className={styles.formLabel}>
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        defaultValue={state.data?.telefono || ""}
                        className={`${styles.formInput} ${state.errors?.telefono ? styles.inputError : ""}`}
                        placeholder="Ej. 11 1234-5678"
                        disabled={isPending}
                      />
                      {state.errors?.telefono && (
                        <span className={styles.errorText}>{state.errors.telefono}</span>
                      )}
                    </div>
                  </div>

                  {/* Area select */}
                  <div className={styles.formGroup}>
                    <label htmlFor="area" className={styles.formLabel}>
                      Área Legal de Interés *
                    </label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="area"
                        name="area"
                        defaultValue={state.data?.area || ""}
                        className={`${styles.formSelect} ${state.errors?.area ? styles.inputError : ""}`}
                        required
                        disabled={isPending}
                      >
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="civil">Derecho Civil (Contratos, Sucesiones, Desalojos)</option>
                        <option value="transito">Accidentes de Tránsito (Choques, Daños)</option>
                        <option value="seguros">Reclamos a Seguros (Destrucción Total, Coberturas)</option>
                        <option value="laboral">Derecho Laboral (Despidos, ART, Trabajo en negro)</option>
                      </select>
                    </div>
                    {state.errors?.area && (
                      <span className={styles.errorText}>{state.errors.area}</span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="mensaje" className={styles.formLabel}>
                      Detalle de su consulta *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      defaultValue={state.data?.mensaje || ""}
                      rows={5}
                      className={`${styles.formTextarea} ${state.errors?.mensaje ? styles.inputError : ""}`}
                      placeholder="Describa brevemente los hechos de su situación..."
                      required
                      disabled={isPending}
                    />
                    {state.errors?.mensaje && (
                      <span className={styles.errorText}>{state.errors.mensaje}</span>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div className={styles.submitWrapper}>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      id="submit-consulta-btn"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <span className={styles.spinnerWrapper}>
                          <span className={styles.spinner}></span>
                          Procesando...
                        </span>
                      ) : (
                        "Enviar Consulta Legal"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default ConsultationForm;
