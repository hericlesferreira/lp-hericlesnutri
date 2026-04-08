import { X, Check } from "lucide-react";

const myths = [
  { wrong: "Tem que passar fome", right: "Estratégia flexível que cabe na sua rotina" },
  { wrong: "Precisa cortar cerveja e pizza", right: "Pode viver no fim de semana" },
  { wrong: "Tem que ter disciplina de militar", right: "Precisa de um plano que funcione na vida real" },
  { wrong: "Comer de 3 em 3 horas", right: "Estratégia adaptada ao SEU horário" },
];

export const BeliefBreaker = () => (
  <section className="py-14 sm:py-20 lg:py-28">
    <div className="container px-5 sm:px-6">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
          ESQUEÇA TUDO QUE TE <span className="text-primary">DISSERAM</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          A dieta se adapta à sua rotina, não o contrário.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 max-w-3xl mx-auto">
        {myths.map((myth) => (
          <div key={myth.wrong} className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-alert/10 border border-alert/20">
              <X className="w-5 h-5 text-alert shrink-0" />
              <span className="text-foreground text-sm line-through opacity-70">{myth.wrong}</span>
            </div>
            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-primary/10 border border-primary/20">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground text-sm font-medium">{myth.right}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
