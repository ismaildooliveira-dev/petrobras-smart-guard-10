const Footer = () => {
  return (
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
  );
};

export default Footer;
