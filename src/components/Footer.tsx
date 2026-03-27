import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, Youtube, Twitter, Send } from "lucide-react";

const socials = [
  { name: "GitHub", url: "https://github.com/batch7z", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/batch-7z/", icon: Linkedin },
  { name: "X", url: "https://x.com/batch_7z", icon: Twitter },
  { name: "Telegram", url: "https://t.me/batch_7z", icon: Send },
  { name: "Instagram", url: "https://www.instagram.com/batch_7z/", icon: Instagram },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100078981974023", icon: Facebook },
  { name: "YouTube", url: "https://youtube.com/@batch7z", icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* Social links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-[10px] tracking-[0.4em] text-muted-foreground">CONNECT WITH ME</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2.5 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5"
              >
                <social.icon className="w-4 h-4" />
                <span className="text-xs tracking-wider">{social.name}</span>
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
