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
  {"id": "6-calisma-kelime-eslestirme", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6. Sınıf Kelime Eşleştirme Çalışma Kağıdı", "file": "6_calisma_kelime_eslestirme.pdf", "format": "pdf", "pages": 1, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-kelime-eslestirme-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6. Sınıf Kelime Eşleştirme - Cevap Anahtarı", "file": "6_calisma_kelime_eslestirme_cevap.pdf", "format": "pdf", "pages": 1, "label": "Cevap anahtarı", "answerKey": true},
  {"id": "6-calisma-kelime-word-test", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6.1 Word Test", "file": "6_calisma_kelime_word_test.pdf", "format": "pdf", "pages": 1, "label": "Çalışma kağıdı"},
  {"id": "6-calisma-kelime-word-test-cevap", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "6. Sınıf Word Test - Cevap Anahtarı", "file": "6_calisma_kelime_word_test_cevap.pdf", "format": "pdf", "pages": 1, "label": "Cevap anahtarı", "answerKey": true},
  {"id": "6-calisma-kelime-school-life-listesi", "section": "worksheets", "grade": 6, "worksheetGroup": "vocabulary", "title": "School Life - Zenginleştirilmiş Kelime Listesi", "file": "6_calisma_kelime_school_life_listesi.pdf", "format": "pdf", "pages": 2, "label": "Çalışma kağıdı"},
  { id: "game7-personality-detective", section: "games", grade: 7, title: "Personality Detective", file: "7th_grade_personality_detective.html", format: "game", icon: "🔎", illustration: "personality", summary: "İpuçlarından kişilik özelliklerini ve dış görünüşü bul.", features: "3 seviye · İlerleme · Rozet" },
  { id: "game7-comparative-battle", section: "games", grade: 7, title: "Comparative Battle", file: "7th_grade_comparative_battle.html", format: "game", icon: "⚡", illustration: "comparative", summary: "Karşılaştırma cümlelerini tamamla, doğru kişiyi seç.", features: "3 seviye · İlerleme · Rozet" },
  { id: "game7-sports-equipment", section: "games", grade: 7, title: "Sports Equipment Match", file: "7th_grade_sports_equipment.html", format: "game", icon: "🏅", illustration: "sports", summary: "Sporları doğru ekipmanlarla eşleştir.", features: "3 seviye · İlerleme · Rozet" },
  { id: "game7-how-often", section: "games", grade: 7, title: "How Often Challenge", file: "7th_grade_how_often_challenge.html", format: "game", icon: "🎯", illustration: "frequency", summary: "Günlük rutinler ve sıklık ifadeleriyle kendini dene.", features: "3 seviye · İlerleme · Rozet" },
  { id: "game7-english-adventure", section: "games", grade: 7, title: "English Adventure", file: "7th_grade_english_adventure.html", format: "game", icon: "🏆", illustration: "adventure", summary: "Kişilik, spor ve dil bilgisi görevlerini tamamla.", features: "3 seviye · İlerleme · Rozet" },
  { id: "game7-word-sprint", section: "games", grade: 7, title: "Word Sprint", file: "7th_grade_word_sprint.html", format: "game", icon: "🔤", illustration: "words", summary: "60 saniyede kelimeleri bul, seri yap ve rekorunu geliştir.", features: "3 seviye · 60 saniye · Rekor" },
  { id: "story7-silver-whistle", section: "books", kind: "storybook", grade: 7, title: "The Secret of the Silver Whistle", author: "Zeynep Gizem ŞAHBAZ", file: "7th_grade_silver_whistle.html", cover: "7th_grade_silver_whistle_cover.png", format: "story", chapters: 7, questions: 21, summary: "Emma ve Liam ile ipuçlarını takip et; hikayeyi oku, dinle ve soruları çöz." },
  { id: "worksheet7-sports-talking", section: "worksheets", grade: 7, title: "Sports — The Talking Worksheet", file: "7th_grade_sports_interactive_talking_worksheet.html", format: "worksheet", illustration: "sports", summary: "Sporlar, ekipmanlar, sıklık ifadeleri ve Simple Present konularını sesli diyaloglarla çalış.", features: "Sesli anlatım · 4 konu · 10 soru" },
  { id: "worksheet7-appearance-personality-talking", section: "worksheets", grade: 7, title: "Appearance and Personality — Comparatives", file: "7th_grade_appearance_and_personality_interactive_talking_worksheet.html", format: "worksheet", illustration: "comparative", summary: "Resimli ve sesli anlatımla karşılaştırmaları öğren, alıştırmalarla kendini dene.", features: "Sesli anlatım · Resimli çalışma · 5 soru" },
  { id: "book7-textbook-meb-2025-2026", section: "books", kind: "textbook", grade: 7, title: "7. Sınıf İngilizce Ders Kitabı (MEB, 2025–2026)", file: "2025-2026_7.Sinif_Ingilizce_Ders_Kitabi_MEB.pdf", format: "pdf", cover: "7th_grade_textbook_cover.png", coverAlt: "7. Sınıf İngilizce Ders Kitabı kapağı", coverWidth: 851, coverHeight: 1200 },
  { id: "exam7-her-gune-bir-yazili", section: "exams", grade: 7, title: "Her Güne Bir Yazılı", file: "7th_grade_her_gune_bir_yazili.html", format: "exam", illustration: "frequency", summary: "Appearance and Personality ve Sports konularında üç örnek yazılıyla hazırlan.", features: "3 deneme · Senaryo 2 · Yazdır / PDF" },
  { id: "worksheet7-revision-mrs-shahbaz", section: "worksheets", grade: 7, title: "Revision with Mrs. Şahbaz", file: "7th_grade_revision_with_mrs_shahbaz.html", format: "worksheet", illustration: "adventure", summary: "Konu anlatımı, örnekler, etkinlikler ve cevap anahtarıyla genel tekrar yap.", features: "9 sayfa · Genel tekrar · Yazdır / PDF", silent: true },
  { id: "game7-spin-and-win", section: "games", grade: 7, title: "Spin & Win", file: "7th_grade_spin_and_win.html", format: "game", icon: "🎡", illustration: "wheel", summary: "Çarkı çevir, sürpriz kategorilerdeki soruları yanıtla ve puan topla.", features: "6 kategori · Süreli sorular · Rekor" },
  { id: "game7-who-is-the-suspect", section: "games", grade: 7, title: "Who Is the Suspect?", file: "7th_grade_who_is_the_suspect.html", format: "game", icon: "🕵️", illustration: "personality", summary: "İpuçlarını karşılaştır, şüphelileri incele ve doğru kişiyi bul.", features: "Dedektiflik · İpuçları · Rekor" }
];

