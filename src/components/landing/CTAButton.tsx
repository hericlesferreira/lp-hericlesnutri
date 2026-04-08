import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Quero%20entrar%20na%20consultoria%20online.%20Pode%20me%20enviar%20o%20link%20de%20pagamento%3F";

export const CTAButton = ({ className = "" }: { className?: string }) => (
  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
    <Button variant="cta" size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-lg rounded-lg gap-2 sm:gap-3">
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      QUERO MINHA VAGA
    </Button>
  </a>
);
