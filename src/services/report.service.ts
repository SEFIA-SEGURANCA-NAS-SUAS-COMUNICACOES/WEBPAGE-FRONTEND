import { ReportPayload } from "@/types/report";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api-test.sefia.ao";

export class ReportError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ReportError";
  }
}

// Maps API error status codes to Portuguese user-friendly messages
function getErrorMessage(status: number, apiMessage?: string): string {
  if (status === 400) {
    return apiMessage || "Dados inválidos. Verifique os campos e tente novamente.";
  }
  if (status === 409) {
    return apiMessage || "Já existe uma denúncia registada para este número.";
  }
  if (status === 429) {
    return "Demasiadas tentativas. Aguarde um momento e tente novamente.";
  }
  if (status >= 500) {
    return "Erro no servidor. A nossa equipa foi notificada. Tente mais tarde.";
  }
  return apiMessage || "Ocorreu um erro inesperado ao registar a denúncia.";
}

export const reportService = {
  async createWebReport(payload: ReportPayload): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/reports/web`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Try to extract message from API response body
      let apiMessage: string | undefined;
      try {
        const body = await response.json();
        apiMessage = body?.message || body?.error || body?.detail;
      } catch {
        // Response body is not JSON or is empty — ignore
      }

      throw new ReportError(response.status, getErrorMessage(response.status, apiMessage));
    }
  },
};
