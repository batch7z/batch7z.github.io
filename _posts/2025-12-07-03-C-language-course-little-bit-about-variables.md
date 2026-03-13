---
title: "03 - C language course - little bit about variables"
date: 2025-12-07
categories: [C Programming]
tags: [c, variables, data-types, char, int, float, bool]
author: batch7z
---

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fira+Code:wght@400;500&family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">

<style>
:root{--purple:#9b59d0;--purple-lite:#c084fc;--purple-bg:rgba(155,89,208,0.10);--purple-bdr:rgba(155,89,208,0.28);--bg-card:#141020;--bg-code:#0f0d18;--bg-codehd:#1a1628;--border:#2a2040;--text:#ddd6f3;--text-dim:#8b7db0;--green:#4ade80;--num:#bd93f9;--comment:#5a5280;--red:#f85149;}
.pw{font-family:'Cairo','Segoe UI',sans-serif;color:var(--text);line-height:1.85;direction:rtl;}
.px-head{font-family:'Press Start 2P',monospace;color:var(--purple);font-size:1.45rem;line-height:1.65;margin:2.5rem 0 1rem;padding-bottom:.6rem;border-bottom:1px solid var(--border);direction:ltr;text-shadow:0 0 22px rgba(155,89,208,.45);}
.px-sub{display:flex;align-items:center;gap:.85rem;margin:2.2rem 0 1rem;direction:ltr;}
.px-sub::before{content:'';display:block;width:4px;min-height:1.6rem;border-radius:4px;background:linear-gradient(180deg,var(--purple-lite) 0%,#f85149 100%);flex-shrink:0;box-shadow:0 0 10px rgba(192,132,252,.4);}
.px-sub::after{content:'';flex:1;height:1px;background:linear-gradient(to right,transparent,rgba(192,132,252,.25));}
.sh-pre{font-family:'Fira Code',monospace;color:var(--purple-lite);font-size:.78rem;opacity:.55;flex-shrink:0;letter-spacing:1px;}
.sh-code{font-family:'Fira Code',monospace;color:var(--purple-lite);font-size:.9rem;font-weight:600;background:rgba(155,89,208,.13);padding:.15rem .55rem;border-radius:5px;flex-shrink:0;}
.sh-lbl{font-family:'Cairo',sans-serif;color:var(--text-dim);font-size:.95rem;font-weight:600;}
.toc{background:var(--bg-card);border:1px solid var(--purple-bdr);border-right:3px solid var(--purple);border-radius:10px;padding:1.1rem 1.4rem;margin:0 0 2rem;}
.toc-title{font-family:'Fira Code',monospace;color:var(--purple-lite);font-size:.75rem;letter-spacing:2px;text-transform:uppercase;margin:0 0 .75rem;}
.toc ul{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.2rem .8rem;}
.toc li::before{content:"◈ ";color:var(--purple-lite);font-size:.68rem;}
.toc a{color:var(--text-dim);text-decoration:none;font-size:.86rem;transition:color .2s;}
.toc a:hover{color:var(--purple-lite);}
.callout{border-radius:8px;padding:.85rem 1.1rem;margin:1rem 0;border-right:3px solid;font-size:.91rem;direction:rtl;}
.clbl{font-family:'Fira Code',monospace;font-size:.68rem;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;}
.cn{background:var(--purple-bg);border-color:var(--purple);}
.cn .clbl{color:var(--purple-lite);}
.cw{background:rgba(248,81,73,.06);border-color:var(--red);}
.cw .clbl{color:var(--red);}
.cb{background:var(--bg-code);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin:.9rem 0;direction:ltr;box-shadow:0 4px 24px rgba(0,0,0,.5);}
.cb-head{background:var(--bg-codehd);border-bottom:1px solid var(--border);padding:.5rem 1rem;display:flex;align-items:center;gap:.6rem;}
.dot-r{width:12px;height:12px;border-radius:50%;background:#ff5f57;flex-shrink:0;}
.dot-y{width:12px;height:12px;border-radius:50%;background:#ffbd2e;flex-shrink:0;}
.dot-g{width:12px;height:12px;border-radius:50%;background:#28ca42;flex-shrink:0;}
.cb-lang{flex:1;text-align:center;color:var(--text-dim);font-family:'Fira Code',monospace;font-size:.75rem;letter-spacing:1px;}
.cb-copy{background:rgba(255,255,255,.07);border:1px solid var(--border);color:var(--text-dim);padding:.2rem .7rem;border-radius:6px;font-size:.72rem;cursor:pointer;font-family:'Fira Code',monospace;transition:all .2s;}
.cb-copy:hover{border-color:var(--purple-lite);color:var(--purple-lite);}
.cb-copy.ok{border-color:var(--green);color:var(--green);}
.cb pre{margin:0!important;padding:1rem 1.2rem!important;background:transparent!important;border:none!important;overflow-x:auto;}
.cb code{font-family:'Fira Code',monospace!important;font-size:.86rem!important;color:#cdd9e5!important;background:transparent!important;}
.kw{color:#ff79c6;}.fn{color:#50fa7b;}.st{color:#f1fa8c;}.cm{color:#5a5280;font-style:italic;}.nm{color:#bd93f9;}.tp{color:#67e8f9;}.pp{color:#ff9580;}
.out{background:rgba(74,222,128,.04);border:1px solid rgba(74,222,128,.18);border-right:3px solid var(--green);border-radius:8px;padding:.65rem 1rem;margin:.4rem 0 1.2rem;font-family:'Fira Code',monospace;font-size:.83rem;color:var(--green);direction:ltr;white-space:pre;}
.out::before{content:"▶  output\A";color:rgba(74,222,128,.35);font-size:.65rem;letter-spacing:1px;white-space:pre;}
.blist{margin:.5rem 0 1rem;padding:0;list-style:none;direction:rtl;}
.blist li{padding:.3rem 0;padding-right:1.4rem;position:relative;font-size:.92rem;color:var(--text-dim);line-height:1.7;}
.blist li::before{content:"◆";color:var(--purple-lite);font-size:.55rem;position:absolute;right:0;top:.55rem;}
.blist li code{background:rgba(155,89,208,.14);color:var(--purple-lite);padding:.05rem .35rem;border-radius:4px;font-family:'Fira Code',monospace;font-size:.83rem;}
.blist li strong{color:var(--text);}
.tbl{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.85rem;direction:rtl;border-radius:10px;overflow:hidden;}
.tbl thead tr{background:var(--purple);}
.tbl th{color:#fff;font-family:'Fira Code',monospace;font-size:.75rem;font-weight:700;padding:.6rem .8rem;text-align:right;}
.tbl td{padding:.5rem .8rem;text-align:right;border-bottom:1px solid #1e1830;font-size:.84rem;}
.tbl tbody tr:nth-child(even){background:rgba(155,89,208,.04);}
.tbl tbody tr:hover{background:rgba(155,89,208,.09);}
.tbl td:first-child,.tbl th:first-child{font-family:'Fira Code',monospace;color:var(--purple-lite);direction:ltr;text-align:left;}
.tbl td code{background:rgba(155,89,208,.14);color:var(--purple-lite);padding:.05rem .3rem;border-radius:4px;font-family:'Fira Code',monospace;font-size:.82rem;}
.dv{border:none;border-top:1px solid var(--border);margin:2rem 0;}
.social-bar{display:flex;justify-content:center;align-items:center;gap:1rem;flex-wrap:wrap;margin:2.5rem 0 1rem;direction:ltr;}
.s-btn{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;text-decoration:none!important;transition:transform .2s,box-shadow .2s;border:1px solid rgba(255,255,255,.1);}
.s-btn:hover{transform:translateY(-3px);}
.s-btn svg{width:22px;height:22px;fill:#fff;display:block;}
.s-tg{background:linear-gradient(135deg,#2aabee,#229ed9);box-shadow:0 3px 14px rgba(42,171,238,.4);}
.s-yt{background:linear-gradient(135deg,#ff0000,#cc0000);box-shadow:0 3px 14px rgba(255,0,0,.4);}
.s-fb{background:linear-gradient(135deg,#1877f2,#0d6fe8);box-shadow:0 3px 14px rgba(24,119,242,.4);}
.s-ig{background:linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4);box-shadow:0 3px 14px rgba(221,42,123,.4);}
.s-li{background:linear-gradient(135deg,#0a66c2,#0077b5);box-shadow:0 3px 14px rgba(10,102,194,.4);}
.s-x{background:linear-gradient(135deg,#000,#1a1a1a);box-shadow:0 3px 14px rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.15)!important;}
.s-gh{background:linear-gradient(135deg,#24292e,#383e47);box-shadow:0 3px 14px rgba(36,41,46,.6);}
</style>

<div class="pw">

<div class="toc">
  <div class="toc-title">📌 فهرس المحتوى</div>
  <ul>
    <li><a href="#char">char — تخزين الحروف</a></li>
    <li><a href="#char-def">تعريف متغير char</a></li>
    <li><a href="#char-uses">جدول استخدامات char</a></li>
    <li><a href="#char-ex">أمثلة عملية char</a></li>
    <li><a href="#int">int — الأرقام الصحيحة</a></li>
    <li><a href="#int-def">تعريف متغير int</a></li>
    <li><a href="#int-uses">جدول استخدامات int</a></li>
    <li><a href="#int-ex">أمثلة عملية int</a></li>
    <li><a href="#float">float — الأرقام العشرية</a></li>
    <li><a href="#float-def">تعريف متغير float</a></li>
    <li><a href="#float-ex">أمثلة عملية float</a></li>
    <li><a href="#bool">bool — القيم المنطقية</a></li>
    <li><a href="#bool-def">تعريف متغير bool</a></li>
    <li><a href="#bool-ex">أمثلة عملية bool</a></li>
  </ul>
</div>

<!-- ══════════════ CHAR ══════════════ -->
<div id="char" class="px-head">char</div>

<ul class="blist">
  <li>نوع بيانات بيُستخدم لتخزين <strong>حرف واحد فقط</strong></li>
  <li>حجمه دائمًا <strong>1 بايت</strong></li>
  <li>بيُخزن قيمة الحرف كـ <strong>رقم ASCII</strong></li>
</ul>

<hr class="dv">

<div id="char-def" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">char c = 'A';</span><span class="sh-lbl">تعريف متغير</span></div>

<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">char</span> c = <span class="st">'A'</span>;</code></pre>
</div>

<table class="tbl">
  <thead><tr><th>الجزء</th><th>الشرح</th></tr></thead>
  <tbody>
    <tr><td><code>'A'</code></td><td>حرف واحد — لازم <strong>Single Quotes</strong></td></tr>
    <tr><td>القيمة المخزنة</td><td><strong>65</strong> (ASCII)</td></tr>
  </tbody>
</table>

<hr class="dv">

<div id="char-uses" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">جدول استخدامات char</span></div>

<table class="tbl">
  <thead><tr><th>الاستخدام</th><th>المثال</th><th>الشرح</th></tr></thead>
  <tbody>
    <tr><td>تخزين حرف</td><td><code>char c = 'A';</code></td><td>تخزين حرف واحد</td></tr>
    <tr><td>طباعة حرف</td><td><code>printf("%c", c);</code></td><td><code>%c</code> لطباعة char</td></tr>
    <tr><td>قيمة ASCII</td><td><code>printf("%d", c);</code></td><td>يطبع قيمة ASCII</td></tr>
    <tr><td>رمز خاص</td><td><code>char x = '\n';</code></td><td>Escape Sequence</td></tr>
    <tr><td>Octal</td><td><code>char o = '\101';</code></td><td>ASCII Octal</td></tr>
    <tr><td>Hex</td><td><code>char h = '\x41';</code></td><td>ASCII Hex</td></tr>
    <tr><td>اقتباس مفرد</td><td><code>char q = '\'';</code></td><td>حرف <code>'</code></td></tr>
    <tr><td>Backslash</td><td><code>char b = '\\';</code></td><td>حرف <code>\</code></td></tr>
  </tbody>
</table>

<hr class="dv">

<div id="char-ex" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">أمثلة عملية</span></div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">%c</span><span class="sh-lbl">طباعة حرف وقيمته</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">char</span> c = <span class="st">'A'</span>;
<span class="fn">printf</span>(<span class="st">"%c\n"</span>, c);
<span class="fn">printf</span>(<span class="st">"%d\n"</span>, c);</code></pre>
</div>
<div class="out">A
65</div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">Escape Sequence</span><span class="sh-lbl">مع char</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">char</span> n = <span class="st">'\n'</span>;
<span class="fn">printf</span>(<span class="st">"Hello%cWorld"</span>, n);</code></pre>
</div>
<div class="out">Hello
World</div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">Octal &amp; Hex</span><span class="sh-lbl">مع char</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">char</span> a1 = <span class="st">'\101'</span>; <span class="cm">// Octal</span>
<span class="tp">char</span> a2 = <span class="st">'\x41'</span>; <span class="cm">// Hex</span>
<span class="fn">printf</span>(<span class="st">"%c %c"</span>, a1, a2);</code></pre>
</div>
<div class="out">A A</div>

<div class="callout cw">
  <div class="clbl">⚠️ تحذير</div>
  <code>char c = "A";</code> ← ❌ غلط (ده string)<br>
  <code>char c = 'A';</code> ← ✅ صح
</div>

<div class="callout cn">
  <div class="clbl">📘 Low Level</div>
  <code>char</code> = <strong>رقم + حرف</strong> في نفس الوقت (ASCII)<br>
  <code>char c = 65; printf("%c", c); // A</code>
</div>

<hr class="dv">

<!-- ══════════════ INT ══════════════ -->
<div id="int" class="px-head">int</div>

<ul class="blist">
  <li>نوع بيانات بيُستخدم لتخزين <strong>الأرقام الصحيحة فقط</strong></li>
  <li>حجمه غالبًا <strong>4 بايت</strong> (يعتمد على النظام)</li>
  <li>بيُخزن الأرقام بصيغة <strong>Binary (Two's Complement)</strong></li>
</ul>

<hr class="dv">

<div id="int-def" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">int num = 77;</span><span class="sh-lbl">تعريف متغير</span></div>

<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">int</span> num = <span class="nm">77</span>;</code></pre>
</div>

<table class="tbl">
  <thead><tr><th>الجزء</th><th>الشرح</th></tr></thead>
  <tbody>
    <tr><td><code>77</code></td><td>رقم صحيح بدون كسور</td></tr>
    <tr><td>القيمة المخزنة</td><td><strong>77</strong></td></tr>
  </tbody>
</table>

<hr class="dv">

<div id="int-uses" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">جدول استخدامات int</span></div>

<table class="tbl">
  <thead><tr><th>الاستخدام</th><th>المثال</th><th>الشرح</th></tr></thead>
  <tbody>
    <tr><td>تخزين رقم صحيح</td><td><code>int x = 10;</code></td><td>تخزين عدد صحيح</td></tr>
    <tr><td>طباعة رقم</td><td><code>printf("%d", x);</code></td><td><code>%d</code> لطباعة int</td></tr>
    <tr><td>رقم سالب</td><td><code>int n = -5;</code></td><td>يدعم السالب</td></tr>
    <tr><td>عمليات حسابية</td><td><code>int z = x + y;</code></td><td>جمع / طرح / ضرب</td></tr>
    <tr><td>مقارنة</td><td><code>if (x &gt; y)</code></td><td>يستخدم في الشروط</td></tr>
  </tbody>
</table>

<hr class="dv">

<div id="int-ex" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">أمثلة عملية</span></div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">%d</span><span class="sh-lbl">طباعة رقم صحيح</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">int</span> num = <span class="nm">77</span>;
<span class="fn">printf</span>(<span class="st">"%d\n"</span>, num);</code></pre>
</div>
<div class="out">77</div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">العمليات الحسابية</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">int</span> a = <span class="nm">10</span>, b = <span class="nm">3</span>;
<span class="fn">printf</span>(<span class="st">"%d\n"</span>, a + b);
<span class="fn">printf</span>(<span class="st">"%d\n"</span>, a - b);
<span class="fn">printf</span>(<span class="st">"%d\n"</span>, a * b);
<span class="fn">printf</span>(<span class="st">"%d\n"</span>, a / b);</code></pre>
</div>
<div class="out">13
7
30
3</div>

<div class="callout cn">
  <div class="clbl">📘 ملاحظة</div>
  القسمة <strong>بدون كسور</strong> لأن النوع <code>int</code>
</div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">مدى الأرقام (Range)</span></div>
<table class="tbl">
  <thead><tr><th>النوع</th><th>الحجم</th><th>المدى</th></tr></thead>
  <tbody>
    <tr><td><code>int</code></td><td>4 بايت</td><td>-2,147,483,648 → 2,147,483,647</td></tr>
  </tbody>
</table>

<div class="callout cw">
  <div class="clbl">⚠️ تحذير</div>
  <code>int x = 3.5;</code> ← هيخزن <strong>3 فقط</strong> (يتجاهل الكسر)<br>
  <code>int</code> <strong>لا يخزن كسور</strong> — القسمة بين <code>int</code> و <code>int</code> تنتج <code>int</code>
</div>

<div class="callout cn">
  <div class="clbl">📘 Low Level</div>
  <code>int x = 'A'; printf("%d", x); // 65</code><br>
  لأن <strong>A = 65</strong> في ASCII
</div>

<hr class="dv">

<!-- ══════════════ FLOAT ══════════════ -->
<div id="float" class="px-head">float</div>

<ul class="blist">
  <li>نوع بيانات بيُستخدم لتخزين <strong>الأرقام العشرية</strong></li>
  <li>حجمه غالبًا <strong>4 بايت</strong> (يعتمد على النظام)</li>
  <li>بيُخزن الأرقام بصيغة <strong>Floating Point (IEEE 754)</strong></li>
</ul>

<hr class="dv">

<div id="float-def" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">float x = 3.14;</span><span class="sh-lbl">تعريف متغير</span></div>

<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">float</span> x = <span class="nm">3.14</span>;</code></pre>
</div>

<table class="tbl">
  <thead><tr><th>الجزء</th><th>الشرح</th></tr></thead>
  <tbody>
    <tr><td><code>3.14</code></td><td>رقم عشري</td></tr>
    <tr><td>القيمة المخزنة</td><td>≈ <strong>3.14</strong> (تقريب)</td></tr>
  </tbody>
</table>

<hr class="dv">

<div id="float-ex" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">أمثلة عملية</span></div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">%f</span><span class="sh-lbl">طباعة رقم عشري</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">float</span> x = <span class="nm">3.14</span>;
<span class="fn">printf</span>(<span class="st">"%f\n"</span>, x);</code></pre>
</div>
<div class="out">3.140000</div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">العمليات الحسابية</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">float</span> a = <span class="nm">10.0</span>, b = <span class="nm">3.0</span>;
<span class="fn">printf</span>(<span class="st">"%f\n"</span>, a / b);</code></pre>
</div>
<div class="out">3.333333</div>

<div class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">مدى الأرقام (Range)</span></div>
<table class="tbl">
  <thead><tr><th>النوع</th><th>الحجم</th><th>المدى التقريبي</th></tr></thead>
  <tbody>
    <tr><td><code>float</code></td><td>4 بايت</td><td>±3.4 × 10³⁸</td></tr>
  </tbody>
</table>

<div class="callout cw">
  <div class="clbl">⚠️ فخ شائع جداً</div>
  <div class="cb" style="margin:.5rem 0;">
    <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span></div>
    <pre><code><span class="tp">float</span> x = <span class="nm">5</span> / <span class="nm">2</span>;
<span class="fn">printf</span>(<span class="st">"%f"</span>, x); <span class="cm">// 2.000000 ❌</span>

<span class="cm">// الحل الصحيح:</span>
<span class="tp">float</span> x = <span class="nm">5.0</span> / <span class="nm">2</span>;
<span class="fn">printf</span>(<span class="st">"%f"</span>, x); <span class="cm">// 2.500000 ✅</span></code></pre>
  </div>
  القسمة تمت كـ <code>int</code> لأن الاتنين أرقام صحيحة!
</div>

<div class="callout cn">
  <div class="clbl">📘 ملاحظة</div>
  <code>float x = 5;</code> ← ✅ صح (يتحول إلى <code>5.0</code>)<br>
  <code>float</code> <strong>تقريبي</strong> (مش دقيق 100%) — القسمة بين <code>float</code> و <code>int</code> = <code>float</code>
</div>

<hr class="dv">

<!-- ══════════════ BOOL ══════════════ -->
<div id="bool" class="px-head">bool</div>

<ul class="blist">
  <li>نوع بيانات بيُستخدم لتخزين <strong>قيم منطقية</strong> (True/False)</li>
  <li>الحجم غالبًا <strong>1 بايت</strong> (يعتمد على النظام)</li>
  <li>القيمة الممكنة: <strong><code>true</code> أو <code>false</code></strong> فقط</li>
</ul>

<hr class="dv">

<div id="bool-lib" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">&#35;include &lt;stdbool.h&gt;</span><span class="sh-lbl">المكتبة المطلوبة</span></div>

<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="pp">&#35;include</span> <span class="st">&lt;stdbool.h&gt;</span></code></pre>
</div>

<div class="callout cw">
  <div class="clbl">⚠️ تحذير</div>
  بدون هذه المكتبة، C لا تدعم <code>bool</code> رسميًا — قبل C99 كان لازم تستخدم <code>int</code> بدل <code>bool</code>
</div>

<div id="bool-def" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">bool flag = true;</span><span class="sh-lbl">تعريف متغير</span></div>

<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">bool</span> flag = <span class="kw">true</span>;</code></pre>
</div>

<table class="tbl">
  <thead><tr><th>القيمة</th><th>تمثّل</th></tr></thead>
  <tbody>
    <tr><td><code>true</code></td><td><strong>1</strong></td></tr>
    <tr><td><code>false</code></td><td><strong>0</strong></td></tr>
  </tbody>
</table>

<div id="bool-uses" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">جدول استخدامات bool</span></div>

<table class="tbl">
  <thead><tr><th>الاستخدام</th><th>المثال</th><th>الشرح</th></tr></thead>
  <tbody>
    <tr><td>تعريف متغير منطقي</td><td><code>bool x = true;</code></td><td>يخزن قيمة منطقية</td></tr>
    <tr><td>طباعة متغير منطقي</td><td><code>printf("%d", x);</code></td><td>يطبع 1 أو 0</td></tr>
    <tr><td>تغيير القيمة</td><td><code>x = false;</code></td><td>يمكن التغيير في أي وقت</td></tr>
  </tbody>
</table>

<hr class="dv">

<div id="bool-ex" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">أمثلة عملية</span></div>

<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="pp">&#35;include</span> <span class="st">&lt;stdio.h&gt;</span>
<span class="pp">&#35;include</span> <span class="st">&lt;stdbool.h&gt;</span>

<span class="tp">int</span> <span class="fn">main</span>() {
    <span class="tp">bool</span> x = <span class="kw">true</span>;
    <span class="tp">bool</span> y = <span class="kw">false</span>;
    <span class="fn">printf</span>(<span class="st">"%i\n"</span>, x);
    <span class="fn">printf</span>(<span class="st">"%i\n"</span>, y);
}</code></pre>
</div>
<div class="out">1
0</div>

<div class="callout cn">
  <div class="clbl">📘 قبل C99</div>
  <code>int flag = 1; // true</code><br>
  <code>int flag = 0; // false</code><br>
  لو الكومبايلر قديم ومش بيدعم <code>stdbool.h</code>
</div>

<div class="callout cw">
  <div class="clbl">⚠️ تذكر دايمًا</div>
  لازم تحط في الأول: <code>&#35;include &lt;stdbool.h&gt;</code>
</div>

<hr class="dv">

<div class="social-bar">
  <a class="s-btn s-tg" href="https://t.me/batch_7z" target="_blank" rel="noopener" title="Telegram"><svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg></a>
  <a class="s-btn s-yt" href="https://www.youtube.com/@batch7z" target="_blank" rel="noopener" title="YouTube"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
  <a class="s-btn s-fb" href="https://www.facebook.com/profile.php?id=100078981974023" target="_blank" rel="noopener" title="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg></a>
  <a class="s-btn s-ig" href="https://www.instagram.com/batch_7z/" target="_blank" rel="noopener" title="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
  <a class="s-btn s-li" href="https://www.linkedin.com/in/batch-7z/" target="_blank" rel="noopener" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
  <a class="s-btn s-x" href="https://x.com/batch_7z" target="_blank" rel="noopener" title="X / Twitter"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
  <a class="s-btn s-gh" href="https://github.com/batch7z" target="_blank" rel="noopener" title="GitHub"><svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
</div>

</div>

<script>
function cp(btn){var code=btn.closest('.cb').querySelector('pre').innerText;navigator.clipboard.writeText(code).then(function(){btn.textContent='Copied ✓';btn.classList.add('ok');setTimeout(function(){btn.textContent='Copy';btn.classList.remove('ok');},2000);});}
</script>
