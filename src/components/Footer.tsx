const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary status-pulse" />
          <span className="font-display font-bold text-sm tracking-wider text-foreground">
            BATCH<span className="text-primary">_7Z</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>Malware Analysis</span>
          <span className="text-border">•</span>
          <span>Reverse Engineering</span>
          <span className="text-border">•</span>
          <span>Cryptography</span>
        </div>
        <span className="text-[10px] text-muted-foreground tracking-wider">
          © 2026 BATCH_7Z
        </span>
      </div>
    </footer>
  );
};

export default Footer;
