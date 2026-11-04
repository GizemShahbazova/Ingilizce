(() => {
  const dialog = document.getElementById("survey-dialog");
  const trigger = document.getElementById("survey-trigger");
  const title = document.getElementById("survey-title");
  const link = document.getElementById("survey-link");
  const copy = dialog.querySelector(".survey-copy");
  const seenKey = "ingilizce-pilot-survey-seen-v1";
  let previousFocus;

  if (typeof dialog.showModal !== "function") return;

  function openSurvey() {
    if (dialog.open) return;
    previousFocus = document.activeElement;
    dialog.showModal();
    document.body.classList.add("survey-open");
    copy.scrollTop = 0;
    title.focus({ preventScroll: true });
    try {
      sessionStorage.setItem(seenKey, "1");
    } catch {
      // The announcement remains available when browser storage is disabled.
    }
  }

  trigger.addEventListener("click", openSurvey);
  link.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    if (dialog.open) return;
    document.body.classList.remove("survey-open");
    const focusTarget = previousFocus instanceof HTMLElement
      && previousFocus !== document.body
      && previousFocus.isConnected
      ? previousFocus
      : trigger;
    focusTarget.focus({ preventScroll: true });
  });

  trigger.hidden = false;
  try {
    if (sessionStorage.getItem(seenKey) === "1") return;
  } catch {
    // Open the announcement when browser storage is unavailable.
  }
  openSurvey();
})();
