import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", url: "https://github.com/batch7z", color: "hover:text-foreground" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/batch-7z/", color: "hover:text-secondary" },
  { name: "X", url: "https://x.com/batch_7z", color: "hover:text-foreground" },
  { name: "Instagram", url: "https://www.instagram.com/batch_7z/", color: "hover:text-accent" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100078981974023", color: "hover:text-secondary" },
  { name: "YouTube", url: "https://youtube.com/@batch7z", color: "hover:text-destructive" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* Social links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-[10px] tracking-[0.4em] text-muted-foreground">CONNECT</span>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs text-muted-foreground ${social.color} transition-colors px-3 py-2 rounded-lg border border-transparent hover:border-border hover:bg-muted/30`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary status-pulse" />
            <span className="font-display font-bold text-sm tracking-wider text-foreground">
              BATCH<span className="text-primary">_7Z</span>
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground tracking-wider">
            © 2026 — Cybersecurity Student
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
