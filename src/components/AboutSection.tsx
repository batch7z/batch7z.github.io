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
            <p className="text-sm text-muted-foreground leading-relaxed mb-4" dir="rtl">
              أنا طالب بتعلم في مجال الأمن السيبراني. مهتم بتطوير البرمجيات الخبيثة (Malware Development)، 
              تحليل البرمجيات الخبيثة (Malware Analysis)، الهندسة العكسية (Reverse Engineering)، 
              وعلم التشفير (Cryptography).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6" dir="rtl">
              بنشر هنا ملخصاتي اليومية — سواء في لغة C أو في المجالات الأمنية اللي بدرسها. 
              الهدف إني أوثق رحلتي في التعلم وأشارك المعرفة.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Malware Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Malware Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Reverse Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-glow-purple" />
                <span>Cryptography</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>C Programming</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
