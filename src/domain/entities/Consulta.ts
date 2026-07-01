import { z } from "zod";

// Valid areas of practice
export const AreaPracticaSchema = z.enum(["civil", "laboral", "transito", "seguros"], {
  message: "El área seleccionada no es válida",
});

export type AreaPractica = z.infer<typeof AreaPracticaSchema>;

// Input schema for creation validation
export const CreateConsultaSchema = z.object({
  nombre: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre es demasiado largo"),
  email: z
    .string()
    .email("El formato del correo electrónico no es válido"),
  telefono: z
    .string()
    .optional()
    .refine((val) => !val || /^[+0-9\s-]{7,20}$/.test(val), {
      message: "El formato de teléfono no es válido (mínimo 7 dígitos)",
    }),
  area: AreaPracticaSchema,
  mensaje: z
    .string()
    .min(10, "La consulta debe detallar la situación (mínimo 10 caracteres)")
    .max(1500, "La consulta no puede superar los 1500 caracteres"),
});

export type CreateConsultaInput = z.infer<typeof CreateConsultaSchema>;

// Domain Entity
export interface Consulta {
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  area: AreaPractica;
  mensaje: string;
  createdAt: Date;
}

export class ConsultaEntity implements Consulta {
  readonly id: string;
  readonly nombre: string;
  readonly email: string;
  readonly telefono?: string;
  readonly area: AreaPractica;
  readonly mensaje: string;
  readonly createdAt: Date;

  private constructor(props: Consulta) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.email = props.email;
    this.telefono = props.telefono;
    this.area = props.area;
    this.mensaje = props.mensaje;
    this.createdAt = props.createdAt;
  }

  /**
   * Domain factory to create and validate a new Consulta entity.
   * Ensures type safety and validation invariants of the domain are met.
   */
  public static create(input: CreateConsultaInput, generatedId?: string): ConsultaEntity {
    // Validate input using Zod schema
    const validatedData = CreateConsultaSchema.parse(input);

    return new ConsultaEntity({
      id: generatedId || Math.random().toString(36).substring(2, 11), // safe fallback id
      nombre: validatedData.nombre,
      email: validatedData.email,
      telefono: validatedData.telefono,
      area: validatedData.area,
      mensaje: validatedData.mensaje,
      createdAt: new Date(),
    });
  }
}