const SECTIONS = {
  books: { title: "Kitaplarım", image: "Kitaplarim.png", singular: "kitap", description: "Önce kitap türünü, ardından sınıfını seç." },
  worksheets: { title: "Çalışma Kağıtları", image: "Calisma_Kagitlari.png", singular: "çalışma kağıdı", description: "Çalışma kağıtlarını görmek için sınıfını seç." },
  games: { title: "Etkileşimli Oyunlar", image: "Etkilesimli_Oyunlar.png", singular: "oyun", description: "Oyunları görmek için sınıfını seç." },
  exams: { title: "Örnek Sınavlar", image: "Ornek_Sinavlar.png", singular: "örnek sınav", description: "Örnek sınavlarını görmek için sınıfını seç." }
};
const KINDS = { textbook: "Ders Kitapları", workbook: "Çalışma Kitapları", storybook: "Etkileşimli Hikaye Kitapları" };
const WORKSHEET_GROUPS = {
  grammar: { title: "Dilbilgisi Çalışmaları", icon: "🧩" },
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
// Sesli hikaye veya çalışma kağıdı kapanırken konuşmayı da durdur.
let activeStory = null;

function stopStory() {
  if (!activeStory) return;
  try { activeStory.contentWindow?.speechSynthesis?.cancel(); } catch {}
  activeStory = null;
}

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
  const grid = element("div", "choice-grid book-type-grid");
  const icons = { textbook: "📖", workbook: "✏️", storybook: "📚" };
  const hints = { textbook: "Ders konularını takip et", workbook: "Alıştırmalarla bilgini pekiştir", storybook: "Hikayeleri oku, dinle ve keşfet" };
  for (const [kind, label] of Object.entries(KINDS)) {
    const button = element("button", "choice-card");
    button.type = "button";
    button.dataset.kind = kind;
    const symbol = element("span", "choice-symbol", icons[kind]);
    symbol.setAttribute("aria-hidden", "true");
    button.append(symbol, element("strong", "", label), element("span", "", hints[kind]));
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
    const caption = count ? count + " PDF · Dosyaları aç →" : "Henüz PDF eklenmedi";
    button.append(symbol, element("strong", "", details.title), element("span", "", caption));
    button.addEventListener("click", () => navigate({ worksheetGroup: group, view: "materials" }));
    grid.append(button);
  }
  content.append(grid);
}

