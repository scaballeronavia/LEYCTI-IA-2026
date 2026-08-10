import { InteractionController } from "./interactions.js";
import { clampSlide, groups, padSlide, slideIndexFromHash, slides } from "./navigation.js";

const appElement = document.querySelector<HTMLElement>("#app");
if (!appElement) throw new Error("No se encontró el contenedor principal de la presentación.");
const app: HTMLElement = appElement;

let currentIndex = slideIndexFromHash(window.location.hash);
let loadSequence = 0;
const interaction = new InteractionController();

function boliviaIdentity(compact = false): string {
  return `<span class="bolivia-identity ${compact ? "compact" : ""}" aria-label="Estado Plurinacional de Bolivia">
    <span class="bolivia-flag" aria-hidden="true"><i></i><i></i><i></i></span>
    <span><strong>BOLIVIA</strong><small>Estado Plurinacional</small></span>
  </span>`;
}

function renderShell(): void {
  app.innerHTML = `
    <main class="app">
      <aside class="sidebar" aria-label="Navegación de la presentación">
        <div class="sidebar-top">
          ${boliviaIdentity(true)}
          <div class="law-label"><span>Propuesta</span><strong>Ley Nacional de IA</strong></div>
        </div>
        <nav class="side-nav" aria-label="Índice de diapositivas">
          ${groups.map((group) => `<section class="nav-group" data-group-section="${group}">
            <button class="group-toggle" type="button" data-group-toggle="${group}" aria-expanded="true"><span>${group}</span><i>−</i></button>
            <div class="group-items">${slides.filter((slide) => slide.group === group).map((slide) => {
              const index = slides.indexOf(slide);
              return `<button class="nav-item" type="button" data-slide-index="${index}"><em>${padSlide(index)}</em><span>${slide.label}</span></button>`;
            }).join("")}</div>
          </section>`).join("")}
        </nav>
        <button class="search-trigger" type="button" data-action="search"><span>Buscar en la Ley</span><kbd>Ctrl K</kbd></button>
        <p class="sidebar-source">Propuesta · fuente legal adjunta</p>
      </aside>
      <section class="stage" aria-live="polite">
        <header class="topbar">
          <button class="mini-logo" type="button" data-slide-index="0" aria-label="Ir a portada">${boliviaIdentity(true)}</button>
          <div class="top-actions">
            <button class="text-button" type="button" data-action="search">Buscar</button>
            <button class="present-button" type="button" data-action="present">Presentar <span>↗</span></button>
          </div>
        </header>
        <main class="deck" id="deck" aria-label="Contenido de la presentación"></main>
        <footer class="controls">
          <button type="button" data-action="previous" aria-label="Diapositiva anterior">← <span>Anterior</span></button>
          <div class="progress" aria-label="Progreso de la presentación"><i></i></div>
          <button type="button" data-action="next" aria-label="Diapositiva siguiente"><span>Siguiente</span> →</button>
        </footer>
      </section>
    </main>`;
}

function updateChrome(): void {
  const index = currentIndex;
  app.querySelectorAll<HTMLButtonElement>("[data-slide-index]").forEach((button) => {
    const active = Number(button.dataset.slideIndex) === index;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  app.querySelector<HTMLButtonElement>("[data-action='previous']")?.toggleAttribute("disabled", index === 0);
  app.querySelector<HTMLButtonElement>("[data-action='next']")?.toggleAttribute("disabled", index === slides.length - 1);
  const progress = app.querySelector<HTMLElement>(".progress i");
  if (progress) progress.style.width = `${((index + 1) / slides.length) * 100}%`;
  app.querySelector<HTMLElement>(".progress")?.setAttribute("aria-label", `Diapositiva ${index + 1} de ${slides.length}`);
}

async function loadSlide(index: number, replaceHash = false): Promise<void> {
  currentIndex = clampSlide(index);
  interaction.close(false);
  updateChrome();
  const deck = app.querySelector<HTMLElement>("#deck");
  if (!deck) return;
  const selected = slides[currentIndex];
  const sequence = ++loadSequence;
  deck.innerHTML = "<div class=\"slide-loading\" role=\"status\">Cargando presentación…</div>";
  try {
    const response = await fetch(`./src/slides/${selected.file}`);
    if (!response.ok) throw new Error(`No se pudo cargar ${selected.file}.`);
    const markup = await response.text();
    if (sequence !== loadSequence) return;
    deck.innerHTML = markup;
    deck.querySelector<HTMLElement>(".slide")?.focus({ preventScroll: true });
    document.title = `${selected.label} | Ley Nacional de IA`;
  } catch (error) {
    if (sequence !== loadSequence) return;
    deck.innerHTML = `<section class="slide error-slide"><p class="eyebrow">ERROR DE CARGA</p><h1>No fue posible abrir esta pantalla.</h1><p class="lead">Verifique que los archivos de la presentación estén disponibles en el servidor local.</p></section>`;
    console.error(error);
  }
  const hash = `#${selected.id}`;
  if (replaceHash) window.history.replaceState(null, "", hash);
  else if (window.location.hash !== hash) window.history.pushState(null, "", hash);
}

function changeSlide(delta: number): void {
  void loadSlide(currentIndex + delta);
}

async function togglePresentation(button: HTMLButtonElement): Promise<void> {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }
  try {
    await document.documentElement.requestFullscreen();
  } catch {
    app.querySelector<HTMLElement>(".app")?.classList.toggle("presenting");
  }
  button.textContent = "Salir ↙";
}

app.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const articleButton = target.closest<HTMLElement>("[data-article]");
  if (articleButton) {
    interaction.openArticle(Number(articleButton.dataset.article), articleButton);
    return;
  }
  const slideButton = target.closest<HTMLButtonElement>("[data-slide-index]");
  if (slideButton) {
    void loadSlide(Number(slideButton.dataset.slideIndex));
    return;
  }
  const actionButton = target.closest<HTMLButtonElement>("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === "next") changeSlide(1);
    if (action === "previous") changeSlide(-1);
    if (action === "search") interaction.openSearch(actionButton);
    if (action === "present") void togglePresentation(actionButton);
    return;
  }
  const groupToggle = target.closest<HTMLButtonElement>("[data-group-toggle]");
  if (groupToggle) {
    const section = groupToggle.closest<HTMLElement>("[data-group-section]");
    const items = section?.querySelector<HTMLElement>(".group-items");
    const isOpen = groupToggle.getAttribute("aria-expanded") === "true";
    groupToggle.setAttribute("aria-expanded", String(!isOpen));
    groupToggle.querySelector("i")!.textContent = isOpen ? "+" : "−";
    items?.toggleAttribute("hidden", isOpen);
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    const trigger = app.querySelector<HTMLElement>("[data-action='search']");
    if (trigger) interaction.openSearch(trigger);
    return;
  }
  if (interaction.isOpen || event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    changeSlide(1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    changeSlide(-1);
  }
  if (event.key === "Home") {
    event.preventDefault();
    void loadSlide(0);
  }
  if (event.key === "End") {
    event.preventDefault();
    void loadSlide(slides.length - 1);
  }
});

document.addEventListener("fullscreenchange", () => {
  const button = app.querySelector<HTMLButtonElement>("[data-action='present']");
  if (button) button.innerHTML = document.fullscreenElement ? "Salir <span>↙</span>" : "Presentar <span>↗</span>";
});

window.addEventListener("hashchange", () => void loadSlide(slideIndexFromHash(window.location.hash), true));

renderShell();
void loadSlide(currentIndex, true);
