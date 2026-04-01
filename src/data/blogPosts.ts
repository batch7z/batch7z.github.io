import img01 from "@/assets/23523.png";
import img02 from "@/assets/24793.png";
import img03 from "@/assets/25424.png";
import img04 from "@/assets/lesson04.png";
import img05 from "@/assets/lesson05.png";
import img06 from "@/assets/lesson06.png";
import img07 from "@/assets/lesson07.png";
import img08 from "@/assets/lesson08.png";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  heroImage?: string;
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
  // ══════════════════════════════════════════════
  // 01
  // ══════════════════════════════════════════════
  {
    slug: "c-01-installation-first-program",
    title: "01 - C language course - language installation _ 1st program",
    date: "2025-12-03",
    category: "C Programming",
    tags: ["c", "basics", "printf", "main"],
    heroImage: img01,
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
  // ══════════════════════════════════════════════
  // 02
  // ══════════════════════════════════════════════
  {
    slug: "c-02-comments-escape-sequences",
    title: "02 - C language course - comments _ Escape Sequence",
    date: "2025-12-05",
    category: "C Programming",
    tags: ["c", "comments", "escape-sequences"],
    heroImage: img02,
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
  // ══════════════════════════════════════════════
  // 03
  // ══════════════════════════════════════════════
  {
    slug: "c-03-little-bit-about-variables",
    title: "03 - C language course - little bit about variables",
    date: "2025-12-07",
    category: "C Programming",
    tags: ["c", "variables", "data-types", "char", "int", "float", "bool"],
    heroImage: img03,
    sections: [
      {
        id: "char-def",
        title: "char — تخزين الحروف",
        explanation: [
          "نوع بيانات بيُستخدم لتخزين حرف واحد فقط",
          "حجمه دائمًا 1 بايت",
          "بيُخزن قيمة الحرف كـ رقم ASCII",
        ],
      },
      {
        id: "char-declaration",
        title: "تعريف متغير char",
        code: `char c = 'A';`,
        table: {
          headers: ["الجزء", "الشرح"],
          rows: [
            ["'A'", "حرف واحد — لازم Single Quotes"],
            ["القيمة المخزنة", "65 (ASCII)"],
          ],
        },
      },
      {
        id: "char-uses",
        title: "جدول استخدامات char",
        table: {
          headers: ["الاستخدام", "المثال", "الشرح"],
          rows: [
            ["تخزين حرف", "char c = 'A';", "تخزين حرف واحد"],
            ["طباعة حرف", 'printf("%c", c);', "%c لطباعة char"],
            ["قيمة ASCII", 'printf("%d", c);', "يطبع قيمة ASCII"],
            ["رمز خاص", "char x = '\\n';", "Escape Sequence"],
            ["Octal", "char o = '\\101';", "ASCII Octal"],
            ["Hex", "char h = '\\x41';", "ASCII Hex"],
            ["اقتباس مفرد", "char q = '\\'';", "حرف '"],
            ["Backslash", "char b = '\\\\';", "حرف \\"],
          ],
        },
      },
      {
        id: "char-print-example",
        title: "طباعة حرف وقيمته",
        code: `char c = 'A';\nprintf("%c\\n", c);\nprintf("%d\\n", c);`,
        output: "A\n65",
      },
      {
        id: "char-escape-example",
        title: "استخدام Escape Sequence مع char",
        code: `char n = '\\n';\nprintf("Hello%cWorld", n);`,
        output: "Hello\nWorld",
      },
      {
        id: "char-octal-hex",
        title: "الـ Octal و Hex مع char",
        code: `// Octal\nchar a1 = '\\101';\n// Hex\nchar a2 = '\\x41';\nprintf("%c %c", a1, a2);`,
        output: "A A",
      },
      {
        id: "char-notes",
        title: "ملاحظات مهمة — char",
        note: { type: "warning", text: 'char c = "A"; ← ❌ غلط (ده string) — char c = \'A\'; ← ✅ صح' },
      },
      {
        id: "char-lowlevel",
        title: "معلومة Low Level — char",
        code: `char c = 65;\nprintf("%c", c); // A`,
        note: { type: "info", text: "char = رقم + حرف في نفس الوقت (ASCII)" },
      },
      {
        id: "int-def",
        title: "int — تخزين الأرقام الصحيحة",
        explanation: [
          "نوع بيانات بيُستخدم لتخزين الأرقام الصحيحة فقط",
          "حجمه غالبًا 4 بايت (يعتمد على النظام)",
          "بيُخزن الأرقام بصيغة Binary (Two's Complement)",
        ],
      },
      {
        id: "int-declaration",
        title: "تعريف متغير int",
        code: `int num = 77;`,
        table: {
          headers: ["الجزء", "الشرح"],
          rows: [
            ["77", "رقم صحيح بدون كسور"],
            ["القيمة المخزنة", "77"],
          ],
        },
      },
      {
        id: "int-uses",
        title: "جدول استخدامات int",
        table: {
          headers: ["الاستخدام", "المثال", "الشرح"],
          rows: [
            ["تخزين رقم صحيح", "int x = 10;", "تخزين عدد صحيح"],
            ["طباعة رقم", 'printf("%d", x);', "%d لطباعة int"],
            ["رقم سالب", "int n = -5;", "يدعم السالب"],
            ["عمليات حسابية", "int z = x + y;", "جمع / طرح / ضرب"],
            ["مقارنة", "if (x > y)", "يستخدم في الشروط"],
          ],
        },
      },
      {
        id: "int-print-example",
        title: "طباعة رقم صحيح",
        code: `int num = 77;\nprintf("%d\\n", num);`,
        output: "77",
      },
      {
        id: "int-arithmetic",
        title: "العمليات الحسابية على int",
        code: `int a = 10, b = 3;\nprintf("%d\\n", a + b);\nprintf("%d\\n", a - b);\nprintf("%d\\n", a * b);\nprintf("%d\\n", a / b);`,
        output: "13\n7\n30\n3",
        note: { type: "info", text: "القسمة بدون كسور لأن النوع int" },
      },
      {
        id: "int-range",
        title: "مدى الأرقام (Range) — int",
        table: {
          headers: ["النوع", "الحجم", "المدى"],
          rows: [["int", "4 بايت", "-2,147,483,648 → 2,147,483,647"]],
        },
      },
      {
        id: "int-notes",
        title: "ملاحظات مهمة — int",
        note: { type: "warning", text: "int x = 3.5; ← هيخزن 3 فقط (يتجاهل الكسر) — int لا يخزن كسور — القسمة بين int و int تنتج int" },
      },
      {
        id: "int-lowlevel",
        title: "معلومة Low Level — int",
        code: `int x = 'A';\nprintf("%d", x); // 65`,
        note: { type: "info", text: "لأن A = 65 في ASCII" },
      },
      {
        id: "float-def",
        title: "float — تخزين الأرقام العشرية",
        explanation: [
          "نوع بيانات بيُستخدم لتخزين الأرقام العشرية",
          "حجمه غالبًا 4 بايت (يعتمد على النظام)",
          "بيُخزن الأرقام بصيغة Floating Point (IEEE 754)",
        ],
      },
      {
        id: "float-declaration",
        title: "تعريف متغير float",
        code: `float x = 3.14;`,
        table: {
          headers: ["الجزء", "الشرح"],
          rows: [
            ["3.14", "رقم عشري"],
            ["القيمة المخزنة", "≈ 3.14 (تقريب)"],
          ],
        },
      },
      {
        id: "float-print-example",
        title: "طباعة رقم عشري",
        code: `float x = 3.14;\nprintf("%f\\n", x);`,
        output: "3.140000",
      },
      {
        id: "float-arithmetic",
        title: "العمليات الحسابية على float",
        code: `float a = 10.0, b = 3.0;\nprintf("%f\\n", a / b);`,
        output: "3.333333",
      },
      {
        id: "float-range",
        title: "مدى الأرقام (Range) — float",
        table: {
          headers: ["النوع", "الحجم", "المدى التقريبي"],
          rows: [["float", "4 بايت", "±3.4 × 10³⁸"]],
        },
      },
      {
        id: "float-trap",
        title: "فخ شائع جداً — float",
        code: `float x = 5 / 2;\nprintf("%f", x); // 2.000000\n\n// الحل الصحيح:\nfloat y = 5.0 / 2;\nprintf("%f", y); // 2.500000`,
        note: { type: "warning", text: "القسمة تمت كـ int لأن الاتنين أرقام صحيحة! — الحل: استخدم 5.0 بدل 5" },
      },
      {
        id: "float-notes",
        title: "ملاحظات مهمة — float",
        note: { type: "info", text: "float x = 5; ← ✅ صح (يتحول إلى 5.0) — float تقريبي (مش دقيق 100%) — القسمة بين float و int = float" },
      },
      {
        id: "bool-def",
        title: "bool — تخزين القيم المنطقية",
        explanation: [
          "نوع بيانات بيُستخدم لتخزين قيم منطقية (True/False)",
          "الحجم غالبًا 1 بايت (يعتمد على النظام)",
          "القيمة الممكنة: true أو false فقط",
        ],
      },
      {
        id: "bool-include",
        title: "المكتبة المطلوبة",
        code: `#include <stdbool.h>`,
        note: { type: "warning", text: "بدون هذه المكتبة، C لا تدعم bool رسميًا — قبل C99 كان لازم تستخدم int بدل bool" },
      },
      {
        id: "bool-declaration",
        title: "تعريف متغير bool",
        code: `bool flag = true;`,
        table: {
          headers: ["القيمة", "تمثّل"],
          rows: [
            ["true", "1"],
            ["false", "0"],
          ],
        },
      },
      {
        id: "bool-uses",
        title: "جدول استخدامات bool",
        table: {
          headers: ["الاستخدام", "المثال", "الشرح"],
          rows: [
            ["تعريف متغير منطقي", "bool x = true;", "يخزن قيمة منطقية"],
            ["طباعة متغير منطقي", 'printf("%d", x);', "يطبع 1 لـ true و 0 لـ false"],
            ["تغيير القيمة", "x = false;", "يمكن التغيير في أي وقت"],
          ],
        },
      },
      {
        id: "bool-example",
        title: "طباعة قيم bool",
        code: `#include <stdio.h>\n#include <stdbool.h>\n\nint main() {\n    bool x = true;\n    bool y = false;\n    printf("%i\\n", x);\n    printf("%i\\n", y);\n}`,
        output: "1\n0",
      },
      {
        id: "bool-pre-c99",
        title: "قبل C99",
        code: `int flag = 1; // true\nint flag = 0; // false`,
        note: { type: "info", text: "لو الكومبايلر قديم ومش بيدعم stdbool.h — استخدم int بدل bool" },
      },
      {
        id: "bool-reminder",
        title: "تذكير مهم",
        note: { type: "warning", text: "لازم دايمًا تحط في الأول: #include <stdbool.h>" },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 04 — More about variables
  // ══════════════════════════════════════════════
  {
    slug: "c-04-more-about-variables",
    title: "04 - C language course - more about variables",
    date: "2025-12-09",
    category: "C Programming",
    tags: ["c", "variables", "data-types", "keywords", "case-sensitive"],
    heroImage: img04,
    sections: [
      {
        id: "case-sensitive",
        title: "لغة C حسّاسة لحالة الأحرف (Case Sensitive)",
        explanation: [
          "لغة C بتفرّق بين الحروف الكبيرة والصغيرة",
        ],
        table: {
          headers: ["صغير", "كبير", "نفس المعنى؟"],
          rows: [
            ["a", "A", "❌"],
            ["sum", "Sum / SUM", "❌"],
            ["main", "Main", "❌"],
          ],
        },
      },
      {
        id: "case-example",
        title: "مثال عملي — Case Sensitivity",
        code: `#include <stdio.h>\n\nint main() {\n    char test = 'A';\n    char Test = 'B';\n    char TeSt = 'C';\n\n    printf("%c\\n%c\\n%c\\n", test, Test, TeSt);\n\n    return 0;\n}`,
        output: "A\nB\nC",
        explanation: [
          "test متغير مختلف تمامًا عن Test",
          "Test مختلف عن TeSt",
          "رغم تشابه الأسماء، كل واحد متغير مستقل",
          "السبب: لغة C حسّاسة لحالة الأحرف",
        ],
        note: { type: "info", text: "في لغة C، أي تغيير في Capital / Small letters = اسم مختلف تمامًا" },
      },
      {
        id: "keywords",
        title: "الكلمات المحجوزة في لغة C (C Keywords)",
        explanation: [
          "الكلمات دي محجوزة — مينفعش تستخدمها كـ: اسم متغير، دالة، Struct، Union، أو Type جديد",
        ],
        table: {
          headers: ["", "", "", ""],
          rows: [
            ["auto", "else", "long", "switch"],
            ["break", "enum", "register", "unsigned"],
            ["case", "extern", "return", "void"],
            ["char", "float", "short", "sizeof"],
            ["const", "for", "signed", "while"],
            ["continue", "if", "goto", "static"],
            ["default", "int", "struct", ""],
            ["do", "typedef", "union", ""],
            ["double", "volatile", "", ""],
          ],
        },
        note: { type: "warning", text: "لغة C حسّاسة لحالة الأحرف — int ≠ Int" },
      },
      {
        id: "packed-note",
        title: "_Packed و __Packed",
        explanation: [
          "ليست كلمات محجوزة في C القياسية",
          "Compiler-specific — تُستخدم مع GCC أو ARM Compiler",
        ],
      },
      {
        id: "keywords-examples",
        title: "أمثلة — الكلمات المحجوزة",
        code: `// ❌ خطأ — return كلمة محجوزة\nint return = 5;\n\n// ✅ صحيح\nint result = 5;\nreturn result;`,
        note: { type: "warning", text: "الكلمات المحجوزة لها وظيفة ثابتة ولا يمكن إعادة استخدامها — أي مخالفة = Compile Error" },
      },
      {
        id: "dt-char",
        title: "char — نوع البيانات",
        code: `#include <stdio.h>\n\nint main() {\n    char c = 'A';\n    printf("%c", c);\n    return 0;\n}`,
        output: "A",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "1 Byte"],
            ["المدى (signed)", "-128 إلى 127"],
            ["Format Specifier", "%c"],
          ],
        },
        explanation: [
          "char بيخزن حرف واحد فقط",
          "القيمة الحقيقية المخزنة هي رقم ASCII",
          "لطباعة القيمة الرقمية: printf(\"%d\", c);",
        ],
      },
      {
        id: "dt-short",
        title: "short int",
        code: `#include <stdio.h>\n\nint main() {\n    short int x = 1000;\n    printf("%hd", x);\n    return 0;\n}`,
        output: "1000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "2 Bytes"],
            ["المدى", "-32768 إلى 32767"],
            ["Format Specifier", "%hd"],
          ],
        },
        explanation: [
          "short = short int (نفس المعنى)",
          "%hd مخصص لـ short int فقط",
          "يُستخدم لتقليل استهلاك الذاكرة",
        ],
      },
      {
        id: "dt-ushort",
        title: "unsigned short int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned short int x = 65000;\n    printf("%hu", x);\n    return 0;\n}`,
        output: "65000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "2 Bytes"],
            ["المدى", "0 إلى 65535"],
            ["Format Specifier", "%hu"],
          ],
        },
        explanation: [
          "لا يقبل قيم سالبة",
          "unsigned short = unsigned short int",
        ],
      },
      {
        id: "dt-int",
        title: "int",
        code: `#include <stdio.h>\n\nint main() {\n    int num = 1000;\n    printf("%d", num);\n    return 0;\n}`,
        output: "1000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "4 Bytes"],
            ["المدى", "-2147483648 إلى 2147483647"],
            ["Format Specifier", "%d أو %i"],
          ],
        },
        explanation: [
          "يأخذ قيم سالبة وموجبة",
          "في أنظمة 16-bit قديمة قد يكون 2 بايت فقط",
        ],
      },
      {
        id: "dt-uint",
        title: "unsigned int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned int x = 4000000000;\n    printf("%u", x);\n    return 0;\n}`,
        output: "4000000000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "4 Bytes"],
            ["المدى", "0 إلى 4294967295"],
            ["Format Specifier", "%u"],
          ],
        },
        explanation: [
          "لا يقبل قيم سالبة",
          "%u مخصص لطباعة unsigned int",
        ],
      },
      {
        id: "dt-long",
        title: "long int",
        code: `#include <stdio.h>\n\nint main() {\n    long int bigNum = 9223372036854775807;\n    printf("%ld", bigNum);\n    return 0;\n}`,
        output: "9223372036854775807",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "8 Bytes (قد يكون 4 في 32-bit)"],
            ["المدى", "-9223372036854775808 إلى 9223372036854775807"],
            ["Format Specifier", "%ld"],
          ],
        },
      },
      {
        id: "dt-ulong",
        title: "unsigned long int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned long int bigNum = 18446744073709551615UL;\n    printf("%lu", bigNum);\n    return 0;\n}`,
        output: "18446744073709551615",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "8 Bytes"],
            ["المدى", "0 إلى 18446744073709551615"],
            ["Format Specifier", "%lu"],
          ],
        },
      },
      {
        id: "dt-longlong",
        title: "long long int",
        code: `#include <stdio.h>\n\nint main() {\n    long long int bigNum = 9223372036854775807LL;\n    printf("%lld", bigNum);\n    return 0;\n}`,
        output: "9223372036854775807",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "8 Bytes"],
            ["المدى", "-9223372036854775808 إلى 9223372036854775807"],
            ["Format Specifier", "%lld"],
          ],
        },
      },
      {
        id: "dt-ulonglong",
        title: "unsigned long long int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned long long int bigNum = 18446744073709551615ULL;\n    printf("%llu", bigNum);\n    return 0;\n}`,
        output: "18446744073709551615",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "8 Bytes"],
            ["المدى", "0 إلى 18446744073709551615"],
            ["Format Specifier", "%llu"],
          ],
        },
      },
      {
        id: "dt-float",
        title: "float",
        code: `#include <stdio.h>\n\nint main() {\n    float pi = 3.141592;\n    printf("%f", pi);\n    return 0;\n}`,
        output: "3.141592",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "4 Bytes"],
            ["المدى", "1.175494e-38 إلى 3.402823e+38"],
            ["الدقة", "~6 أرقام بعد الفاصلة"],
            ["Format Specifier", "%f"],
          ],
        },
      },
      {
        id: "dt-double",
        title: "double",
        code: `#include <stdio.h>\n\nint main() {\n    double pi = 3.141592653589793;\n    printf("%lf", pi);\n    return 0;\n}`,
        output: "3.141593",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "8 Bytes"],
            ["المدى", "2.225074e-308 إلى 1.797693e+308"],
            ["الدقة", "~15 رقم بعد الفاصلة"],
            ["Format Specifier", "%lf"],
          ],
        },
        note: { type: "info", text: "الطباعة الافتراضية تقرّب الرقم، لكن المتغير يحتفظ بالدقة الكاملة داخليًا" },
      },
      {
        id: "dt-longdouble",
        title: "long double",
        code: `#include <stdio.h>\n\nint main() {\n    long double pi = 3.1415926535897932384L;\n    printf("%Lf", pi);\n    return 0;\n}`,
        output: "3.141592653589793238",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [
            ["الحجم", "16 Bytes"],
            ["الدقة", "~19 رقم بعد الفاصلة"],
            ["Format Specifier", "%Lf"],
          ],
        },
      },
      {
        id: "dt-summary",
        title: "ملخص أنواع البيانات",
        table: {
          headers: ["النوع", "الحجم", "الإشارة", "Format"],
          rows: [
            ["char", "1 B", "signed", "%c"],
            ["short int", "2 B", "signed", "%hd"],
            ["unsigned short int", "2 B", "unsigned", "%hu"],
            ["int", "4 B", "signed", "%d"],
            ["unsigned int", "4 B", "unsigned", "%u"],
            ["long int", "8 B", "signed", "%ld"],
            ["unsigned long int", "8 B", "unsigned", "%lu"],
            ["long long int", "8 B", "signed", "%lld"],
            ["unsigned long long int", "8 B", "unsigned", "%llu"],
            ["float", "4 B", "—", "%f"],
            ["double", "8 B", "—", "%lf"],
            ["long double", "16 B", "—", "%Lf"],
          ],
        },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 05
  // ══════════════════════════════════════════════
  {
    slug: "c-05-more-about-variables-2",
    title: "05 - C language course - more about variables",
    date: "2025-12-11",
    category: "C Programming",
    tags: ["c", "string", "char", "float", "int", "printf", "pointers"],
    sections: [
      {
        id: "string-def",
        title: "التعامل مع String في لغة C",
        code: `char name[] = "batch";`,
        explanation: [
          "الـ String في لغة C هو مصفوفة من char",
        ],
      },
      {
        id: "string-print",
        title: "طباعة الـ String كاملة",
        code: `printf("%s\\n", name);`,
        table: {
          headers: ["الجزء", "الشرح"],
          rows: [
            ["%s", "مخصص لطباعة النصوص"],
          ],
        },
        output: "batch",
      },
      {
        id: "string-first-char",
        title: "الوصول إلى أول حرف",
        code: `printf("%c\\n", *name);\nprintf("%c\\n", name[0]);`,
        table: {
          headers: ["الطريقة", "الشرح"],
          rows: [
            ["*name", "أول عنصر في المصفوفة"],
            ["name[0]", "أول عنصر أيضًا"],
          ],
        },
        note: { type: "info", text: "الطريقتان متكافئتان تمامًا" },
        output: "b",
      },
      {
        id: "string-partial-print",
        title: "التحكم في عدد الحروف المطبوعة",
        code: `printf("%.2s\\n", name);   // ba\nprintf("%.3s\\n", name);   // bat\nprintf("%10.1s\\n", name); // حرف واحد + 9 مسافات`,
        table: {
          headers: ["الصيغة", "المعنى", "الناتج"],
          rows: [
            ["%.2s", "أول حرفين فقط", "ba"],
            ["%.3s", "أول 3 حروف", "bat"],
            ["%10.1s", "عرض 10 خانات + حرف واحد", "         b"],
          ],
        },
      },
      {
        id: "string-memory",
        title: "عناوين الذاكرة للـ String",
        code: `printf("%p\\n", name);\nprintf("%p\\n", &name[0]);\nprintf("%p\\n", &name[1]);\nprintf("%p\\n", &name[2]);`,
        table: {
          headers: ["الجزء", "الشرح"],
          rows: [
            ["%p", "لطباعة عنوان الذاكرة"],
            ["name", "يساوي &name[0]"],
            ["كل char", "حجمه 1 Byte"],
          ],
        },
        note: { type: "info", text: "تمهيد لموضوع Pointers — العناوين تزيد تدريجيًا في الذاكرة بمقدار 1 Byte لكل حرف" },
      },
      {
        id: "pointer-arithmetic",
        title: "Pointer Arithmetic (تمهيد)",
        code: `printf("%c\\n", *(name + 0));\nprintf("%c\\n", *(name + 1));\nprintf("%c\\n", *(name + 2));`,
        table: {
          headers: ["الصيغة", "المعنى"],
          rows: [
            ["name + i", "عنوان العنصر رقم i"],
            ["*(name + i)", "القيمة في العنوان ده"],
            ["name[i]", "نفس الشيء بالظبط"],
          ],
        },
        explanation: [
          "الـ String في C هو Array من char",
          "name[i] ≡ *(name + i)",
          "name يشير دائمًا إلى أول عنصر في المصفوفة",
          "تمهيد مباشر لموضوع Arrays و Pointers",
        ],
      },
      {
        id: "char-arithmetic",
        title: "العمليات الحسابية على char",
        code: `char let1 = 'b';        // ASCII = 98\nchar let2 = 'a';        // ASCII = 97\nchar let3 = let1 + 1;   // 98 + 1 = 99 = 'c'\nunsigned char let4 = let1 + let2; // 98 + 97 = 195`,
        explanation: [
          "char = رقم + تفسيره كحرف",
          "العمليات الحسابية على char مسموحة",
          "%c → حرف، %d → رقم ASCII",
        ],
        table: {
          headers: ["الخطوة", "القيمة"],
          rows: [
            ["let1 = 'b'", "98"],
            ["let2 = 'a'", "97"],
            ["let3 = let1 + 1", "99 = 'c'"],
            ["let4 = let1 + let2", "195"],
          ],
        },
        note: { type: "warning", text: "unsigned char يمنع القيم السالبة — القيمة 195 أكبر من حد signed char (127)" },
      },
      {
        id: "float-precision",
        title: "التحكم في دقة وعرض float",
        code: `float x = 2.0123456789;\n\nprintf("%f\\n",    x); // طباعة افتراضية — 6 أرقام\nprintf("%.9f\\n",  x); // 9 أرقام — بيكمل بتقريب\nprintf("%.3f\\n",  x); // 3 أرقام — بيقرّب`,
        table: {
          headers: ["الصيغة", "الناتج"],
          rows: [
            ["%f", "2.012346"],
            ["%.9f", "2.012345552 (تقريبي)"],
            ["%.3f", "2.012"],
          ],
        },
        explanation: [
          "float دقته تقريبًا 6 أرقام بعد الفاصلة",
          "الرقم مش بيتخزن كامل 100% بسبب محدودية الدقة",
        ],
      },
      {
        id: "float-width",
        title: "التحكم في العرض (Width) لـ float",
        code: `printf("%6.3f\\n", x);\nprintf("%7.3f\\n", x);\nprintf("%8.3f\\n", x);\nprintf("%9.3f\\n", x);`,
        table: {
          headers: ["الصيغة", "الشكل", "المسافات"],
          rows: [
            ["%6.3f", " 2.012", "1 مسافة"],
            ["%7.3f", "  2.012", "2 مسافة"],
            ["%8.3f", "   2.012", "3 مسافة"],
            ["%9.3f", "    2.012", "4 مسافة"],
          ],
        },
        explanation: [
          "%f = طباعة افتراضية",
          "%.N = N أرقام بعد الفاصلة",
          "%W.N = عرض كلي W + دقة N",
          "كل ما W كبر، المسافات قبل الرقم زادت",
        ],
      },
      {
        id: "int-width",
        title: "التحكم في عرض int",
        code: `int y = 333;\n\nprintf("%i\\n",  y); // 333\nprintf("%9d\\n", y); // 333 مع 6 مسافات قبلها\nprintf("%p\\n", &y); // عنوان المتغير في الذاكرة`,
        table: {
          headers: ["الصيغة", "الناتج", "الشرح"],
          rows: [
            ["%i", "333", "طباعة عادية — نفس %d"],
            ["%9d", "      333", "عرض 9 خانات — الرقم في الآخر"],
            ["%p", "0x7ffcb3a4", "عنوان الذاكرة بالـ Hex"],
          ],
        },
        explanation: [
          "%i ≈ %d (نفس الوظيفة)",
          "الرقم قبل d = عرض الطباعة",
          "& تجيب عنوان المتغير",
          "%p يطبع العنوان — تمهيد لموضوع Pointers",
        ],
      },
    ],
  },
];
