export const FooterSection = () => (
  <footer className="py-8 border-t border-border">
    <div className="container text-center">
      <p className="text-muted-foreground text-xs mt-2">
        Hericles Ferreira <br></br> Nutricionista | CRN-10 12284
      </p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Método Seco e Forte — Todos os direitos reservados
      </p>
      <p className="text-muted-foreground text-xs mt-2">
        Resultados podem variar de pessoa para pessoa. Consulte sempre um profissional de saúde.
      </p>
    </div>
  </footer>
);
