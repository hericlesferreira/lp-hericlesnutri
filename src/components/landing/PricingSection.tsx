import { CTAButton } from "./CTAButton";
import { Check, Zap } from "lucide-react";

export const PricingSection = () => (
  <section className="py-14 sm:py-20 lg:py-28">
    <div className="container px-5 sm:px-6">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
          INVESTIMENTO NA SUA <span className="text-primary">TRANSFORMAÇÃO</span>
        </h2>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        {/* Monthly */}
        <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
          <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1">PLANO MENSAL</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Ideal pra começar</p>
          <div className="mb-5 sm:mb-6">
            <div className="text-3xl sm:text-4xl font-display text-primary">R$ 200</div>
            <div className="text-muted-foreground text-xs sm:text-sm">à vista via PIX</div>
            <div className="text-muted-foreground text-xs mt-1">ou R$ 210 no cartão</div>
          </div>
          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            {["Plano personalizado", "Ajustes semanais","30 dias de acompanhamento", "Suporte WhatsApp"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <CTAButton className="w-full" />
        </div>

        {/* Quarterly */}
        <div className="p-6 sm:p-8 rounded-xl bg-card border-2 border-primary relative overflow-hidden glow-lime">
          <div className="absolute top-0 right-0 px-3 sm:px-4 py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold uppercase rounded-bl-lg flex items-center gap-1">
            <Zap className="w-3 h-3" /> Mais escolhido
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1">PLANO TRIMESTRAL</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Melhor custo-benefício</p>
          <div className="mb-5 sm:mb-6">
            <div className="text-3xl sm:text-4xl font-display text-primary">R$ 550</div>
            <div className="text-muted-foreground text-xs sm:text-sm">à vista via PIX</div>
            <div className="text-muted-foreground text-xs mt-1">ou 3x de R$ 190 no cartão</div>
          </div>
          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            {["Tudo do mensal", "3 meses de acompanhamento", "Economia de R$ 50", "Todos os bônus inclusos"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <CTAButton className="w-full" />
        </div>
      </div>
    </div>
  </section>
);
