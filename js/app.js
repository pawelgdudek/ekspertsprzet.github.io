(function () {
  var root = document.body.getAttribute("data-root") || "";
  var page = document.body.getAttribute("data-page");
  function $(s) { return document.querySelector(s); }
  function zl(v) { return v + " zł"; }
  function val(v) { return v === "DO_UZUPELNIENIA" || /^DO_UZUPELNIENIA/.test(v) ? '<span class="todo">' + v.replace("DO_UZUPELNIENIA", "do uzupełnienia") + "</span>" : v; }
  function link(p) { return root + "produkty/" + p.id + ".html"; }
  function ico(n) { return '<span class="mi">' + n + "</span>"; }
  function min(p) { var c = p.warianty ? p.warianty[0].ceny : p.ceny; return c.p4; }

  /* ---------- nagłówek / stopka ---------- */
  var nav = [["index.html", "Strona główna", "home"], ["katalog.html", "Katalog sprzętu", "katalog"], ["cennik.html", "Cennik i akcesoria", "cennik"], ["index.html#kontakt", "Kontakt", "kontakt"]];
  var h = $("#site-header");
  if (h) {
    h.innerHTML = '<div class="wrap hdr"><a class="logo" href="' + root + 'index.html"><span class="logo-ic">' + ico("construction") + '</span><span><b>EKSPERT SPRZĘT</b><small>Wypożyczalnia sprzętu budowlanego</small></span></a>' +
      '<button class="burger" aria-label="Menu" aria-expanded="false">' + ico("menu") + '</button><nav class="nav">' +
      nav.map(function (n) { return '<a href="' + root + n[0] + '"' + (n[2] === page ? ' class="active"' : "") + ">" + n[1] + "</a>"; }).join("") +
      '</nav><a class="btn btn-red hdr-call" href="' + FIRMA.telefonLink + '">' + ico("call") + " Zadzwoń: " + FIRMA.telefon + "</a></div>";
    var bg = h.querySelector(".burger"); bg.onclick = function () { var o = h.classList.toggle("open"); document.body.classList.toggle("menu-open", o); bg.setAttribute("aria-expanded", o); bg.innerHTML = ico(o ? "close" : "menu"); };
  }
  var f = $("#site-footer");
  if (f) {
    f.innerHTML = '<div class="wrap ftr"><div><h3>EKSPERT SPRZĘT</h3><p>Wypożyczalnia sprzętu budowlanego • ' + FIRMA.wlasciciel + "<br>" + FIRMA.adres + ' • tel. <a class=\"inl\" href=\"' + FIRMA.telefonLink + '\">' + FIRMA.telefon + '</a> • <a class=\"inl\" href=\"mailto:' + FIRMA.email + '\">' + FIRMA.email + "</a></p><p class=small>© " + new Date().getFullYear() + " EKSPERT SPRZĘT " + FIRMA.wlasciciel + ". Wszelkie prawa zastrzeżone.</p></div>" +
      '<div><h4>Nawigacja</h4>' + nav.map(function (n) { return '<a href="' + root + n[0] + '">' + n[1] + "</a>"; }).join("") + "</div>" +
      '<div><h4>Infolinia i rezerwacje</h4><div class="ftr-box"><small>Telefon kontaktowy:</small><a class="big" href="' + FIRMA.telefonLink + '">' + FIRMA.telefon + '</a><small>E-mail: <a href="mailto:' + FIRMA.email + '">' + FIRMA.email + "</a></small></div></div></div>";
  }

  /* ---------- karta produktu ---------- */
  function card(p) {
    var specs = p.parametry.filter(function (s) { return !/DO_UZUPELNIENIA/.test(s[1]); }).slice(0, 3);
    var price;
    if (p.warianty) {
      price = '<div class="var-mini">' + p.warianty.map(function (w) {
        return '<div><div class="vm-h"><b>' + w.etykieta + "</b><span>Kaucja: " + zl(w.kaucja[0][1]) + "</span></div><dl><dt>1 dzień:</dt><dd>" + zl(w.ceny.p1) + "</dd><dt>2–3 dni:</dt><dd>" + zl(w.ceny.p23) + "/d</dd><dt>&gt; 3 dni:</dt><dd>" + zl(w.ceny.p4) + "/d</dd></dl></div>";
      }).join("") + "</div>";
    } else {
      price = '<div class="tiers"><div><small>1 dzień</small><b>' + zl(p.ceny.p1) + '</b></div><div><small>2–3 dni</small><b>' + p.ceny.p23 + ' <i>zł/d</i></b></div><div><small>&gt; 3 dni</small><b>' + p.ceny.p4 + ' <i>zł/d</i></b></div></div>' +
        p.kaucja.map(function (k) { return '<div class="dep"><span>' + k[0] + ":</span><b>" + zl(k[1]) + "</b></div>"; }).join("");
    }
    return '<article class="card" data-cat="' + p.kategoria + '"><a href="' + link(p) + '" class="card-img"><img loading="lazy" src="' + root + "img/" + p.img + '" alt="' + p.nazwa + " " + p.model + '"><span class="chip">' + p.tag + '</span><span class="lp">LP. ' + ("0" + p.lp).slice(-2) + "</span></a>" +
      '<div class="card-body"><h3><a href="' + link(p) + '">' + p.nazwa + '</a></h3><p class="model">' + p.model + "</p>" +
      (page === "home" ? '<dl class="kv">' + specs.map(function (s) { return "<dt>" + s[0] + ":</dt><dd>" + s[1] + "</dd>"; }).join("") + '</dl><div class="card-foot"><div><small>Cena najmu:</small><b class="from">od ' + zl(min(p)) + '</b> <small>/ dzień</small></div><a class="btn btn-dark" href="' + link(p) + '">Szczegóły</a></div>'
        : price + '<a class="btn btn-red btn-block" href="' + link(p) + '">Szczegóły i cennik ' + ico("arrow_forward") + "</a>") +
      "</div></article>";
  }

  /* ---------- mobilny przycisk "Zadzwoń" ---------- */
  var fab = document.createElement("a");
  fab.className = "fab-call"; fab.href = FIRMA.telefonLink; fab.setAttribute("aria-label", "Zadzwoń " + FIRMA.telefon);
  fab.innerHTML = ico("call") + "<span>Zadzwoń, zapytaj, zarezerwuj!</span><b>" + FIRMA.telefon + "</b>";
  document.body.appendChild(fab);
  window.addEventListener("scroll", function () { document.body.classList.toggle("scrolled", window.scrollY > 10); }, { passive: true });
  if (h) h.querySelectorAll(".nav a").forEach(function (x) { x.addEventListener("click", function () { h.classList.remove("open"); document.body.classList.remove("menu-open"); }); });

  /* ---------- strona główna ---------- */
  if (page === "home") { $("#popular").innerHTML = PRODUKTY.map(card).join(""); }

  /* ---------- katalog ---------- */
  if (page === "katalog") {
    var grid = $("#catalog"), filt = $("#filters"), tbl = $("#table");
    filt.innerHTML = '<button class="f active" data-c="all">Wszystkie (' + PRODUKTY.length + ")</button>" + KATEGORIE.map(function (k) { return '<button class="f" data-c="' + k.id + '">' + k.nazwa + "</button>"; }).join("");
    grid.innerHTML = PRODUKTY.map(card).join("");
    var rows = "";
    PRODUKTY.forEach(function (p) {
      var vs = p.warianty || [{ etykieta: "", ceny: p.ceny, kaucja: p.kaucja }];
      vs.forEach(function (w, i) {
        rows += '<tr data-cat="' + p.kategoria + '"' + (i ? ' class="cont"' : '') + '>' + (i === 0 ? '<td class="tlp" rowspan="' + vs.length + '"><span class="lpb">' + p.lp + '</span></td><td class="tname" rowspan="' + vs.length + '"><a href="' + link(p) + '"><b>' + p.nazwa + "</b><br><small>" + p.model + "</small></a></td>" : "") +
          (w.etykieta ? '<td data-l="Wariant"><span class="pill">' + w.etykieta + "</span></td>" : '<td class="nov">–</td>') + '<td data-l="1 dzień">' + zl(w.ceny.p1) + '</td><td data-l="2–3 dni">' + zl(w.ceny.p23) + '/dzień</td><td data-l="Powyżej 3 dni">' + zl(w.ceny.p4) + '/dzień</td><td data-l="Kaucja">' + w.kaucja.map(function (k) { return zl(k[1]) + (w.kaucja.length > 1 ? " <small>" + k[0].replace(/Kaucja \(|\)/g, "") + "</small>" : ""); }).join("<br>") + "</td></tr>";
      });
    });
    tbl.querySelector("tbody").innerHTML = rows;
    filt.onclick = function (e) {
      var c = e.target.getAttribute("data-c"); if (!c) return;
      filt.querySelectorAll(".f").forEach(function (b) { b.classList.toggle("active", b === e.target); });
      document.querySelectorAll("[data-cat]").forEach(function (el) { el.style.display = c === "all" || el.getAttribute("data-cat") === c ? "" : "none"; });
    };
    document.querySelectorAll(".view button").forEach(function (b) {
      b.onclick = function () {
        document.querySelectorAll(".view button").forEach(function (x) { x.classList.toggle("active", x === b); });
        var t = b.getAttribute("data-v") === "table"; grid.hidden = t; tbl.hidden = !t;
      };
    });
  }

  /* ---------- cennik akcesoriów ---------- */
  if (page === "cennik") {
    $("#acc").innerHTML = AKCESORIA.map(function (a) {
      return '<section class="acc"><div class="acc-h"><span class="acc-img"><img loading="lazy" src="' + root + 'img/akcesoria/' + a.img + '" alt="' + a.tytul + '" width="400" height="400"></span><h3>' + a.tytul + "</h3></div><p>" + a.opis + "</p>" + (a.pozycje.length ? "<ul>" + a.pozycje.map(function (x) { return "<li><span>" + x[0] + "</span><b>" + x[1] + "</b></li>"; }).join("") + "</ul>" : "") + "</section>";
    }).join("");
  }

  /* ---------- strona produktu ---------- */
  if (page === "produkt") {
    var id = document.body.getAttribute("data-product");
    var p = PRODUKTY.filter(function (x) { return x.id === id; })[0];
    if (!p) { $("#product").innerHTML = "<p>Nie znaleziono produktu.</p>"; return; }
    document.title = p.nazwa + " " + p.model + " – wynajem | EKSPERT SPRZĘT";
    var cur = p.warianty ? p.warianty[0] : p;
    var hasUses = p.zastosowanie.length > 0 || (p.warianty || []).some(function (w) { return w.zastosowanie && w.zastosowanie.length; });
    var html = '<nav class="crumbs"><a href="' + root + 'index.html">Strona główna</a> › <a href="' + root + 'katalog.html">Katalog sprzętu</a> › <span>' + p.nazwa + "</span></nav>" +
      '<div class="pgrid"><div class="gallery"><div class="main-img"><img id="pimg" src="' + root + "img/" + cur.img + '" alt="' + p.nazwa + '"><span class="chip">' + p.tag + "</span></div>" +
      (p.warianty ? '<div class="thumbs">' + p.warianty.map(function (w, i) { return '<button data-i="' + i + '"' + (i ? "" : ' class="active"') + '><img src="' + root + "img/" + w.img + '" alt=""><span>' + w.nazwa + "</span></button>"; }).join("") + "</div>" : "") +
      '<div class="ready">' + ico("verified") + "<div><b>Sprawdzony sprzęt</b><small>Szybki odbiór i zwrot • Elastyczne warunki najmu</small></div></div></div>" +
      '<div><div class="badges"><span class="b-dark">LP. ' + ("0" + p.lp).slice(-2) + '</span></div><h1>' + p.nazwa + "<br><span>" + p.model + "</span></h1><p class=lead>" + p.opis + "</p>" +
      '<div class="pricebox"><div class="pb-h">' + ico("payments") + " <b>Cennik wynajmu sprzętu</b><small>Ceny brutto (z VAT)</small></div>" +
      (p.warianty ? '<div class="variants" role="radiogroup" aria-label="Wybierz wariant">' + p.warianty.map(function (w, i) { return '<label><input type="radio" name="v" value="' + i + '"' + (i ? "" : " checked") + "><span><b>" + w.nazwa + "</b><small>od " + zl(w.ceny.p4) + " / dzień</small></span></label>"; }).join("") + '</div><p id="vdesc" class="vdesc"></p>' : "") +
      '<div class="tiers big" id="tiers"></div><div id="deps"></div>' +
      '<div class="reserve"><div><a href="' + FIRMA.telefonLink + '" style="text-decoration:none"><b>' + ico("phone_in_talk") + " Zadzwoń, zapytaj, zarezerwuj!</b></a><small>Rezerwacja telefoniczna.</small></div><a class=\"btn btn-red\" href=\"" + FIRMA.telefonLink + '">' + ico("call") + " " + FIRMA.telefon + "</a></div></div></div></div>" +
      '<div class="' + (hasUses ? "two" : "") + '"><section class="panel"><h2>' + ico("tune") + ' Parametry techniczne</h2><table class="specs" id="specs"></table></section>' +
      (hasUses ? '<section class="panel" id="usesp"><h2>' + ico("construction") + ' Przeznaczenie</h2><ul class="checks" id="uses">' + p.zastosowanie.map(function (z) { return "<li>" + z + "</li>"; }).join("") + "</ul></section>" : "") + "</div>" +
      (p.akcesoria && p.akcesoria.length ? '<section class="panel"><h2>' + ico("extension") + ' Akcesoria i koszty zużycia</h2><table class="specs">' + p.akcesoria.map(function (a) { return "<tr><td>" + a[0] + "</td><td><b class=red>" + a[1] + "</b></td></tr>"; }).join("") + '</table><p><a class="acc-link" href="' + root + 'cennik.html">' + ico("receipt_long") + ' Pełny cennik akcesoriów i kosztów zużycia →</a></p></section>' : "") +
      '<p><a class="btn btn-dark" href="' + root + 'katalog.html">' + ico("arrow_back") + " Wróć do katalogu</a></p>";
    $("#product").innerHTML = html;
    function show(o) {
      $("#tiers").innerHTML = [["1 dzień", o.ceny.p1, "brutto / doba"], ["2–3 dni", o.ceny.p23, "brutto / dzień"], ["Powyżej 3 dni", o.ceny.p4, "brutto / dzień"]].map(function (t) { return "<div><small>" + t[0] + "</small><b>" + zl(t[1]) + "</b><i>" + t[2] + "</i></div>"; }).join("");
      $("#deps").innerHTML = o.kaucja.map(function (k) { return '<div class="dep"><span>' + ico("lock") + " " + k[0] + ":</span><b>" + zl(k[1]) + "</b></div>"; }).join("");
      if (o.img) $("#pimg").src = root + "img/" + o.img;
      if ($("#vdesc")) $("#vdesc").textContent = o.opis;
      $("#specs").innerHTML = (o.parametry || p.parametry).map(function (s) { return "<tr><td>" + s[0] + "</td><td>" + val(s[1]) + "</td></tr>"; }).join("");
      if ($("#uses")) { var u = o.zastosowanie || p.zastosowanie; $("#usesp").hidden = !u.length; $("#uses").innerHTML = u.map(function (z) { return "<li>" + z + "</li>"; }).join(""); }
    }
    function pick(i) {
      show(p.warianty[i]);
      document.querySelectorAll(".variants input")[i].checked = true;
      document.querySelectorAll(".thumbs button").forEach(function (b, j) { b.classList.toggle("active", j == i); });
      history.replaceState(null, "", "#" + p.warianty[i].id);
    }
    if (p.warianty) {
      document.querySelectorAll(".variants input").forEach(function (r) { r.onchange = function () { pick(+r.value); }; });
      document.querySelectorAll(".thumbs button").forEach(function (b) { b.onclick = function () { pick(+b.getAttribute("data-i")); }; });
      var start = 0; p.warianty.forEach(function (w, i) { if (location.hash === "#" + w.id) start = i; });
      pick(start);
    } else show(p);
  }

  /* ---------- animacje przy przewijaniu ---------- */
  var rm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".card, .feat, .panel, .acc, .warn, .cta-bar, .pricebox, .sec-h");
  if (!rm && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el, k) { el.classList.add("rv"); el.style.transitionDelay = (k % 3) * 70 + "ms"; io.observe(el); });
  }
})();
