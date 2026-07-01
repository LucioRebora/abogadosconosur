"use server";

import { container } from "@/infrastructure/di/Container";
import { CreateConsultaSchema } from "@/domain/entities/Consulta";

export interface FormState {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
  data?: {
    nombre: string;
    email: string;
    telefono?: string;
    area: string;
    mensaje: string;
  };
}

/**
 * Server action to handle case inquiry submissions.
 * Invokes domain validation and application use-cases.
 */
export async function submitConsultaAction(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  // Extract values
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const telefono = formData.get("telefono") as string;
  const area = formData.get("area") as string;
  const mensaje = formData.get("mensaje") as string;

  const rawInput = {
    nombre,
    email,
    telefono: telefono || undefined,
    area,
    mensaje,
  };

  // 1. Schema Validation
  const validationResult = CreateConsultaSchema.safeParse(rawInput);

  if (!validationResult.success) {
    // Map Zod errors to field name -> message
    const errors: Record<string, string> = {};
    validationResult.error.issues.forEach((err) => {
      if (err.path[0]) {
        errors[err.path[0].toString()] = err.message;
      }
    });

    return {
      success: false,
      message: "Por favor corriga los errores en el formulario.",
      errors,
      data: rawInput,
    };
  }

  try {
    // 2. Execute business use case (Domain + Application logic)
    const useCase = container.getCrearConsultaUseCase();
    const result = await useCase.execute(validationResult.data);

    return {
      success: true,
      message: `¡Muchas gracias, ${result.nombre}! Tu consulta por '${getAreaLabel(result.area)}' ha sido enviada con éxito. Te responderemos a la brevedad.`,
    };
  } catch (error) {
    console.error("Error submitting consultation:", error);
    const errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado al procesar tu consulta. Por favor intente nuevamente.";
    return {
      success: false,
      message: errorMessage,
      data: rawInput,
    };
  }
}

/**
 * Helper to get clean human labels for areas
 */
function getAreaLabel(area: string): string {
  switch (area) {
    case "civil":
      return "Derecho Civil";
    case "laboral":
      return "Derecho Laboral";
    case "transito":
      return "Accidentes de Tránsito";
    case "seguros":
      return "Reclamos a Seguros";
    default:
      return area;
  }
}
