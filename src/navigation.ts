export type Slide = {
  id: string;
  file: string;
  label: string;
  group: "Contexto" | "Títulos de la Ley";
};

export const slides: Slide[] = [
  { id: "portada", file: "slide-00-portada.html", label: "Portada", group: "Contexto" },
  { id: "antecedentes", file: "slide-01-antecedentes.html", label: "Antecedentes y contexto", group: "Contexto" },
  { id: "objetivo", file: "slide-02-objetivo-finalidad.html", label: "Objeto y finalidad", group: "Contexto" },
  { id: "arquitectura", file: "slide-03-arquitectura.html", label: "Arquitectura de la ley", group: "Contexto" },
  { id: "titulo-i", file: "slide-03-capitulo-1.html", label: "Título I · Capítulos I–II", group: "Títulos de la Ley" },
  { id: "titulo-ii", file: "slide-04-capitulo-2.html", label: "Título II · Capítulos I–II", group: "Títulos de la Ley" },
  { id: "titulo-iii", file: "slide-05-capitulo-3.html", label: "Título III · Capítulos I–II", group: "Títulos de la Ley" },
  { id: "titulo-iv", file: "slide-06-capitulo-4.html", label: "Título IV · Capítulos I–II", group: "Títulos de la Ley" },
  { id: "titulo-v", file: "slide-07-capitulo-5.html", label: "Título V · Capítulos I–II", group: "Títulos de la Ley" },
  { id: "titulo-vi", file: "slide-08-capitulo-6.html", label: "Título VI · Capítulos I–II", group: "Títulos de la Ley" },
  { id: "titulo-vii", file: "slide-09-capitulo-7.html", label: "Título VII · Capítulos I–II", group: "Títulos de la Ley" },
  { id: "titulo-viii", file: "slide-10-capitulo-9.html", label: "Título VIII · Capítulos I–III", group: "Títulos de la Ley" }
];

export const groups = ["Contexto", "Títulos de la Ley"] as const;

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
