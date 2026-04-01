import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import BlogSectionCard from "@/components/BlogSectionCard";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">404</h1>
          <p className="text-muted-foreground mb-6">المقال مش موجود</p>
          <Link to="/" className="text-primary text-sm hover:underline">← الرجوع للرئيسية</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background hex-grid noise">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            <span>←</span>
            <span className="font-display font-bold tracking-wider">BATCH<span className="text-primary">_7Z</span></span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Post header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          {/* Hero image */}
          {post.heroImage && (
            <div className="w-full h-40 sm:h-56 md:h-72 rounded-xl overflow-hidden border border-border mb-6">
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-3 mb-4">
            <span className="tag-green text-[10px] tracking-wider px-2.5 py-1 rounded-full">{post.category}</span>
            <span className="text-[10px] text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[9px] tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground">
                #{tag}
              </span>
            ))}
          </div>

          {/* Table of contents */}
          <div className="bg-card/60 border border-border rounded-xl p-4 sm:p-5">
            <h2 className="text-xs font-bold tracking-wider text-primary mb-3">📌 فهرس المحتوى</h2>
            <div className="space-y-1.5">
              {post.sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="text-primary/40 text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="break-all">{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-4 sm:space-y-6">
          {post.sections.map((section, i) => (
            <BlogSectionCard key={section.id} section={section} index={i} />
          ))}
        </div>

        {/* Prev / Next Navigation */}
        {(() => {
          const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
          const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
          const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border space-y-4"
            >
              <div className="flex items-center justify-between gap-3">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="flex-1 group bg-card/50 border border-border rounded-xl p-3 sm:p-4 hover:border-primary/40 transition-all"
                  >
                    <span className="text-[10px] text-muted-foreground tracking-wider">← الدرس السابق</span>
                    <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-1">
                      {prevPost.title}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {nextPost ? (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="flex-1 group bg-card/50 border border-border rounded-xl p-3 sm:p-4 hover:border-primary/40 transition-all text-right"
                  >
                    <span className="text-[10px] text-muted-foreground tracking-wider">الدرس التالي →</span>
                    <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-1">
                      {nextPost.title}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <Link to="/#blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  ← كل المقالات
                </Link>
                <span className="text-[10px] text-muted-foreground">@batch7z</span>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </div>
  );
};

export default BlogPostPage;
