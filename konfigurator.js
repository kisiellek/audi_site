(function () {
  const img = document.getElementById("carImage");
  const swatches = document.querySelectorAll(".swatch");
  if (!img || !swatches.length) return;

  const saved = localStorage.getItem("q3-color-src");
  if (saved) {
    img.src = saved;
    swatches.forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.src === saved))
    );
  }

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

      localStorage.setItem("q3-color-src", btn.dataset.src);
    });
  });
})();
