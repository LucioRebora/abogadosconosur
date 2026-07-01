import { Consulta } from "@/domain/entities/Consulta";
import { IEmailService } from "@/application/interfaces/IEmailService";

export class MockEmailService implements IEmailService {
  /**
   * Simulates sending an email notification to the firm's inbox
   */
  public async sendConsultationNotification(consulta: Consulta): Promise<void> {
    // Simulating network delay (800ms)
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("\n=================== MOCK EMAIL SERVICE ===================");
    console.log(`DESTINATARIO:   conosurabogados@gmail.com`);
    console.log(`ASUNTO:         Nueva consulta legal [Área: ${consulta.area.toUpperCase()}]`);
    console.log(`CLIENTE:        ${consulta.nombre} <${consulta.email}>`);
    if (consulta.telefono) {
      console.log(`TELÉFONO:       ${consulta.telefono}`);
    }
    console.log(`FECHA:          ${consulta.createdAt.toLocaleString()}`);
    console.log(`ID REGISTRO:    ${consulta.id}`);
    console.log("------------------ CONTENIDO DEL MENSAJE ------------------");
    console.log(consulta.mensaje);
    console.log("===========================================================\n");
  }
}
