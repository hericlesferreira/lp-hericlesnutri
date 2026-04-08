import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => (
  <section className="py-14 sm:py-20 lg:py-28 bg-secondary/30">
    <div className="container px-5 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" />
        <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-3 sm:mb-4">
          GARANTIA DE <span className="text-primary">7 DIAS</span>
        </h2>
        <p className="text-foreground text-base sm:text-lg mb-3 sm:mb-4 font-medium">
          "Se você entrar, aplicar e não gostar, devolvo seu dinheiro."
        </p>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Só peço que siga minimamente o plano e realize pelo menos 1 check-in. Quero que você tenha resultado, e se não funcionar pra você, não quero seu dinheiro.
        </p>
      </div>
    </div>
  </section>
);
