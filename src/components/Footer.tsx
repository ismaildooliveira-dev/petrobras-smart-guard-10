const Footer = () => {
  return (
    <div className="py-4 border-t border-border bg-background overflow-hidden flex whitespace-nowrap font-mono-tactical text-[10px] text-muted-foreground/50 uppercase tracking-widest">
      <div className="flex gap-8 items-center px-4 animate-[scan-line_20s_linear_infinite]">
        <span>[NODE_A4] UPTIME: 99.998%</span>
        <span className="text-neon/50">//</span>
        <span>[SETOR_7] CONTENÇÃO: NOMINAL</span>
        <span className="text-neon/50">//</span>
        <span>[GRID_2] CONSUMO: 4.2 MW</span>
        <span className="text-neon/50">//</span>
        <span className="text-alert">[ALERTA] MICRO-FRATURA @ VÁLVULA_XT-892</span>
        <span className="text-neon/50">//</span>
        <span>[OPTIC_SYNC] ESTÁVEL</span>
        <span className="text-neon/50">//</span>
        <span>[NODE_A5] TUDO_LIMPO</span>
        <span className="text-neon/50">//</span>
        <span>© 2026 Petrobras — Tecnologia Exclusiva</span>
      </div>
    </div>
  );
};

export default Footer;
