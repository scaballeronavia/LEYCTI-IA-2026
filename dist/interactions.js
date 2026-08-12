import { articleByNumber, resultContext, resultHeading, searchLaw } from "./articles-data.js";
export class InteractionController {
    portal;
    lastFocused = null;
    overlayKind = null;
    constructor() {
        this.portal = document.createElement("div");
        this.portal.id = "interaction-portal";
        document.body.append(this.portal);
        document.addEventListener("keydown", (event) => this.handleOverlayKeydown(event));
    }
    get isOpen() {
        return this.overlayKind !== null;
    }
    openArticle(number, trigger) {
        const article = articleByNumber.get(number);
        if (!article)
            return;
        this.lastFocused = trigger;
        this.overlayKind = "article";
        this.portal.innerHTML = `
      <div class="modal-backdrop article-backdrop" data-close-overlay>
        <article class="article-drawer" role="dialog" aria-modal="true" aria-labelledby="article-dialog-title">
          <button class="close-drawer" type="button" data-close-overlay aria-label="Cerrar detalle del Artículo ${article.number}">×</button>
          <div class="article-modal-scroll">
            <p class="eyebrow">ARTÍCULO ${article.number} · ${article.title.toUpperCase()}</p>
            <h2 id="article-dialog-title">${article.legalTitle}</h2>
            <p class="article-intro">Resumen explicativo para público general.</p>
            <div class="article-detail-grid">
              <section><span>OBJETIVO</span><p>${article.objective}</p></section>
              <section class="justification-detail"><span>JUSTIFICACIÓN</span><p>${article.justification}</p></section>
              <section><span>IMPACTO</span><p>${article.impact}</p></section>
              <section><span>RESULTADO</span><p>${article.result}</p></section>
            </div>
            <p class="article-source">Base legal: Propuesta de Ley Nacional de Inteligencia Artificial · Art. ${article.number}. Justificación: síntesis técnica basada en el repositorio documental proporcionado.</p>
          </div>
        </article>
      </div>`;
        this.portal.querySelector(".close-drawer")?.focus();
        this.bindCloseControls();
    }
    openSearch(trigger) {
        this.lastFocused = trigger;
        this.overlayKind = "search";
        this.portal.innerHTML = `
      <div class="modal-backdrop search-backdrop" data-close-overlay>
        <section class="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-title">
          <div class="search-panel-head">
            <label id="search-title" for="law-search">BUSCAR POR TÍTULO O ARTÍCULO</label>
            <button type="button" data-close-overlay aria-label="Cerrar búsqueda">×</button>
          </div>
          <input id="law-search" type="search" autocomplete="off" placeholder="Ej.: Art. 65, Título VIII, educación…">
          <p class="search-hint">Busque por artículo, título, capítulo o tema. Cada resultado muestra primero el objetivo y luego la justificación técnica.</p>
          <div class="search-results" aria-live="polite"></div>
        </section>
      </div>`;
        this.bindCloseControls();
        const input = this.portal.querySelector("#law-search");
        const results = this.portal.querySelector(".search-results");
        input?.addEventListener("input", async () => {
            if (!results || !input)
                return;
            const query = input.value;
            if (!query.trim()) {
                results.innerHTML = "";
                return;
            }
            results.innerHTML = "<p class=\"search-hint\">Buscando en los 73 artículos y 16 capítulos de la propuesta…</p>";
            let matches = [];
            try {
                matches = await searchLaw(query);
            }
            catch (error) {
                console.error(error);
                results.innerHTML = "<p class=\"search-hint\">No fue posible cargar el índice de la propuesta.</p>";
                return;
            }
            if (input.value !== query)
                return;
            results.innerHTML = matches.length
                ? matches.map((result) => `<button type="button" data-search-result="${result.id}"><strong>${resultHeading(result)}</strong><span class="search-result-context">${resultContext(result)}</span><p class="search-result-objective"><b>Objetivo:</b> ${result.objective}</p><p class="search-result-justification"><b>Justificación:</b> ${result.justification}</p></button>`).join("")
                : "<p class=\"search-hint\">No se encontraron artículos ni capítulos para esa búsqueda.</p>";
            results.querySelectorAll("[data-search-result]").forEach((button) => {
                button.addEventListener("click", () => {
                    const id = button.dataset.searchResult;
                    const result = matches.find((item) => item.id === id);
                    if (!result)
                        return;
                    this.close(false);
                    this.openSearchSummary(result, button);
                });
            });
        });
        input?.focus();
    }
    openSearchSummary(result, trigger) {
        this.lastFocused = trigger;
        this.overlayKind = "article";
        this.portal.innerHTML = `
      <div class="modal-backdrop article-backdrop" data-close-overlay>
        <article class="article-drawer" role="dialog" aria-modal="true" aria-labelledby="search-article-title">
          <button class="close-drawer" type="button" data-close-overlay aria-label="Cerrar resultado de búsqueda">×</button>
          <div class="article-modal-scroll">
            <p class="eyebrow">${resultContext(result).toUpperCase()}</p>
            <h2 id="search-article-title">${resultHeading(result)}</h2>
            <div class="search-summary-block objective-summary"><span>OBJETIVO</span><p>${result.objective}</p></div>
            <div class="search-summary-block justification-summary"><span>JUSTIFICACIÓN</span><p>${result.justification}</p></div>
            <p class="article-source">Objetivo: síntesis de la Propuesta de Ley Nacional de Inteligencia Artificial. Justificación: síntesis técnica basada en el repositorio documental proporcionado.</p>
          </div>
        </article>
      </div>`;
        this.portal.querySelector(".close-drawer")?.focus();
        this.bindCloseControls();
    }
    close(restoreFocus = true) {
        if (!this.overlayKind)
            return;
        this.portal.innerHTML = "";
        this.overlayKind = null;
        if (restoreFocus)
            window.requestAnimationFrame(() => this.lastFocused?.focus());
    }
    bindCloseControls() {
        this.portal.querySelectorAll("[data-close-overlay]").forEach((element) => {
            element.addEventListener("click", (event) => {
                if (element.hasAttribute("data-close-overlay") && (element.tagName === "BUTTON" || event.target === element))
                    this.close();
            });
        });
    }
    handleOverlayKeydown(event) {
        if (!this.overlayKind)
            return;
        if (event.key === "Escape") {
            event.preventDefault();
            this.close();
            return;
        }
        if (event.key !== "Tab")
            return;
        const focusable = Array.from(this.portal.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"))
            .filter((element) => !element.hasAttribute("disabled"));
        if (!focusable.length)
            return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }
        else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
}
