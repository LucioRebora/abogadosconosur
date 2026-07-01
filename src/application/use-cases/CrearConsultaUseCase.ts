import { Consulta, ConsultaEntity, CreateConsultaInput } from "@/domain/entities/Consulta";
import { IConsultaRepository } from "../interfaces/IConsultaRepository";
import { IEmailService } from "../interfaces/IEmailService";

export class CrearConsultaUseCase {
  constructor(
    private readonly repository: IConsultaRepository,
    private readonly emailService: IEmailService
  ) {}

  /**
   * Executes the usecase to register a consultation.
   * Runs validation, saves to repository, and sends confirmation emails.
   */
  public async execute(input: CreateConsultaInput): Promise<Consulta> {
    // 1. Validate rules & construct entity inside the Domain boundary
    const consulta = ConsultaEntity.create(input);

    // 2. Persist the consultation in repository
    await this.repository.save(consulta);

    // 3. Dispatch an email notification to the firm
    await this.emailService.sendConsultationNotification(consulta);

    // 4. Return the finalized domain object
    return {
      id: consulta.id,
      nombre: consulta.nombre,
      email: consulta.email,
      telefono: consulta.telefono,
      area: consulta.area,
      mensaje: consulta.mensaje,
      createdAt: consulta.createdAt,
    };
  }
}
