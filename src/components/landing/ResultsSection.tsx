import { CTAButton } from "./CTAButton";
import leonardoImg from "@/assets/Leonardo.png";
import volneiImg from "@/assets/Volnei.png";
import djonatanImg from "@/assets/Djonatan.png";

const results = [
  {
    name: "Leonardo",
    age: 24,
    before: "85kg",
    after: "79,5kg",
    time: "3 meses",
    desc: "Definição corporal + perda de gordura + ganho de massa",
    profile: "Falso magro",
    image: leonardoImg,
  },
  {
    name: "Gabriel",
    age: 28,
    before: "80kg",
    after: "74kg",
    time: "3 meses",
    desc: "Ganho de massa + redução de gordura",
    profile: "Falso magro",
    image: volneiImg,
  },
  {
    name: "Djonatan",
    age: 30,
    before: "87kg",
    after: "77kg",
    time: "5 meses",
    desc: "Perda de gordura + definição muscular",
    profile: "Falso magro",
    image: djonatanImg,
  },
];

export const ResultsSection = () => (
  <section className="py-14 sm:py-20 lg:py-28">
    <div className="container px-5 sm:px-6">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
          TRANSFORMAÇÕES <span className="text-primary">REAIS</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Caras comuns. Rotina pesada. Resultados absurdos.
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10 sm:mb-12">
        {results.map((r) => (
          <div key={r.name} className="rounded-xl overflow-hidden border border-border bg-card group hover:border-primary/40 transition-all">
            <div className="relative">
              <img
                src={r.image}
                alt={`Transformação ${r.name} - antes e depois`}
                className="w-full h-56 sm:h-64 object-cover object-top"
              />
              <div className="absolute top-3 right-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded">
                {r.time}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 bg-gradient-to-t from-background/90 to-transparent">
                <div className="text-center">
                  <div className="text-lg font-display text-foreground">{r.before}</div>
                  <div className="text-[10px] text-foreground uppercase">Antes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display text-primary">{r.after}</div>
                  <div className="text-[10px] text-primary uppercase font-semibold">Depois</div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                {r.name}, {r.age} anos
              </h3>
              <div className="text-xs text-primary font-semibold uppercase mb-1.5 sm:mb-2">{r.profile}</div>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTAButton />
      </div>
    </div>
  </section>
);
