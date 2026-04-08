import { Utensils, RefreshCw, MessageSquare, Smartphone, Target, Newspaper, File } from "lucide-react";
import { CTAButton } from "./CTAButton";

const steps = [
  { icon: File, title: "Formulário inicial", desc: "Você começa preenchendo um formulário detalhado, com as mesmas perguntas que utilizo na consulta presencial, ou seja, é como se eu estivesse te avaliando ali, só que de forma online. Nele, você informa sua rotina, alimentação, dificuldades e objetivos." },
  { icon: Target, title: "Análise Individual", desc: "Entendo sua rotina, preferências e objetivos pra criar algo que funcione PRA VOCÊ e criar SUA estratégia e planejamento." },
  { icon: Utensils, title: "Plano Personalizado", desc: "Montado com alimentos que você GOSTA, sem forçar brócolis e frango todo dia." },
  { icon: RefreshCw, title: "Ajustes Semanais", desc: "Toda semana ajustamos a estratégia com base nos seus resultados reais." },
  { icon: MessageSquare, title: "Check-in Semanal", desc: "Formulário rápido pra acompanhar evolução de peso, medidas e aderência." },
  { icon: Smartphone, title: "Suporte via WhatsApp", desc: "Dúvida? Mandou mensagem, respondeu. Sem robô, sem espera." },
];

export const MethodSection = () => (
  <section className="py-14 sm:py-20 lg:py-28 bg-secondary/30">
    <div className="container px-5 sm:px-6">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
          COMO O <span className="text-primary">MÉTODO</span> FUNCIONA
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
          Simples. Direto. Sem enrolação.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12">
        {steps.map((step, i) => (
          <div key={step.title} className="relative p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group">
            <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTAButton />
      </div>
    </div>
  </section>
);
