"use strict";

// Dosya adları büyük/küçük harf dahil GitHub'daki adlarla aynı olmalıdır.
// Yeni materyaller yalnızca bu sitenin içindeki dosyalara bağlanmalıdır.
const MATERIALS = [
  { section: "books", kind: "textbook", grade: 6, title: "6. Sınıf İngilizce Ders Kitabı", file: "ingilizce-dersi-6sinif-ders-kitabi.pdf", format: "pdf", cover: "English_Year_6.png" },
  { section: "books", kind: "workbook", grade: 6, title: "6. Sınıf İngilizce Çalışma Kitabı", file: "ingilizce-dersi-6sinif-calisma-kitabi.pdf", format: "pdf", cover: "English_Year_6.png" }
];

const SECTIONS = {
  books: { title: "Kitaplarım", image: "Kitaplarim.png", singular: "kitap", description: "Önce kitap türünü, ardından sınıfını seç." },
  worksheets: { title: "Çalışma Kağıtları", image: "Calisma_Kagitlari.png", singular: "çalışma kağıdı", description: "Çalışma kağıtlarını görmek için sınıfını seç." },
  games: { title: "Etkileşimli Oyunlar", image: "Etkilesimli_Oyunlar.png", singular: "oyun", description: "Oyunları görmek için sınıfını seç." },
  exams: { title: "Örnek Sınavlar", image: "Ornek_Sinavlar.png", singular: "örnek sınav", description: "Örnek sınavlarını görmek için sınıfını seç." }
};
const KINDS = { textbook: "Ders Kitapları", workbook: "Çalışma Kitapları" };
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
  state = { section, kind: null, grade: null, view: section === "books" ? "types" : "grades", material: null };
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
    button.addEventListener("click", () => navigate({ grade, view: "materials" }));
    grid.append(button);
  }
  content.append(grid);
}

function showMaterials() {
  const section = SECTIONS[state.section];
  title.textContent = gradeLabel(state.grade);
  description.textContent = state.kind ? KINDS[state.kind] : section.title;
  const selected = MATERIALS.filter(item => item.section === state.section && item.grade === state.grade && (!state.kind || item.kind === state.kind));
  if (selected.length === 0) {
    const empty = element("div", "empty-state");
    const symbol = element("div", "empty-symbol", "✦");
    symbol.setAttribute("aria-hidden", "true");
    empty.append(symbol, element("h3", "", "Henüz içerik eklenmedi"), element("p", "", `Bu sınıf için henüz ${state.kind === "textbook" ? "ders kitabı" : state.kind === "workbook" ? "çalışma kitabı" : section.singular} eklenmedi. Yeni kaynaklar eklendiğinde burada görünecek.`));
    content.append(empty);
    return;
  }
  for (const material of selected) {
    const card = element("article", "material-card");
    const copy = element("div");
    copy.append(element("span", "material-type", material.format === "pdf" ? "PDF · Görüntüle veya indir" : "Etkileşimli kaynak"), element("h3", "", material.title), element("p", "", material.format === "pdf" ? "Kitabını burada okuyabilir, cihazına kaydedebilirsin." : "Kaynağını bu sitede aç."));
    const button = element("button", "", material.format === "pdf" ? "Kitabı aç →" : "Kaynağı aç →");
    button.type = "button";
    button.dataset.material = material.kind || material.title;
    button.addEventListener("click", () => {
      if (material.format === "pdf") navigate({ view: "reader", material });
      else window.location.assign(localUrl(material.file).href);
    });
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
}

function showReader(token) {
  const material = state.material;
  const url = localUrl(material.file);
  title.textContent = material.title;
  description.textContent = "Kitabını görüntüle veya cihazına indir.";
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

function render() {
  const token = ++renderId;
  content.replaceChildren();
  const section = SECTIONS[state.section];
  art.src = section.image;
  art.alt = "";
  path.textContent = [section.title, state.kind && KINDS[state.kind], state.view === "reader" && gradeLabel(state.grade)].filter(Boolean).join(" / ");
  backButton.hidden = trail.length === 0;
  dialog.classList.toggle("reader", state.view === "reader");
  if (state.view === "types") showTypeChoices();
  else if (state.view === "grades") showGradeChoices();
  else if (state.view === "materials") showMaterials();
  else if (state.view === "reader") showReader(token);
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
  content.replaceChildren();
  state = null;
  trail = [];
  document.body.classList.remove("dialog-open");
  if (opener?.isConnected) opener.focus({ preventScroll: true });
});
