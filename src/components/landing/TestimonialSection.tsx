import { Quote } from "lucide-react";

export const TestimonialSection = () => (
  <section className="py-14 sm:py-20 lg:py-28 bg-secondary/30">
    <div className="container px-5 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-4 sm:mb-6" />
        <blockquote className="text-lg sm:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 font-medium">
          "A explicação é muito clara e didática. O plano alimentar respeita minhas preferências, ele não força alimento que eu não gosto. O acompanhamento é muito próximo e a estratégia é totalmente adaptável à minha rotina. Em 3 meses mudei meu corpo de um jeito que nunca tinha conseguido."
        </blockquote>
        <div>
          <div className="text-primary font-bold text-sm sm:text-base">Nathan B.</div>
          <div className="text-muted-foreground text-xs sm:text-sm">Consultoria Método Seco e Forte</div>
        </div>
      </div>
    </div>
  </section>
);
