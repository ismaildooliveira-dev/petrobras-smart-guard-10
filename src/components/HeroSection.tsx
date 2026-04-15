import hudViewport from "@/assets/hud-viewport.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-24 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-[1600px] mx-auto">
      {/* Text Column */}
      <div className="relative z-10 lg:col-span-5 flex flex-col gap-8">
        <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-neon/30 bg-neon-dim text-neon text-[11px] font-mono-tactical w-max tracking-wide uppercase">
          <span className="animate-pulse-neon">●</span> Monitoramento cibernético ativo
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight text-balance">
          Detecte a ameaça.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-400 text-neon-glow">
            Blindar os dados.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-[45ch] leading-relaxed">
          Inteligência artificial exclusiva Petrobras para smart glasses.
          Prevenção de ataques digitais e vazamento de dados em tempo real
          com análise de tráfego de rede e detecção de intrusões
          diretamente no campo de visão do operador.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-neon text-primary-foreground font-bold tracking-[0.1em] uppercase text-xs hover:opacity-90 transition-opacity neon-glow">
            Inicializar Hardware
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 border border-border text-foreground font-mono-tactical text-xs uppercase tracking-wide hover:border-neon/50 hover:text-neon transition-all duration-300">
            [ Acessar_Sandbox ]
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border font-mono-tactical text-xs">
          <div>
            <div className="text-muted-foreground mb-1">Criptografia</div>
            <div className="text-foreground">AES-256 / ZK-Proof</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Análise de Pacotes</div>
            <div className="text-foreground">1.2M req/s Deep Inspect</div>
          </div>
        </div>
      </div>

      {/* HUD Viewport Column */}
      <div className="relative lg:col-span-7 aspect-video bg-carbon border border-border p-1.5 sm:p-3 overflow-hidden group">
        {/* Scan line animation */}
        <div className="absolute inset-x-0 top-0 h-48 scan-line animate-scan-line z-20 pointer-events-none" />

        <div className="relative w-full h-full bg-plating overflow-hidden">
          <img
            src={hudViewport}
            alt="Visão HUD da refinaria Petrobras"
            className="w-full h-full object-cover mix-blend-luminosity opacity-50 scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-background/40 mix-blend-multiply" />

          {/* HUD: Targeting - hidden on small mobile */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 border-l-2 border-neon pl-3 sm:pl-4 font-mono-tactical text-[9px] sm:text-xs">
            <div className="text-neon mb-1">AMEAÇA_DETECTADA</div>
            <div className="text-foreground text-sm sm:text-lg font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              ENDPOINT_SRV-47
            </div>
            <div className="text-muted-foreground mt-1 hidden sm:block">REDE_DMZ // FIREWALL_03</div>
          </div>

          {/* HUD: Reticle - smaller on mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 sm:size-48 border border-neon/20 rounded-full flex items-center justify-center">
            <div className="size-16 sm:size-32 border border-neon/40 rounded-full border-dashed" />
            <div className="absolute size-1.5 sm:size-2 bg-neon rounded-full neon-glow" />
            <div className="absolute w-full h-[1px] bg-neon/20" />
            <div className="absolute h-full w-[1px] bg-neon/20" />
          </div>

          {/* HUD: Telemetry - simplified on mobile */}
          <div className="absolute bottom-3 right-3 sm:bottom-8 sm:right-8 flex flex-col gap-1 sm:gap-2 font-mono-tactical text-[8px] sm:text-[10px] text-muted-foreground text-right uppercase">
            <div className="flex justify-end gap-2 sm:gap-3">
              <span className="hidden sm:inline">Tentativas de Intrusão</span>
              <span className="sm:hidden">Intrusões</span>
              <span className="text-alert">+347</span>
            </div>
            <div className="flex justify-end gap-2 sm:gap-3">
              <span className="hidden sm:inline">Vazamento de Dados</span>
              <span className="sm:hidden">Vazamento</span>
              <span className="text-foreground">0</span>
            </div>
            <div className="flex justify-end gap-2 sm:gap-3">
              <span className="hidden sm:inline">Integridade da Rede</span>
              <span className="sm:hidden">Rede</span>
              <span className="text-neon">99.7%</span>
            </div>
            <div className="mt-1 sm:mt-2 pt-1 sm:pt-2 border-t border-neon/30 text-neon">
              Firewall Neural Ativo
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 size-4 sm:size-6 border-t-2 sm:border-t-[3px] border-l-2 sm:border-l-[3px] border-neon/50" />
        <div className="absolute top-0 right-0 size-4 sm:size-6 border-t-2 sm:border-t-[3px] border-r-2 sm:border-r-[3px] border-neon/50" />
        <div className="absolute bottom-0 left-0 size-4 sm:size-6 border-b-2 sm:border-b-[3px] border-l-2 sm:border-l-[3px] border-neon/50" />
        <div className="absolute bottom-0 right-0 size-4 sm:size-6 border-b-2 sm:border-b-[3px] border-r-2 sm:border-r-[3px] border-neon/50" />
      </div>
    </section>
  );
};

export default HeroSection;
