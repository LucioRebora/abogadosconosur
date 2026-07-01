import { Consulta } from "@/domain/entities/Consulta";

export interface IConsultaRepository {
  save(consulta: Consulta): Promise<void>;
  findAll(): Promise<Consulta[]>;
}
