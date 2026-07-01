import { Consulta } from "@/domain/entities/Consulta";
import { IEmailService } from "@/application/interfaces/IEmailService";

export class HttpEmailService implements IEmailService {
  private readonly apiUrl = "https://send.itia.ar/api/send-email";
  private readonly apiKey = "api_key_36bf3b8d3c43241f972e18b2da4ef8d4f42cd47f31f4a1d0";
  private readonly templateId = "7e7a6329-9eb9-4c48-9921-aa94faa0317d";
  private readonly recipient = "luciorebora@gmail.com";

  public async sendConsultationNotification(consulta: Consulta): Promise<void> {
    const areaLabels: Record<string, string> = {
      civil: "Derecho Civil",
      laboral: "Derecho Laboral",
      transito: "Accidentes de Tránsito",
      seguros: "Reclamos a Seguros",
    };

    const areaLegal = areaLabels[consulta.area] || consulta.area;

    const payload = {
      templateId: this.templateId,
      recipient: this.recipient,
      data: {
        nombre: consulta.nombre,
        email: consulta.email,
        telefono: consulta.telefono || "-",
        area_legal: areaLegal,
        consulta: consulta.mensaje,
      },
    };

    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "No response body");
        throw new Error(`Status ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("HTTP Email Service Error:", error);
      throw new Error(error instanceof Error ? error.message : "Failed to send email");
    }
  }
}
