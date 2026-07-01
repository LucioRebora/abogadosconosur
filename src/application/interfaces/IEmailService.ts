import { Consulta } from "@/domain/entities/Consulta";

export interface IEmailService {
  sendConsultationNotification(consulta: Consulta): Promise<void>;
}