function openMaterial(material) {
  if (material.format === "pdf") navigate({ view: "reader", material });
  else if (material.format === "game") navigate({ view: "game", material });
  else if (material.format === "story") navigate({ view: "story", material });
  else if (material.format === "worksheet") navigate({ view: "worksheet", material });
  else if (material.format === "exam") navigate({ view: "exam", material });
  else window.location.assign(localUrl(material.file).href);
}

// Kapaklar dosyanın içinde taşınır; ayrıca görsel yüklemek gerekmez.
function gameIllustration(theme) {
  const scenes = {
    wheel: {
      background: "#fff0dc", accent: "#cb9050",
      art: '<path d="M221 271h198" stroke="#d9c5a2" stroke-width="8" stroke-linecap="round"/><path d="M291 231l-18 40m76-40 18 40" stroke="#303d60" stroke-width="11" stroke-linecap="round"/><g stroke="#fffdf9" stroke-width="3"><path d="M320 150V42A108 108 0 0 1 414 96Z" fill="#a5c8ed"/><path d="M320 150l94-54A108 108 0 0 1 414 204Z" fill="#f2a6bb"/><path d="M320 150l94 54A108 108 0 0 1 320 258Z" fill="#ffd17f"/><path d="M320 150v108A108 108 0 0 1 226 204Z" fill="#9ad5bc"/><path d="M320 150l-94 54A108 108 0 0 1 226 96Z" fill="#baa7df"/><path d="M320 150l-94-54A108 108 0 0 1 320 42Z" fill="#8acfd9"/></g><circle cx="320" cy="150" r="108" fill="none" stroke="#303d60" stroke-width="6"/><circle cx="320" cy="150" r="31" fill="#fffdf9" stroke="#303d60" stroke-width="5"/><path d="M312 135l23 15-23 15z" fill="#303d60"/><path d="M306 24h28l-14 33z" fill="#303d60"/><path d="M164 80l7-17 7 17 17 7-17 7-7 17-7-17-17-7zM462 213l5-13 5 13 13 5-13 5-5 13-5-13-13-5z" fill="#e6b64f"/><circle cx="463" cy="82" r="7" fill="#b7a2de"/><circle cx="169" cy="217" r="7" fill="#9ad5bc"/>'
    },
    personality: {
      background: "#eee9ff", accent: "#8160cb",
      art: '<g transform="rotate(-8 255 159)"><rect x="153" y="61" width="174" height="214" rx="20" fill="#cfc1f1"/><rect x="146" y="53" width="174" height="214" rx="20" fill="#fffdf9" stroke="#303d60" stroke-width="4"/><circle cx="233" cy="122" r="34" fill="#ffd3ae"/><path d="M198 118q0-52 40-40q37 2 30 46l-17-26q-21 24-53 20" fill="#473455"/><circle cx="223" cy="123" r="3" fill="#303d60"/><circle cx="245" cy="123" r="3" fill="#303d60"/><path d="M225 137q9 8 18-1" fill="none" stroke="#ad5b5b" stroke-width="3"/><path d="M183 200q4-50 50-50t50 50" fill="#a8daca"/><path d="M181 221h105m-105 18h73" stroke="#b9c7dc" stroke-width="7" stroke-linecap="round"/></g><g transform="rotate(9 396 161)"><rect x="329" y="89" width="155" height="172" rx="18" fill="#fffdf9" stroke="#303d60" stroke-width="4"/><circle cx="407" cy="144" r="29" fill="#f1b284"/><path d="M378 144q-11-45 25-39q42-6 36 43l-12-27q-19 14-49 23" fill="#303d60"/><path d="M364 218q2-42 43-42t42 42" fill="#f3b5c5"/><path d="M365 238h83" stroke="#c4cae6" stroke-width="7" stroke-linecap="round"/></g><circle cx="304" cy="191" r="45" fill="#d4f3fb" fill-opacity=".72" stroke="#303d60" stroke-width="9"/><path d="M336 224l34 35" stroke="#303d60" stroke-width="16" stroke-linecap="round"/><path d="M283 182q5-18 20-18" fill="none" stroke="white" stroke-width="7" stroke-linecap="round"/>'
    },
    comparative: {
      background: "#e6f0ff", accent: "#4c89c9",
      art: '<path d="M134 273h376" stroke="#b6cee8" stroke-width="5" stroke-linecap="round"/><rect x="433" y="55" width="41" height="213" rx="10" fill="#ffe19c" stroke="#303d60" stroke-width="4"/><path d="M435 81h19m-19 25h12m-12 25h19m-19 25h12m-12 25h19m-19 25h12m-12 25h19" stroke="#a97b38" stroke-width="4"/><circle cx="222" cy="98" r="28" fill="#efb38b"/><path d="M193 94q0-38 30-33q31-4 29 35l-18-17q-21 18-41 15" fill="#3d3657"/><path d="M180 196v-43q0-30 42-30t42 30v43" fill="#8e7ed8" stroke="#303d60" stroke-width="4"/><path d="M199 195l-8 72m54-72 7 72" stroke="#303d60" stroke-width="15" stroke-linecap="round"/><circle cx="354" cy="143" r="26" fill="#ffd5af"/><path d="M328 140q-3-38 29-33q35 0 27 41l-17-24q-15 17-39 16" fill="#955b49"/><path d="M315 222v-35q0-24 39-24t39 24v35" fill="#7fc8ba" stroke="#303d60" stroke-width="4"/><path d="M334 223l-6 43m47-43 5 43" stroke="#303d60" stroke-width="14" stroke-linecap="round"/><path d="M152 88v120m-10-107 10-13 10 13m-20 95 10 12 10-12" fill="none" stroke="#4c89c9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M295 89l22 16-22 16" fill="none" stroke="#e29b4d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="220" cy="99" r="3" fill="#303d60"/><circle cx="356" cy="145" r="3" fill="#303d60"/>'
    },
    sports: {
      background: "#e0f3ea", accent: "#469b83",
      art: '<g transform="rotate(27 396 157)"><ellipse cx="395" cy="115" rx="53" ry="70" fill="#fffdf9" stroke="#303d60" stroke-width="7"/><path d="M368 64v104m18-119v134m18-134v134m18-119v104M345 91h100m-103 20h106m-103 20h100m-88 20h76" stroke="#a8c8c4" stroke-width="2"/><path d="M395 186v70" stroke="#303d60" stroke-width="13" stroke-linecap="round"/><path d="M395 218v38" stroke="#efac77" stroke-width="17" stroke-linecap="round"/></g><circle cx="239" cy="174" r="77" fill="#fffdf9" stroke="#303d60" stroke-width="5"/><path d="M228 141l35 6 7 32-29 19-27-23zM191 118l-13 33m-8 43 21 24m51 30 32-6m32-41-2-33m-27-51-29-17" fill="#303d60" stroke="#303d60" stroke-width="5" stroke-linejoin="round"/><path d="M228 141l-37-23m23 57-44 19m71 4 1 50m28-69 36 22m-43-54 14-30" fill="none" stroke="#303d60" stroke-width="3"/><circle cx="436" cy="235" r="30" fill="#ffc58e" stroke="#303d60" stroke-width="4"/><path d="M407 235h58m-29-29v58m-21-51q43 22 0 44m41-44q-43 22 0 44" fill="none" stroke="#b7794b" stroke-width="3"/><path d="M145 264h340" stroke="#b2d6c6" stroke-width="4" stroke-linecap="round"/>'
    },
    frequency: {
      background: "#fff0dc", accent: "#cb9050",
      art: '<rect x="149" y="76" width="292" height="194" rx="22" fill="#e9cc9e"/><rect x="140" y="66" width="292" height="194" rx="22" fill="#fffdf9" stroke="#303d60" stroke-width="4"/><path d="M142 115h288V89q0-23-23-23H165q-23 0-23 23z" fill="#eea989"/><path d="M192 51v34m182-34v34" stroke="#303d60" stroke-width="9" stroke-linecap="round"/><path d="M182 150h208m-208 41h208m-208 41h208m-173-98v110m70-110v110m70-110v110" stroke="#e4e7e8" stroke-width="3"/><path d="M185 157l8 8 15-19m49 52 8 8 15-19m47-29 8 8 15-19" fill="none" stroke="#469b83" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="432" cy="218" r="66" fill="#b4ded8" stroke="#303d60" stroke-width="5"/><circle cx="432" cy="218" r="52" fill="#fffdf9"/><path d="M432 185v34l24 14" fill="none" stroke="#303d60" stroke-width="6" stroke-linecap="round"/><path d="M432 173v7m0 76v7m-45-45h7m76 0h7" stroke="#a5b6c7" stroke-width="3"/><circle cx="432" cy="218" r="5" fill="#eea989"/>'
    },
    adventure: {
      background: "#fae4e9", accent: "#c87696",
      art: '<g transform="rotate(-5 300 169)"><path d="M152 69l109 18 104-19 99 16v180l-99-15-104 19-109-18z" fill="#fff7d6" stroke="#303d60" stroke-width="4" stroke-linejoin="round"/><path d="M261 87v181m104-200v181" stroke="#dfd3aa" stroke-width="3"/><path d="M194 212q-37-93 38-88t47 76q-12 36 49 12t68-85" fill="none" stroke="#d98c83" stroke-width="6" stroke-dasharray="4 14" stroke-linecap="round"/><path d="M375 101l31 31m0-31-31 31" stroke="#c6607e" stroke-width="7" stroke-linecap="round"/><path d="M180 158l13-23 15 23zm116-28 14-23 15 23z" fill="#82b8a0"/><path d="M403 214v-49l34 14-34 14" fill="#8cb5de" stroke="#303d60" stroke-width="4" stroke-linejoin="round"/></g><circle cx="441" cy="233" r="48" fill="#fffdf9" stroke="#303d60" stroke-width="4"/><path d="M429 248l27-43-3 50-24-7" fill="#c6607e"/><path d="M429 248l27-43-5 33z" fill="#303d60"/><circle cx="443" cy="233" r="5" fill="#fffdf9"/><path d="M172 58l5-15 5 15 15 5-15 5-5 15-5-15-15-5z" fill="#e2ad57"/>'
    },
    words: {
      background: "#e2f1f7", accent: "#4a91aa",
      art: '<path d="M314 42l-61 121h58l-29 110 105-150h-65l34-81z" fill="#ffcf70" stroke="#efb54c" stroke-width="3" stroke-linejoin="round"/><g transform="rotate(-12 206 173)"><rect x="149" y="121" width="102" height="108" rx="20" fill="#fffdf9" stroke="#303d60" stroke-width="4"/><text x="200" y="196" text-anchor="middle" font-family="Arial,sans-serif" font-size="61" font-weight="bold" fill="#8e7ed8">A</text></g><g transform="rotate(9 410 190)"><rect x="355" y="139" width="102" height="108" rx="20" fill="#fffdf9" stroke="#303d60" stroke-width="4"/><text x="406" y="214" text-anchor="middle" font-family="Arial,sans-serif" font-size="61" font-weight="bold" fill="#57a58a">B</text></g><circle cx="462" cy="93" r="42" fill="#f1adc0" stroke="#303d60" stroke-width="4"/><circle cx="462" cy="93" r="31" fill="#fffdf9"/><path d="M462 53V40m-12 0h24m18 23 9-10" stroke="#303d60" stroke-width="5" stroke-linecap="round"/><text x="462" y="104" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" font-weight="bold" fill="#303d60">60</text><path d="M128 106h38m-51 149h53m317-51h32" stroke="#a0c6d6" stroke-width="6" stroke-linecap="round"/>'
    }
  };
  const scene = scenes[theme] || scenes.adventure;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 320"><rect width="640" height="320" fill="' + scene.background + '"/><circle cx="82" cy="65" r="89" fill="white" opacity=".36"/><circle cx="584" cy="294" r="101" fill="white" opacity=".4"/><circle cx="524" cy="72" r="7" fill="' + scene.accent + '" opacity=".4"/><circle cx="100" cy="240" r="5" fill="' + scene.accent + '" opacity=".45"/><path d="M532 159v20m-10-10h20M94 131v16m-8-8h16" stroke="' + scene.accent + '" stroke-width="4" stroke-linecap="round" opacity=".45"/>' + scene.art + '</svg>';
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function showGameLinks(materials) {
  const grid = element("div", "game-grid");
  for (const material of materials) {
    const button = element("button", "game-choice");
    button.type = "button";
    button.dataset.material = material.id;
    button.setAttribute("aria-label", material.title + " oyununu aç");
    if (material.illustration) {
      button.classList.add("game-choice-illustrated");
      const cover = element("img", "game-cover");
      cover.src = gameIllustration(material.illustration);
      cover.alt = "";
      cover.width = 640;
      cover.height = 320;
      cover.loading = "lazy";
      button.append(cover);
    } else {
      const symbol = element("span", "game-symbol", material.icon);
      symbol.setAttribute("aria-hidden", "true");
      button.append(symbol);
    }
    const action = element("span", "game-choice-action", "Oyna →");
    action.setAttribute("aria-hidden", "true");
    button.append(element("strong", "", material.title), element("span", "game-summary", material.summary));
    if (material.features) button.append(element("span", "game-features", material.features));
    button.append(action);
    button.addEventListener("click", () => openMaterial(material));
    grid.append(button);
  }
  content.append(grid);
}

function showInteractiveLinks(materials) {
  const pdfs = materials.filter(material => material.format === "pdf");
  if (pdfs.length) showExamLinks(pdfs);
  const grid = element("div", "game-grid worksheet-interactive-grid");
  for (const material of materials.filter(item => ["worksheet", "exam"].includes(item.format))) {
    const exam = material.format === "exam";
    const button = element("button", "game-choice game-choice-illustrated " + (exam ? "exam-choice" : "worksheet-choice"));
    button.type = "button";
    button.dataset.material = material.id;
    button.setAttribute("aria-label", material.title + (exam ? " örnek sınavını aç" : " çalışma kağıdını aç"));
    const cover = element("img", "game-cover");
    cover.src = gameIllustration(material.illustration);
    cover.alt = "";
    cover.width = 640;
    cover.height = 320;
    cover.loading = "lazy";
    const action = element("span", "game-choice-action", exam ? "Sınavı aç →" : "Çalışmayı aç →");
    action.setAttribute("aria-hidden", "true");
    button.append(cover, element("strong", "", material.title), element("span", "game-summary", material.summary), element("span", "game-features", material.features), action);
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
    empty.append(symbol, element("h3", "", "Henüz içerik eklenmedi"), element("p", "", `Bu sınıf için henüz ${state.kind === "textbook" ? "ders kitabı" : state.kind === "workbook" ? "çalışma kitabı" : state.kind === "storybook" ? "etkileşimli hikaye kitabı" : section.singular} eklenmedi. Yeni kaynaklar eklendiğinde burada görünecek.`));
    content.append(empty);
    return;
  }
  if (["worksheets", "exams"].includes(state.section) && selected.some(material => ["worksheet", "exam"].includes(material.format))) {
    description.textContent = state.section === "exams" ? "Bir sınav seç; denemeleri incele veya yazdır." : "Bir çalışma seç; konuları tekrar et, alıştırmaları tamamla.";
    showInteractiveLinks(selected);
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
  if (state.kind === "storybook") {
    showStoryBooks(selected);
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
      cover.alt = material.coverAlt || "English Year 6";
      cover.width = material.coverWidth || 591;
      cover.height = material.coverHeight || 275;
      card.append(cover);
    }
    card.append(copy, button);
    content.append(card);
  }
  if (state.section === "books" && state.kind === "textbook" && state.grade === 6) showListeningLinks();
}

function showStoryBooks(materials) {
  description.textContent = KINDS.storybook + " · Bir kitap seç ve keşfet.";
  for (const material of materials) {
    const card = element("article", "story-book-card");
    const cover = element("img", "story-book-cover");
    cover.src = localUrl(material.cover).href;
    cover.alt = material.title + " kitap kapağı";
    cover.width = 1536;
    cover.height = 1024;
    const copy = element("div", "story-book-copy");
    copy.append(
      element("span", "material-type", "ETKİLEŞİMLİ HİKAYE KİTABI"),
      element("h3", "", material.title),
      element("p", "story-author", material.author),
      element("p", "story-summary", material.summary),
      element("p", "story-features", material.chapters + " bölüm · Sesli okuma · " + material.questions + " soru")
    );
    const button = element("button", "story-open-button", "Hikayeyi aç →");
    button.type = "button";
    button.dataset.material = material.id;
    button.setAttribute("aria-label", material.title + " hikaye kitabını aç");
    button.addEventListener("click", () => openMaterial(material));
    copy.append(button);
    card.append(cover, copy);
    content.append(card);
  }
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

function showInteractive(token) {
  const material = state.material;
  const view = state.view;
  const story = view === "story";
  const worksheet = view === "worksheet";
  const exam = view === "exam";
  const url = localUrl(material.file);
  title.textContent = material.title;
  description.textContent = material.summary;
  const toolbar = element("div", "reader-toolbar");
  const open = element("a", "", story ? "Yeni sekmede oku ↗" : worksheet || exam ? "Yeni sekmede aç ↗" : "Yeni sekmede oyna ↗");
  open.href = url.href;
  open.target = "_blank";
  open.rel = "noopener";
  toolbar.append(open);
  const note = element("p", "reader-note", story ? "Sesli okuma için hikayenin Listen düğmesini kullan. Daha geniş bir ekran için kitabı yeni sekmede açabilirsin." : exam ? "Deneme 1, 2 veya 3 sekmesini seç. Yazdır / PDF düğmesini kullanabilir, sınavı yeni sekmede de açabilirsin." : worksheet ? (material.silent ? "Sayfa seçicisinden veya önceki/sonraki düğmelerinden ilerleyebilirsin. Yazdır / PDF düğmesi çalışma içinde bulunur." : "Sesli anlatım için çalışma içindeki konuşma düğmelerini kullan. Çalışmayı yeni sekmede de açabilirsin.") : "Daha geniş bir ekran için oyunu yeni sekmede açabilirsin.");
  const status = element("p", "reader-status", story ? "Hikaye kitabı hazırlanıyor…" : exam ? "Örnek sınav hazırlanıyor…" : worksheet ? "Çalışma kağıdı hazırlanıyor…" : "Oyun hazırlanıyor…");
  status.setAttribute("role", "status");
  content.append(toolbar, note, status);
  fetch(url.href, { method: "HEAD" })
    .then(response => {
      if (!response.ok) throw new Error("Oyun dosyası bulunamadı");
      if (token !== renderId || state?.view !== view || !dialog.open) return;
      status.remove();
      const frame = element("iframe", story ? "game-frame story-frame" : exam ? "game-frame exam-frame" : worksheet ? "game-frame worksheet-frame" : "game-frame");
      frame.title = material.title + (story ? " etkileşimli hikaye kitabı" : exam ? " örnek sınavı" : worksheet ? " etkileşimli çalışma kağıdı" : " oyunu");
      if (!story && !worksheet && !exam) frame.setAttribute("allow", "clipboard-write");
      if (story || worksheet) activeStory = frame;
      frame.src = url.href;
      content.append(frame);
    })
    .catch(() => {
      if (token !== renderId || state?.view !== view || !dialog.open) return;
      status.classList.add("error");
      status.textContent = story ? "Hikaye kitabı şu anda açılamıyor. Lütfen biraz sonra tekrar dene." : exam ? "Örnek sınav şu anda açılamıyor. Lütfen biraz sonra tekrar dene." : worksheet ? "Çalışma kağıdı şu anda açılamıyor. Lütfen biraz sonra tekrar dene." : "Oyun şu anda açılamıyor. Lütfen biraz sonra tekrar dene.";
    });
}

function render() {
  const token = ++renderId;
  stopListening();
  stopStory();
  content.replaceChildren();
  const section = SECTIONS[state.section];
  art.src = section.image;
  art.alt = "";
  path.textContent = [
    section.title,
    state.kind && KINDS[state.kind],
    (["reader", "game", "listening", "story", "worksheet", "exam"].includes(state.view) || state.worksheetGroup) && gradeLabel(state.grade),
    state.view === "reader" && WORKSHEET_GROUPS[state.worksheetGroup]?.title,
    state.view === "listening" && "Dinlemeler"
  ].filter(Boolean).join(" / ");
  backButton.hidden = trail.length === 0;
  dialog.classList.toggle("reader", state.view === "reader");
  dialog.classList.toggle("game", ["game", "story", "worksheet", "exam"].includes(state.view));
  dialog.classList.toggle("story", state.view === "story");
  dialog.classList.toggle("worksheet", state.view === "worksheet");
  dialog.classList.toggle("exam", state.view === "exam");
  if (state.view === "types") showTypeChoices();
  else if (state.view === "grades") showGradeChoices();
  else if (state.view === "worksheet-groups") showWorksheetGroups();
  else if (state.view === "materials") showMaterials();
  else if (state.view === "reader") showReader(token);
  else if (["game", "story", "worksheet", "exam"].includes(state.view)) showInteractive(token);
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
  stopStory();
  content.replaceChildren();
  state = null;
  trail = [];
  document.body.classList.remove("dialog-open");
  if (opener?.isConnected) opener.focus({ preventScroll: true });
});











