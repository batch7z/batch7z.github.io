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
  // 04
  // ══════════════════════════════════════════════
  {
    slug: "c-04-more-about-variables",
    title: "04 - C language course - more about variables",
    date: "2025-12-09",
    category: "C Programming",
    tags: ["c", "variables", "data-types", "keywords", "case-sensitive"],
    sections: [
      {
        id: "case-sensitive",
        title: "لغة C حسّاسة لحالة الأحرف (Case Sensitive)",
        explanation: ["لغة C بتفرّق بين الحروف الكبيرة والصغيرة"],
        table: {
          headers: ["صغير", "كبير", "نفس المعنى؟"],
          rows: [["a", "A", "❌"], ["sum", "Sum / SUM", "❌"], ["main", "Main", "❌"]],
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
        explanation: ["الكلمات دي محجوزة — مينفعش تستخدمها كـ: اسم متغير، دالة، Struct، Union، أو Type جديد"],
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
        explanation: ["ليست كلمات محجوزة في C القياسية", "Compiler-specific — تُستخدم مع GCC أو ARM Compiler"],
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
          rows: [["الحجم", "1 Byte"], ["المدى (signed)", "-128 إلى 127"], ["Format Specifier", "%c"]],
        },
        explanation: ["char بيخزن حرف واحد فقط", "القيمة الحقيقية المخزنة هي رقم ASCII", "لطباعة القيمة الرقمية: printf(\"%d\", c);"],
      },
      {
        id: "dt-short",
        title: "short int",
        code: `#include <stdio.h>\n\nint main() {\n    short int x = 1000;\n    printf("%hd", x);\n    return 0;\n}`,
        output: "1000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "2 Bytes"], ["المدى", "-32768 إلى 32767"], ["Format Specifier", "%hd"]],
        },
        explanation: ["short = short int (نفس المعنى)", "%hd مخصص لـ short int فقط", "يُستخدم لتقليل استهلاك الذاكرة"],
      },
      {
        id: "dt-ushort",
        title: "unsigned short int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned short int x = 65000;\n    printf("%hu", x);\n    return 0;\n}`,
        output: "65000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "2 Bytes"], ["المدى", "0 إلى 65535"], ["Format Specifier", "%hu"]],
        },
        explanation: ["لا يقبل قيم سالبة", "unsigned short = unsigned short int"],
      },
      {
        id: "dt-int",
        title: "int",
        code: `#include <stdio.h>\n\nint main() {\n    int num = 1000;\n    printf("%d", num);\n    return 0;\n}`,
        output: "1000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "4 Bytes"], ["المدى", "-2147483648 إلى 2147483647"], ["Format Specifier", "%d أو %i"]],
        },
        explanation: ["يأخذ قيم سالبة وموجبة", "في أنظمة 16-bit قديمة قد يكون 2 بايت فقط"],
      },
      {
        id: "dt-uint",
        title: "unsigned int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned int x = 4000000000;\n    printf("%u", x);\n    return 0;\n}`,
        output: "4000000000",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "4 Bytes"], ["المدى", "0 إلى 4294967295"], ["Format Specifier", "%u"]],
        },
        explanation: ["لا يقبل قيم سالبة", "%u مخصص لطباعة unsigned int"],
      },
      {
        id: "dt-long",
        title: "long int",
        code: `#include <stdio.h>\n\nint main() {\n    long int bigNum = 9223372036854775807;\n    printf("%ld", bigNum);\n    return 0;\n}`,
        output: "9223372036854775807",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "8 Bytes (قد يكون 4 في 32-bit)"], ["المدى", "-9223372036854775808 إلى 9223372036854775807"], ["Format Specifier", "%ld"]],
        },
      },
      {
        id: "dt-ulong",
        title: "unsigned long int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned long int bigNum = 18446744073709551615UL;\n    printf("%lu", bigNum);\n    return 0;\n}`,
        output: "18446744073709551615",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "8 Bytes"], ["المدى", "0 إلى 18446744073709551615"], ["Format Specifier", "%lu"]],
        },
      },
      {
        id: "dt-longlong",
        title: "long long int",
        code: `#include <stdio.h>\n\nint main() {\n    long long int bigNum = 9223372036854775807LL;\n    printf("%lld", bigNum);\n    return 0;\n}`,
        output: "9223372036854775807",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "8 Bytes"], ["المدى", "-9223372036854775808 إلى 9223372036854775807"], ["Format Specifier", "%lld"]],
        },
      },
      {
        id: "dt-ulonglong",
        title: "unsigned long long int",
        code: `#include <stdio.h>\n\nint main() {\n    unsigned long long int bigNum = 18446744073709551615ULL;\n    printf("%llu", bigNum);\n    return 0;\n}`,
        output: "18446744073709551615",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "8 Bytes"], ["المدى", "0 إلى 18446744073709551615"], ["Format Specifier", "%llu"]],
        },
      },
      {
        id: "dt-float",
        title: "float",
        code: `#include <stdio.h>\n\nint main() {\n    float pi = 3.141592;\n    printf("%f", pi);\n    return 0;\n}`,
        output: "3.141592",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "4 Bytes"], ["المدى", "1.175494e-38 إلى 3.402823e+38"], ["الدقة", "~6 أرقام بعد الفاصلة"], ["Format Specifier", "%f"]],
        },
      },
      {
        id: "dt-double",
        title: "double",
        code: `#include <stdio.h>\n\nint main() {\n    double pi = 3.141592653589793;\n    printf("%lf", pi);\n    return 0;\n}`,
        output: "3.141593",
        table: {
          headers: ["الخاصية", "القيمة"],
          rows: [["الحجم", "8 Bytes"], ["المدى", "2.225074e-308 إلى 1.797693e+308"], ["الدقة", "~15 رقم بعد الفاصلة"], ["Format Specifier", "%lf"]],
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
          rows: [["الحجم", "16 Bytes"], ["الدقة", "~19 رقم بعد الفاصلة"], ["Format Specifier", "%Lf"]],
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
        explanation: ["الـ String في لغة C هو مصفوفة من char"],
      },
      {
        id: "string-print",
        title: "طباعة الـ String كاملة",
        code: `printf("%s\\n", name);`,
        table: { headers: ["الجزء", "الشرح"], rows: [["%s", "مخصص لطباعة النصوص"]] },
        output: "batch",
      },
      {
        id: "string-first-char",
        title: "الوصول إلى أول حرف",
        code: `printf("%c\\n", *name);\nprintf("%c\\n", name[0]);`,
        table: { headers: ["الطريقة", "الشرح"], rows: [["*name", "أول عنصر في المصفوفة"], ["name[0]", "أول عنصر أيضًا"]] },
        note: { type: "info", text: "الطريقتان متكافئتان تمامًا" },
        output: "b",
      },
      {
        id: "string-partial-print",
        title: "التحكم في عدد الحروف المطبوعة",
        code: `printf("%.2s\\n", name);   // ba\nprintf("%.3s\\n", name);   // bat\nprintf("%10.1s\\n", name); // حرف واحد + 9 مسافات`,
        table: {
          headers: ["الصيغة", "المعنى", "الناتج"],
          rows: [["%.2s", "أول حرفين فقط", "ba"], ["%.3s", "أول 3 حروف", "bat"], ["%10.1s", "عرض 10 خانات + حرف واحد", "         b"]],
        },
      },
      {
        id: "string-memory",
        title: "عناوين الذاكرة للـ String",
        code: `printf("%p\\n", name);\nprintf("%p\\n", &name[0]);\nprintf("%p\\n", &name[1]);\nprintf("%p\\n", &name[2]);`,
        table: {
          headers: ["الجزء", "الشرح"],
          rows: [["%p", "لطباعة عنوان الذاكرة"], ["name", "يساوي &name[0]"], ["كل char", "حجمه 1 Byte"]],
        },
        note: { type: "info", text: "تمهيد لموضوع Pointers — العناوين تزيد تدريجيًا في الذاكرة بمقدار 1 Byte لكل حرف" },
      },
      {
        id: "pointer-arithmetic",
        title: "Pointer Arithmetic (تمهيد)",
        code: `printf("%c\\n", *(name + 0));\nprintf("%c\\n", *(name + 1));\nprintf("%c\\n", *(name + 2));`,
        table: {
          headers: ["الصيغة", "المعنى"],
          rows: [["name + i", "عنوان العنصر رقم i"], ["*(name + i)", "القيمة في العنوان ده"], ["name[i]", "نفس الشيء بالظبط"]],
        },
        explanation: ["الـ String في C هو Array من char", "name[i] ≡ *(name + i)", "name يشير دائمًا إلى أول عنصر في المصفوفة", "تمهيد مباشر لموضوع Arrays و Pointers"],
      },
      {
        id: "char-arithmetic",
        title: "العمليات الحسابية على char",
        code: `char let1 = 'b';        // ASCII = 98\nchar let2 = 'a';        // ASCII = 97\nchar let3 = let1 + 1;   // 98 + 1 = 99 = 'c'\nunsigned char let4 = let1 + let2; // 98 + 97 = 195`,
        explanation: ["char = رقم + تفسيره كحرف", "العمليات الحسابية على char مسموحة", "%c → حرف، %d → رقم ASCII"],
        table: {
          headers: ["الخطوة", "القيمة"],
          rows: [["let1 = 'b'", "98"], ["let2 = 'a'", "97"], ["let3 = let1 + 1", "99 = 'c'"], ["let4 = let1 + let2", "195"]],
        },
        note: { type: "warning", text: "unsigned char يمنع القيم السالبة — القيمة 195 أكبر من حد signed char (127)" },
      },
      {
        id: "float-precision",
        title: "التحكم في دقة وعرض float",
        code: `float x = 2.0123456789;\n\nprintf("%f\\n",    x); // طباعة افتراضية — 6 أرقام\nprintf("%.9f\\n",  x); // 9 أرقام — بيكمل بتقريب\nprintf("%.3f\\n",  x); // 3 أرقام — بيقرّب`,
        table: {
          headers: ["الصيغة", "الناتج"],
          rows: [["%f", "2.012346"], ["%.9f", "2.012345552 (تقريبي)"], ["%.3f", "2.012"]],
        },
        explanation: ["float دقته تقريبًا 6 أرقام بعد الفاصلة", "الرقم مش بيتخزن كامل 100% بسبب محدودية الدقة"],
      },
      {
        id: "float-width",
        title: "التحكم في العرض (Width) لـ float",
        code: `printf("%6.3f\\n", x);\nprintf("%7.3f\\n", x);\nprintf("%8.3f\\n", x);\nprintf("%9.3f\\n", x);`,
        table: {
          headers: ["الصيغة", "الشكل", "المسافات"],
          rows: [["%6.3f", " 2.012", "1 مسافة"], ["%7.3f", "  2.012", "2 مسافة"], ["%8.3f", "   2.012", "3 مسافة"], ["%9.3f", "    2.012", "4 مسافة"]],
        },
        explanation: ["%f = طباعة افتراضية", "%.N = N أرقام بعد الفاصلة", "%W.N = عرض كلي W + دقة N", "كل ما W كبر، المسافات قبل الرقم زادت"],
      },
      {
        id: "int-width",
        title: "التحكم في عرض int",
        code: `int y = 333;\n\nprintf("%i\\n",  y); // 333\nprintf("%9d\\n", y); // 333 مع 6 مسافات قبلها\nprintf("%p\\n", &y); // عنوان المتغير في الذاكرة`,
        table: {
          headers: ["الصيغة", "الناتج", "الشرح"],
          rows: [["%i", "333", "طباعة عادية — نفس %d"], ["%9d", "      333", "عرض 9 خانات — الرقم في الآخر"], ["%p", "0x7ffcb3a4", "عنوان الذاكرة بالـ Hex"]],
        },
        explanation: ["%i ≈ %d (نفس الوظيفة)", "الرقم قبل d = عرض الطباعة", "& تجيب عنوان المتغير", "%p يطبع العنوان — تمهيد لموضوع Pointers"],
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 06
  // ══════════════════════════════════════════════
  {
    slug: "c-06-const",
    title: "06 - C language course - const",
    date: "2025-12-13",
    category: "C Programming",
    tags: ["c", "const", "define", "constants", "preprocessor"],
    sections: [
      { id: "constants-def", title: "الثوابت (Constants) في لغة C", explanation: ["الثوابت هي قيم لا يمكن تغييرها أثناء تشغيل البرنامج"] },
      { id: "constants-rules", title: "قواعد مهمة", note: { type: "warning", text: "❌ مينفعش تسيب الثابت فاضي بدون قيمة عند تعريفه — ❌ مينفعش تغيّر قيمة الثابت بعد تعريفه — ✅ ينفع توصل للثابت وتستخدمه في أي مكان في البرنامج" } },
      { id: "when-to-use", title: "إمتى أستخدم الثوابت؟", explanation: ["لما يكون عندنا قيمة مش هتتغير أثناء البرنامج", "مستخدمة أكتر من مرة", "عايزين نحميها من التغيير"] },
      {
        id: "define-method",
        title: "#define — طريقة التعريف",
        code: `#define NAME value\n\n#define MAX  100\n#define PI   3.14`,
        note: { type: "info", text: "لا نضع علامة = بين الاسم والقيمة — لا نضع ; في آخر السطر — يفضل كتابة اسم الثابت بـ Capital Letters — يفضل يكون في بداية البرنامج" },
      },
      {
        id: "define-example",
        title: "#define — مثال كامل",
        code: `#include <stdio.h>\n\n#define TEST 10\n\nint main() {\n    printf("%d", TEST);\n    return 0;\n}`,
        output: "10",
      },
      {
        id: "const-method",
        title: "const — طريقة التعريف",
        code: `const type name = value;\n\nconst int test = 0;`,
        table: {
          headers: ["الجزء", "الشرح"],
          rows: [["const", "معناها ثابت"], ["int", "نوع البيانات"], ["test", "اسم الثابت"], ["= 0", "إسناد القيمة"], [";", "نهاية السطر"]],
        },
      },
      { id: "const-examples", title: "أمثلة على const", code: `const int age   = 20;\nconst float pi  = 3.14;` },
      {
        id: "define-vs-const",
        title: "الفرق بين #define و const",
        table: {
          headers: ["الخاصية", "#define", "const"],
          rows: [
            ["وقت التنفيذ", "قبل الكومبايل (Preprocessor)", "أثناء الكومبايل"],
            ["طريقة الشغل", "استبدال نصوص", "متغير ثابت في الذاكرة"],
            ["نوع البيانات", "❌ ملوش نوع", "✅ ليه نوع"],
            ["علامة =", "❌ لا", "✅ نعم"],
            ["علامة ;", "❌ لا", "✅ نعم"],
            ["الماكروز", "✅ ينفع", "❌ مينفعش"],
            ["الأمان", "أقل أمانًا", "✅ أأمن"],
            ["الـ Debug", "أصعب", "✅ أسهل"],
          ],
        },
      },
      {
        id: "when-define",
        title: "إمتى أستخدم #define؟",
        code: `#define MAX_SIZE 100\n#define SQUARE(x) x*x`,
        explanation: ["لما تحتاج قيمة ثابتة بسيطة", "لما تعمل Macro", "لما تحتاج استبدال نصوص", "لما تعمل إعدادات عامة في ملفات الهيدر"],
      },
      {
        id: "when-const",
        title: "إمتى أستخدم const؟",
        code: `const int age   = 20;\nconst float pi  = 3.14;`,
        explanation: ["لما تحتاج ثابت له نوع بيانات", "لما تحتاج أمان أكتر", "لما تتعامل مع متغيرات أو Pointers", "لما تحتاج Debug بسهولة"],
      },
      {
        id: "const-summary",
        title: "الخلاصة",
        code: `// إعدادات عامة\n#define MAX_SIZE 100\n\n// ثوابت عادية\nconst int age = 20;`,
        explanation: ["استخدم const للثوابت العادية — أأمن وأوضح", "استخدم #define للماكروز والإعدادات العامة"],
        note: { type: "info", text: "الـ #define مش دالة ومش متغير — هو مجرد استبدال نصوص بيحصل قبل الترجمة. لو عرّفت #define SQUARE(x) x*x ده Macro Function مش دالة حقيقية" },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 07
  // ══════════════════════════════════════════════
  {
    slug: "c-07-printf-sprintf-puts-putchar",
    title: "07 - C language course - printf vs sprintf vs puts vs putchar",
    date: "2025-12-15",
    category: "C Programming",
    tags: ["c", "printf", "sprintf", "puts", "putchar", "perror", "output"],
    sections: [
      {
        id: "sprintf-intro",
        title: "sprintf — الكتابة في String",
        explanation: ["دالة sprintf تُستخدم لتنسيق النصوص وتحويل القيم إلى String وتخزينها داخل char array", "بدل ما تطبعها على الشاشة"],
        table: { headers: ["الدالة", "بتطبع فين"], rows: [["printf", "الشاشة مباشرةً"], ["sprintf", "متغير String"]] },
      },
      {
        id: "sprintf-syntax",
        title: "sprintf — الصيغة والمثال",
        code: `sprintf(string, "format", values);\n\n// مثال عملي\n#include <stdio.h>\n\nint main() {\n    int test = 20;\n    printf("test = %i\\n", test);\n\n    char test2[50];\n    sprintf(test2, "now test is string : %i\\n", test);\n    printf("test: %s\\n", test2);\n\n    return 0;\n}`,
        output: "test = 20\ntest: now test is string : 20",
        explanation: ["char test2[50] — مصفوفة حجمها 50 حرف", "sprintf بيحول قيمة test لنص ويخزنه في test2", "%s لطباعة النص المخزن"],
      },
      {
        id: "sprintf-math",
        title: "sprintf — مع عملية حسابية",
        code: `#include <stdio.h>\n\nint main() {\n    int x = 5;\n    int y = 10;\n    char result[50];\n\n    sprintf(result, "sum = %d", x + y);\n    printf("%s\\n", result);\n    return 0;\n}`,
        output: "sum = 15",
        note: { type: "info", text: "sprintf تقدر تتعامل مع العمليات الحسابية — الحساب يتم أولًا ثم يتحول الناتج لنص" },
      },
      {
        id: "puts-intro",
        title: "puts — طباعة نص كامل",
        code: `#include <stdio.h>\n\nint main() {\n    char test[30] = "test-test";\n    puts(test);\n    puts(test);\n    return 0;\n}`,
        output: "test-test\ntest-test",
        explanation: ["لا تحتاج Format Specifier مثل %s", "تضيف \\n تلقائيًا بعد الطباعة", "أبسط في الاستخدام للنصوص", "puts تطبع String فقط — لا تدعم فورمات مثل %d أو %i"],
      },
      {
        id: "puts-vs-printf",
        title: "الفرق بين puts و printf",
        table: {
          headers: ["الدالة", "النوع", "سطر جديد تلقائي", "فورمات"],
          rows: [["puts", "String فقط", "✅ نعم", "❌ لا"], ["printf", "كل الأنواع", "❌ لا", "✅ نعم"]],
        },
      },
      {
        id: "putchar-intro",
        title: "putchar — طباعة حرف واحد",
        code: `#include <stdio.h>\n\nint main() {\n    char t = 'e';\n    putchar(t);\n    putchar(t);\n    return 0;\n}`,
        output: "ee",
        explanation: ["putchar تطبع حرف واحد فقط على الشاشة", "لا تطبع سطر جديد تلقائي", "لو عايز سطر جديد: putchar('\\n');"],
      },
      {
        id: "perror-intro",
        title: "perror — طباعة رسائل الخطأ",
        code: `#include <stdio.h>\n\nint main() {\n    perror("warning");\n    return 0;\n}\n\n// مثال مع فشل فتح ملف\nFILE *f = fopen("file.txt", "r");\nif (!f) {\n    perror("Failed to open file");\n}`,
        output: "warning: No error",
        explanation: ["perror تقبل نص String واحد كمقدمة للخطأ", "بعد النص تطبع وصف الخطأ الفعلي من متغير errno", "perror لا تُنهي البرنامج", "غالبًا تُستخدم بعد فشل دالة نظام لمعرفة السبب", "لو مفيش خطأ هتطبع No error"],
      },
      {
        id: "output-compare",
        title: "جدول مقارنة شامل",
        table: {
          headers: ["الدالة", "وظيفتها", "سطر جديد تلقائي", "فورمات", "تدعم"],
          rows: [
            ["printf", "طباعة على الشاشة", "❌", "✅", "كل الأنواع"],
            ["sprintf", "كتابة في String", "❌", "✅", "كل الأنواع"],
            ["puts", "طباعة نص", "✅", "❌", "String فقط"],
            ["putchar", "طباعة حرف", "❌", "❌", "char فقط"],
            ["perror", "طباعة خطأ", "✅", "❌", "String فقط"],
          ],
        },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 08
  // ══════════════════════════════════════════════
  {
    slug: "c-08-scanf-sscanf-getchar-getc-fgetc-gets-fgets",
    title: "08 - C language course - scanf_sscanf_getchar_getc_fgetc_gets_fgets",
    date: "2025-12-17",
    category: "C Programming",
    tags: ["c", "scanf", "sscanf", "getchar", "getc", "fgetc", "gets", "fgets", "input"],
    sections: [
      {
        id: "scanf-intro",
        title: "scanf — إدخال قيمة من المستخدم",
        code: `scanf("format", &اسم_المتغير);\n\n// مثال\n#include <stdio.h>\n\nint main() {\n    int x;\n    printf("please enter number: ");\n    scanf("%d", &x);\n    printf("the number: %d", x);\n    return 0;\n}`,
        output: "please enter number: 10\nthe number: 10",
        explanation: ["تُستخدم scanf لإدخال قيمة من المستخدم وتخزينها في متغير", "& معناها عنوان المتغير في الذاكرة", "في حالة string مش بنستخدم & لأن اسم المصفوفة هو أصلًا عنوانها"],
      },
      {
        id: "scanf-types",
        title: "أمثلة على أنواع الإدخال",
        code: `// إدخال float\nfloat f;\nscanf("%f", &f);\n\n// إدخال char\nchar c;\nscanf("%c", &c);\n\n// إدخال string\nchar x[5];\nscanf("%s", x); // بدون &`,
        table: { headers: ["النوع", "&"], rows: [["int", "✅ لازم"], ["float", "✅ لازم"], ["char", "✅ لازم"], ["string (مصفوفة)", "❌ مش لازم"]] },
      },
      {
        id: "scanf-format",
        title: "Format Specifiers في scanf",
        table: { headers: ["الفورمات", "النوع"], rows: [["%d", "int"], ["%f", "float"], ["%c", "char"], ["%s", "string"]] },
      },
      {
        id: "scanf-problems",
        title: "مشاكل scanf",
        code: `// ❌ مشكلة Buffer Overflow\nchar x[5];\nscanf("%s", x); // لو المستخدم كتب أكتر من 4 حروف\n\n// ✅ الحل\nscanf("%4s", x); // يقرأ 4 حروف بس + \\0\n\n// مشكلة المسافات\nscanf("%s", x); // "hello world" → "hello" بس`,
        explanation: ["scanf بيقف عند أول مسافة — مش بيقرأ السطر كله", "لو المستخدم كتب أكتر من حجم المصفوفة = Buffer Overflow"],
        note: { type: "warning", text: "استخدم %4s لتحديد عدد الحروف المقروءة ومنع Buffer Overflow" },
      },
      {
        id: "scanf-multiple",
        title: "الإدخال المتعدد في scanf",
        code: `#include <stdio.h>\n\nint main() {\n    int x;\n    float f;\n    char s[5];\n\n    printf("please enter: ");\n    scanf("%d %f %s", &x, &f, s);\n\n    printf("int: %d float: %f string: %s", x, f, s);\n    return 0;\n}`,
        output: "int: 10 float: 3.500000 string: hi",
        explanation: ["تقدر تدخل أكتر من قيمة في نفس السطر", "لازم نفس الترتيب في الإدخال", "& مع المتغيرات العادية ✅ — بدون & مع string ✅"],
      },
      {
        id: "getc-putc",
        title: "getc و putc — إدخال وإخراج حرف",
        code: `#include <stdio.h>\n\nint main() {\n    char b;\n    printf("enter char: ");\n    b = getc(stdin);\n    putc(b, stdout);\n    return 0;\n}`,
        explanation: ["getc تقرأ حرف واحد من مصدر إدخال", "putc تطبع حرف واحد إلى مخرج معين"],
        table: { headers: ["الدالة", "تطبع على"], rows: [["putc", "أي Stream (stdout أو ملف)"], ["putchar", "الشاشة فقط (stdout)"]] },
      },
      {
        id: "getchar-intro",
        title: "getchar — إدخال حرف واحد",
        code: `#include <stdio.h>\n\nint main(void) {\n    char k;\n    printf("enter char: ");\n    k = getchar();\n    putchar(k);\n    return 0;\n}`,
        explanation: ["بتقرأ حرف واحد فقط", "لو المستخدم كتب أكتر من حرف، هيتاخد أول حرف بس", "الحروف الباقية بتفضل في الـ buffer"],
      },
      {
        id: "fgetc-intro",
        title: "fgetc — إدخال حرف من stream",
        code: `#include <stdio.h>\n\nint main(void) {\n    char u;\n    printf("enter char: ");\n    u = fgetc(stdin);\n    printf("the char: %c", u);\n    return 0;\n}`,
        explanation: ["بتقرأ حرف واحد فقط", "لازم تكتب stdin", "تعتبر شبه getchar"],
      },
      {
        id: "gets-intro",
        title: "gets — إدخال نص (غير آمن ⚠️)",
        code: `#include <stdio.h>\n\nint main() {\n    char l[5];\n    gets(l);\n    printf("the string: %s", l);\n    return 0;\n}`,
        explanation: ["بتقرأ السطر كله — مش بتقف عند المسافات"],
        note: { type: "warning", text: "gets مفيهاش حد لعدد الحروف — لو المستخدم دخل حروف أكتر من حجم المصفوفة = Buffer Overflow! مش بتستخدم في الكود الحديث — استخدم fgets بدلها" },
      },
      {
        id: "fgets-intro",
        title: "fgets — إدخال نص (آمن ✅)",
        code: `fgets(اسم_المتغير, عدد_الحروف, stdin);\n\n// مثال\n#include <stdio.h>\n\nint main() {\n    char l[6];\n    fgets(l, 6, stdin);\n    printf("the string: %s", l);\n    return 0;\n}`,
        output: "hello",
        explanation: ["بتقرأ المسافات ✅", "بتحدد عدد الحروف ✅", "بتحمي من Buffer Overflow ✅", "بتضيف \\0 في آخر النص ✅", "ليه [6] وعايزين 5 حروف؟ — 5 حروف + \\0 = 6"],
      },
      {
        id: "sscanf-intro",
        title: "sscanf — قراءة من String",
        code: `#include <stdio.h>\n\nint main() {\n    char bir[50] = "25 may 2026";\n    int day, yr;\n    char mon[10];\n\n    sscanf(bir, "%i %s %i", &day, mon, &yr);\n\n    printf("the day: %i\\n", day);\n    printf("the month: %s\\n", mon);\n    printf("the year: %i\\n", yr);\n\n    return 0;\n}`,
        output: "the day: 25\nthe month: may\nthe year: 2026",
        explanation: ["sscanf بتقرأ من string موجود في البرنامج بدل إدخال المستخدم", "scanf ← بتطلب إدخال من المستخدم مباشرة", "sscanf ← بتقرأ من string موجود في البرنامج"],
      },
      {
        id: "input-compare",
        title: "جدول مقارنة شامل",
        table: {
          headers: ["الدالة", "وظيفتها", "تقرأ مسافات", "حد الحروف", "تحتاج stdin"],
          rows: [
            ["scanf", "إدخال متعدد الأنواع", "❌", "❌", "❌"],
            ["sscanf", "قراءة من string", "✅", "❌", "❌"],
            ["getc", "حرف واحد", "—", "—", "✅"],
            ["getchar", "حرف واحد", "—", "—", "❌"],
            ["fgetc", "حرف واحد من stream", "—", "—", "✅"],
            ["gets", "نص كامل (غير آمن)", "✅", "❌", "❌"],
            ["fgets", "نص كامل (آمن)", "✅", "✅", "✅"],
          ],
        },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 09
  // ══════════════════════════════════════════════
  {
    slug: "c-09-input-output-exercises",
    title: "09 - C language course - input and output Exercises",
    date: "2025-12-19",
    category: "C Programming",
    tags: ["c", "exercises", "circle", "rhombus", "area", "perimeter"],
    sections: [
      {
        id: "circle-full-code",
        title: "كود ١ — حساب مساحة الدائرة (Circle)",
        code: `#include <stdio.h>\n#define PI 3.14159\n\nint main(void) {\n    char name[50];\n    int radius;\n    float area;\n\n    printf("enter your name: ");\n    fgets(name, 50, stdin);\n\n    printf("hello %s enter radius : ", name);\n    scanf("%d", &radius);\n\n    printf("the circle area is : %f \\n", area = PI * radius * radius);\n    printf("circle circumference : %f\\n", PI * radius * 2);\n    printf("the diameter is : %i\\n", radius * 2);\n\n    return 0;\n}`,
        output: "enter your name: Ahmed\nhello Ahmed\nenter radius : 10\nthe circle area is : 314.159000\ncircle circumference : 62.831800\nthe diameter is : 20",
      },
      {
        id: "circle-include",
        title: "1️⃣ المكتبات والثوابت",
        code: `#include <stdio.h>\n#define PI 3.14159`,
        table: {
          headers: ["السطر", "الشرح"],
          rows: [
            ["#include <stdio.h>", "بيستدعي مكتبة الـ Input/Output"],
            ["#define PI 3.14159", "بيعرّف ثابت اسمه PI — مش متغير"],
          ],
        },
        note: { type: "info", text: "#define مش بيحجز مساحة في الذاكرة — الـ Compiler بيستبدل كل كلمة PI بالقيمة 3.14159 مباشرةً قبل الترجمة" },
      },
      {
        id: "circle-vars",
        title: "2️⃣ تعريف المتغيرات",
        code: `char name[50];\nint radius;\nfloat area;`,
        table: {
          headers: ["المتغير", "النوع", "الشرح"],
          rows: [
            ["name[50]", "char array", "بيخزن اسم المستخدم — مصفوفة من 50 حرف"],
            ["radius", "int", "بيخزن نصف قطر الدائرة"],
            ["area", "float", "بيخزن مساحة الدائرة"],
          ],
        },
      },
      {
        id: "circle-name-input",
        title: "3️⃣ طلب الاسم من المستخدم",
        code: `printf("enter your name: ");\nfgets(name, 50, stdin);`,
        explanation: [
          "scanf(\"%s\") بيوقف عند أول مسافة (space)",
          "fgets بيقرأ السطر كله حتى لو فيه مسافات",
          "الـ 50 هو الحد الأقصى للحروف",
          "stdin يعني المدخل القياسي = لوحة المفاتيح",
        ],
      },
      {
        id: "circle-radius-input",
        title: "4️⃣ طلب نصف القطر",
        code: `printf("hello %s enter radius : ", name);\nscanf("%d", &radius);`,
        note: { type: "warning", text: "الـ & مهمة جداً! &radius يعني عنوان المتغير في الذاكرة — لو نسيت الـ & → Undefined Behavior أو Crash" },
      },
      {
        id: "circle-area",
        title: "5️⃣ حساب وطباعة المساحة",
        code: `printf("the circle area is : %f \\n", area = PI * radius * radius);`,
        explanation: [
          "المعادلة: Area = π × r²",
          "الحساب: 3.14159 × 10 × 10 = 314.159",
          "الـ assignment area = ... جوه الـ printf صحيح في C",
        ],
      },
      {
        id: "circle-circumference",
        title: "6️⃣ حساب وطباعة المحيط",
        code: `printf("circle circumference : %f\\n", PI * radius * 2);`,
        explanation: [
          "المعادلة: Circumference = π × 2r",
          "الحساب: 3.14159 × 2 × 10 = 62.8318",
          "مفيش متغير بيخزن المحيط — الحساب مباشرةً جوه printf",
        ],
      },
      {
        id: "circle-diameter",
        title: "7️⃣ حساب وطباعة القطر",
        code: `printf("the diameter is : %i\\n", radius * 2);`,
        explanation: ["المعادلة: Diameter = 2r", "الحساب: 10 × 2 = 20", "%i بيطبع عدد صحيح — نفس %d بالظبط"],
      },
      {
        id: "circle-summary",
        title: "ملخص سريع — الدائرة",
        table: {
          headers: ["الخطوة", "الوظيفة"],
          rows: [
            ["#include و #define", "تجهيز المكتبات والثوابت"],
            ["تعريف المتغيرات", "حجز مكان في الذاكرة"],
            ["fgets", "قراءة الاسم بأمان"],
            ["scanf", "قراءة نصف القطر"],
            ["PI * r * r", "حساب المساحة"],
            ["PI * r * 2", "حساب المحيط"],
            ["r * 2", "حساب القطر"],
          ],
        },
      },
      {
        id: "rhombus-full-code",
        title: "كود ٢ — حساب مساحة المعيّن (Rhombus)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int rhombusSide;\n    int rhombusHeight;\n\n    printf("insert rhombus side : ");\n    scanf("%d", &rhombusSide);\n\n    printf("insert rhombus height : ");\n    scanf("%d", &rhombusHeight);\n\n    printf("rhombus perimeter : %d\\n", rhombusSide * 4);\n    printf("rhombus area is : %i\\n", rhombusSide * rhombusHeight);\n\n    return 0;\n}`,
        output: "insert rhombus side : 10\ninsert rhombus height : 5\nrhombus perimeter : 40\nrhombus area is : 50",
      },
      {
        id: "rhombus-vars",
        title: "تعريف المتغيرات — المعيّن",
        code: `int rhombusSide;\nint rhombusHeight;`,
        table: {
          headers: ["المتغير", "النوع", "الشرح"],
          rows: [
            ["rhombusSide", "int", "طول ضلع المعيّن"],
            ["rhombusHeight", "int", "ارتفاع المعيّن"],
          ],
        },
      },
      {
        id: "rhombus-perimeter",
        title: "حساب المحيط — المعيّن",
        code: `printf("rhombus perimeter : %d\\n", rhombusSide * 4);`,
        explanation: ["المعادلة: Perimeter = Side × 4", "المعيّن له 4 أضلاع متساوية", "الحساب: 10 × 4 = 40"],
      },
      {
        id: "rhombus-area",
        title: "حساب المساحة — المعيّن",
        code: `printf("rhombus area is : %i\\n", rhombusSide * rhombusHeight);`,
        explanation: ["المعادلة: Area = Side × Height", "الحساب: 10 × 5 = 50"],
      },
      {
        id: "rhombus-summary",
        title: "ملخص سريع — المعيّن",
        table: {
          headers: ["الخطوة", "الوظيفة"],
          rows: [
            ["#include", "تجهيز مكتبة الـ I/O"],
            ["تعريف المتغيرات", "حجز مكان في الذاكرة للضلع والارتفاع"],
            ["scanf × 2", "قراءة الضلع والارتفاع من المستخدم"],
            ["Side × 4", "حساب المحيط"],
            ["Side × Height", "حساب المساحة"],
          ],
        },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 10
  // ══════════════════════════════════════════════
  {
    slug: "c-10-arithmetic-increment-decrement",
    title: "10 - C language course - Arithmetic _ increase and decrease operators",
    date: "2025-12-21",
    category: "C Programming",
    tags: ["c", "arithmetic", "operators", "increment", "decrement", "pow", "modulus"],
    sections: [
      {
        id: "binary-ops-intro",
        title: "العمليات الحسابية على متغيرين (Binary Operators)",
        explanation: ["العمليات دي بتشتغل على متغيرين"],
        table: {
          headers: ["العملية", "الرمز", "الاسم بالإنجليزي"],
          rows: [["الجمع", "+", "Addition"], ["الطرح", "-", "Subtraction"], ["الضرب", "*", "Multiplication"], ["القسمة", "/", "Division"], ["باقي القسمة", "%", "Modulus"]],
        },
      },
      {
        id: "priority",
        title: "الأولوية في العمليات الحسابية",
        explanation: [
          "ترتيب الأولوية: الأقواس ( ) ← الأس pow() ← القسمة والضرب / * ← الجمع والطرح + -",
          "لو عمليتان في نفس المستوى — الأقرب من اليسار تتنفذ الأول",
        ],
      },
      {
        id: "priority-example1",
        title: "مثال — قسمة وضرب في نفس السطر",
        code: `#include <stdio.h>\n\nint main() {\n    int result;\n    result = 20 / 5 * 2;\n    printf("result = %d\\n", result);\n    return 0;\n}`,
        output: "result = 8",
        explanation: ["20 / 5 = 4 ← القسمة من اليسار أول", "4 * 2 = 8"],
      },
      {
        id: "priority-example2",
        title: "مثال — جمع وطرح في نفس السطر",
        code: `#include <stdio.h>\n\nint main() {\n    int result;\n    result = 10 - 3 + 2;\n    printf("result = %d\\n", result);\n    return 0;\n}`,
        output: "result = 9",
        explanation: ["10 - 3 = 7 ← الطرح من اليسار أول", "7 + 2 = 9"],
      },
      {
        id: "priority-example3",
        title: "مثال — أقواس مع أس",
        code: `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int result;\n    result = pow(2 + 3, 2);\n    printf("result = %d\\n", result);\n    return 0;\n}`,
        output: "result = 25",
        explanation: ["2 + 3 = 5 ← الأقواس أولاً", "pow(5, 2) = 25 ← الأس ثانياً"],
        note: { type: "info", text: "عشان تستخدم العمليات المتقدمة لازم تستدعي: #include <math.h>" },
      },
      {
        id: "addition",
        title: "الجمع +",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 10;\n    int y = 5;\n    int res;\n    res = x + y;\n    printf("x + y = %d\\n", res);\n    return 0;\n}`,
        output: "x + y = 15",
      },
      {
        id: "subtraction",
        title: "الطرح -",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 10;\n    int y = 5;\n    int res;\n    res = x - y;\n    printf("x - y = %d\\n", res);\n    return 0;\n}`,
        output: "x - y = 5",
      },
      {
        id: "multiplication",
        title: "الضرب *",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 10;\n    int y = 5;\n    int res;\n    res = x * y;\n    printf("x * y = %d\\n", res);\n    return 0;\n}`,
        output: "x * y = 50",
      },
      {
        id: "division",
        title: "القسمة /",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 10;\n    int y = 5;\n    int res;\n    res = x / y;\n    printf("x / y = %d\\n", res);\n    return 0;\n}`,
        output: "x / y = 2",
        note: { type: "info", text: "القسمة بين int و int تنتج int — الكسر بيتقطع" },
      },
      {
        id: "modulus",
        title: "باقي القسمة %",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 10;\n    int y = 5;\n    int res;\n    res = x % y;\n    printf("x %% y = %d\\n", res);\n    return 0;\n}`,
        output: "x % y = 0",
        note: { type: "info", text: "%% في الـ printf بتطبع علامة % فعلية على الشاشة" },
      },
      {
        id: "pow-func",
        title: "الأس pow()",
        code: `#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    printf("the result is : %.lf \\n", 2 * 3 + pow(5 + 4, 2));\n    return 0;\n}`,
        output: "the result is : 87",
        table: {
          headers: ["الخطوة", "العملية", "الناتج"],
          rows: [["1", "5 + 4 داخل الأقواس", "9"], ["2", "pow(9, 2) = 9 × 9", "81"], ["3", "2 * 3 خارج الأقواس", "6"], ["4", "6 + 81", "87"]],
        },
      },
      {
        id: "comprehensive-example",
        title: "مثال شامل على كل العمليات",
        code: `#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    printf("here we go : %i \\n", 80*2/3+4-1);\n    return 0;\n}`,
        output: "here we go : 56",
        table: {
          headers: ["الخطوة", "العملية", "الناتج"],
          rows: [["1", "80 * 2 ← ضرب أولاً", "160"], ["2", "160 / 3 ← قسمة", "53"], ["3", "53 + 4 ← جمع", "57"], ["4", "57 - 1 ← طرح", "56"]],
        },
      },
      {
        id: "binary-summary",
        title: "ملخص Binary Operators",
        table: {
          headers: ["العملية", "الرمز", "مثال", "الناتج"],
          rows: [["الجمع", "+", "10 + 5", "15"], ["الطرح", "-", "10 - 5", "5"], ["الضرب", "*", "10 * 5", "50"], ["القسمة", "/", "10 / 5", "2"], ["باقي القسمة", "%", "10 % 5", "0"], ["الأس", "pow()", "pow(3, 2)", "9"]],
        },
        note: { type: "warning", text: "لو استخدمت %d مع ناتج float — الناتج مش هيطلع كامل — استخدم %f للأرقام العشرية" },
      },
      {
        id: "unary-intro",
        title: "العمليات الحسابية على متغير واحد (Unary Operators)",
        table: {
          headers: ["العملية", "الرمز", "المعنى"],
          rows: [["Increment", "++", "ضيف 1 على قيمة المتغير"], ["Decrement", "--", "نقص 1 من قيمة المتغير"]],
        },
        explanation: ["العلامة قبل المتغير (++x) ← زيد الأول ثم استخدم", "العلامة بعد المتغير (x++) ← استخدم الأول ثم زيد"],
      },
      {
        id: "post-increment",
        title: "++ بعد المتغير (Post-increment)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 5;\n    int y;\n    y = x++;\n    printf("y = %d \\n", y);\n    y = x;\n    printf("y = %d \\n", y);\n    return 0;\n}`,
        output: "y = 5\ny = 6",
        table: {
          headers: ["الخطوة", "اللي حصل", "القيمة"],
          rows: [["y = x++", "اتخزنت قيمة x في y الأول (= 5) ثم زادت x", "y=5, x=6"], ["y = x", "اتخزنت قيمة x الجديدة في y", "y=6"]],
        },
      },
      {
        id: "pre-increment",
        title: "++ قبل المتغير (Pre-increment)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 5;\n    int y;\n    y = ++x;\n    printf("y = %d \\n", y);\n    return 0;\n}`,
        output: "y = 6",
        explanation: ["البرنامج زاد x أولاً ثم خزن القيمة في y — عكس الـ Post-increment"],
      },
      {
        id: "increment-compare",
        title: "مقارنة سريعة — Increment",
        table: {
          headers: ["الصيغة", "اللي بيحصل", "الناتج لو x = 5"],
          rows: [["y = x++", "استخدم القيمة الحالية ثم زيد", "y = 5، ثم x = 6"], ["y = ++x", "زيد الأول ثم استخدم", "y = 6، و x = 6"]],
        },
      },
      {
        id: "post-decrement",
        title: "-- بعد المتغير (Post-decrement)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 5;\n    int y;\n    y = x--;\n    printf("y = %d \\n", y);\n    y = x;\n    printf("y = %d \\n", y);\n    return 0;\n}`,
        output: "y = 5\ny = 4",
        table: {
          headers: ["الخطوة", "اللي حصل", "القيمة"],
          rows: [["y = x--", "اتخزنت قيمة x في y الأول (= 5) ثم نقصت x", "y=5, x=4"], ["y = x", "اتخزنت قيمة x الجديدة في y", "y=4"]],
        },
      },
      {
        id: "pre-decrement",
        title: "-- قبل المتغير (Pre-decrement)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int x = 5;\n    int y;\n    y = --x;\n    printf("y = %d \\n", y);\n    return 0;\n}`,
        output: "y = 4",
        explanation: ["البرنامج نقص x أولاً ثم خزن القيمة في y"],
      },
      {
        id: "unary-summary",
        title: "ملخص Unary Operators",
        table: {
          headers: ["العملية", "قبل المتغير", "بعد المتغير"],
          rows: [["++", "زيد ثم استخدم", "استخدم ثم زيد"], ["--", "نقص ثم استخدم", "استخدم ثم نقص"]],
        },
      },
      {
        id: "rectangle-example",
        title: "مثال تطبيقي — حساب مساحة ومحيط المستطيل",
        code: `#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    int length    = 10;\n    int breadth   = 5;\n    int area;\n    int perimeter;\n\n    area      = length * breadth;\n    perimeter = 2 * (length + breadth);\n\n    printf("Area = %d \\nPerimeter = %d", area, perimeter);\n\n    return 0;\n}`,
        output: "Area = 50\nPerimeter = 30",
        table: {
          headers: ["المتغير", "النوع", "القيمة", "الشرح"],
          rows: [["length", "int", "10", "طول المستطيل"], ["breadth", "int", "5", "عرض المستطيل"], ["area", "int", "50", "length × breadth"], ["perimeter", "int", "30", "2 × (length + breadth)"]],
        },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 11
  // ══════════════════════════════════════════════
  {
    slug: "c-11-assignment-operators",
    title: "11 - C language course - assignment operators",
    date: "2025-12-23",
    category: "C Programming",
    tags: ["c", "assignment", "operators", "compound"],
    sections: [
      {
        id: "assignment-intro",
        title: "ما هي Assignment Operators؟",
        explanation: ["عمليات الـ Assignment بتُستخدم لإضافة متغير لمتغير آخر بشكل مختصر"],
        table: {
          headers: ["Operator", "مثال", "نفس معنى"],
          rows: [["=", "a = b", "a = b"], ["+=", "a += b", "a = a + b"], ["-=", "a -= b", "a = a - b"], ["*=", "a *= b", "a = a * b"], ["/=", "a /= b", "a = a / b"], ["%=", "a %= b", "a = a % b"]],
        },
      },
      {
        id: "assign-equal",
        title: "= — الإسناد العادي",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2;\n    num2 = num1;\n    printf("num2 = num1 : %d\\n", num2);\n    return 0;\n}`,
        output: "num2 = num1 : 10",
        explanation: ["num2 = num1 ← خزّن قيمة num1 في num2"],
      },
      {
        id: "assign-plus",
        title: "+= — جمع وإسناد",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2;\n    num2 = num1;\n    printf("num2 = num1 : %d\\n", num2);\n    num2 += num1;\n    printf("num2 += num1 : %d\\n", num2);\n    return 0;\n}`,
        output: "num2 = num1 : 10\nnum2 += num1 : 20",
        explanation: ["num2 += num1 ← نفس معنى num2 = num2 + num1 = 10 + 10 = 20"],
      },
      {
        id: "assign-minus",
        title: "-= — طرح وإسناد",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2;\n    num2 = num1;\n    printf("num2 = num1 : %d\\n", num2);\n    num2 -= num1;\n    printf("num2 -= num1 : %d\\n", num2);\n    return 0;\n}`,
        output: "num2 = num1 : 10\nnum2 -= num1 : 0",
        explanation: ["num2 -= num1 ← نفس معنى num2 = num2 - num1 = 10 - 10 = 0"],
      },
      {
        id: "assign-multiply",
        title: "*= — ضرب وإسناد",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2;\n    num2 = num1;\n    printf("num2 = num1 : %d\\n", num2);\n    num2 *= num1;\n    printf("num2 *= num1 : %d\\n", num2);\n    return 0;\n}`,
        output: "num2 = num1 : 10\nnum2 *= num1 : 100",
        explanation: ["num2 *= num1 ← نفس معنى num2 = num2 * num1 = 10 * 10 = 100"],
      },
      {
        id: "assign-divide",
        title: "/= — قسمة وإسناد",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2;\n    num2 = num1;\n    printf("num2 = num1 : %d\\n", num2);\n    num2 /= num1;\n    printf("num2 /= num1 : %d\\n", num2);\n    return 0;\n}`,
        output: "num2 = num1 : 10\nnum2 /= num1 : 1",
        explanation: ["num2 /= num1 ← نفس معنى num2 = num2 / num1 = 10 / 10 = 1"],
      },
      {
        id: "assign-modulus",
        title: "%= — باقي القسمة وإسناد",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2;\n    num2 = num1;\n    printf("num2 = num1 : %d\\n", num2);\n    num2 %= num1;\n    printf("num2 %%= num1 : %d\\n", num2);\n    return 0;\n}`,
        output: "num2 = num1 : 10\nnum2 %= num1 : 0",
        explanation: ["num2 %= num1 ← نفس معنى num2 = num2 % num1 = 10 % 10 = 0"],
      },
      {
        id: "assignment-summary",
        title: "ملخص شامل",
        table: {
          headers: ["Operator", "مثال", "الحساب", "الناتج"],
          rows: [
            ["=", "num2 = num1", "num2 = 10", "10"],
            ["+=", "num2 += num1", "10 + 10", "20"],
            ["-=", "num2 -= num1", "10 - 10", "0"],
            ["*=", "num2 *= num1", "10 * 10", "100"],
            ["/=", "num2 /= num1", "10 / 10", "1"],
            ["%=", "num2 %= num1", "10 % 10", "0"],
          ],
        },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 12
  // ══════════════════════════════════════════════
  {
    slug: "c-12-comparison-operators",
    title: "12 - C language course - Comparison operators",
    date: "2025-12-25",
    category: "C Programming",
    tags: ["c", "comparison", "relational", "operators"],
    sections: [
      {
        id: "relational-intro",
        title: "ما هي Relational Operators؟",
        explanation: ["معاملات العلاقات تُستخدم في مقارنة العلاقة بين متغير وآخر", "الناتج 1 = true (صح)", "الناتج 0 = false (غلط)"],
        table: {
          headers: ["Operator", "المعنى", "مثال"],
          rows: [["==", "يساوي", "5 == 3"], [">", "أكبر من", "5 > 3"], ["<", "أصغر من", "5 < 3"], ["!=", "لا يساوي", "5 != 3"], [">=", "أكبر من أو يساوي", "5 >= 3"], ["<=", "أصغر من أو يساوي", "5 <= 3"]],
        },
      },
      {
        id: "assign-vs-equal",
        title: "الفرق بين = و ==",
        explanation: ["= ← معامل إسناد — بيخلي قيمة طرف تتحط في الطرف التاني", "== ← معامل مقارنة — بيقارن بين قيمتين"],
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 5;\n    int num2;\n    num2 = num1; // إسناد\n    printf("num1 = num2: %i", num2);\n    return 0;\n}`,
        output: "num1 = num2: 5",
      },
      {
        id: "equal-equal-1",
        title: "== — يساوي (مثال 1)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int b = 5;\n    printf("%d == %d : false : (%d)", a, b, a == b);\n    return 0;\n}`,
        output: "10 == 5 : false : (0)",
        explanation: ["a ≠ b ← الناتج 0 = false"],
      },
      {
        id: "equal-equal-2",
        title: "== — يساوي (مثال 2)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int c = 15;\n    printf("%d == %d : false : (%d)", a, c, a == c);\n    return 0;\n}`,
        output: "10 == 15 : false : (0)",
        explanation: ["a ≠ c ← الناتج 0 = false"],
      },
      {
        id: "greater-true",
        title: "> — أكبر من (true)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int b = 5;\n    printf("%d > %d : true : (%d)", a, b, a > b);\n    return 0;\n}`,
        output: "10 > 5 : true : (1)",
        explanation: ["10 > 5 ← صح ← الناتج 1 = true"],
      },
      {
        id: "greater-false",
        title: "> — أكبر من (false)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int c = 15;\n    printf("%d > %d : false : (%d)", a, c, a > c);\n    return 0;\n}`,
        output: "10 > 15 : false : (0)",
        explanation: ["10 > 15 ← غلط ← الناتج 0 = false"],
      },
      {
        id: "less-false",
        title: "< — أصغر من (false)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int b = 5;\n    printf("%d < %d : false : (%d)", a, b, a < b);\n    return 0;\n}`,
        output: "10 < 5 : false : (0)",
        explanation: ["10 < 5 ← غلط ← الناتج 0 = false"],
      },
      {
        id: "less-true",
        title: "< — أصغر من (true)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int c = 15;\n    printf("%d < %d : true : (%d)", a, c, a < c);\n    return 0;\n}`,
        output: "10 < 15 : true : (1)",
        explanation: ["10 < 15 ← صح ← الناتج 1 = true"],
      },
      {
        id: "not-equal-1",
        title: "!= — لا يساوي (مثال 1)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int b = 5;\n    printf("%d != %d : true : (%d)", a, b, a != b);\n    return 0;\n}`,
        output: "10 != 5 : true : (1)",
        explanation: ["10 ≠ 5 ← فعلاً مش بيتساووا ← الناتج 1 = true"],
      },
      {
        id: "greater-equal-true",
        title: ">= — أكبر من أو يساوي (true)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int b = 5;\n    printf("%d >= %d : true : (%d)", a, b, a >= b);\n    return 0;\n}`,
        output: "10 >= 5 : true : (1)",
        explanation: ["10 >= 5 ← صح ← الناتج 1 = true"],
      },
      {
        id: "greater-equal-false",
        title: ">= — أكبر من أو يساوي (false)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int c = 15;\n    printf("%d >= %d : false : (%d)", a, c, a >= c);\n    return 0;\n}`,
        output: "10 >= 15 : false : (0)",
        explanation: ["10 >= 15 ← غلط ← الناتج 0 = false"],
      },
      {
        id: "less-equal-false",
        title: "<= — أصغر من أو يساوي (false)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int b = 5;\n    printf("%d <= %d : false : (%d)", a, b, a <= b);\n    return 0;\n}`,
        output: "10 <= 5 : false : (0)",
        explanation: ["10 <= 5 ← غلط ← الناتج 0 = false"],
      },
      {
        id: "less-equal-true",
        title: "<= — أصغر من أو يساوي (true)",
        code: `#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int c = 15;\n    printf("%d <= %d : true : (%d)", a, c, a <= c);\n    return 0;\n}`,
        output: "10 <= 15 : true : (1)",
        explanation: ["10 <= 15 ← صح ← الناتج 1 = true"],
      },
      {
        id: "relational-summary",
        title: "ملخص شامل — a=10, b=5, c=15",
        table: {
          headers: ["Operator", "المعنى", "مثال", "الناتج"],
          rows: [
            ["==", "يساوي", "a == b (10==5)", "0 (false)"],
            [">", "أكبر من", "a > b (10>5)", "1 (true)"],
            ["<", "أصغر من", "a < b (10<5)", "0 (false)"],
            ["!=", "لا يساوي", "a != b (10!=5)", "1 (true)"],
            [">=", "أكبر من أو يساوي", "a >= b (10>=5)", "1 (true)"],
            ["<=", "أصغر من أو يساوي", "a <= b (10<=5)", "0 (false)"],
          ],
        },
      },
    ],
  },
  // ══════════════════════════════════════════════
  // 13
  // ══════════════════════════════════════════════
  {
    slug: "c-13-logical-operators",
    title: "13 - C language course - Logical operators",
    date: "2025-12-27",
    category: "C Programming",
    tags: ["c", "logical", "operators", "AND", "OR", "NOT"],
    sections: [
      {
        id: "logical-intro",
        title: "ما هي Logical Operators؟",
        explanation: ["المعاملات المنطقية تُستخدم لربط أكثر من شرط مع بعض", "الناتج 1 = true (صح)", "الناتج 0 = false (غلط)"],
        table: {
          headers: ["Operator", "الاسم", "الوصف", "مثال"],
          rows: [["&&", "AND", "لازم الشرطين يتحققوا", "x < 5 && x < 10"], ["||", "OR", "لازم أحد الشرطين يتحقق", "x < 5 || x < 4"], ["!", "NOT", "عكس نتيجة الشرط", "!(x == y)"]],
        },
      },
      {
        id: "and-truth-table",
        title: "&& — AND (و) — جدول الحقيقة",
        explanation: ['مبدأ && "الكل أو لا شيء" — لازم الطرفين يكونوا صح عشان الناتج يطلع 1'],
        table: {
          headers: ["الطرف الأيسر", "الطرف الأيمن", "الناتج"],
          rows: [["true (1)", "true (1)", "1 (true)"], ["true (1)", "false (0)", "0 (false)"], ["false (0)", "true (1)", "0 (false)"], ["false (0)", "false (0)", "0 (false)"]],
        },
      },
      {
        id: "and-false-example",
        title: "&& — مثال ناتج false",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2 = 20;\n    int num3 = num1 + num2; // = 30\n    int result;\n\n    result = (num1 == num2) && (num3 > num2);\n    printf("(num1 == num2) && (num3 > num2) is %d \\n", result);\n\n    return 0;\n}`,
        output: "(num1 == num2) && (num3 > num2) is 0",
        table: {
          headers: ["الجزء", "الحساب", "الناتج"],
          rows: [["num1 == num2", "10 == 20", "0 (false)"], ["num3 > num2", "30 > 20", "1 (true)"], ["0 && 1", "الطرف الأيسر غلط", "0 (false)"]],
        },
      },
      {
        id: "and-true-example",
        title: "&& — مثال ناتج true",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2 = 20;\n    int num3 = num1 + num2; // = 30\n    int result;\n\n    result = (num1 == num1) && (num3 > num2);\n    printf("(num1 == num1) && (num3 > num2) is %d \\n", result);\n\n    return 0;\n}`,
        output: "(num1 == num1) && (num3 > num2) is 1",
        table: {
          headers: ["الجزء", "الحساب", "الناتج"],
          rows: [["num1 == num1", "10 == 10", "1 (true)"], ["num3 > num2", "30 > 20", "1 (true)"], ["1 && 1", "الطرفين صح", "1 (true)"]],
        },
      },
      {
        id: "or-truth-table",
        title: "|| — OR (الأو) — جدول الحقيقة",
        explanation: ['مبدأ || "يكفي واحد" — لو أي طرف صح، الناتج يطلع 1'],
        table: {
          headers: ["الطرف الأيسر", "الطرف الأيمن", "الناتج"],
          rows: [["true (1)", "true (1)", "1 (true)"], ["true (1)", "false (0)", "1 (true)"], ["false (0)", "true (1)", "1 (true)"], ["false (0)", "false (0)", "0 (false)"]],
        },
      },
      {
        id: "or-true-example",
        title: "|| — مثال ناتج true",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2 = 20;\n    int num3 = num1 + num2; // = 30\n    int result;\n\n    result = (num1 == num2) || (num3 > num2);\n    printf("(num1 == num2) || (num3 > num2) is %d \\n", result);\n\n    return 0;\n}`,
        output: "(num1 == num2) || (num3 > num2) is 1",
        table: {
          headers: ["الجزء", "الحساب", "الناتج"],
          rows: [["num1 == num2", "10 == 20", "0 (false)"], ["num3 > num2", "30 > 20", "1 (true)"], ["0 || 1", "طرف واحد صح يكفي", "1 (true)"]],
        },
      },
      {
        id: "or-false-example",
        title: "|| — مثال ناتج false",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2 = 20;\n    int num3 = num1 + num2; // = 30\n    int result;\n\n    result = (num1 == num2) || (num3 < num2);\n    printf("(num1 == num2) || (num3 < num2) is %d \\n", result);\n\n    return 0;\n}`,
        output: "(num1 == num2) || (num3 < num2) is 0",
        table: {
          headers: ["الجزء", "الحساب", "الناتج"],
          rows: [["num1 == num2", "10 == 20", "0 (false)"], ["num3 < num2", "30 < 20", "0 (false)"], ["0 || 0", "مفيش ولا جزء صح", "0 (false)"]],
        },
      },
      {
        id: "not-true-to-false",
        title: "! — NOT — عكس true يطلع false",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2 = 20;\n    int result;\n\n    result = !(num1 != num2);\n    printf("!(num1 != num2) is %d \\n", result);\n\n    return 0;\n}`,
        output: "!(num1 != num2) is 0",
        table: {
          headers: ["الخطوة", "الحساب", "الناتج"],
          rows: [["داخل الأقواس", "num1 != num2 = 10 != 20", "1 (true)"], ["بعد !", "عكس الـ 1", "0 (false)"]],
        },
      },
      {
        id: "not-false-to-true",
        title: "! — NOT — عكس false يطلع true",
        code: `#include <stdio.h>\n\nint main(void) {\n    int num1 = 10;\n    int num2 = 20;\n    int result;\n\n    result = !(num1 == num2);\n    printf("!(num1 == num2) is %d \\n", result);\n\n    return 0;\n}`,
        output: "!(num1 == num2) is 1",
        table: {
          headers: ["الخطوة", "الحساب", "الناتج"],
          rows: [["داخل الأقواس", "num1 == num2 = 10 == 20", "0 (false)"], ["بعد !", "عكس الـ 0", "1 (true)"]],
        },
      },
      {
        id: "logical-summary",
        title: "ملخص شامل — num1=10, num2=20, num3=30",
        table: {
          headers: ["Operator", "المعنى", "مثال", "الناتج"],
          rows: [
            ["&&", "الطرفين لازم صح", "(10==20) && (30>20)", "0 (false)"],
            ["&&", "الطرفين صح", "(10==10) && (30>20)", "1 (true)"],
            ["||", "طرف واحد صح يكفي", "(10==20) || (30>20)", "1 (true)"],
            ["||", "الطرفين غلط", "(10==20) || (30<20)", "0 (false)"],
            ["!", "عكس true", "!(10 != 20)", "0 (false)"],
            ["!", "عكس false", "!(10 == 20)", "1 (true)"],
          ],
        },
      },
    ],
  },
];

// Reopen array — we need to append before the closing ];
