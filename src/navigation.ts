export type Slide = {
  id: string;
  file: string;
  label: string;
  group: "Contexto" | "Ejes normativos" | "Cierre";
};

export const slides: Slide[] = [
  { id: "portada", file: "slide-00-portada.html", label: "Portada", group: "Contexto" },
  { id: "antecedentes", file: "slide-01-antecedentes.html", label: "Antecedentes", group: "Contexto" },
  { id: "objetivo", file: "slide-02-objetivo-finalidad.html", label: "Objetivo y finalidad", group: "Contexto" },
  { id: "titulo-i", file: "slide-03-capitulo-1.html", label: "Título I · Marco común", group: "Ejes normativos" },
  { id: "titulo-ii", file: "slide-04-capitulo-2.html", label: "Título II · Derechos y riesgos", group: "Ejes normativos" },
  { id: "titulo-iii", file: "slide-05-capitulo-3.html", label: "Título III · Uso responsable", group: "Ejes normativos" },
  { id: "titulo-iv", file: "slide-06-capitulo-4.html", label: "Título IV · Capacidades", group: "Ejes normativos" },
  { id: "titulo-v", file: "slide-07-capitulo-5.html", label: "Título V · Talento", group: "Ejes normativos" },
  { id: "titulo-vi", file: "slide-08-capitulo-6.html", label: "Título VI · Sociedad", group: "Ejes normativos" },
  { id: "titulo-vii", file: "slide-09-capitulo-7.html", label: "Título VII · Gobernanza", group: "Ejes normativos" },
  { id: "titulo-viii-control", file: "slide-10-capitulo-9.html", label: "Título VIII · Control", group: "Ejes normativos" },
  { id: "titulo-viii-recursos", file: "slide-11-capitulo-10.html", label: "Título VIII · Implementación", group: "Ejes normativos" },
  { id: "gracias", file: "slide-12-gracias.html", label: "Cierre", group: "Cierre" }
];

export const groups = ["Contexto", "Ejes normativos", "Cierre"] as const;

export function clampSlide(index: number): number {
  return Math.min(Math.max(index, 0), slides.length - 1);
}

export function slideIndexFromHash(hash: string): number {
  const id = hash.replace(/^#/, "");
  const index = slides.findIndex((slide) => slide.id === id);
  return index === -1 ? 0 : index;
}

export function padSlide(index: number): string {
  return String(index + 1).padStart(2, "0");
}
