"use strict";

// Dosya adları büyük/küçük harf dahil GitHub'daki adlarla aynı olmalıdır.
// Yeni materyaller yalnızca bu sitenin içindeki dosyalara bağlanmalıdır.
const MATERIALS = [
  { section: "books", kind: "textbook", grade: 6, title: "6. Sınıf İngilizce Ders Kitabı", file: "ingilizce-dersi-6sinif-ders-kitabi.pdf", format: "pdf", cover: "English_Year_6.png" },
  { section: "books", kind: "workbook", grade: 6, title: "6. Sınıf İngilizce Çalışma Kitabı", file: "ingilizce-dersi-6sinif-calisma-kitabi.pdf", format: "pdf", cover: "English_Year_6.png" },
  { id: "exam6-deneme-1", section: "exams", grade: 6, title: "Deneme 1", file: "6_Sinif_Deneme_1.pdf", format: "pdf", pages: 2 },
  { id: "exam6-deneme-1-cevap", section: "exams", grade: 6, title: "Deneme 1 - Cevap Anahtarı", file: "6_Sinif_Deneme_1_Cevap_Anahtari.pdf", format: "pdf", pages: 1, answerKey: true },
  { id: "exam6-deneme-2", section: "exams", grade: 6, title: "Deneme 2", file: "6_Sinif_Deneme_2.pdf", format: "pdf", pages: 2 },
  { id: "exam6-deneme-2-cevap", section: "exams", grade: 6, title: "Deneme 2 - Cevap Anahtarı", file: "6_Sinif_Deneme_2_Cevap_Anahtari.pdf", format: "pdf", pages: 1, answerKey: true },
  { id: "exam6-deneme-3", section: "exams", grade: 6, title: "Deneme 3", file: "6_Sinif_Deneme_3.pdf", format: "pdf", pages: 2 },
  { id: "exam6-deneme-3-cevap", section: "exams", grade: 6, title: "Deneme 3 - Cevap Anahtarı", file: "6_Sinif_Deneme_3_Cevap_Anahtari.pdf", format: "pdf", pages: 1, answerKey: true },
  { id: "exam6-mebi-hazirlik", section: "exams", grade: 6, title: "MEBİ - Yazılıya Hazırlanıyorum (1. Dönem, 1. Yazılı)", file: "6_sinif_mebi_ornek_yazili.pdf", format: "pdf", pages: 10, label: "Yazılıya hazırlık" },
  { id: "game6-reading-quest", section: "games", grade: 6, title: "Reading Quest", file: "6th_grade_reading_game.html", format: "game", icon: "📚", summary: "Metinleri oku, okul hayatıyla ilgili görevleri tamamla." },
  { id: "game6-reading-mission", section: "games", grade: 6, title: "Reading Mission", file: "6th_grade_reading_mission_game.html", format: "game", icon: "📖", summary: "Kısa bir metni okuyup soruları yanıtla." },
  { id: "game6-routine-builder", section: "games", grade: 6, title: "Routine Builder", file: "6th_grade_routine_builder_game.html", format: "game", icon: "✍️", summary: "Günlük rutininden İngilizce bir paragraf oluştur." },
  { id: "game6-school-detective", section: "games", grade: 6, title: "School Detective", file: "6th_grade_school_detective_game.html", format: "game", icon: "🔎", summary: "İpuçlarından okul yerlerini ve kulüpleri bul." },
  { id: "game6-vocabulary", section: "games", grade: 6, title: "Vocabulary Challenge", file: "6th_grade_vocabulary_challenge_game.html", format: "game", icon: "🔤", summary: "Okul hayatıyla ilgili kelimeleri pekiştir." },
  { id: "game6-vocabulary-school-life", section: "games", grade: 6, title: "Vocabulary Challenge: School Life", file: "6th_grade_vocabulary_challenge_game2.html", format: "game", icon: "🎯", summary: "Kolay, orta, zor veya karışık seviyeyi seç." },
  { id: "game6-grammar-quest", section: "games", grade: 6, title: "Grammar Quest", file: "6th_grade_grammar_quest_game.html", format: "game", icon: "🧩", summary: "Cümleleri tamamla, dil bilgini dene." },
  { id: "game6-writing-arcade", section: "games", grade: 6, title: "Writing Arcade", file: "6th_grade_writing_game.html", format: "game", icon: "✏️", summary: "Kelime sıralama, cümle tamamlama ve mektup yazma etkinlikleri." },
  {"id": "6-calisma-dilbilgisi-5-dakikada", "section": "worksheets", "grade": 6, "worksheetGroup": "grammar", "title": "5 Dakikada Dilbilgisi", "file": "6_calisma_dilbilgisi_5_dakikada.pdf", "format": "pdf", "pages": 1, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-tekrar-quiz", "section": "worksheets", "grade": 6, "worksheetGroup": "revision", "title": "6. Sınıf Quiz", "file": "6_calisma_tekrar_quiz.pdf", "format": "pdf", "pages": 2, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-tekrar-quiz-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "revision", "title": "6. Sınıf Quiz - Cevap Anahtarı", "file": "6_calisma_tekrar_quiz_cevap.pdf", "format": "pdf", "pages": 1, "label": "Cevap anahtarı", "answerKey": true},
  {"id": "6-calisma-tekrar-genel-1", "section": "worksheets", "grade": 6, "worksheetGroup": "revision", "title": "Genel Tekrar 1", "file": "6_calisma_tekrar_genel_1.pdf", "format": "pdf", "pages": 2, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-tekrar-genel-1-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "revision", "title": "Genel Tekrar 1 - Cevap Anahtarı", "file": "6_calisma_tekrar_genel_1_cevap.pdf", "format": "pdf", "pages": 1, "label": "Cevap anahtarı", "answerKey": true},
  {"id": "6-calisma-tekrar-fasikul", "section": "worksheets", "grade": 6, "worksheetGroup": "revision", "title": "Konu Anlatımlı Alıştırma Fasikülü", "file": "6_calisma_tekrar_fasikul.pdf", "format": "pdf", "pages": 6, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-tekrar-fasikul-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "revision", "title": "Konu Anlatımlı Alıştırma Fasikülü - Cevap Anahtarı", "file": "6_calisma_tekrar_fasikul_cevap.pdf", "format": "pdf", "pages": 2, "label": "Cevap anahtarı", "answerKey": true},
  {"id": "6-calisma-kelime-eslestirme", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6. Sınıf Kelime Eşleştirme Çalışma Kağıdı", "file": "6_calisma_kelime_eslestirme.pdf", "format": "pdf", "pages": 1, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-kelime-eslestirme-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6. Sınıf Kelime Eşleştirme - Cevap Anahtarı", "file": "6_calisma_kelime_eslestirme_cevap.pdf", "format": "pdf", "pages": 1, "label": "Cevap anahtarı", "answerKey": true},
  {"id": "6-calisma-kelime-word-test", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6.1 Word Test", "file": "6_calisma_kelime_word_test.pdf", "format": "pdf", "pages": 1, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-kelime-word-test-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6. Sınıf Word Test - Cevap Anahtarı", "file": "6_calisma_kelime_word_test_cevap.pdf", "format": "pdf", "pages": 1, "label": "Cevap anahtarı", "answerKey": true},
  {"id": "6-calisma-kelime-school-life-listesi", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "School Life - Zenginleştirilmiş Kelime Listesi", "file": "6_calisma_kelime_school_life_listesi.pdf", "format": "pdf", "pages": 2, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-okuma-school-life", "section": "worksheets", "grade": 6, "worksheetGroup": "reading", "title": "School Life - Okuma Çalışması", "file": "6_calisma_okuma_school_life.pdf", "format": "pdf", "pages": 4, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-okuma-school-life-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "reading", "title": "School Life - Okuma Çalışması Cevap Anahtarı", "file": "6_calisma_okuma_school_life_cevap.pdf", "format": "pdf", "pages": 4, "label": "Cevap anahtarı", "answerKey": true}
];

const SECTIONS = {
  books: { title: "Kitaplarım", image: "Kitaplarim.png", singular: "kitap", description: "Önce kitap türünü, ardından sınıfını seç." },
  worksheets: { title: "Çalışma Kağıtları", image: "Calisma_Kagitlari.png", singular: "çalışma kağıdı", description: "Çalışma kağıtlarını görmek için sınıfını seç." },
  games: { title: "Etkileşimli Oyunlar", image: "Etkilesimli_Oyunlar.png", singular: "oyun", description: "Oyunları görmek için sınıfını seç." },
  exams: { title: "Örnek Sınavlar", image: "Ornek_Sinavlar.png", singular: "örnek sınav", description: "Örnek sınavlarını görmek için sınıfını seç." }
};
const KINDS = { textbook: "Ders Kitapları", workbook: "Çalışma Kitapları" };
const WORKSHEET_GROUPS = {
  grammar: { title: "Dilbilgisi Çalışmaları", icon: "🧩" },
  revision: { title: "Genel Tekrar Çalışmaları", icon: "📝" },
  vocabulary: { title: "Kelime Çalışmaları", icon: "🔤" },
  reading: { title: "Okuma Çalışmaları", icon: "📖" }
};
// Uzantılar yayın sırasında oluşturulan listeden alınır; özgün dosya adları korunur.
const LISTENINGS = [
  { id: "track-1-1", title: "Year 6 Theme 1 Track 1.1" },
  { id: "track-1-2", title: "Year 6 Theme 1 Track 1.2" },
  { id: "track-1-3", title: "Year 6 Theme 1 Track 1.3" },
  { id: "track-1-4", title: "Year 6 Theme 1 Track 1.4" },
  { id: "track-1-5", title: "Year 6 Theme 1 Track 1.5" },
  { id: "track-1-6", title: "Year 6 Theme 1 Track 1.6" },
  { id: "digital-story", title: "Year 6-Theme 1-SCHOOL LIFE-Digital story" }
];
const dialog = document.getElementById("resource-dialog");
const title = document.getElementById("dialog-title");
const description = document.getElementById("dialog-description");
const path = document.getElementById("dialog-path");
const art = document.getElementById("dialog-image");
const content = document.getElementById("dialog-content");
const backButton = document.getElementById("back-button");
let state = null;
let trail = [];
let renderId = 0;
let opener = null;
let activeMedia = null;

function stopListening() {
  if (!activeMedia) return;
  activeMedia.pause();
  activeMedia.removeAttribute("src");
  activeMedia.load();
  activeMedia = null;
}

function mediaName(file) {
  return file.normalize("NFKC").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function gradeLabel(grade) {
  return grade === 8 ? "8. Sınıf (Seçmeli İngilizce)" : `${grade}. Sınıf`;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// İleride eklenecek bir bağlantının da aynı sitede kalmasını sağlar.
function localUrl(file) {
  const base = new URL(".", window.location.href);
  const url = new URL(file, base);
  if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) {
    throw new Error("Materyal dosyası bu sitenin içinde olmalıdır.");
  }
  return url;
}

function navigate(next) {
  trail.push({ ...state });
  state = { ...state, ...next };
  render();
}

function openSection(section, button) {
  if (!SECTIONS[section]) return;
  opener = button;
  trail = [];
  state = { section, kind: null, grade: null, worksheetGroup: null, view: section === "books" ? "types" : "grades", material: null, listening: null };
  render();
  dialog.showModal();
  document.body.classList.add("dialog-open");
  title.focus({ preventScroll: true });
}

function showTypeChoices() {
  title.textContent = "Hangi kitabı arıyorsun?";
  description.textContent = SECTIONS.books.description;
  const grid = element("div", "choice-grid");
  for (const [kind, label] of Object.entries(KINDS)) {
    const button = element("button", "choice-card");
    button.type = "button";
    button.dataset.kind = kind;
    const symbol = element("span", "choice-symbol", kind === "textbook" ? "📖" : "✏️");
    symbol.setAttribute("aria-hidden", "true");
    button.append(symbol, element("strong", "", label), element("span", "", kind === "textbook" ? "Ders konularını takip et" : "Alıştırmalarla bilgini pekiştir"));
    button.addEventListener("click", () => navigate({ kind, grade: null, view: "grades" }));
    grid.append(button);
  }
  content.append(grid);
}

function showGradeChoices() {
  title.textContent = state.kind ? KINDS[state.kind] : SECTIONS[state.section].title;
  description.textContent = "Kaynaklarını görmek için sınıfını seç.";
  const grid = element("div", "grade-grid");
  for (const grade of [6, 7, 8]) {
    const button = element("button", "choice-card grade-card");
    button.type = "button";
    button.dataset.grade = grade;
    button.setAttribute("aria-label", gradeLabel(grade));
    const digit = element("span", "grade-digit", String(grade));
    digit.setAttribute("aria-hidden", "true");
    const label = element("strong", "", `${grade}. Sınıf`);
    if (grade === 8) label.append(element("span", "grade-caption", "(Seçmeli İngilizce)"));
    button.append(digit, label);
    button.addEventListener("click", () => navigate({
      grade,
      worksheetGroup: null,
      view: state.section === "worksheets" && grade === 6 ? "worksheet-groups" : "materials"
    }));
    grid.append(button);
  }
  content.append(grid);
}

function showWorksheetGroups() {
  title.textContent = gradeLabel(state.grade);
  description.textContent = "PDF dosyalarını görmek için çalışma türünü seç.";
  const grid = element("div", "choice-grid worksheet-group-grid");
  for (const [group, details] of Object.entries(WORKSHEET_GROUPS)) {
    const count = MATERIALS.filter(item => item.section === "worksheets" && item.grade === state.grade && item.worksheetGroup === group).length;
    const button = element("button", "choice-card worksheet-group-card");
    button.type = "button";
    button.dataset.worksheetGroup = group;
    button.setAttribute("aria-label", details.title + " - " + count + " PDF");
    const symbol = element("span", "choice-symbol", details.icon);
    symbol.setAttribute("aria-hidden", "true");
    button.append(symbol, element("strong", "", details.title), element("span", "", count + " PDF · Dosyaları aç →"));
    button.addEventListener("click", () => navigate({ worksheetGroup: group, view: "materials" }));
    grid.append(button);
  }
  content.append(grid);
}

function openMaterial(material) {
  if (material.format === "pdf") navigate({ view: "reader", material });
  else if (material.format === "game") navigate({ view: "game", material });
  else window.location.assign(localUrl(material.file).href);
}

function showGameLinks(materials) {
  const grid = element("div", "game-grid");
  for (const material of materials) {
    const button = element("button", "game-choice");
    button.type = "button";
    button.dataset.material = material.id;
    button.setAttribute("aria-label", material.title + " oyununu aç");
    const symbol = element("span", "game-symbol", material.icon);
    symbol.setAttribute("aria-hidden", "true");
    const action = element("span", "game-choice-action", "Oyna →");
    action.setAttribute("aria-hidden", "true");
    button.append(symbol, element("strong", "", material.title), element("span", "game-summary", material.summary), action);
    button.addEventListener("click", () => openMaterial(material));
    grid.append(button);
  }
  content.append(grid);
}

function showExamLinks(materials) {
  for (const material of materials) {
    const button = element("button", "exam-pdf-link" + (material.answerKey ? " answer-key" : ""));
    button.type = "button";
    button.dataset.material = material.id;
    button.setAttribute("aria-label", material.title + " PDF dosyasını aç");
    const badge = element("span", "exam-pdf-badge", material.answerKey ? "CEVAP" : "PDF");
    badge.setAttribute("aria-hidden", "true");
    const copy = element("span", "exam-pdf-copy");
    copy.append(element("strong", "", material.title), element("small", "", `${material.label || (material.answerKey ? "Cevap anahtarı" : "Örnek sınav")} · ${material.pages} sayfa`));
    const arrow = element("span", "exam-pdf-arrow", "↗");
    arrow.setAttribute("aria-hidden", "true");
    button.append(badge, copy, arrow);
    button.addEventListener("click", () => openMaterial(material));
    content.append(button);
  }
}

function showMaterials() {
  const section = SECTIONS[state.section];
  const worksheetGroup = WORKSHEET_GROUPS[state.worksheetGroup];
  title.textContent = worksheetGroup ? worksheetGroup.title : gradeLabel(state.grade);
  description.textContent = state.kind ? KINDS[state.kind] : section.title;
  const selected = MATERIALS.filter(item => item.section === state.section && item.grade === state.grade && (!state.kind || item.kind === state.kind) && (!state.worksheetGroup || item.worksheetGroup === state.worksheetGroup));
  if (selected.length === 0) {
    const empty = element("div", "empty-state");
    const symbol = element("div", "empty-symbol", "✦");
    symbol.setAttribute("aria-hidden", "true");
    empty.append(symbol, element("h3", "", "Henüz içerik eklenmedi"), element("p", "", `Bu sınıf için henüz ${state.kind === "textbook" ? "ders kitabı" : state.kind === "workbook" ? "çalışma kitabı" : section.singular} eklenmedi. Yeni kaynaklar eklendiğinde burada görünecek.`));
    content.append(empty);
    return;
  }
  if (state.section === "exams" || state.section === "worksheets") {
    description.textContent = (worksheetGroup ? gradeLabel(state.grade) + " · " + selected.length + " PDF. " : "") + "Bir dosya seç; açılır pencerede görüntüle veya indir.";
    showExamLinks(selected);
    return;
  }
  if (state.section === "games") {
    description.textContent = "Bir oyun seç ve öğrenmeye başla!";
    showGameLinks(selected);
    return;
  }
  for (const material of selected) {
    const card = element("article", "material-card");
    const copy = element("div");
    copy.append(element("span", "material-type", material.format === "pdf" ? "PDF · Görüntüle veya indir" : "Etkileşimli kaynak"), element("h3", "", material.title), element("p", "", material.format === "pdf" ? "Kitabını burada okuyabilir, cihazına kaydedebilirsin." : "Kaynağını bu sitede aç."));
    const button = element("button", "", material.format === "pdf" ? "Kitabı aç →" : "Kaynağı aç →");
    button.type = "button";
    button.dataset.material = material.kind || material.title;
    button.addEventListener("click", () => openMaterial(material));
    if (material.cover) {
      const cover = element("img", "material-cover");
      cover.src = material.cover;
      cover.alt = "English Year 6";
      cover.width = 591;
      cover.height = 275;
      card.append(cover);
    }
    card.append(copy, button);
    content.append(card);
  }
  if (state.section === "books" && state.kind === "textbook" && state.grade === 6) showListeningLinks();
}

function showListeningLinks() {
  const section = element("section", "listening-section");
  const heading = element("h3", "", "Dinlemeler");
  heading.id = "listening-heading";
  section.setAttribute("aria-labelledby", heading.id);
  section.append(heading, element("p", "listening-intro", "Theme 1 · School Life. Bir kayıt seç ve oynat."));
  const list = element("div", "listening-list");
  for (const listening of LISTENINGS) {
    const button = element("button", "listening-link");
    button.type = "button";
    button.dataset.listening = listening.id;
    button.setAttribute("aria-label", listening.title + " kaydını aç");
    const symbol = element("span", "listening-symbol", "▶");
    symbol.setAttribute("aria-hidden", "true");
    const copy = element("span", "listening-copy");
    copy.append(element("strong", "", listening.title), element("small", "", listening.id === "digital-story" ? "Digital story" : "Dinleme kaydı"));
    const arrow = element("span", "listening-arrow", "→");
    arrow.setAttribute("aria-hidden", "true");
    button.append(symbol, copy, arrow);
    button.addEventListener("click", () => navigate({ view: "listening", listening }));
    list.append(button);
  }
  section.append(list);
  content.append(section);
}

function showListening(token) {
  const listening = state.listening;
  title.textContent = listening.title;
  description.textContent = "Dinlemeler · Theme 1 · School Life";
  const status = element("p", "reader-status", "Kayıt hazırlanıyor…");
  status.setAttribute("role", "status");
  content.append(status);
  // Liste küçüktür; yeni yüklenen kayıtları görmek için her açılışta yenilenir.
  fetch(localUrl("listening-media.json").href, { cache: "no-cache" })
    .then(response => {
      if (!response.ok) throw new Error("Dinleme listesi bulunamadı");
      return response.json();
    })
    .then(index => {
      if (token !== renderId || state?.view !== "listening" || !dialog.open) return;
      const files = Array.isArray(index.files) ? index.files : [];
      const matches = files.filter(item => item && typeof item.file === "string" && !/[/\\]/.test(item.file) && ["audio", "video"].includes(item.type) && mediaName(item.file.slice(0, item.file.lastIndexOf("."))) === mediaName(listening.title));
      // Aynı kaydın iki biçimi varsa videoyu tercih et.
      const match = matches.find(item => item.type === "video") || matches[0];
      if (!match) {
        status.textContent = "Bu kayıt henüz yüklenmemiş. Yüklendiğinde buradan dinleyebilirsin.";
        return;
      }
      status.remove();
      const url = localUrl(encodeURIComponent(match.file));
      const player = element(match.type, "listening-player");
      player.controls = true;
      player.preload = "none";
      player.setAttribute("aria-label", listening.title);
      if (match.type === "video") player.setAttribute("playsinline", "");
      player.src = url.href;
      const toolbar = element("div", "reader-toolbar");
      const open = element("a", "", "Yeni sekmede aç ↗");
      open.href = url.href;
      open.target = "_blank";
      open.rel = "noopener";
      const download = element("a", "", "Dosyayı indir ↓");
      download.href = url.href;
      download.download = match.file;
      toolbar.append(open, download);
      const note = element("p", "reader-note", "Oynat düğmesine basarak başlatabilir, duraklatabilir veya kaldığın yerden devam edebilirsin.");
      const error = element("p", "reader-status error", "Kayıt bu tarayıcıda oynatılamadı. Yeni sekmede açmayı veya dosyayı indirmeyi deneyebilirsin.");
      error.setAttribute("role", "status");
      error.hidden = true;
      player.addEventListener("error", () => { error.hidden = false; });
      activeMedia = player;
      content.append(player, toolbar, note, error);
    })
    .catch(() => {
      if (token !== renderId || state?.view !== "listening" || !dialog.open) return;
      status.classList.add("error");
      status.textContent = "Dinlemeler şu anda açılamıyor. Lütfen biraz sonra tekrar dene.";
    });
}

function showReader(token) {
  const material = state.material;
  const url = localUrl(material.file);
  title.textContent = material.title;
  description.textContent = state.section === "books" ? "Kitabını görüntüle veya cihazına indir." : "PDF dosyasını görüntüle veya cihazına indir.";
  const toolbar = element("div", "reader-toolbar");
  const open = element("a", "", "Yeni sekmede aç ↗");
  open.href = url.href;
  open.target = "_blank";
  open.rel = "noopener";
  const download = element("a", "", "PDF'yi indir ↓");
  download.href = url.href;
  download.download = material.file;
  toolbar.append(open, download);
  const note = element("p", "reader-note", "Önizleme cihazında görünmüyorsa “Yeni sekmede aç” veya “PDF'yi indir” düğmesini kullanabilirsin.");
  const status = element("p", "reader-status", "PDF hazırlanıyor…");
  status.setAttribute("role", "status");
  content.append(toolbar, note, status);
  fetch(url.href, { method: "HEAD" })
    .then(response => {
      if (!response.ok) throw new Error("Dosya bulunamadı");
      // Bazı sunucular eksik PDF için HTML döndürebilir.
      const type = response.headers.get("content-type") || "";
      if (type.includes("text/html")) throw new Error("Dosya bulunamadı");
      if (token !== renderId || state?.view !== "reader" || !dialog.open) return;
      status.remove();
      const frame = element("iframe", "pdf-frame");
      frame.title = material.title + " PDF önizlemesi";
      frame.src = url.href + "#view=FitH";
      content.append(frame);
    })
    .catch(() => {
      if (token !== renderId || state?.view !== "reader" || !dialog.open) return;
      status.classList.add("error");
      status.textContent = "PDF şu anda açılamıyor. Lütfen biraz sonra tekrar dene.";
    });
}

function showGame(token) {
  const material = state.material;
  const url = localUrl(material.file);
  title.textContent = material.title;
  description.textContent = material.summary;
  const toolbar = element("div", "reader-toolbar");
  const open = element("a", "", "Yeni sekmede oyna ↗");
  open.href = url.href;
  open.target = "_blank";
  open.rel = "noopener";
  toolbar.append(open);
  const note = element("p", "reader-note", "Daha geniş bir ekran için oyunu yeni sekmede açabilirsin.");
  const status = element("p", "reader-status", "Oyun hazırlanıyor…");
  status.setAttribute("role", "status");
  content.append(toolbar, note, status);
  fetch(url.href, { method: "HEAD" })
    .then(response => {
      if (!response.ok) throw new Error("Oyun dosyası bulunamadı");
      if (token !== renderId || state?.view !== "game" || !dialog.open) return;
      status.remove();
      const frame = element("iframe", "game-frame");
      frame.title = material.title + " oyunu";
      frame.setAttribute("allow", "clipboard-write");
      frame.src = url.href;
      content.append(frame);
    })
    .catch(() => {
      if (token !== renderId || state?.view !== "game" || !dialog.open) return;
      status.classList.add("error");
      status.textContent = "Oyun şu anda açılamıyor. Lütfen biraz sonra tekrar dene.";
    });
}

function render() {
  const token = ++renderId;
  stopListening();
  content.replaceChildren();
  const section = SECTIONS[state.section];
  art.src = section.image;
  art.alt = "";
  path.textContent = [
    section.title,
    state.kind && KINDS[state.kind],
    (["reader", "game", "listening"].includes(state.view) || state.worksheetGroup) && gradeLabel(state.grade),
    state.view === "reader" && WORKSHEET_GROUPS[state.worksheetGroup]?.title,
    state.view === "listening" && "Dinlemeler"
  ].filter(Boolean).join(" / ");
  backButton.hidden = trail.length === 0;
  dialog.classList.toggle("reader", state.view === "reader");
  dialog.classList.toggle("game", state.view === "game");
  if (state.view === "types") showTypeChoices();
  else if (state.view === "grades") showGradeChoices();
  else if (state.view === "worksheet-groups") showWorksheetGroups();
  else if (state.view === "materials") showMaterials();
  else if (state.view === "reader") showReader(token);
  else if (state.view === "game") showGame(token);
  else if (state.view === "listening") showListening(token);
  dialog.scrollTop = 0;
  if (dialog.open) title.focus({ preventScroll: true });
}

document.querySelectorAll("[data-section]").forEach(button => {
  button.addEventListener("click", () => openSection(button.dataset.section, button));
});
backButton.addEventListener("click", () => {
  if (trail.length) { state = trail.pop(); render(); }
});
document.getElementById("close-button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  ++renderId;
  stopListening();
  content.replaceChildren();
  state = null;
  trail = [];
  document.body.classList.remove("dialog-open");
  if (opener?.isConnected) opener.focus({ preventScroll: true });
});






