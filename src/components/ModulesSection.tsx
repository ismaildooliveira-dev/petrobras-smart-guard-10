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
    title: "Detecção de Anomalias Térmicas",
    description: "Detecta micro-fissuras em condutos de alta pressão antes da ruptura visual. O processador óptico destaca deltas de temperatura localizados superiores a 0.5°C em overlay de alto contraste em tempo real.",
    status: "Online",
    statusColor: "neon",
    metricLabel: "Taxa de Amostragem",
    metricValue: "120 Hz",
  },
  {
    id: "MOD_02",
    title: "Espectrometria de Toxinas",
    description: "Compostos orgânicos voláteis invisíveis são renderizados visualmente. O sensor químico embarcado traduz a densidade de partículas em um mapa de calor espacial codificado por cores mapeado no terreno.",
    status: "Monitorando",
    statusColor: "alert",
    metricLabel: "Piso de Detecção",
    metricValue: "0.02 PPM",
  },
  {
    id: "MOD_03",
    title: "Cinemática Espacial",
    description: "Previne interceptações de maquinário pesado. O array LiDAR calcula vetores de velocidade de todos os ativos em movimento na instalação, projetando caminhos de colisão previstos diretamente na retina do operador.",
    status: "Online",
    statusColor: "neon",
    metricLabel: "Capacidade de Rastreio",
    metricValue: "1.024 OBJ",
  },
];

const ModulesSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-border bg-[radial-gradient(ellipse_at_top,hsl(var(--carbon)),hsl(var(--void)))]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Módulos Sentinela Ativos
            </h2>
            <p className="text-muted-foreground font-mono-tactical text-xs max-w-[65ch] uppercase leading-relaxed">
              Análise ambiental contínua em 4 espectros. Processando 2.4TB de dados termodinâmicos e cinemáticos localizados por hora diretamente no hardware de borda.
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
