import { LocalConsultaRepository } from "../repositories/LocalConsultaRepository";
import { MockEmailService } from "../services/MockEmailService";
import { CrearConsultaUseCase } from "@/application/use-cases/CrearConsultaUseCase";

class Container {
  private readonly _consultaRepository = new LocalConsultaRepository();
  private readonly _emailService = new MockEmailService();

  /**
   * Resolves the CrearConsultaUseCase with its required dependencies injected
   */
  public getCrearConsultaUseCase(): CrearConsultaUseCase {
    return new CrearConsultaUseCase(this._consultaRepository, this._emailService);
  }

  /**
   * Resolves the repository instance directly (useful for displaying listings/verifications)
   */
  public getConsultaRepository(): LocalConsultaRepository {
    return this._consultaRepository;
  }
}

// Single instance for app-wide dependency injection
export const container = new Container();
