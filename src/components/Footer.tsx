const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary status-pulse" />
          <span className="text-xs tracking-[0.2em] text-muted-foreground">BATCH_7Z</span>
        </div>
        <span className="text-xs text-muted-foreground">
          © 2026 — All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
