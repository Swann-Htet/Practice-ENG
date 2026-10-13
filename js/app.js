/* EE ENG Practice - single page app (no build step). Progress is saved in localStorage. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var L = function (i) { return String.fromCharCode(65 + i); };

  /* ---------- icons ---------- */
  var ICONS = {
    cap: '<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V22h16"/>',
    pattern: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 17.5h7M17.5 14v7"/>',
    vocab: '<path d="M5 4h14v16H5z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    read: '<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>',
    ear: '<path d="M6 8a6 6 0 1 1 12 0c0 4-3 4-3 8a3 3 0 0 1-6 0"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    play: '<path d="M6 4l14 8-14 8z"/>', stop: '<rect x="5" y="5" width="14" height="14"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
    redo: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>', eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>'
  };
  var ic = function (n) { return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[n] + '</svg>'; };

  /* ---------- persistent state ---------- */
  var KEY = 'ee-eng-practice-v1';
  var S = { vocab: { known: {} }, reading: {}, listen: {}, fill: {}, practice: { ans: {}, f: { src: 'all', type: 'all', topic: 'all' }, cur: 0 }, vq: { best: 0 } };
  try { var raw = localStorage.getItem(KEY); if (raw) { var p = JSON.parse(raw); for (var k in p) S[k] = p[k]; } } catch (e) {}
  var saveT = null;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); var s = $('#saved'); if (s) { s.style.opacity = 1; clearTimeout(saveT); saveT = setTimeout(function () { s.style.opacity = .6; }, 1200); } } catch (e) {}
  }

  /* ---------- helpers ---------- */
  var app = $('#app');
  var NAV = [['home', 'Home'], ['grammar', 'Grammar patterns'], ['vocab', 'Vocabulary'], ['reading', 'Reading'], ['listening', 'Listening'], ['practice', 'Grammar practice'], ['prepare', 'Prepare test']];
  function hydrate(r) { $$('[data-ic]', r || document).forEach(function (el) { el.innerHTML = ic(el.getAttribute('data-ic')); el.removeAttribute('data-ic'); }); }
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, ''), q = {}, i = h.indexOf('?');
    if (i >= 0) { h.slice(i + 1).split('&').forEach(function (kv) { var p = kv.split('='); q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); }); h = h.slice(0, i); }
    var parts = h.split('/');
    return { page: parts[0] || 'home', id: parts[1] || '', q: q };
  }
  function option(i, text, cls, dis) { return '<button class="opt ' + (cls || '') + '" data-k="' + i + '"' + (dis ? ' disabled' : '') + '><span class="k">' + L(i) + '</span><span>' + esc(text) + '</span></button>'; }
  function whyBox(text, note) { return '<div class="why">' + ic('bulb') + ' ' + esc(text) + (note ? '<span class="n">' + ic('info') + ' ' + esc(note) + '</span>' : '') + '</div>'; }

  /* ---------- router ---------- */
  function route() {
    var r = parseHash();
    $('#nav').innerHTML = NAV.map(function (n) { return '<a href="#/' + n[0] + '" class="' + (n[0] === r.page ? 'on' : '') + '">' + n[1] + '</a>'; }).join('');
    stopSpeak();
    var fn = { home: viewHome, grammar: viewGrammar, vocab: viewVocab, reading: viewReading, listening: viewListening, practice: viewPractice, prepare: viewPrepare }[r.page] || viewHome;
    app.className = 'view'; app.style.animation = 'none'; void app.offsetHeight; app.style.animation = '';
    fn(r); hydrate(app); window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- counts for the home page ---------- */
  function countAnswered(obj) { var n = 0; for (var k in obj) { if (obj[k] != null) n++; } return n; }
  function readingTotals() {
    var t = 0, d = 0;
    READING.forEach(function (p) { t += p.questions.length; var a = S.reading[p.id] || {}; d += countAnswered(a); });
    return [d, t];
  }
  function listenTotals() {
    var t = 0, d = 0;
    LISTENING.forEach(function (it) {
      var a = S.listen[it.id] || {};
      if (it.questions) { t += it.questions.length; d += countAnswered(a); }
      if (it.fill) { t += it.fill.length; d += countAnswered(S.fill[it.id] || {}); }
      if (it.dialogues) { t += it.dialogues.length; d += countAnswered(a); }
    });
    return [d, t];
  }

  /* ---------- HOME ---------- */
  function viewHome() {
    var rt = readingTotals(), lt = listenTotals();
    var known = countAnswered(S.vocab.known), pa = countAnswered(S.practice.ans);
    var tile = function (href, icon, title, sub, done, total) {
      var pct = total ? Math.round(done / total * 100) : 0;
      return '<a class="tile" href="' + href + '"><span class="ico" data-ic="' + icon + '"></span><b>' + title + '</b><small>' + sub + '</small>' +
        '<small>' + done + ' / ' + total + ' done</small><span class="pg"><i style="width:' + pct + '%"></i></span></a>';
    };
    app.innerHTML =
      '<h1>EE ENG Practice</h1>' +
      '<p class="lead">Everything from the six PDF sheets in one place: all grammar patterns, vocabulary in English and Burmese, reading passages with explanations, listening with read-aloud scripts, and a grammar practice bank. Your answers are saved in this browser.</p>' +
      '<div class="kpis"><div class="kpi"><b>' + GRAMMAR.length + '</b><span>Grammar topics</span></div><div class="kpi"><b>' + VOCAB.length + '</b><span>Vocabulary items</span></div>' +
      '<div class="kpi"><b>' + rt[1] + '</b><span>Reading questions</span></div><div class="kpi"><b>' + lt[1] + '</b><span>Listening items</span></div>' +
      '<div class="kpi"><b>' + PRACTICE.length + '</b><span>Practice items</span></div></div>' +
      '<div class="grid c3">' +
      tile('#/grammar', 'pattern', 'Grammar patterns', 'Every pattern in the sheets, with examples, tips and traps.', 0, 0).replace('0 / 0 done', GRAMMAR.length + ' topics') +
      tile('#/vocab', 'vocab', 'Vocabulary', 'English + Burmese. List, flashcards and quiz.', known, VOCAB.length) +
      tile('#/reading', 'read', 'Reading practice', 'Five passages, glossary, Burmese gist, explained answers.', rt[0], rt[1]) +
      tile('#/listening', 'ear', 'Listening practice', 'Conversations, talks and speaking items read aloud.', lt[0], lt[1]) +
      tile('#/practice', 'pen', 'Grammar practice', 'Incomplete sentence, error identification, text completion.', pa, PRACTICE.length) +
      tile('#/prepare', 'link', 'Prepare test', 'Links found with Google: online tests and searches. Add your own links.', 0, 0).replace('0 / 0 done', PREP_LINKS.reduce(function (n, g) { return n + g.items.length; }, 0) + ' links') +
      '</div>' +
      '<div class="card" style="margin-top:20px"><h2>Exam format (from the guide)</h2><div class="in scroll"><table class="t"><thead><tr><th>Part</th><th>Sections</th><th>Items</th></tr></thead><tbody>' +
      '<tr><td>1 Listening &amp; Speaking</td><td>Conversations, Talks, Speaking</td><td>about 25</td></tr>' +
      '<tr><td>2 Grammar &amp; Written Expressions</td><td>Error identification, Grammar in context, Written expressions</td><td>about 50</td></tr>' +
      '<tr><td>3 Reading</td><td>Passages 1 to 3</td><td>about 25</td></tr></tbody></table>' +
      '<p style="margin:10px 0 0">About <b>100 items</b> in <b>3 hours</b>. Pass: <b>60 items</b> or more.</p></div></div>';
  }

  /* ---------- GRAMMAR ---------- */
  var TOPIC_MAP = { pos: 'Word form', svo: 'Sentence structure', phrase: 'Sentence structure', connectors: 'Connector', sv: 'Agreement', tense: 'Tense',
    modal: 'Modal', passive: 'Voice', shortcut: 'Tense', adjadv: 'Adjective & adverb', nonfinite: 'Non-finite verb', quant: 'Quantifier', if: 'If-clause', parallel: 'Parallel structure' };
  function renderBlock(b) {
    switch (b.t) {
      case 'p': return '<p>' + esc(b.text) + '</p>';
      case 'h': return '<h3>' + esc(b.text) + '</h3>';
      case 'formula': return '<div class="formula">' + esc(b.text) + (b.note ? '<small>' + esc(b.note) + '</small>' : '') + '</div>';
      case 'ul': return '<ul class="b">' + b.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
      case 'ex': return '<div class="ex">' + b.items.map(function (i) { return '<div>' + esc(i.s) + (i.n ? '<em>' + esc(i.n) + '</em>' : '') + '</div>'; }).join('') + '</div>';
      case 'table': return '<div class="scroll"><table class="t"><thead><tr>' + b.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'method': return '<div class=""scroll""><table class=""t""><thead><tr><th>Step</th><th>English</th><th>မြန်မာ</th></tr></thead><tbody>' +
        GRAMMAR_METHOD.map(function (m, i) { return '<tr><td><b>' + (i + 1) + '</b></td><td>' + esc(m[0]) + '</td><td class=""my"">' + esc(m[1]) + '</td></tr>'; }).join('') + '</tbody></table></div>';
      case 'combo': return b.items.map(function (e, n) {
        return '<div class=""card"" style=""margin:12px 0""><h2>Example ' + (n + 1) + '</h2><div class=""in""><p style=""font-weight:700;margin:0 0 8px"">' + esc(e.s) + '</p>' +
          '<div class=""scroll""><table class=""t""><thead><tr><th>Layer</th><th>English</th><th>မြန်မာ</th></tr></thead><tbody>' +
          e.steps.map(function (st, i) { return '<tr><td>' + (i + 1) + '</td><td>' + esc(st[0]) + '</td><td class=""my"">' + esc(st[1]) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
          '<p style=""margin:8px 0 0""><span class=""pill ok"">' + ic('check') + ' Answer: ' + esc(e.ans) + '</span></p></div></div>'; }).join('');
      case 'tip': return '<div class=""tip"">' + ic('bulb') + '<span>' + esc(b.text) + '</span></div>';
      case 'warn': return '<div class="warn">' + ic('alert') + '<span>' + esc(b.text) + '</span></div>';
    }
    return '';
  }
  function viewGrammar(r) {
    var cur = GRAMMAR.filter(function (g) { return g.id === r.id; })[0] || GRAMMAR[0];
    var side = GRAMMAR.map(function (g, i) { return '<a href="#/grammar/' + g.id + '" class="' + (g === cur ? 'on' : '') + '">' + (i + 1) + '. ' + esc(g.title) + '</a>'; }).join('');
    var idx = GRAMMAR.indexOf(cur), prev = GRAMMAR[idx - 1], next = GRAMMAR[idx + 1];
    var topic = TOPIC_MAP[cur.id];
    var link = topic ? '#/practice?topic=' + encodeURIComponent(topic) : (cur.id === 'errorid' ? '#/practice?type=' + encodeURIComponent('Error identification') : (cur.id === 'textcomp' ? '#/practice?type=' + encodeURIComponent('Text completion') : ''));
    app.innerHTML = '<div class="split"><nav class="side">' + side + '</nav><article>' +
      '<h1>' + esc(cur.title) + '</h1><p class="srcline">Source: ' + esc(cur.src) + '</p>' +
      '<p class=""my mylabel"">' + esc(cur.my) + '</p>' +
      (cur.bi && cur.bi.length ? '<div class=""card"" style=""margin:0 0 16px""><h2>English + မြန်မာ summary</h2><div class=""in scroll""><table class=""t""><thead><tr><th>English</th><th>မြန်မာ</th></tr></thead><tbody>' +
        cur.bi.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td class=""my"">' + esc(r[1]) + '</td></tr>'; }).join('') + '</tbody></table></div></div>' : '') +
      cur.blocks.map(renderBlock).join('') +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px">' +
      (prev ? '<a class="btn" href="#/grammar/' + prev.id + '">' + ic('left') + ' ' + esc(prev.title) + '</a>' : '') +
      (link ? '<a class="btn solid" href="' + link + '">' + ic('pen') + ' Practice this topic</a>' : '') +
      (next ? '<a class="btn" href="#/grammar/' + next.id + '">' + esc(next.title) + ' ' + ic('arrow') + '</a>' : '') +
      '</div></article></div>';
  }

  /* ---------- VOCAB ---------- */
  var V = { cat: 'all', q: '', hide: false, mode: 'list', fi: 0, flip: false, quiz: null };
  function vkey(v) { return v.c + '|' + v.w; }
  function vFiltered() {
    var q = V.q.trim().toLowerCase();
    return VOCAB.filter(function (v) {
      if (V.cat !== 'all' && v.c !== V.cat) return false;
      if (V.hide && S.vocab.known[vkey(v)]) return false;
      if (!q) return true;
      return (v.w + ' ' + v.my + ' ' + (v.x || '') + ' ' + (v.ex || '')).toLowerCase().indexOf(q) >= 0;
    });
  }
  function viewVocab() {
    app.innerHTML = '<h1>Vocabulary (English + Burmese)</h1>' +
      '<p class="lead">All words from the vocabulary sheet with Burmese meanings. Tick "known" to hide words you have learned.</p>' +
      '<div class="tools"><div class="seg" id="vmode"><button data-m="list">List</button><button data-m="flash">Flashcards</button><button data-m="quiz">Quiz</button></div>' +
      '<select id="vcat"><option value="all">All categories (' + VOCAB.length + ')</option>' +
      VOCAB_CATS.map(function (c) { var n = VOCAB.filter(function (v) { return v.c === c.id; }).length; return '<option value="' + c.id + '">' + esc(c.name) + ' (' + n + ')</option>'; }).join('') + '</select>' +
      '<input type="search" id="vq" placeholder="Search English or Burmese">' +
      '<label><input type="checkbox" id="vhide"> Hide known</label><span class="pill" id="vcount"></span></div>' +
      '<div id="vbody"></div>';
    $('#vcat').value = V.cat; $('#vq').value = V.q; $('#vhide').checked = V.hide;
    $('#vmode').onclick = function (e) { var b = e.target.closest('button'); if (b) { V.mode = b.dataset.m; V.fi = 0; V.flip = false; V.quiz = null; vRender(); } };
    $('#vcat').onchange = function () { V.cat = this.value; V.fi = 0; V.quiz = null; vRender(); };
    $('#vq').oninput = function () { V.q = this.value; V.fi = 0; vRender(); };
    $('#vhide').onchange = function () { V.hide = this.checked; V.fi = 0; vRender(); };
    vRender();
  }
  function vRender() {
    var list = vFiltered(), body = $('#vbody');
    $$('#vmode button').forEach(function (b) { b.classList.toggle('on', b.dataset.m === V.mode); });
    var known = list.filter(function (v) { return S.vocab.known[vkey(v)]; }).length;
    $('#vcount').textContent = list.length + ' words' + (known ? ' (' + known + ' known)' : '');
    if (V.mode === 'list') {
      if (!list.length) { body.innerHTML = '<p>No words match.</p>'; return; }
      var catName = {}; VOCAB_CATS.forEach(function (c) { catName[c.id] = c.name; });
      body.innerHTML = '<div class="scroll"><table class="t"><thead><tr><th>Known</th><th>English</th><th>Burmese</th><th>Notes / example</th></tr></thead><tbody>' +
        list.map(function (v) {
          var k = vkey(v);
          return '<tr><td><input class="known" type="checkbox" data-k="' + esc(k) + '"' + (S.vocab.known[k] ? ' checked' : '') + '></td>' +
            '<td><span class="w">' + esc(v.w) + '</span> <span class="pos">' + esc(v.pos || '') + '</span><br><span class="pos">' + esc(catName[v.c]) + '</span></td>' +
            '<td class="my">' + esc(v.my) + '</td>' +
            '<td>' + (v.x ? esc(v.x) : '') + (v.ex ? '<br><i>' + esc(v.ex) + '</i>' : '') + '</td></tr>';
        }).join('') + '</tbody></table></div>';
      body.onchange = function (e) { var c = e.target.closest('input.known'); if (c) { if (c.checked) S.vocab.known[c.dataset.k] = 1; else delete S.vocab.known[c.dataset.k]; save(); var kk = list.filter(function (v) { return S.vocab.known[vkey(v)]; }).length; $('#vcount').textContent = list.length + ' words' + (kk ? ' (' + kk + ' known)' : ''); } };
    } else if (V.mode === 'flash') {
      if (!list.length) { body.innerHTML = '<p>No words match.</p>'; return; }
      if (V.fi >= list.length) V.fi = 0;
      var v = list[V.fi], k = vkey(v);
      body.innerHTML = '<div class="flash"><div class="pos">Card ' + (V.fi + 1) + ' of ' + list.length + ' &middot; click the card to flip</div>' +
        '<div class="fcard" id="fc">' + (V.flip
          ? '<div><div class="big my">' + esc(v.my) + '</div><div class="sub">' + (v.x ? esc(v.x) : '') + (v.ex ? '<br><i>' + esc(v.ex) + '</i>' : '') + '</div></div>'
          : '<div><div class="big">' + esc(v.w) + '</div><div class="sub">' + esc(v.pos || '') + '</div></div>') + '</div>' +
        '<div class="fnav"><button class="btn" id="fp">' + ic('left') + ' Back</button><button class="btn" id="ff">Flip</button>' +
        '<button class="btn' + (S.vocab.known[k] ? ' solid' : '') + '" id="fk">' + ic('check') + ' ' + (S.vocab.known[k] ? 'Known' : 'Mark known') + '</button>' +
        '<button class="btn" id="fn">Next ' + ic('arrow') + '</button><button class="btn" id="fs">' + ic('redo') + ' Shuffle</button></div></div>';
      $('#fc').onclick = $('#ff').onclick = function () { V.flip = !V.flip; vRender(); };
      $('#fp').onclick = function () { V.fi = (V.fi - 1 + list.length) % list.length; V.flip = false; vRender(); };
      $('#fn').onclick = function () { V.fi = (V.fi + 1) % list.length; V.flip = false; vRender(); };
      $('#fk').onclick = function () { if (S.vocab.known[k]) delete S.vocab.known[k]; else S.vocab.known[k] = 1; save(); vRender(); };
      $('#fs').onclick = function () { V.fi = Math.floor(Math.random() * list.length); V.flip = false; vRender(); };
      hydrate(body);
    } else {
      vQuiz(list, body);
    }
    hydrate(body);
  }
  function vQuiz(list, body) {
    if (list.length < 4) { body.innerHTML = '<p>Need at least 4 words in the current filter to run a quiz.</p>'; return; }
    var q = V.quiz;
    if (!q) {
      var items = shuffle(list).slice(0, 10).map(function (v) {
        var wrong = shuffle(VOCAB.filter(function (x) { return x.my !== v.my && x.w !== v.w; })).slice(0, 3).map(function (x) { return x.my; });
        return { v: v, opts: shuffle([v.my].concat(wrong)), pick: null };
      });
      q = V.quiz = { items: items, i: 0 };
    }
    if (q.i >= q.items.length) {
      var s = q.items.filter(function (it) { return it.pick !== null && it.opts[it.pick] === it.v.my; }).length;
      S.vq.best = Math.max(S.vq.best || 0, s); save();
      body.innerHTML = '<div class="card"><h2>Quiz result</h2><div class="in"><p style="font-size:34px;font-weight:800;color:var(--red);margin:0">' + s + ' / ' + q.items.length + '</p><p>Best score so far: ' + S.vq.best + '</p>' +
        '<button class="btn solid" id="qa">' + ic('redo') + ' New quiz</button></div></div>';
      $('#qa').onclick = function () { V.quiz = null; vRender(); };
      return;
    }
    var it = q.items[q.i], done = it.pick !== null;
    body.innerHTML = '<div class="card" style="max-width:640px"><h2>Question ' + (q.i + 1) + ' of ' + q.items.length + '</h2><div class="in">' +
      '<p style="font-size:24px;font-weight:800;margin:0 0 12px">' + esc(it.v.w) + ' <span class="pos">' + esc(it.v.pos || '') + '</span></p>' +
      it.opts.map(function (o, i) { var cls = ''; if (done) { if (o === it.v.my) cls = 'ok'; else if (it.pick === i) cls = 'bad'; } return '<button class="opt my ' + cls + '" data-k="' + i + '"' + (done ? ' disabled' : '') + '><span class="k">' + L(i) + '</span><span>' + esc(o) + '</span></button>'; }).join('') +
      (done ? '<button class="btn solid" id="qn">' + (q.i === q.items.length - 1 ? 'See result' : 'Next') + ' ' + ic('arrow') + '</button>' : '') + '</div></div>';
    $$('.opt', body).forEach(function (b) { b.onclick = function () { it.pick = +b.dataset.k; vRender(); }; });
    var nx = $('#qn'); if (nx) nx.onclick = function () { q.i++; vRender(); };
  }

  /* ---------- READING ---------- */
  function viewReading(r) {
    var p = READING.filter(function (x) { return x.id === r.id; })[0];
    if (!p) {
      app.innerHTML = '<h1>Reading practice</h1><p class="lead">Read the passage, answer the questions, then study the explanation. Each passage has a glossary with Burmese and a short Burmese summary.</p><div class="grid c2">' +
        READING.map(function (x) {
          var a = S.reading[x.id] || {}, d = countAnswered(a), ok = x.questions.filter(function (q, i) { return a[i] === q.a; }).length;
          return '<a class="tile" href="#/reading/' + x.id + '"><span class="ico">' + ic('read') + '</span><b>' + esc(x.title) + '</b><small>' + esc(x.level) + ' &middot; about ' + x.minutes + ' min &middot; ' + x.questions.length + ' questions</small>' +
            '<small>' + esc(x.src) + '</small><small>' + d + ' / ' + x.questions.length + ' answered' + (d ? ', ' + ok + ' correct' : '') + '</small></a>';
        }).join('') + '</div>';
      return;
    }
    var idx = READING.indexOf(p);
    app.innerHTML = '<p><a href="#/reading">&larr; All passages</a></p><h1>' + esc(p.title) + '</h1><p class="srcline">' + esc(p.level) + ' &middot; ' + esc(p.src) + '</p>' +
      '<div class="read"><div><div class="passage">' + p.paras.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' +
      (p.note ? '<p class="srcline">' + ic('info') + ' ' + esc(p.note) + '</p>' : '') +
      '<div class="card" style="margin-top:14px"><h2>Burmese summary</h2><div class="in my">' + esc(p.gist_my) + '</div></div>' +
      '<div class="card" style="margin-top:14px"><h2>Glossary</h2><div class="in scroll"><table class="t"><thead><tr><th>Word</th><th>Meaning</th><th>Burmese</th></tr></thead><tbody>' +
      p.glossary.map(function (g) { return '<tr><td><b>' + esc(g[0]) + '</b></td><td>' + esc(g[1]) + '</td><td class="my">' + esc(g[2]) + '</td></tr>'; }).join('') + '</tbody></table></div></div></div>' +
      '<div class="qpane"><div class="card"><h2>Questions <span id="rscore" class="pill" style="float:right;text-transform:none"></span></h2><div class="in" id="rq"></div></div>' +
      '<div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap"><button class="btn" id="rreset">' + ic('redo') + ' Reset answers</button>' +
      (READING[idx + 1] ? '<a class="btn solid" href="#/reading/' + READING[idx + 1].id + '">Next passage ' + ic('arrow') + '</a>' : '') + '</div></div></div>';
    var ans = S.reading[p.id] = S.reading[p.id] || {};
    function draw() {
      $('#rq').innerHTML = p.questions.map(function (q, qi) {
        var a = ans[qi], done = a != null;
        return '<div class="qi" data-q="' + qi + '"><div class="qn"><span class="num">' + (qi + 1) + '</span><p>' + esc(q.q) + '</p></div>' +
          q.opts.map(function (o, i) { var cls = ''; if (done) { if (i === q.a) cls = 'ok'; else if (i === a) cls = 'bad'; } return option(i, o, cls, done); }).join('') +
          (done ? whyBox(q.why) : '') + '</div>';
      }).join('');
      var d = countAnswered(ans), ok = p.questions.filter(function (q, i) { return ans[i] === q.a; }).length;
      $('#rscore').textContent = d + ' / ' + p.questions.length + ' answered, ' + ok + ' correct';
      $('#rq').onclick = function (e) {
        var b = e.target.closest('.opt'); if (!b || b.disabled) return;
        var qi = +b.closest('.qi').dataset.q; ans[qi] = +b.dataset.k; save(); draw();
      };
    }
    draw();
    $('#rreset').onclick = function () { S.reading[p.id] = {}; ans = S.reading[p.id]; save(); draw(); };
  }

  /* ---------- LISTENING (speech synthesis) ---------- */
  var speaking = false;
  function stopSpeak() { speaking = false; try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {} $$('.pbtn').forEach(function (b) { b.innerHTML = ic('play') + ' Play'; }); }
  function pickVoices() {
    var vs = []; try { vs = speechSynthesis.getVoices().filter(function (v) { return /^en/i.test(v.lang); }); } catch (e) {}
    return vs;
  }
  function speak(lines, rate, twice, btn) {
    if (!('speechSynthesis' in window)) { alert('Your browser does not support read-aloud (speech synthesis). Use the script instead.'); return; }
    stopSpeak(); speaking = true; btn.innerHTML = ic('stop') + ' Stop';
    var voices = pickVoices(), speakers = [], queue = [];
    lines.forEach(function (l) { var t = l.t.replace(/\(blank\)/g, '').replace(/\s+/g, ' ').trim(); if (t) queue.push({ sp: l.sp, t: t }); });
    var seq = queue.slice(); if (twice) seq = seq.concat([{ pause: 1500 }], queue);
    var i = 0;
    (function next() {
      if (!speaking) return;
      if (i >= seq.length) { stopSpeak(); return; }
      var item = seq[i++];
      if (item.pause) { setTimeout(next, item.pause); return; }
      var u = new SpeechSynthesisUtterance(item.t);
      var si = speakers.indexOf(item.sp); if (si < 0) { speakers.push(item.sp); si = speakers.length - 1; }
      u.lang = 'en-US'; u.rate = rate;
      var female = /woman|deborah|she/i.test(item.sp);
      if (voices.length) u.voice = voices[(voices.length > 1 ? si : 0) % voices.length];
      u.pitch = voices.length > 1 ? 1 : (si % 2 ? 1.25 : 0.85);
      if (female) u.pitch = 1.2;
      u.onend = function () { setTimeout(next, 250); };
      u.onerror = function () { stopSpeak(); };
      speechSynthesis.speak(u);
    })();
  }
  function viewListening() {
    try { if (window.speechSynthesis) speechSynthesis.getVoices(); } catch (e) {}
    app.innerHTML = '<h1>Listening practice</h1><p class="lead">Press <b>Play</b> to hear the script read aloud by your browser (the real exam plays each recording twice). Answer first, then open the script to check. ' +
      'Items whose scripts were not printed in the PDF were written to match the printed questions and are labelled.</p><div id="lbody"></div>';
    var box = $('#lbody');
    box.innerHTML = LISTENING.map(function (it) {
      var h = '<div class="card" style="margin-bottom:16px" id="it-' + it.id + '"><h2>' + esc(it.kind) + ': ' + esc(it.title) + '</h2><div class="in">' +
        '<p class="srcline">Source: ' + esc(it.src) + (it.scriptNote ? ' &middot; ' + esc(it.scriptNote) : '') + '</p>';
      if (it.lines) {
        h += '<div class="player"><button class="btn solid pbtn" data-a="play" data-id="' + it.id + '">' + ic('play') + ' Play</button>' +
          '<label>Speed <select class="rate"><option value="0.8">Slow</option><option value="0.95" selected>Normal</option><option value="1.1">Fast</option></select></label>' +
          '<label><input type="checkbox" class="twice" checked> Play twice</label>' +
          '<button class="btn sm" data-a="script" data-id="' + it.id + '">' + ic('eye') + ' Show script</button></div>' +
          '<div class="script hidden" id="sc-' + it.id + '">' + it.lines.map(function (l) { return '<p><b>' + esc(l.sp) + ':</b> ' + esc(l.t) + '</p>'; }).join('') + '</div>';
      }
      if (it.questions) {
        var a = S.listen[it.id] || {};
        h += it.questions.map(function (q, qi) {
          var d = a[qi] != null;
          return '<div class="qi" data-it="' + it.id + '" data-q="' + qi + '"><div class="qn"><span class="num">' + (qi + 1) + '</span><p>' + esc(q.q) + '</p></div>' +
            q.opts.map(function (o, i) { var cls = ''; if (d) { if (i === q.a) cls = 'ok'; else if (i === a[qi]) cls = 'bad'; } return option(i, o, cls, d); }).join('') + (d ? whyBox(q.why) : '') + '</div>';
        }).join('');
      }
      if (it.fill) {
        var f = S.fill[it.id] || {};
        h += it.fill.map(function (q, qi) {
          var v = f[qi] == null ? '' : f[qi], chk = f['c' + qi];
          return '<div class="fill" data-it="' + it.id + '" data-q="' + qi + '"><span style="min-width:28px"><b>' + (qi + 1) + '.</b></span><span>' + esc(q.q.replace('____', '')) + '</span>' +
            '<input type="text" value="' + esc(v) + '" placeholder="no more than two words" class="' + (chk === 1 ? 'ok' : chk === 0 ? 'bad' : '') + '">' +
            (chk === 0 ? '<span class="pill bad">Answer: ' + esc(q.a[0]) + '</span>' : chk === 1 ? '<span class="pill ok">Correct</span>' : '') + '</div>';
        }).join('') + '<button class="btn" data-a="check" data-id="' + it.id + '">' + ic('check') + ' Check answers</button> <button class="btn" data-a="clear" data-id="' + it.id + '">' + ic('redo') + ' Clear</button>';
      }
      if (it.dialogues) {
        var da = S.listen[it.id] || {};
        h += it.dialogues.map(function (d, di) {
          var done = da[d.id] != null;
          return '<div class="qi" data-it="' + it.id + '" data-d="' + d.id + '"><p style="margin:0 0 6px"><b>' + esc(d.title) + '</b> ' +
            '<button class="btn sm pbtn" data-a="playd" data-id="' + it.id + '" data-d="' + d.id + '">' + ic('play') + ' Play</button></p>' +
            '<div class="script">' + d.lines.map(function (l) { return '<p><b>' + esc(l.sp) + ':</b> ' + esc(l.t.replace('(blank)', '____')) + '</p>'; }).join('') + '</div>' +
            '<div class="qn"><p>' + esc(d.q) + '</p></div>' +
            d.opts.map(function (o, i) { var cls = ''; if (done) { if (i === d.a) cls = 'ok'; else if (i === da[d.id]) cls = 'bad'; } return option(i, o, cls, done); }).join('') + (done ? whyBox(d.why) : '') + '</div>';
        }).join('');
      }
      return h + '<div style="margin-top:10px"><button class="btn sm" data-a="reset" data-id="' + it.id + '">' + ic('redo') + ' Reset this item</button></div></div></div>';
    }).join('');
    hydrate(box);
    box.onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var a = b.dataset.a, id = b.dataset.id, it = LISTENING.filter(function (x) { return x.id === id; })[0];
      if (a === 'play') {
        if (speaking) { stopSpeak(); return; }
        var card = b.closest('.card');
        speak(it.lines, +$('.rate', card).value, $('.twice', card).checked, b);
      } else if (a === 'playd') {
        if (speaking) { stopSpeak(); return; }
        var d = it.dialogues.filter(function (x) { return x.id === b.dataset.d; })[0];
        speak(d.lines, 0.95, false, b);
      } else if (a === 'script') {
        var sc = $('#sc-' + id); sc.classList.toggle('hidden'); b.innerHTML = ic('eye') + (sc.classList.contains('hidden') ? ' Show script' : ' Hide script');
      } else if (a === 'check') {
        var f = S.fill[id] = S.fill[id] || {};
        $$('.fill', $('#it-' + id)).forEach(function (row) {
          var qi = +row.dataset.q, val = $('input', row).value.trim().toLowerCase().replace(/[.]$/, '');
          f[qi] = $('input', row).value;
          f['c' + qi] = it.fill[qi].a.indexOf(val) >= 0 ? 1 : 0;
        });
        save(); viewListening();
        setTimeout(function () { var el = $('#it-' + id); if (el) el.scrollIntoView({ block: 'center' }); }, 30);
      } else if (a === 'clear') { S.fill[id] = {}; save(); viewListening(); }
      else if (a === 'reset') { delete S.listen[id]; delete S.fill[id]; save(); viewListening(); }
      else if (b.classList.contains('opt') && !b.disabled) {
        var row = b.closest('[data-it]'), st = S.listen[row.dataset.it] = S.listen[row.dataset.it] || {};
        if (row.dataset.d) st[row.dataset.d] = +b.dataset.k; else st[+row.dataset.q] = +b.dataset.k;
        var y = window.scrollY; save(); viewListening(); window.scrollTo(0, y);
      }
    };
  }

  /* ---------- PRACTICE ---------- */
  var PF = null;
  function pFiltered() {
    var f = S.practice.f;
    var list = PRACTICE.filter(function (p) { return (f.src === 'all' || p.src === f.src) && (f.type === 'all' || p.type === f.type) && (f.topic === 'all' || p.topic === f.topic); });
    var ord = S.practice.order;
    if (ord) { var pos = {}; ord.forEach(function (id, i) { pos[id] = i; }); list = list.slice().sort(function (a, b) { return (pos[a.id] || 0) - (pos[b.id] || 0); }); }
    return list;
  }
  function viewPractice(r) {
    var f = S.practice.f;
    if (r.q.topic) { f.topic = r.q.topic; f.type = 'all'; f.src = 'all'; S.practice.cur = 0; }
    if (r.q.type) { f.type = r.q.type; f.topic = 'all'; f.src = 'all'; S.practice.cur = 0; }
    var uniq = function (k) { return PRACTICE.map(function (p) { return p[k]; }).filter(function (v, i, a) { return a.indexOf(v) === i; }); };
    var sel = function (id, label, arr, val, fmt) { return '<label>' + label + ' <select id="' + id + '"><option value="all">All</option>' + arr.map(function (v) { return '<option value="' + esc(v) + '"' + (v === val ? ' selected' : '') + '>' + esc(fmt ? fmt(v) : v) + '</option>'; }).join('') + '</select></label>'; };
    app.innerHTML = '<h1>Grammar practice</h1><p class="lead">All practice items from the Grammar sheet, the exam guide and Simulation 001. Answer to see the explanation. Items from the guide and the simulation follow the printed key; items from the Grammar sheet (no key printed) were worked out and explained.</p>' +
      '<div class="tools">' + sel('pfs', 'Source', Object.keys(PRACTICE_SRC), f.src, function (v) { return PRACTICE_SRC[v]; }) + sel('pft', 'Type', uniq('type'), f.type) + sel('pfp', 'Topic', uniq('topic'), f.topic) +
      '<span class="pill" id="pcount"></span><button class="btn sm" id="pmix">' + ic('redo') + ' ' + (S.practice.order ? 'Original order' : 'Mix order (combined practice)') + '</button>' +
      '<button class="btn sm" id="preset">' + ic('trash') + ' Reset answers</button></div>' +
      '<details class="card" style="margin-bottom:14px"><summary class="hd" style="cursor:pointer">How to solve combined sentences: step by step (English + မြန်မာ)</summary><div class="in scroll"><table class="t"><thead><tr><th>Step</th><th>English</th><th>မြန်မာ</th></tr></thead><tbody>' +
      GRAMMAR_METHOD.map(function (m, i) { return '<tr><td><b>' + (i + 1) + '</b></td><td>' + esc(m[0]) + '</td><td class="my">' + esc(m[1]) + '</td></tr>'; }).join('') +
      '</tbody></table><p style="margin:10px 0 0"><a href="#/grammar/combine">Open the worked examples</a></p></div></details>' +
      '<div class="split" style="grid-template-columns:1fr 280px"><div id="pq"></div><aside class="card"><h2>Question palette</h2><div class="in"><div class="pal" id="ppal"></div>' +
      '<p class="srcline" style="margin-top:10px" id="psum"></p></div></aside></div>';
    var redraw = function () { S.practice.cur = 0; save(); draw(); };
    $('#pfs').onchange = function () { f.src = this.value; redraw(); };
    $('#pft').onchange = function () { f.type = this.value; redraw(); };
    $('#pfp').onchange = function () { f.topic = this.value; redraw(); };
    $('#pmix').onclick = function () {
      if (S.practice.order) delete S.practice.order; else S.practice.order = shuffle(PRACTICE.map(function (p) { return p.id; }));
      S.practice.cur = 0; save(); viewPractice({ q: {} }); hydrate(app);
    };
    $('#preset').onclick = function () { if (confirm('Clear all saved practice answers?')) { S.practice.ans = {}; save(); draw(); } };
    function draw() {
      var list = pFiltered(), cur = Math.min(S.practice.cur || 0, Math.max(list.length - 1, 0));
      var ans = S.practice.ans;
      var done = list.filter(function (p) { return ans[p.id] != null; }).length, ok = list.filter(function (p) { return ans[p.id] === p.a; }).length;
      $('#pcount').textContent = list.length + ' items';
      $('#psum').textContent = done + ' answered, ' + ok + ' correct' + (done ? ' (' + Math.round(ok / done * 100) + '%)' : '');
      if (!list.length) { $('#pq').innerHTML = '<p>No items match these filters.</p>'; $('#ppal').innerHTML = ''; return; }
      var p = list[cur], a = ans[p.id], d = a != null;
      $('#pq').innerHTML = '<div class="card"><h2>Item ' + (cur + 1) + ' of ' + list.length + '</h2><div class="in">' +
        '<p><span class="tag">' + esc(PRACTICE_SRC[p.src].split(' (')[0]) + '</span><span class="tag">' + esc(p.type) + '</span><span class="tag">' + esc(p.topic) + '</span></p>' +
        '<div class="qn"><span class="num">' + (cur + 1) + '</span><p>' + esc(p.q) + '</p></div>' +
        p.opts.map(function (o, i) { var cls = ''; if (d) { if (i === p.a) cls = 'ok'; else if (i === a) cls = 'bad'; } return option(i, o, cls, d); }).join('') +
        (d ? whyBox(p.why, p.note) : '') +
        '<div style="display:flex;gap:10px;justify-content:space-between;margin-top:12px"><button class="btn" id="pp"' + (cur === 0 ? ' disabled' : '') + '>' + ic('left') + ' Previous</button>' +
        '<button class="btn solid" id="pn"' + (cur >= list.length - 1 ? ' disabled' : '') + '>Next ' + ic('arrow') + '</button></div></div></div>';
      $('#ppal').innerHTML = list.map(function (q, i) { var s = ans[q.id]; return '<button data-i="' + i + '" class="' + (s == null ? '' : s === q.a ? 'ok' : 'bad') + (i === cur ? ' cur' : '') + '">' + (i + 1) + '</button>'; }).join('');
      $('#pq').onclick = function (e) {
        var b = e.target.closest('.opt');
        if (b && !b.disabled) { ans[p.id] = +b.dataset.k; save(); draw(); return; }
        if (e.target.closest('#pp')) { S.practice.cur = cur - 1; save(); draw(); }
        if (e.target.closest('#pn')) { S.practice.cur = cur + 1; save(); draw(); }
        hydrate($('#pq'));
      };
      $('#ppal').onclick = function (e) { var b = e.target.closest('button'); if (b) { S.practice.cur = +b.dataset.i; save(); draw(); } };
      hydrate($('#pq'));
    }
    draw();
  }

  /* ---------- PREPARE TEST (links) ---------- */
  function viewPrepare() {
    var mine = S.links = S.links || [];
    app.innerHTML = '<h1>Prepare test</h1><p class="lead">Links to online tests and ready-made Google searches. They open in a new tab. ' +
      'Add your own links below (for example a Google Form quiz that a teacher or a friend shared); they are saved in this browser.</p>' +
      '<div class="card" style="margin-bottom:16px"><h2>Add your own test link</h2><div class="in"><div class="tools" style="margin:0">' +
      '<input type="text" id="lt" placeholder="Title (e.g. Grammar quiz week 3)" style="flex:1;min-width:200px">' +
      '<input type="url" id="lu" placeholder="https://forms.gle/... or any link" style="flex:2;min-width:240px">' +
      '<button class="btn solid" id="ladd">' + ic('plus') + ' Add</button></div><p class="srcline" id="lmsg" style="margin:8px 0 0"></p></div></div>' +
      '<div id="lmine"></div>' +
      PREP_LINKS.map(function (g) {
        return '<div class="card" style="margin-bottom:16px"><h2>' + esc(g.g) + '</h2><div class="in"><div class="grid c2">' +
          g.items.map(function (it) {
            return '<a class="tile" href="' + esc(it.u) + '" target="_blank" rel="noopener"><span class="ico">' + ic('link') + '</span><b>' + esc(it.t) + '</b><small>' + esc(it.n) + '</small><small style="word-break:break-all">' + esc(it.u.replace(/^https?:\/\//, '').slice(0, 70)) + '</small></a>';
          }).join('') + '</div></div></div>';
      }).join('') +
      '<p class="srcline">These links were collected with Google search. Websites change, so if a page has moved, use the Google search links to find a similar test.</p>';
    function drawMine() {
      $('#lmine').innerHTML = mine.length ? '<div class="card" style="margin-bottom:16px"><h2>My links</h2><div class="in"><div class="grid c2">' + mine.map(function (m, i) {
        return '<div class="tile"><span class="ico">' + ic('link') + '</span><b>' + esc(m.t) + '</b><small style="word-break:break-all">' + esc(m.u) + '</small>' +
          '<div style="display:flex;gap:8px;margin-top:6px"><a class="btn sm solid" href="' + esc(m.u) + '" target="_blank" rel="noopener">Open ' + ic('arrow') + '</a>' +
          '<button class="btn sm" data-del="' + i + '">' + ic('trash') + ' Remove</button></div></div>';
      }).join('') + '</div></div></div>' : '';
    }
    drawMine();
    $('#lmine').onclick = function (e) { var b = e.target.closest('[data-del]'); if (b) { mine.splice(+b.dataset.del, 1); save(); drawMine(); } };
    $('#ladd').onclick = function () {
      var t = $('#lt').value.trim(), u = $('#lu').value.trim();
      if (!/^https?:\/\/\S+$/i.test(u)) { $('#lmsg').textContent = 'Please paste a full link that starts with http:// or https://'; return; }
      mine.push({ t: t || u, u: u }); save(); $('#lt').value = ''; $('#lu').value = ''; $('#lmsg').textContent = 'Added.'; drawMine();
    };
  }

  /* ---------- boot ---------- */
  hydrate(document);
  route();
})();


