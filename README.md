# Ley CTI-IA 2026 — presentación web

Presentación pública, modular y accesible basada en el PDF **“Ley Nacional de Inteligencia Artificial.pdf”** entregado con este proyecto. El texto normativo se presenta como **propuesta**, no como ley vigente.

## Ejecutar

1. Instale la única dependencia de desarrollo: `npm install`.
2. Compile TypeScript: `npm run build`.
3. Inicie un servidor local: `npm start`.
4. Abra `http://localhost:8080`.

La presentación usa `fetch()` para cargar cada pantalla; por ello no debe abrirse mediante doble clic con `file://`.

## Editar una pantalla

Cada pantalla vive en `src/slides/`. Edite el HTML del archivo correspondiente, manteniendo los atributos `data-article` de las tarjetas que deban abrir detalle. El comportamiento, la navegación y el modal se mantienen separados en TypeScript.

Para añadir o quitar tarjetas interactivas, agregue o retire un botón como:

```html
<button class="article-card" data-article="29">…</button>
```

El artículo debe existir en `src/articles-data.ts`. Allí se guarda la explicación pública en tres partes: objetivo, impacto y resultado. El buscador consulta los 73 artículos del PDF desde `assets/data/ley-search-index.json` y `assets/data/article-fulltext.json`, por número de artículo, título o tema; muestra un único párrafo extraído del texto oficial y lo limita visualmente a seis líneas.

## Estructura

```text
index.html
package.json
tsconfig.json
README.md
src/
  main.ts
  navigation.ts
  interactions.ts
  articles-data.ts
  slides/                 # 13 archivos HTML independientes
  styles/
assets/
  images/bolivia-map.svg  # activo visual tomado del HTML de referencia
  icons/
  logos/
```

## Observaciones de fidelidad legal

- La fuente se denomina **“Propuesta de Ley Nacional de Inteligencia Artificial”**, fechada el 30 de julio de 2026 y presentada a la Brigada Parlamentaria de Cochabamba. Por esa razón la interfaz dice “Propuesta”.
- El documento contiene **8 títulos, 16 capítulos y 73 artículos**. Sus capítulos se numeran I y II dentro de cada título; no existen capítulos nacionales únicos 9 y 10.
- Para respetar los 13 archivos solicitados, las pantallas `slide-10-capitulo-9.html` y `slide-11-capitulo-10.html` desarrollan, respectivamente, los capítulos I y II del Título VIII: registro/evaluación/control y financiamiento/cooperación/transparencia. Los nombres de archivo se preservan por compatibilidad con el encargo, no como denominación legal.
- El PDF sí contiene un **Título VIII** y sus dos capítulos. No se añade una pantalla llamada “Capítulo 8”, porque esa no es una unidad de numeración autónoma en la fuente.
- La frase inicial sobre “10 partes” contradice la enumeración posterior de 13 pantallas. Esta implementación sigue la enumeración explícita 00–12.

## Fuente y alcance

Las explicaciones son resúmenes para público general. No sustituyen la lectura del texto normativo. Todo artículo interactivo muestra su número y tema para mantener la trazabilidad con la fuente legal proporcionada.
