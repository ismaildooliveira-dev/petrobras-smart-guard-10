const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-border bg-carbon/90 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="size-2.5 bg-neon rounded-sm neon-glow" />
        <span className="font-bold text-foreground tracking-[0.2em] uppercase text-xs">
          Petrobras // Ocularis
        </span>
      </div>
      <div className="hidden md:flex gap-8 font-mono-tactical text-[10px] text-muted-foreground uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <div className="size-1.5 bg-neon rounded-full" /> Secure Uplink
        </span>
        <span className="flex items-center gap-2">
          <div className="size-1.5 bg-alert rounded-full" /> Latência: 14ms
        </span>
        <span>Build_7.4.2</span>
      </div>
    </nav>
  );
};

export default Navbar;
