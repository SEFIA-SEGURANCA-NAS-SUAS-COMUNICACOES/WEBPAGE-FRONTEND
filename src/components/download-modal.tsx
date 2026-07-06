import { useEffect, useRef } from "react";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

export function DownloadModal({ open, onClose }: DownloadModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function handleOverlayClick(event: React.MouseEvent) {
    if (event.target === overlayRef.current) {
      onClose();
    }
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-2xl border border-white/10 animate-fadeIn">
        
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-white">
            Aplicativo em desenvolvimento
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
            O SEFIA ainda está em fase de desenvolvimento. O lançamento oficial está previsto para{" "}
            <span className="text-white font-medium">
              11 de setembro de 2026
            </span>.
          </p>
        </div>

        {/* Info */}
        <div className="rounded-xl bg-white/5 p-4 text-sm text-on-surface-variant">
          Estamos a trabalhar para garantir uma experiência segura, estável e confiável para todos os utilizadores.
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}