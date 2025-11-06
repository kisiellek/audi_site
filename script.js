// Rok w stopce
document.getElementById("year")?.append(new Date().getFullYear());

// ===== Motyw (dark/light) zapis w localStorage =====
const themeKey = "pref-theme";
const root = document.documentElement;

function applyTheme(v) {
  // tu można rozwinąć np. zmianę zmiennych CSS; zostawiamy jako przykład
  localStorage.setItem(themeKey, v);
  document.body.dataset.theme = v; // do ewentualnego stylowania [data-theme="light"]
}
document.getElementById("themeToggle")?.addEventListener("click", () => {
  const current = localStorage.getItem(themeKey) || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});
const saved = localStorage.getItem(themeKey);
if (saved) {
  applyTheme(saved);
}

// ===== Mobile menu =====
const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

// ===== Walidacja formularza kontaktowego =====
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const topic = document.getElementById("topic");
    const message = document.getElementById("message");
    const msg = document.getElementById("formMsg");

    let ok = true;
    // wymagania mówią: input type="text" – dodajemy pattern + ręczną walidację
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRe.test(email.value.trim())) {
      ok = false;
      email.focus();
    }

    if (ok && !topic.value) {
      ok = false;
      topic.focus();
    }
    if (ok && !message.value.trim()) {
      ok = false;
      message.focus();
    }

    if (!ok) {
      msg.textContent = "Uzupełnij poprawnie wymagane pola.";
      msg.style.color = "#ff6b6b";
      return;
    }

    // „Wysyłka” (tu tylko demo)
    msg.textContent = "Dziękujemy! Twoja wiadomość została wysłana (demo).";
    msg.style.color = "#7dffb3";
    form.reset();
  });
}
