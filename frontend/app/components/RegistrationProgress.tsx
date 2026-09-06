interface RegistrationProgressProps {
  currentStep: 1 | 2 | 3;
}

export default function RegistrationProgress({
  currentStep,
}: RegistrationProgressProps) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em]">
        <span className={currentStep >= 1 ? "text-gray-950" : "text-gray-400"}>
          Etapa 01
        </span>

        <span className={currentStep >= 2 ? "text-gray-950" : "text-gray-400"}>
          Etapa 02
        </span>

        <span className={currentStep >= 3 ? "text-gray-950" : "text-gray-400"}>
          Etapa 03
        </span>
      </div>

      <div className="relative h-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className={`absolute left-0 top-0 h-full rounded-full bg-black transition-all duration-500 ${
            currentStep === 1 ? "w-1/3" : currentStep === 2 ? "w-2/3" : "w-full"
          }`}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs text-gray-500 sm:text-sm">
        <span>Participante</span>
        <span>Retiro</span>
        <span>Pagamento</span>
      </div>
    </div>
  );
}
