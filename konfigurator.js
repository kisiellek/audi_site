// Konfigurator koloru – prosta logika + zapamiętanie wyboru w localStorage
(function () {
  const img = document.getElementById("carImage");
  const swatches = document.querySelectorAll(".swatch");
  if (!img || !swatches.length) return;

  // Odtwórz ostatnio wybrany kolor (jeśli jest)
  const saved = localStorage.getItem("q3-color-src");
  if (saved) {
    img.src = saved;
    // spróbuj dopasować aktywny przycisk
    swatches.forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.src === saved))
    );
  }

  // Preload obrazów (płynniejsza zmiana)
  swatches.forEach((s) => {
    const i = new Image();
    i.src = s.dataset.src;
  });

  swatches.forEach((btn) => {
    btn.addEventListener("click", () => {
      swatches.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");

      img.src = btn.dataset.src;
      if (btn.dataset.name) img.alt = `Audi Q3 – ${btn.dataset.name}`;

      // zapisz wybór użytkownika
      localStorage.setItem("q3-color-src", btn.dataset.src);
    });
  });
})();
