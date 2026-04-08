import { Check, Gift } from "lucide-react";

const included = [
  "Plano alimentar personalizado",
  "Ajustes semanais",
  "Check-in semanal via formulário",
  "Suporte direto via WhatsApp",
  "Estratégia adaptada à sua rotina",
];

const bonuses = [
  "Lista de compras pronta",
  "Guia de medidas",
  "Ebook de receitas doces",
  "Dicas para refeições livres",
];

export const IncludedSection = () => (
  <section className="py-14 sm:py-20 lg:py-28">
    <div className="container px-5 sm:px-6">
      <div className="max-w-4xl mx-auto grid gap-5 sm:gap-8 md:grid-cols-2">
        <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
          <h2 className="font-display text-2xl sm:text-4xl text-foreground mb-5 sm:mb-6">
            O QUE ESTÁ <span className="text-primary">INCLUSO</span>
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-primary/5 border border-primary/20 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Gift className="w-8 h-8 text-primary opacity-30" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-foreground mb-2">
            BÔNUS <span className="text-primary">EXCLUSIVOS</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm mb-5 sm:mb-6">Grátis ao entrar na consultoria</p>
          <div className="space-y-3 sm:space-y-4">
            {bonuses.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Gift className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="text-foreground text-sm sm:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
