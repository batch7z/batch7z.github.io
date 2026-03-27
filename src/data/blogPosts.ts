export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  sections: BlogSection[];
}

export interface BlogSection {
  id: string;
  title: string;
  code?: string;
  explanation?: string[];
  note?: { type: "info" | "warning"; text: string };
  table?: { headers: string[]; rows: string[][] };
  output?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "c-01-installation-first-program",
    title: "01 - C Language - تثبيت اللغة | أول برنامج",
    date: "2025-12-03",
    category: "C Programming",
    tags: ["c", "basics", "printf", "main"],
    sections: [
      {
        id: "full-code",
        title: "الكود كامل",
        code: `#include <stdio.h>\n\nint main() {\n    printf("test\\n");\n    return 0;\n}`,
        output: "test",
      },
      {
        id: "include",
        title: "#include <stdio.h>",
        code: `#include <stdio.h>`,
        explanation: [
          "دي تعليمة Preprocessor",
          "معناها: ضمّ مكتبة Standard Input Output",
          "المكتبة دي بتوفر دوال جاهزة زي:",
          "• printf() ← الطباعة على الشاشة",
          "• scanf() ← إدخال البيانات",
        ],
        note: { type: "warning", text: "بدون السطر ده، الكومبايلر هيطلع Error مع printf" },
      },
      {
        id: "main",
        title: "int main()",
        code: `int main() {`,
        explanation: [
          "دي الدالة الرئيسية في برنامج C",
          "أي برنامج C لازم يبدأ منها",
          "int معناها: الدالة بترجع عدد صحيح (integer) لنظام التشغيل",
        ],
        note: { type: "info", text: "نظام التشغيل بيستقبل القيمة دي عشان يعرف هل البرنامج اشتغل بنجاح ولا لأ" },
      },
      {
        id: "braces",
        title: "{ } الأقواس المعقوفة",
        code: `{\n    // أوامر البرنامج\n}`,
        explanation: [
          "بتحدد بداية ونهاية جسم الدالة",
          "أي كود بينهم بيتنفذ بالترتيب",
        ],
      },
      {
        id: "printf",
        title: 'printf("test\\n")',
        code: `printf("test\\n");`,
        explanation: [
          "بيطبع كلمة test على الشاشة",
        ],
        note: { type: "info", text: "\\n دي Escape Sequence — معناها: انزل سطر جديد (New Line)" },
        output: "test",
      },
      {
        id: "return",
        title: "return 0;",
        code: `return 0;`,
        explanation: [
          "بترجع قيمة 0 لنظام التشغيل",
          "معناها: البرنامج انتهى بدون أخطاء",
        ],
        table: {
          headers: ["القيمة", "المعنى"],
          rows: [
            ["0", "✅ تنفيذ ناجح"],
            ["غير 0", "❌ حصل خطأ"],
          ],
        },
      },
      {
        id: "semicolon",
        title: "; الفاصلة المنقوطة",
        explanation: [
          "كل سطر أمر في C لازم ينتهي بـ ;",
          "معناها: نهاية التعليمة",
        ],
        note: { type: "warning", text: "نسيانها = Compilation Error" },
      },
    ],
  },
];
