import { motion } from "framer-motion";

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] tracking-[0.4em] text-muted-foreground font-mono">02</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground">
            Blog & <span className="text-secondary">Notes</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-lg">
            ملخصاتي ومذكراتي اليومية — لغة C، تحليل Malware، وأكتر
          </p>
        </motion.div>

        {/* Empty state — waiting for posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-dashed border-border rounded-2xl p-16 flex flex-col items-center justify-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-6">
            <span className="text-3xl">📝</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            قريبًا...
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mb-6" dir="rtl">
            المدونة لسه في البداية — هنشر هنا ملخصاتي في لغة C، 
            تحليل الـ Malware، الهندسة العكسية، والتشفير. تابعني!
          </p>

          {/* Preview of what's coming */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
            {[
              { title: "ملخصات C", icon: "💻", tag: "C LANG", tagClass: "tag-green" },
              { title: "تحليل Malware", icon: "🔬", tag: "MALWARE", tagClass: "tag-amber" },
              { title: "ملخصات Crypto", icon: "🔐", tag: "CRYPTO", tagClass: "tag-purple" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card/60 border border-border rounded-xl p-4 text-center"
              >
                <span className="text-2xl block mb-2">{item.icon}</span>
                <span className={`text-[9px] tracking-[0.2em] px-2 py-0.5 rounded-full ${item.tagClass} inline-block mb-2`}>
                  {item.tag}
                </span>
                <p className="text-xs text-muted-foreground">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
