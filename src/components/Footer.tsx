const Footer = () => {
  return (
    <footer>
      {/* Scrolling ticker */}
      <div className="py-4 border-t border-border bg-background overflow-hidden flex whitespace-nowrap font-mono-tactical text-[10px] text-muted-foreground/50 uppercase tracking-widest">
        <div className="flex gap-8 items-center px-4 animate-[scan-line_20s_linear_infinite]">
          <span>[FIREWALL_01] UPTIME: 99.998%</span>
          <span className="text-neon/50">//</span>
          <span>[DMZ_3] PERÍMETRO: SEGURO</span>
          <span className="text-neon/50">//</span>
          <span>[IDS_7] INTRUSÕES BLOQUEADAS: 1.247</span>
          <span className="text-neon/50">//</span>
          <span className="text-alert">[ALERTA] TENTATIVA_EXFILTRAÇÃO @ SRV-47</span>
          <span className="text-neon/50">//</span>
          <span>[CRYPTO_SYNC] AES-256 ATIVO</span>
          <span className="text-neon/50">//</span>
          <span>[DLP_SCAN] VAZAMENTO: 0 DETECTADO</span>
          <span className="text-neon/50">//</span>
          <span>© 2026 Petrobras — Tecnologia Exclusiva</span>
        </div>
      </div>

      {/* Petrobras link */}
      <div className="py-6 border-t border-border bg-carbon flex flex-col sm:flex-row items-center justify-between gap-4 px-6 lg:px-12">
        <div className="font-mono-tactical text-[10px] text-muted-foreground uppercase tracking-widest">
          Plataforma Ocularis v7.4.2 — Uso interno Petrobras
        </div>
        <a
          href="https://petrobras.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-neon/30 text-neon font-mono-tactical text-[11px] uppercase tracking-widest hover:bg-neon/10 hover:border-neon/60 transition-all duration-300"
        >
          <span className="size-1.5 bg-neon rounded-full" />
          Acessar Portal Petrobras
          <span className="ml-1">↗</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
