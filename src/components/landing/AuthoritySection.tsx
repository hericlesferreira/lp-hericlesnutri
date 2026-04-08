import { GraduationCap, Users, Heart } from "lucide-react";
import autoridadeImg from "@/assets/autoridade.png";

export const AuthoritySection = () => (
  <section className="py-14 sm:py-20 lg:py-28 bg-secondary/30">
    <div className="container px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
            NÃO SOU O CARA <span className="text-primary">PERFEITO.</span>
          </h2>
          <p className="font-display text-xl sm:text-3xl text-muted-foreground">
            SOU O CARA QUE VIVE A REALIDADE IGUAL VOCÊ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="rounded-xl overflow-hidden border border-border bg-card">
            <img
              src={autoridadeImg}
              alt="Minha transformação pessoal - antes e depois"
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-foreground text-base sm:text-lg leading-relaxed">
              Eu já pesei <span className="text-primary font-bold">114kg</span>. Sofria com barriga grande, libido no chão e cansaço constante. Tive dificuldade no trabalho pela aparência e condicionamento.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Mudei em 6 meses com uma estratégia realista. Hoje ainda não sou "perfeito", e tá tudo bem. Vivo a realidade e mantenho meus resultados. Por isso entendo exatamente o que você passa.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
              {[
                { icon: Users, text: "+200 pacientes atendidos" },
                { icon: GraduationCap, text: "Pós-graduação em metabolismo e emagrecimento" },
                { icon: Heart, text: "Nutricionista que vive a realidade, não é atleta de palco" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-xs sm:text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
