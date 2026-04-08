import { AlertTriangle } from "lucide-react";

const pains = [
  "Olha pro espelho e não gosta do que vê",
  "Já tentou dieta restritiva e não aguentou",
  "Começou academia e parou em 2 semanas",
  "Final de semana destrói tudo que você fez na semana",
  "Chega cansado do trabalho e desconta na comida",
  "Sente vergonha de tirar a camisa",
  "Libido no chão e sem energia pra nada",
  "Toda semana pensa: 'eu começo segunda'",
];

export const PainSection = () => (
  <section className="py-14 sm:py-20 lg:py-28 bg-secondary/30">
    <div className="container px-5 sm:px-6">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
          ISSO PARECE <span className="text-primary">FAMILIAR?</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
          Se você se identificou com pelo menos 3 itens abaixo, essa consultoria foi feita pra você.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 max-w-3xl mx-auto">
        {pains.map((pain) => (
          <div
            key={pain}
            className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <AlertTriangle className="w-5 h-5 text-alert mt-0.5 shrink-0" />
            <span className="text-foreground text-sm">{pain}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 text-center">
        <p className="text-lg sm:text-2xl font-display text-foreground">
          O PROBLEMA <span className="text-primary">NÃO É VOCÊ.</span>{" "}
          <span className="text-muted-foreground">É A ESTRATÉGIA ERRADA.</span>
        </p>
      </div>
    </div>
  </section>
);
