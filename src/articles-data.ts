export type ArticleDetail = {
  number: number;
  title: string;
  legalTitle: string;
  objective: string;
  impact: string;
  result: string;
  keywords: string[];
};

// Fuente única de contenido: “Ley Nacional de Inteligencia Artificial.pdf” proporcionado.
// Las formulaciones son síntesis explicativas para exposición pública; no reemplazan el texto normativo.
export const articles: ArticleDetail[] = [
  { number: 1, title: "Título I", legalTitle: "Objeto", objective: "Establecer un marco legal para todo el ciclo de vida de los sistemas y plataformas de IA.", impact: "Conecta desarrollo tecnocientífico con derechos, seguridad, diversidad cultural, ambiente y responsabilidad humana.", result: "La IA se orienta con reglas desde su planificación hasta su eventual retiro.", keywords: ["marco legal", "ciclo de vida", "responsabilidad humana"] },
  { number: 2, title: "Título I", legalTitle: "Prioridad nacional e interés público", objective: "Dar prioridad al desarrollo soberano, seguro, inclusivo y sostenible de capacidades de IA.", impact: "Integra investigación, talento, infraestructura, innovación y gestión de riesgos en sectores públicos, privados, académicos y sociales.", result: "La IA se reconoce como una agenda nacional de interés público.", keywords: ["prioridad", "capacidades", "soberanía"] },
  { number: 3, title: "Título I", legalTitle: "Finalidades", objective: "Definir los resultados nacionales que persigue la propuesta: riesgos, Estado, productividad, trabajo, talento, derechos, diversidad, infraestructura y ambiente.", impact: "Da un rumbo común para que regulación y desarrollo no avancen por separado.", result: "Bolivia dispone de una visión integral para orientar sus decisiones sobre IA.", keywords: ["finalidades", "Estado", "talento", "derechos"] },
  { number: 9, title: "Título I", legalTitle: "Principios rectores aplicables a la IA", objective: "Guiar la interpretación y aplicación de la propuesta con principios de dignidad, legalidad, riesgo, transparencia, seguridad, inclusión y supervisión humana.", impact: "Ofrece criterios para evaluar usos concretos de IA, incluso cuando la tecnología cambie.", result: "Las decisiones sobre IA pueden justificarse con un marco ético y jurídico común.", keywords: ["principios", "transparencia", "inclusión"] },
  { number: 10, title: "Título II", legalTitle: "Derechos", objective: "Reconocer información, explicación, revisión humana, reclamo y reparación frente a usos de IA.", impact: "Las personas cuentan con herramientas cuando una decisión automatizada afecta de forma relevante sus oportunidades o servicios.", result: "El uso de IA incorpora garantías comprensibles y vías de respuesta.", keywords: ["derechos", "explicación", "revisión humana"] },
  { number: 13, title: "Título II", legalTitle: "Clasificación por riesgo", objective: "Distinguir prácticas prohibidas, sistemas de alto impacto, transparencia específica y riesgo mínimo.", impact: "Las obligaciones se ajustan a la finalidad, el contexto y los posibles efectos de cada sistema.", result: "La regulación se concentra donde existe mayor riesgo para personas e intereses públicos.", keywords: ["riesgo", "clasificación", "alto impacto"] },
  { number: 15, title: "Título II", legalTitle: "Prácticas prohibidas", objective: "Impedir usos como la manipulación dañina, la explotación de vulnerabilidades y la puntuación social injustificada.", impact: "Establece límites claros frente a formas de IA que comprometen dignidad, autonomía o igualdad.", result: "Ciertos usos quedan fuera de lo aceptable, antes de producir daños.", keywords: ["prohibiciones", "manipulación", "vigilancia"] },
  { number: 16, title: "Título II", legalTitle: "Identificación biométrica remota", objective: "Restringir este uso a casos excepcionales, delimitados y sujetos a autorización judicial cuando corresponda.", impact: "Reduce el riesgo de vigilancia desproporcionada y protege derechos fundamentales.", result: "El uso biométrico remoto queda sujeto a controles reforzados.", keywords: ["biometría", "autorización judicial", "privacidad"] },
  { number: 18, title: "Título III", legalTitle: "Gestión de sistemas de alto impacto", objective: "Exigir evaluación de impacto y gestión continua de riesgos para los sistemas con efectos significativos.", impact: "Incorpora datos, pruebas, supervisión humana, monitoreo y respuesta a incidentes.", result: "Un sistema de alto impacto debe poder corregirse, suspenderse o retirarse cuando el riesgo no sea controlable.", keywords: ["gestión", "evaluación", "alto impacto"] },
  { number: 20, title: "Título III", legalTitle: "Seguridad, robustez y trazabilidad", objective: "Asegurar exactitud, ciberseguridad, resiliencia y registros suficientes durante el ciclo de vida.", impact: "Permite conocer cómo opera un sistema y responder con evidencia ante errores o incidentes.", result: "Los sistemas críticos cuentan con bases técnicas para ser más confiables y auditables.", keywords: ["seguridad", "trazabilidad", "ciberseguridad"] },
  { number: 22, title: "Título III", legalTitle: "Inteligencia Artificial Generativa", objective: "Exigir información y medidas para identificar contenido sintético y prevenir fraude o suplantación.", impact: "Ayuda a que ciudadanía, instituciones y empresas distingan contenidos generados o modificados por IA.", result: "La IA generativa se usa con mayor transparencia y prevención de engaños.", keywords: ["IA generativa", "contenido sintético", "fraude"] },
  { number: 24, title: "Título III", legalTitle: "Uso responsable en el Estado", objective: "Sujetar el uso estatal de IA a finalidad pública, competencia, necesidad, proporcionalidad y responsabilidad institucional.", impact: "La modernización de servicios públicos conserva seguridad, trazabilidad y control humano.", result: "Las instituciones públicas pueden innovar sin perder sus deberes frente a la ciudadanía.", keywords: ["Estado", "servicios públicos", "proporcionalidad"] },
  { number: 26, title: "Título III", legalTitle: "Contratación pública", objective: "Incluir condiciones sobre datos, seguridad, auditoría, continuidad y salida del proveedor en las compras públicas de IA.", impact: "Protege el control público y evita dependencias tecnológicas sin condiciones claras.", result: "Las adquisiciones estatales consideran el ciclo completo del sistema, no solo su compra inicial.", keywords: ["contratación", "proveedores", "auditoría"] },
  { number: 29, title: "Título IV", legalTitle: "Estrategia Nacional", objective: "Organizar prioridades, metas, responsables, indicadores y una cartera gradual de iniciativas de IA.", impact: "Alinea capacidades, derechos, riesgos y resultados verificables en una misma hoja de ruta.", result: "El país puede avanzar con planificación y seguimiento, no mediante acciones aisladas.", keywords: ["estrategia", "metas", "indicadores"] },
  { number: 33, title: "Título IV", legalTitle: "Infraestructura y capas tecnológicas", objective: "Desarrollar infraestructura desde hardware y conectividad hasta datos, modelos, aplicaciones y gobernanza.", impact: "Incluye ciberseguridad, interoperabilidad y continuidad de servicios críticos.", result: "La adopción de IA se apoya en capacidades técnicas nacionales más sólidas.", keywords: ["infraestructura", "datos", "conectividad"] },
  { number: 35, title: "Título IV", legalTitle: "Centros de excelencia e investigación", objective: "Promover centros y redes para investigación fundamental y aplicada, formación avanzada y transferencia tecnológica.", impact: "Acerca academia, investigación, industria y cooperación a problemas nacionales.", result: "Se fortalecen espacios para producir conocimiento y soluciones locales.", keywords: ["investigación", "centros", "transferencia"] },
  { number: 36, title: "Título IV", legalTitle: "Innovación y experimentación", objective: "Permitir entornos controlados para probar innovaciones con límites, supervisión y salida segura.", impact: "Reduce barreras para experimentar sin renunciar a la protección de derechos y la gestión del riesgo.", result: "Las soluciones nuevas pueden validarse antes de un despliegue más amplio.", keywords: ["innovación", "experimentación", "supervisión"] },
  { number: 39, title: "Título IV", legalTitle: "Soberanía tecnológica efectiva", objective: "Asegurar capacidad para elegir o sustituir proveedores, auditar sistemas, proteger datos y capturar valor.", impact: "Da herramientas para reducir dependencias que limiten decisiones públicas o capacidades locales.", result: "La adopción tecnológica conserva margen de decisión y aprendizaje nacional.", keywords: ["soberanía", "proveedores", "datos"] },
  { number: 41, title: "Título V", legalTitle: "Política educativa", objective: "Desarrollar una política progresiva e inclusiva de educación en IA.", impact: "Prepara a las personas para comprender, usar, evaluar y desarrollar IA en distintos niveles educativos.", result: "La educación contribuye a una ciudadanía con mayor autonomía frente a la tecnología.", keywords: ["educación", "alfabetización", "inclusión"] },
  { number: 43, title: "Título V", legalTitle: "Competencias universales y trayectorias especializadas", objective: "Diferenciar capacidades básicas para todas las personas de rutas de formación especializada.", impact: "Permite ampliar la comprensión responsable de IA y, a la vez, formar perfiles técnicos avanzados.", result: "El país puede atender necesidades amplias de cultura digital y de talento especializado.", keywords: ["competencias", "especialización", "talento"] },
  { number: 44, title: "Título V", legalTitle: "Uso educativo basado en evidencia", objective: "Incorporar IA en educación cuando fortalezca comprensión, retención, transferencia y resolución de problemas.", impact: "Evita que la herramienta sustituya sin criterio el aprendizaje, la docencia o la evaluación.", result: "La IA puede apoyar procesos educativos con propósito pedagógico verificable.", keywords: ["educación", "evidencia", "aprendizaje"] },
  { number: 47, title: "Título V", legalTitle: "Red Nacional de Nódulos de Talento", objective: "Promover una red territorial de formación, investigación y acceso a capacidades de IA.", impact: "Conecta oportunidades de talento y conocimiento más allá de un único centro geográfico.", result: "El desarrollo de capacidades puede llegar a más territorios y sectores.", keywords: ["nódulos", "territorio", "formación"] },
  { number: 49, title: "Título VI", legalTitle: "Derechos laborales", objective: "Proteger a las personas frente al uso de IA en contratación, asignación, gestión y trabajo.", impact: "Exige información, proporcionalidad, revisión humana y respeto de derechos laborales.", result: "La transformación tecnológica debe mantener condiciones de trabajo dignas.", keywords: ["trabajo", "derechos laborales", "revisión humana"] },
  { number: 52, title: "Título VI", legalTitle: "Lenguas y cultura", objective: "Fomentar tecnologías para lenguas oficiales, traducción y acceso intercultural.", impact: "Reconoce la diversidad cultural y lingüística como parte del desarrollo y uso de IA.", result: "La tecnología puede contribuir a preservar y ampliar el acceso a la diversidad boliviana.", keywords: ["lenguas", "cultura", "interculturalidad"] },
  { number: 54, title: "Título VI", legalTitle: "Niñez, consumo y contenido sintético", objective: "Proteger a niñas, niños y adolescentes frente al perfilado comercial abusivo y contenidos sintéticos nocivos.", impact: "Extiende las salvaguardas de IA a personas con especial necesidad de protección.", result: "El diseño y uso de sistemas considera de forma reforzada el interés superior de la niñez.", keywords: ["niñez", "contenido sintético", "protección"] },
  { number: 55, title: "Título VII", legalTitle: "Creación y naturaleza", objective: "Crear el Consejo Nacional de Inteligencia Artificial como instancia de dirección estratégica y coordinación.", impact: "Ofrece una referencia institucional para alinear política, capacidades y evaluación.", result: "La gobernanza de IA cuenta con una instancia nacional de conducción.", keywords: ["Consejo", "gobernanza", "coordinación"] },
  { number: 58, title: "Título VII", legalTitle: "Unidad Operativa de Inteligencia Artificial", objective: "Crear una Unidad Operativa como institución pública desconcentrada y soporte técnico de la gobernanza.", impact: "Aporta continuidad operativa a tareas de registro, coordinación, asistencia y seguimiento.", result: "La propuesta dispone de una capacidad de ejecución técnica especializada.", keywords: ["Unidad Operativa", "ejecución", "institución"] },
  { number: 60, title: "Título VII", legalTitle: "Comité Tecnocientífico Interdisciplinario", objective: "Contar con análisis plural, independiente y basado en evidencia sobre ciencia, tecnologías emergentes y riesgos.", impact: "Suma conocimiento especializado a las decisiones públicas sin reemplazar responsabilidades institucionales.", result: "La política de IA puede nutrirse de asesoría interdisciplinaria.", keywords: ["comité", "evidencia", "asesoría"] },
  { number: 61, title: "Título VII", legalTitle: "Autoridades sectoriales", objective: "Mantener las atribuciones de regulación, supervisión y sanción de las autoridades competentes.", impact: "Promueve criterios comunes y aplicación coherente de los mínimos de la propuesta en cada sector.", result: "La coordinación no elimina las responsabilidades sectoriales existentes.", keywords: ["autoridades", "sectores", "supervisión"] },
  { number: 65, title: "Título VIII", legalTitle: "Registro Nacional", objective: "Administrar un registro de sistemas públicos y de alto impacto.", impact: "Organiza reglas de publicidad, actualización, interoperabilidad, reserva y protección de datos.", result: "Se cuenta con una base para conocer y dar seguimiento a sistemas relevantes.", keywords: ["registro", "transparencia", "sistemas públicos"] },
  { number: 66, title: "Título VIII", legalTitle: "Evaluación y auditoría", objective: "Exigir evaluación previa y periódica de sistemas de alto impacto, y auditoría independiente cuando corresponda.", impact: "Permite revisar riesgos, opacidad, incidentes y conflictos con mayor rigor.", result: "Los sistemas más sensibles quedan sujetos a verificación continua.", keywords: ["auditoría", "evaluación", "verificación"] },
  { number: 67, title: "Título VIII", legalTitle: "Fiscalización y medidas", objective: "Permitir requerir información, ordenar correcciones y preservar evidencia ante incumplimientos.", impact: "Habilita restricciones, suspensión o retiro con motivación, proporcionalidad e impugnación.", result: "La respuesta institucional puede ajustarse a la gravedad y al riesgo identificado.", keywords: ["fiscalización", "correcciones", "suspensión"] },
  { number: 69, title: "Título VIII", legalTitle: "Fuentes de financiamiento", objective: "Organizar fuentes públicas, recursos institucionales, cooperación, convenios y otras vías legalmente admitidas.", impact: "Sujeta todo recurso a los sistemas nacionales de planificación, inversión, presupuesto, administración y control.", result: "La implementación puede contar con recursos bajo reglas de gestión pública.", keywords: ["financiamiento", "presupuesto", "cooperación"] },
  { number: 70, title: "Título VIII", legalTitle: "Cooperación internacional, transferencia y acceso", objective: "Canalizar cooperación para conocimiento, investigación, laboratorios, formación e infraestructura.", impact: "Prioriza acceso efectivo, transferencia y fortalecimiento de capacidades locales.", result: "La colaboración externa debe aportar capacidades duraderas en Bolivia.", keywords: ["cooperación", "transferencia", "acceso"] },
  { number: 71, title: "Título VIII", legalTitle: "Integridad y prevención de captura", objective: "Evitar que donaciones, aportes o cooperación condicionen decisiones regulatorias o de control.", impact: "Exige transparencia, declaración de conflictos y prohíbe pagos directos a servidoras o servidores públicos.", result: "La implementación protege la independencia de las decisiones públicas.", keywords: ["integridad", "conflictos", "transparencia"] },
  { number: 73, title: "Título VIII", legalTitle: "Reglamentación técnica", objective: "Habilitar reglamentos y normas técnicas para procedimientos, pruebas, auditoría y registro.", impact: "Evita que el desarrollo técnico reduzca derechos o altere elementos esenciales de la propuesta.", result: "La aplicación puede detallarse sin perder las garantías centrales.", keywords: ["reglamentación", "normas técnicas", "derechos"] }
];

