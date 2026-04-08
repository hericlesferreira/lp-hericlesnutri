import { CTAButton } from "./CTAButton";
import { Shield, TrendingUp, Flame } from "lucide-react";

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
    
    <div className="container relative z-10 py-16 px-5 sm:px-6 lg:py-32">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-glow bg-secondary mb-6 sm:mb-8">
          <Flame className="w-4 h-4 text-primary" />
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Método Seco e Forte</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-5 sm:mb-6">
          <span className="text-foreground">OU VOCÊ MUDA</span>{" "}
          <span className="text-gradient">AGORA,</span>
          <br />
          <span className="text-foreground">OU CONTINUA</span>{" "}
          <span className="text-muted-foreground">ESCONDENDO</span>
          <br />
          <span className="text-muted-foreground">O CORPO.</span>
        </h1>

        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mb-3 sm:mb-4 leading-relaxed">
          Você não precisa de mais disciplina.{" "}
          <span className="text-foreground font-semibold">Precisa de uma estratégia que funcione na sua vida real.</span>
        </p>

        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
          Perca até <span className="text-primary font-bold">10kg em 3 meses</span>, sem dieta restritiva, sem passar fome, sem parar de viver.
        </p>

        <CTAButton />

        <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-8 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          {[
            { icon: Shield, label: "+200", desc: "pacientes atendidos" },
            { icon: TrendingUp, label: "até 10kg", desc: "em até 3 meses" },
            { icon: Flame, label: "30 dias", desc: "resultados visíveis" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-foreground">{stat.label}</div>
                <div className="text-[11px] sm:text-sm text-muted-foreground leading-tight">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
