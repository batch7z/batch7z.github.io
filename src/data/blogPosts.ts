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
      // ... باقي سكاشن الدرس الأول ...
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
  }, // <--- لاحظ الفاصلة هنا بين الدرس الأول والتاني
  {
    slug: "c-02-comments-escape-sequences",
    title: "02 - C Language - التعليقات | Escape Sequences",
    date: "2025-12-05",
    category: "C Programming",
    tags: ["c", "comments", "escape-sequences"],
    sections: [
      {
        id: "comments-def",
        title: "التعليقات (Comments)",
        explanation: [
          "التعليقات هي كود لا يتم تنفيذه",
          "الكومبايلر بيتجاهلها تمامًا",
          "وظيفتها: شرح الكود — توثيق — تجاهل أسطر مؤقتًا أثناء التجربة",
        ],
      },
      // ... باقي سكاشن الدرس التاني اللي إنت كتبتها ...
      {
        id: "escape-summary",
        title: "جدول مقارنة شامل",
        table: {
          headers: ["الرمز", "الاسم", "الاستخدام", "مثال", "الناتج"],
          rows: [
            ["\\n", "New Line", "سطر جديد", 'printf("A\\nB");', "A ثم B"],
            ["\\t", "Tab", "مسافة أفقية", 'printf("A\\tB");', "A    B"],
            ["\\b", "Backspace", "رجوع للخلف", 'printf("ABC\\bD");', "ABD"],
            ["\\r", "Carriage Return", "بداية السطر", 'printf("Hello\\rHi");', "Hillo"],
            ["\\\\", "Backslash", "طباعة \\", 'printf("\\\\");', "\\"],
            ["\\x41", "Hex", "ASCII Hex", 'printf("\\x41");', "A"],
          ],
        },
      },
    ],
  },
];
