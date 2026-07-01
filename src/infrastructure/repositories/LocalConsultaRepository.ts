import { Consulta } from "@/domain/entities/Consulta";
import { IConsultaRepository } from "@/application/interfaces/IConsultaRepository";
import fs from "fs/promises";
import path from "path";

export class LocalConsultaRepository implements IConsultaRepository {
  private readonly filePath: string;

  constructor() {
    // Save to scratch directory in workspace for easy inspection
    this.filePath = path.join(process.cwd(), "scratch", "consultas.json");
  }

  /**
   * Helper to ensure the scratch folder exists
   */
  private async ensureDirectory(): Promise<void> {
    const dir = path.dirname(this.filePath);
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch {
      // Already exists or permission handled
    }
  }

  /**
   * Saves a new consultation to the JSON store
   */
  public async save(consulta: Consulta): Promise<void> {
    await this.ensureDirectory();
    const current = await this.findAll();
    current.push(consulta);
    await fs.writeFile(this.filePath, JSON.stringify(current, null, 2), "utf-8");
  }

  /**
   * Fetches all registered consultations from the JSON store
   */
  public async findAll(): Promise<Consulta[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data) as Consulta[];
    } catch {
      return [];
    }
  }
}
