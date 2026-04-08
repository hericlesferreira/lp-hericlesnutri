import { Clock, AlertTriangle } from "lucide-react";
import { CTAButton } from "./CTAButton";

export const ScarcitySection = () => (
  <section className="py-14 sm:py-20 lg:py-28">
    <div className="container px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="p-6 sm:p-12 rounded-2xl bg-gradient-to-br from-card to-secondary border border-primary/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-alert/10 border border-alert/30 mb-5 sm:mb-6">
              <AlertTriangle className="w-4 h-4 text-alert" />
              <span className="text-alert text-xs sm:text-sm font-bold uppercase">Vagas limitadas</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
              APENAS <span className="text-primary">5 VAGAS</span> POR SEMANA
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg mb-3 max-w-lg mx-auto">
              Cada paciente recebe análise individual e estratégia personalizada. Por isso limito o atendimento.
            </p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6 sm:mb-8">
              <Clock className="w-4 h-4" />
              <span className="text-xs sm:text-sm">As vagas podem acabar a qualquer momento</span>
            </div>

            <CTAButton />

            <p className="mt-5 sm:mt-6 text-xs text-muted-foreground">
              Você não precisa parar de viver pra ter resultado. Começa agora.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
