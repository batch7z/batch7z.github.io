---
title: "01 - C language course - language installation | 1st program"
date: 2025-12-03
categories: [C Programming]
tags: [c, basics, printf, main]
author: batch7z
---

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fira+Code:wght@400;500&family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">

<style>
:root {
  --purple:      #9b59d0;
  --purple-lite: #c084fc;
  --purple-bg:   rgba(155,89,208,0.10);
  --purple-bdr:  rgba(155,89,208,0.28);
  --bg-card:     #141020;
  --bg-code:     #0f0d18;
  --bg-codehd:   #1a1628;
  --border:      #2a2040;
  --text:        #ddd6f3;
  --text-dim:    #8b7db0;
  --green:       #4ade80;
  --num:         #bd93f9;
  --comment:     #5a5280;
  --red:         #f85149;
}
.pw{font-family:'Cairo','Segoe UI',sans-serif;color:var(--text);line-height:1.85;direction:rtl;}
.px-head{font-family:'Press Start 2P',monospace;color:var(--purple);font-size:1.45rem;line-height:1.65;margin:2.5rem 0 1rem;padding-bottom:.6rem;border-bottom:1px solid var(--border);direction:ltr;text-shadow:0 0 22px rgba(155,89,208,.45);}
.px-sub{display:flex;align-items:center;gap:.85rem;margin:2.2rem 0 1rem;direction:rtl;}
.px-sub::before{content:'';display:block;width:4px;min-height:1.6rem;border-radius:4px;background:linear-gradient(180deg,var(--purple-lite) 0%,#f85149 100%);flex-shrink:0;box-shadow:0 0 10px rgba(192,132,252,.4);}
.px-sub::after{content:'';flex:1;height:1px;background:linear-gradient(to left,transparent,rgba(192,132,252,.25));}
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
.blist .sub{margin:.2rem 0 0;padding:0;list-style:none;}
.blist .sub li{font-size:.88rem;padding-right:1.4rem;}
.blist .sub li::before{content:"▸";color:var(--text-dim);font-size:.65rem;}
.tbl{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.88rem;direction:rtl;border-radius:10px;overflow:hidden;}
.tbl thead tr{background:var(--purple);}
.tbl th{color:#fff;font-family:'Fira Code',monospace;font-size:.78rem;font-weight:700;padding:.65rem 1rem;text-align:right;}
.tbl td{padding:.55rem 1rem;text-align:right;border-bottom:1px solid #1e1830;}
.tbl tbody tr:nth-child(even){background:rgba(155,89,208,.04);}
.tbl tbody tr:hover{background:rgba(155,89,208,.09);}
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
    <li><a href="#full">الكود كامل</a></li>
    <li><a href="#inc">&#35;include &lt;stdio.h&gt;</a></li>
    <li><a href="#main">int main()</a></li>
    <li><a href="#brc">&#123; &#125; الأقواس</a></li>
    <li><a href="#prf">printf</a></li>
    <li><a href="#ret">return 0;</a></li>
    <li><a href="#sem">; الفاصلة المنقوطة</a></li>
  </ul>
</div>

<div class="px-head">First Program</div>

<div id="full" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-lbl">الكود كامل</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="pp">&#35;include</span> <span class="st">&lt;stdio.h&gt;</span>

<span class="tp">int</span> <span class="fn">main</span>() {
    <span class="fn">printf</span>(<span class="st">"test\n"</span>);
    <span class="kw">return</span> <span class="nm">0</span>;
}</code></pre>
</div>
<div class="out">test</div>

<hr class="dv">

<div id="inc" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">&#35;include &lt;stdio.h&gt;</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="pp">&#35;include</span> <span class="st">&lt;stdio.h&gt;</span></code></pre>
</div>
<ul class="blist">
  <li>دي تعليمة <strong>Preprocessor</strong></li>
  <li>معناها: ضمّ مكتبة <strong>Standard Input Output</strong></li>
  <li>المكتبة دي بتوفر دوال جاهزة زي:
    <ul class="sub">
      <li><code>printf()</code> ← الطباعة على الشاشة</li>
      <li><code>scanf()</code> ← إدخال البيانات</li>
    </ul>
  </li>
</ul>
<div class="callout cw">
  <div class="clbl">⚠️ تحذير</div>
  بدون السطر ده، الكومبايلر هيطلع <strong>Error</strong> مع <code>printf</code>
</div>

<hr class="dv">

<div id="main" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">int main()</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="tp">int</span> <span class="fn">main</span>() {</code></pre>
</div>
<ul class="blist">
  <li>دي الـ <strong>دالة الرئيسية</strong> في برنامج C</li>
  <li>أي برنامج C لازم يبدأ منها</li>
  <li><code>int</code> معناها: الدالة بترجع <strong>عدد صحيح (integer)</strong> لنظام التشغيل</li>
</ul>
<div class="callout cn">
  <div class="clbl">📘 ملاحظة</div>
  نظام التشغيل بيستقبل القيمة دي عشان يعرف هل البرنامج اشتغل بنجاح ولا لأ
</div>

<hr class="dv">

<div id="brc" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">&#123; &#125;</span><span class="sh-lbl">الأقواس المعقوفة</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code>{
    <span class="cm">// أوامر البرنامج</span>
}</code></pre>
</div>
<ul class="blist">
  <li>بتحدد <strong>بداية ونهاية</strong> جسم الدالة</li>
  <li>أي كود بينهم بيتنفذ <strong>بالترتيب</strong></li>
</ul>

<hr class="dv">

<div id="prf" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">printf("test\n")</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="fn">printf</span>(<span class="st">"test\n"</span>);</code></pre>
</div>
<ul class="blist">
  <li>بيطبع كلمة <code>test</code> على الشاشة</li>
</ul>
<div class="callout cn">
  <div class="clbl">📘 شرح \n</div>
  دي <strong>Escape Sequence</strong> — معناها: انزل سطر جديد <strong>(New Line)</strong>
</div>
<div class="out">test</div>

<hr class="dv">

<div id="ret" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">return 0;</span></div>
<div class="cb">
  <div class="cb-head"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span><span class="cb-lang">C</span><button class="cb-copy" onclick="cp(this)">Copy</button></div>
  <pre><code><span class="kw">return</span> <span class="nm">0</span>;</code></pre>
</div>
<ul class="blist">
  <li>بترجع قيمة <code>0</code> لنظام التشغيل</li>
  <li>معناها: البرنامج انتهى <strong>بدون أخطاء</strong></li>
</ul>
<table class="tbl">
  <thead><tr><th>القيمة</th><th>المعنى</th></tr></thead>
  <tbody>
    <tr><td><code>0</code></td><td>✅ تنفيذ ناجح</td></tr>
    <tr><td>غير <code>0</code></td><td>❌ حصل خطأ</td></tr>
  </tbody>
</table>

<hr class="dv">

<div id="sem" class="px-sub"><span class="sh-pre">&gt;_</span><span class="sh-code">;</span><span class="sh-lbl">الفاصلة المنقوطة</span></div>
<ul class="blist">
  <li>كل سطر أمر في C لازم ينتهي بـ <code>;</code></li>
  <li>معناها: <strong>نهاية التعليمة</strong></li>
</ul>
<div class="callout cw">
  <div class="clbl">⚠️ تحذير</div>
  نسيانها = <strong>Compilation Error</strong>
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
