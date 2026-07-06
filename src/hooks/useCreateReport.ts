import { useMutation } from "@tanstack/react-query";
import { reportService, ReportError } from "@/services/report.service";
import { ReportPayload } from "@/types/report";
import { toast } from "sonner";

export function useCreateReport() {
  return useMutation({
    mutationFn: (payload: ReportPayload) => reportService.createWebReport(payload),
    onSuccess: () => {
      toast.success("Denúncia registada com sucesso!", {
        description: "Obrigado por contribuir para a segurança da comunidade. A sua denúncia foi registada e será analisada pela nossa equipa.",
        duration: 6000,
      });
    },
    onError: (error: unknown) => {
      if (error instanceof ReportError) {
        if (error.status === 409) {
          toast.warning("Denúncia já registada", {
            description: error.message,
            duration: 6000,
          });
        } else if (error.status >= 500) {
          toast.error("Erro no servidor", {
            description: error.message,
            duration: 8000,
          });
        } else {
          toast.error("Não foi possível registar a denúncia", {
            description: error.message,
            duration: 6000,
          });
        }
      } else if (error instanceof TypeError) {
        toast.error("Sem ligação à internet", {
          description: "Não foi possível contactar o servidor. Verifique a sua ligação e tente novamente.",
          duration: 8000,
        });
      } else {
        toast.error("Erro inesperado", {
          description: "Ocorreu um erro ao registar a denúncia. Por favor, tente novamente.",
          duration: 6000,
        });
      }
    },
  });
}
