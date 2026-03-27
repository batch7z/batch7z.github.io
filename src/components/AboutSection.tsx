import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-muted-foreground tracking-[0.3em]">04</span>
          <h2 className="font-display text-3xl font-bold mt-2 mb-6 text-foreground">
            ABOUT_ME
          </h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              طالب مهتم بمجال الأمن السيبراني، متخصص في تحليل البرمجيات الخبيثة (Malware Analysis)، 
              الهندسة العكسية (Reverse Engineering)، وعلم التشفير (Cryptography).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              أقوم بنشر ملخصاتي وتحليلاتي هنا لمشاركة المعرفة مع المجتمع العربي في مجال الأمن السيبراني.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Malware Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-glow-purple" />
                <span>Reverse Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Cryptography</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
