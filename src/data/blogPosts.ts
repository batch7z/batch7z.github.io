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
      {
        id: "single-line-comment",
        title: "// تعليق سطر واحد",
        code: `// test\n\n// printf("Hello World");`,
        explanation: [
          "ده تعليق لسطر واحد",
          "أي حاجة بعد // في نفس السطر مش بتتنفذ",
          "ينتهي التعليق بنهاية السطر",
          "استخداماته: شرح سطر معين — إيقاف سطر كود مؤقتًا",
        ],
      },
      {
        id: "multi-line-comment",
        title: "/* */ تعليق متعدد الأسطر",
        code: `/*\n* test1\n* test2\n* test3\n* test4\n*/`,
        explanation: [
          "ده تعليق متعدد الأسطر",
          "يبدأ بـ /* وينتهي بـ */",
          "أي حاجة بينهم لا يتم تنفيذها",
        ],
      },
      {
        id: "star-in-comment",
        title: "علامة * جوه التعليق",
        code: `* test1`,
        explanation: [
          "النجمة * اختيارية",
          "وجودها: لتنظيم الشكل وتحسين القراءة فقط",
          "ملهاش أي تأثير برمجي",
        ],
        note: { type: "info", text: "ده أسلوب شائع في التوثيق (Documentation Style)" },
      },
      {
        id: "comments-compare",
        title: "مقارنة سريعة",
        table: {
          headers: ["النوع", "الرمز", "الاستخدام"],
          rows: [
            ["تعليق سطر واحد", "//", "ملاحظة سريعة"],
            ["تعليق متعدد الأسطر", "/* */", "شرح طويل أو تعطيل كود كبير"],
          ],
        },
      },
      {
        id: "nested-comment-warning",
        title: "ملحوظة مهمة — تعليق متداخل",
        code: `// ❌ غلط\n/*\n   /* غلط */\n*/\n\n// ✅ صح\n// /* تعليق */`,
        note: { type: "warning", text: "مينفعش تعمل تعليق متداخل!" },
      },
      {
        id: "escape-alert",
        title: "\\a — Alert",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello\\aWorld\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Alert / Bell Escape Sequence",
          "بتطلع صوت تنبيه (Beep) أو تنبيه مرئي حسب نظام التشغيل",
        ],
        note: { type: "info", text: "مش كل الأنظمة بتشغّل صوت — في بعض التيرمنالات الحديثة بيتم تجاهله" },
        output: "HelloWorld",
      },
      {
        id: "escape-backspace",
        title: "\\b — Backspace",
        code: `#include <stdio.h>\n\nint main() {\n    printf("ABC\\bD\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Backspace Escape Sequence",
          "بترجّع المؤشر حرف واحد للخلف",
          "مش بتمسح الحرف فعليًا — بتخلي أي حرف ييجي بعدها يكتب مكانه",
          "اللي حصل: طبع ABC ← \\b رجّعت المؤشر على C ← D اتكتب مكان C",
        ],
        note: { type: "info", text: "تأثير \\b بيختلف حسب Terminal والـ OS — بعض البيئات بتتجاهله" },
        output: "ABD",
      },
      {
        id: "escape-formfeed",
        title: "\\f — Form Feed",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello\\fWorld\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Form Feed Escape Sequence",
          "وظيفته الأصلية: تنقل المؤشر لسطر جديد على صفحة جديدة",
          "كان يُستخدم في الطابعات القديمة",
          "بديله الحديث: \\n\\n لسطر فارغ",
        ],
        note: { type: "info", text: "نادر جدًا استخدامه في البرامج الحديثة" },
        output: "Hello\nWorld",
      },
      {
        id: "escape-newline",
        title: "\\n — New Line",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello\\nWorld\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه New Line Escape Sequence",
          "بتنقل المؤشر لسطر جديد في الكونسول أو الملف",
          "أي حاجة بعدها هتظهر في السطر التالي",
        ],
        note: { type: "info", text: "\\n ضروري لفصل السطور — لو استخدمته في ملف نصي .txt هيفرق بين الأسطر" },
        output: "Hello\nWorld",
      },
      {
        id: "escape-carriage-return",
        title: "\\r — Carriage Return",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello\\rWorld\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Carriage Return Escape Sequence",
          "بتنقل المؤشر لبداية السطر الحالي",
          "أي نص يُكتب بعده بيبدأ من أول السطر ويكتب فوق القديم",
          "مش بينزل سطر جديد (دي وظيفة \\n)",
          "اللي حصل: طبع Hello ← \\r رجّع المؤشر لبداية السطر ← طبع World فوق Hello",
        ],
        note: { type: "warning", text: "لو النص الجديد أقصر من القديم — الحروف الزيادة ما تمسحتش! الحل: printf(\"Hello\\r     \\rHi\\n\");" },
        output: "World",
      },
      {
        id: "escape-tab",
        title: "\\t — Tab",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Name\\tAge\\tCity\\n");\n    printf("Ali\\t25\\tCairo\\n");\n    printf("Sara\\t30\\tGiza\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Tab Escape Sequence",
          "بتضيف مسافة أفقية ثابتة (Tab)",
          "عادةً تساوي 8 مسافات في معظم الكونسولات",
          "تُستخدم لترتيب النصوص أو جدولتها",
        ],
        note: { type: "info", text: "طول الـ Tab قد يختلف حسب إعدادات التيرمنال — لو محتاج تحكم دقيق استخدم Format Specifiers" },
        output: "Name    Age     City\nAli     25      Cairo\nSara    30      Giza",
      },
      {
        id: "escape-vertical-tab",
        title: "\\v — Vertical Tab",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello\\vWorld\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Vertical Tab Escape Sequence",
          "بتضيف مسافة رأسية (سطر فارغ صغير)",
          "نادر الاستخدام في البرامج الحديثة",
          "غالبًا بيتم استبداله بـ \\n",
        ],
        output: "Hello\n       World",
      },
      {
        id: "escape-backslash",
        title: "\\\\ — Backslash",
        code: `#include <stdio.h>\n\nint main() {\n    printf("C:\\\\Users\\\\Ali\\\\Documents\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Backslash Escape Sequence",
          "بتطبع حرف \\ فعليًا على الشاشة",
          "\\ هو رمز الهروب (Escape Character) في C — عشان نطبعه نستخدم \\\\",
        ],
        note: { type: "warning", text: "بدون \\\\ — هيطلع Compilation Error أو Output خاطئ" },
        output: "C:\\Users\\Ali\\Documents",
      },
      {
        id: "escape-single-quote",
        title: "\\' — Single Quote",
        code: `#include <stdio.h>\n\nint main() {\n    printf("It\\'s a test\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Single Quote Escape Sequence",
          "بتسمحلك تطبع أو تستخدم ' داخل نص",
        ],
        output: "It's a test",
      },
      {
        id: "escape-double-quote",
        title: '\\" — Double Quote',
        code: `#include <stdio.h>\n\nint main() {\n    printf("He said: \\"Hello World\\"\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Double Quote Escape Sequence",
          'بتسمحلك تطبع أو تستخدم " داخل نصوص',
          'أي " جوه النص بدون \\" هيعمل Compilation Error',
        ],
        output: 'He said: "Hello World"',
      },
      {
        id: "escape-octal",
        title: "\\nnn — Octal",
        code: `#include <stdio.h>\n\nint main() {\n    printf("\\101\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Octal Escape Sequence",
          "أي شيء يبدأ بـ \\ ويتبعه أرقام من 0 إلى 7",
          "C بتحوّل الرقم الثماني لحرف ASCII المقابل",
        ],
        table: {
          headers: ["الخطوة", "الشرح"],
          rows: [
            ["\\101", "الرقم 101 بالثماني (Octal)"],
            ["التحويل", "1×8² + 0×8¹ + 1×8⁰ = 65"],
            ["ASCII 65", "= الحرف A"],
          ],
        },
        output: "A",
      },
      {
        id: "escape-hex",
        title: "\\xhh — Hexadecimal",
        code: `#include <stdio.h>\n\nint main() {\n    printf("\\x41\\n");\n    printf("\\x48\\x65\\x6C\\x6C\\x6F\\n");\n    return 0;\n}`,
        explanation: [
          "اسمه Hexadecimal Escape Sequence",
          "يمثل حرف ASCII عن طريق رقم سداسي عشري (Hex)",
          "hh = رقم أو رقمين بالـ Hex (0-9, A-F, a-f)",
          "شائع في: ASCII codes — ملفات Binary — Malware / Reverse Engineering",
        ],
        table: {
          headers: ["الخطوة", "الشرح"],
          rows: [
            ["\\x41", "الرقم 41 بالـ Hex"],
            ["التحويل", "41₁₆ = 65₁₀"],
            ["ASCII 65", "= الحرف A"],
          ],
        },
        output: "A\nHello",
      },
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
            ["\\f", "Form Feed", "صفحة جديدة", 'printf("A\\fB");', "حسب التيرمنال"],
            ["\\v", "Vertical Tab", "مسافة رأسية", 'printf("A\\vB");', "حسب التيرمنال"],
            ["\\a", "Alert", "تنبيه", 'printf("\\a");', "🔔 Beep"],
            ["\\\\", "Backslash", "طباعة \\", 'printf("\\\\");', "\\"],
            ["\\'", "Single Quote", "طباعة '", "printf(\"It\\'s\");", "It's"],
            ['\\"', "Double Quote", 'طباعة "', 'printf("\\"Hi\\"");', '"Hi"'],
            ["\\nnn", "Octal", "ASCII Octal", 'printf("\\101");', "A"],
            ["\\xhh", "Hex", "ASCII Hex", 'printf("\\x41");', "A"],
          ],
        },
      },
    ],
  },
];