export const articleByNumber = new Map(articles.map((article) => [article.number, article]));

export type SearchArticle = {
  number: number;
  titleRoman: string;
  titleNumber: number;
  titleName: string;
  legalTitle: string;
  summary: string;
};

type LawSearchSource = {
  titulos: Array<{ numero: string; nombre: string }>;
  articulos: Array<{ n: number; nombre: string; titulo: string; resumen: string }>;
};

type LawFullTextSource = Record<string, string>;

let searchIndexPromise: Promise<SearchArticle[]> | undefined;

function normalize(value: string): string {
  return value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function officialParagraph(fullText: string | undefined, fallback: string): string {
  if (!fullText) return fallback;
  return fullText
    .replace(/^Artículo\s+\d+\.\s*\([^)]*\)\.\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function loadSearchIndex(): Promise<SearchArticle[]> {
  if (!searchIndexPromise) {
    searchIndexPromise = Promise.all([
      fetch("./assets/data/ley-search-index.json"),
      fetch("./assets/data/article-fulltext.json")
    ])
      .then(async ([indexResponse, fullTextResponse]) => {
        if (!indexResponse.ok || !fullTextResponse.ok) throw new Error("No se pudo cargar el índice de la Ley.");
        return {
          source: await indexResponse.json() as LawSearchSource,
          fullTexts: await fullTextResponse.json() as LawFullTextSource
        };
      })
      .then(({ source, fullTexts }) => {
        const titles = new Map(source.titulos.map((title, index) => [title.numero, { name: title.nombre, number: index + 1 }]));
        return source.articulos.map((article) => {
          const title = titles.get(article.titulo);
          return {
            number: article.n,
            titleRoman: article.titulo,
            titleNumber: title?.number ?? 0,
            titleName: title?.name ?? "",
            legalTitle: article.nombre,
            summary: officialParagraph(fullTexts[String(article.n)], article.resumen)
          };
        });
      });
  }
  return searchIndexPromise;
}

export async function searchArticles(term: string): Promise<SearchArticle[]> {
  const query = normalize(term);
  if (!query) return [];
  const index = await loadSearchIndex();
  const articleMatch = query.match(/^(?:art(?:iculo)?\.?\s*)?(\d{1,2})$/);
  if (articleMatch) return index.filter((article) => article.number === Number(articleMatch[1]));
  const titleMatch = query.match(/^titulo\s+(\d+|[ivxlcdm]+)$/i);
  if (titleMatch) {
    const requested = normalize(titleMatch[1]);
    return index.filter((article) => normalize(article.titleRoman) === requested || String(article.titleNumber) === requested);
  }
  return index.filter((article) => {
    const searchable = normalize(`Artículo ${article.number} Art. ${article.number} Título ${article.titleRoman} ${article.titleNumber} ${article.titleName} ${article.legalTitle} ${article.summary}`);
    return searchable.includes(query);
  });
}
