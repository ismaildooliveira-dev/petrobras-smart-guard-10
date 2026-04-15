interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  statusColor: "neon" | "alert";
  metricLabel: string;
  metricValue: string;
}

const ModuleCard = ({ id, title, description, status, statusColor, metricLabel, metricValue }: ModuleCardProps) => {
  const statusClasses = statusColor === "neon" ? "text-neon" : "text-alert";
  const topLineGradient = statusColor === "neon"
    ? "bg-gradient-to-r from-neon to-transparent"
    : "bg-gradient-to-r from-alert to-transparent";

  return (
    <div className="bg-carbon p-10 hover:bg-secondary transition-colors duration-500 relative group flex flex-col justify-between min-h-[380px]">
      <div className={`absolute top-0 left-0 w-full h-[2px] ${topLineGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div>
        <div className="font-mono-tactical text-[10px] text-muted-foreground mb-8 flex justify-between tracking-widest uppercase">
          <span>{id}</span>
          <span className={statusClasses}>{status}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-10 font-mono-tactical text-xs border-t border-border pt-5 flex justify-between items-center text-muted-foreground uppercase">
        <span>{metricLabel}</span>
        <span className="text-foreground tabular-nums">{metricValue}</span>
      </div>
    </div>
  );
};

const modules: ModuleCardProps[] = [
  {
    id: "MOD_01",
    title: "Firewall Neural Adaptativo",
    description: "Analisa padrões de tráfego em tempo real usando deep learning para identificar e bloquear ataques zero-day antes que penetrem o perímetro. O overlay projeta vetores de ataque e origem geográfica diretamente no campo de visão.",
    status: "Online",
    statusColor: "neon",
    metricLabel: "Pacotes Analisados/s",
    metricValue: "1.2M req/s",
  },
  {
    id: "MOD_02",
    title: "Prevenção de Vazamento de Dados",
    description: "Monitora fluxos de dados sensíveis em todas as camadas da rede. Detecta exfiltração anômala, criptografia não autorizada e transferências suspeitas, alertando o operador com classificação de risco e origem do vazamento.",
    status: "Monitorando",
    statusColor: "alert",
    metricLabel: "Fluxos Rastreados",
    metricValue: "48.720",
  },
  {
    id: "MOD_03",
    title: "Detecção de Intrusão Preditiva",
    description: "Correlaciona logs de acesso, comportamento de usuários e anomalias de rede para prever tentativas de invasão com até 12 minutos de antecedência. Projeta alertas de ameaça com nível de severidade na retina do operador.",
    status: "Online",
    statusColor: "neon",
    metricLabel: "Precisão Preditiva",
    metricValue: "99.4%",
  },
];

const ModulesSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-border bg-[radial-gradient(ellipse_at_top,hsl(var(--carbon)),hsl(var(--void)))]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Módulos de Ciberdefesa Ativos
            </h2>
            <p className="text-muted-foreground font-mono-tactical text-xs max-w-[65ch] uppercase leading-relaxed">
              Vigilância cibernética contínua em todas as camadas da rede. Processando 8.6TB de tráfego e logs de segurança por hora com IA de borda embarcada nos smart glasses.
            </p>
          </div>
          <div className="text-right font-mono-tactical text-[10px] text-neon bg-neon-dim px-4 py-2 border border-neon/20 tracking-widest uppercase whitespace-nowrap">
            Status do Sistema: Ótimo
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} {...mod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
