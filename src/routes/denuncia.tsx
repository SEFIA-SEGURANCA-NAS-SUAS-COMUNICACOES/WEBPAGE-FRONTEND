import { createFileRoute } from "@tanstack/react-router";
import { Layout, Icon } from "@/components/layout";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FraudType } from "@/types/report";
import { useCreateReport } from "@/hooks/useCreateReport";
import { useState } from "react";

export const Route = createFileRoute("/denuncia")({
  component: DenunciaPage,
});

const phoneRegex = /^9\d{2} \d{3} \d{3}$/;

const reportSchema = z.object({
  reporterPhoneNumber: z.string().regex(phoneRegex, "Deve ser um número angolano válido (ex: 923 123 456)"),
  reportedPhoneNumber: z.string().regex(phoneRegex, "Deve ser um número angolano válido (ex: 923 123 456)"),
  fraudType: z.nativeEnum(FraudType, { errorMap: () => ({ message: "Selecione o tipo de fraude" }) }),
  description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
  anonymous: z.boolean(),
});

type ReportFormValues = z.infer<typeof reportSchema>;

const fraudTypeLabels: Record<FraudType, string> = {
  [FraudType.SCAM]: "Golpe",
  [FraudType.FAKE_BANK]: "Fraude Bancária",
  [FraudType.FAKE_JOB]: "Emprego Falso",
  [FraudType.FAKE_PRIZE]: "Prémio Falso",
  [FraudType.FAKE_SUPPORT]: "Suporte Falso",
  [FraudType.SPAM]: "Spam",
  [FraudType.OTHER]: "Outro",
};

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 9);
  const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,3})$/);
  if (match) {
    return [match[1], match[2], match[3]].filter(Boolean).join(" ");
  }
  return value;
}

function DenunciaPage() {
  const { mutate: createReport, isPending } = useCreateReport();
  
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ReportFormValues>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      reporterPhoneNumber: "",
      reportedPhoneNumber: "",
      description: "",
      fraudType: undefined,
      anonymous: false,
    },
  });

  const onSubmit = (data: ReportFormValues) => {
    const payload = {
      ...data,
      reporterPhoneNumber: data.reporterPhoneNumber.replace(/\s/g, ""),
      reportedPhoneNumber: data.reportedPhoneNumber.replace(/\s/g, ""),
    };
    
    createReport(payload, {
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <Layout>
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12 pt-10">
          <h1 className="font-heading font-bold text-white mb-4 text-4xl sm:text-5xl">
            Registar Denúncia
          </h1>
          <div className="h-1 w-20 bg-primary-fixed-dim mx-auto rounded-full mb-6" />
          <p className="text-on-surface-variant text-base sm:text-lg max-w-xl mx-auto">
            A sua denúncia ajuda a proteger toda a comunidade. Preencha os dados abaixo de forma precisa.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Meu número */}
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">
                  Seu Número
                </label>
                <Controller
                  name="reporterPhoneNumber"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                      placeholder="9XX XXX XXX"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim transition-all"
                    />
                  )}
                />
                {errors.reporterPhoneNumber && (
                  <p className="text-red-400 text-xs mt-1">{errors.reporterPhoneNumber.message}</p>
                )}
              </div>

              {/* Número denunciado */}
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">
                  Número Suspeito/Denunciado
                </label>
                <Controller
                  name="reportedPhoneNumber"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                      placeholder="9XX XXX XXX"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim transition-all"
                    />
                  )}
                />
                {errors.reportedPhoneNumber && (
                  <p className="text-red-400 text-xs mt-1">{errors.reportedPhoneNumber.message}</p>
                )}
              </div>
            </div>

            {/* Tipo de fraude */}
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">
                Tipo de Fraude
              </label>
              <select
                {...register("fraudType")}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim transition-all appearance-none"
              >
                <option value="">Selecione...</option>
                {Object.values(FraudType).map((type) => (
                  <option key={type} value={type} className="bg-surface text-white">
                    {fraudTypeLabels[type]}
                  </option>
                ))}
              </select>
              {errors.fraudType && (
                <p className="text-red-400 text-xs mt-1">{errors.fraudType.message}</p>
              )}
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">
                Descrição do Ocorrido
              </label>
              <textarea
                {...register("description")}
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim transition-all resize-none"
                placeholder="Descreva o que aconteceu de forma detalhada..."
              />
              {errors.description && (
                <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Denúncia anónima */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="anonymous"
                {...register("anonymous")}
                className="w-5 h-5 rounded border-white/10 bg-black/40 text-primary-fixed-dim focus:ring-primary-fixed-dim focus:ring-offset-background"
              />
              <label htmlFor="anonymous" className="text-sm text-on-surface-variant select-none">
                Submeter como denúncia anónima
              </label>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-3.5 px-6 rounded-xl transition-all flex justify-center items-center gap-2 mt-4 shadow-xl"
            >
              {isPending ? (
                <>
                  <Icon name="progress_activity" className="animate-spin" />
                  A enviar...
                </>
              ) : (
                "Denunciar"
              )}
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}
