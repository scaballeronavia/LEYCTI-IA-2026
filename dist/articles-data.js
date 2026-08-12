// Síntesis técnica referencial a partir de los documentos entregados (UNESCO, OCDE,
// NIST, Consejo de Europa, Canadá, UNICEF y exposición de motivos comparada).
// No reemplaza ni interpreta de forma vinculante el texto de la propuesta boliviana.
const articleJustifications = {
    1: "Un marco para el ciclo de vida permite asignar responsabilidades y sostener las garantías cuando el sistema cambia, se despliega o se retira.",
    2: "La adopción dispersa no crea capacidades propias; tratar la IA como prioridad articula inversión, talento, infraestructura y protección de derechos.",
    3: "Una finalidad integral evita reducir la IA a eficiencia o tecnología y obliga a considerar derechos, productividad, diversidad y sostenibilidad de manera conjunta.",
    4: "Delimitar los usos con efectos sustanciales en Bolivia evita vacíos de responsabilidad y permite concentrar la norma donde existe impacto real.",
    5: "Las exclusiones preservan investigación, uso personal y software libre sin permitir que esas modalidades se utilicen para eludir las salvaguardas aplicables.",
    6: "La IA se cruza con normas constitucionales y sectoriales; esta regla evita contradicciones y mantiene vigentes las protecciones más favorables.",
    7: "Una definición común diferencia IA de automatización convencional y da certeza sobre qué sistemas requieren las obligaciones de la propuesta.",
    8: "Conceptos compartidos para proveedor, implementador, alto impacto y supervisión humana permiten identificar quién responde durante cada etapa del ciclo de vida.",
    9: "Principios tecnológicamente neutrales mantienen la orientación de derechos, transparencia, seguridad e inclusión aun cuando las herramientas evolucionen.",
    10: "La información, explicación y revisión humana responden a la opacidad de decisiones automatizadas y permiten cuestionar resultados que afecten derechos u oportunidades.",
    11: "Cuando una decisión significativa se toma solo con automatización, se requieren habilitación, garantías y control humano para proteger el debido proceso.",
    12: "Niñez y grupos expuestos a discriminación pueden soportar daños desproporcionados; por ello necesitan salvaguardas reforzadas desde el diseño y uso.",
    13: "El enfoque basado en riesgo concentra controles exigentes donde el posible daño es mayor, sin imponer cargas innecesarias a usos de impacto mínimo.",
    14: "Empleo, salud, educación, crédito, justicia e infraestructura pueden condicionar derechos esenciales; identificarlos permite aplicar controles reforzados oportunamente.",
    15: "La manipulación, la explotación de vulnerabilidades y la vigilancia injustificada pueden producir daños graves o irreversibles que no se corrigen solo con transparencia.",
    16: "La biometría remota puede habilitar vigilancia desproporcionada y errores discriminatorios; su uso exige necesidad estricta, límites definidos y control judicial cuando corresponda.",
    17: "Un deber general de diligencia evita zonas sin responsable y exige que cada actor adopte medidas proporcionales a los riesgos de su intervención.",
    18: "Los efectos de un sistema de alto impacto cambian con datos, contexto y uso; la evaluación, el monitoreo y la supervisión deben ser continuos.",
    19: "Datos legítimos y representativos, junto con documentación de versiones y límites, permiten detectar sesgos, explicar resultados y auditar fallas.",
    20: "La seguridad, robustez y trazabilidad reducen fallas, ciberincidentes y usos no previstos, y aportan evidencia para investigar y corregir problemas.",
    21: "La respuesta temprana a incidentes limita daños, preserva evidencia y permite corregir, restringir o retirar sistemas antes de que el riesgo se amplifique.",
    22: "La IA generativa puede facilitar suplantación, fraude y desinformación; identificar contenido sintético y prevenir abusos fortalece la confianza pública.",
    23: "Los modelos de propósito general y agentes pueden generar acciones inesperadas; permisos mínimos, registros y autorizaciones humanas reducen ese riesgo.",
    24: "El Estado debe justificar su uso de IA por finalidad pública, necesidad y proporcionalidad, porque sus decisiones pueden afectar servicios y derechos de toda la población.",
    25: "Un inventario y evaluación pública hacen visible dónde se usa IA estatal y permiten control, seguimiento y deliberación informada sobre sistemas de alto impacto.",
    26: "Las compras públicas requieren datos, auditoría, continuidad y salida del proveedor para evitar dependencia tecnológica y conservar el control institucional.",
    27: "La participación de proveedores extranjeros no debe crear vías de evasión: el control público, la fiscalización y las responsabilidades deben mantenerse.",
    28: "Cada sector conoce sus riesgos propios; reglas mínimas comunes y aplicación sectorial evitan fragmentación sin sustituir competencias existentes.",
    29: "Metas, responsables e indicadores evitan iniciativas aisladas y permiten orientar recursos escasos a resultados verificables de interés nacional.",
    30: "La IA involucra Estado, academia, empresas y sociedad; un sistema articulado reduce duplicidades y facilita cooperación alrededor de capacidades compartidas.",
    31: "La selección de sectores mediante evidencia, impacto y derechos dirige el esfuerzo público hacia problemas críticos y usos con mayor valor social.",
    32: "Comunidades, plataformas, liderazgo y transferencia convierten inversiones aisladas en capacidades que pueden difundirse y sostenerse en el tiempo.",
    33: "Sin conectividad, cómputo, datos y ciberseguridad, la adopción profundiza brechas y dependencia; la infraestructura es condición material para usar IA.",
    34: "Estándares de calidad, interoperabilidad, seguridad y portabilidad hacen que los datos puedan ser usados legítimamente y sin encerrar a las instituciones.",
    35: "Centros y redes de investigación fortalecen conocimiento local, formación avanzada y transferencia para adaptar soluciones a necesidades nacionales.",
    36: "Los entornos controlados permiten probar innovación con límites, supervisión y salida segura antes de exponer a personas o servicios a riesgos no evaluados.",
    37: "El apoyo a emprendimientos y capacidades productivas evita que el valor de la IA se concentre solo en grandes actores o proveedores externos.",
    38: "La transferencia y la propiedad intelectual con condiciones claras hacen que la cooperación deje capacidades, documentación y aprendizaje en el país.",
    39: "Poder auditar, proteger datos y sustituir proveedores reduce dependencias que pueden limitar decisiones públicas, continuidad de servicios o captura de valor.",
    40: "El cómputo y los centros de datos consumen energía, agua y materiales; la sostenibilidad debe considerarse desde la planificación tecnológica.",
    41: "La educación en IA necesita planificación inclusiva para que la tecnología fortalezca autonomía y no amplíe desigualdades de acceso o comprensión.",
    42: "Razonamiento, pensamiento crítico y alfabetización digital permiten usar IA con criterio propio, detectar errores y evitar dependencia acrítica.",
    43: "Combinar competencias para toda la población con trayectorias especializadas reduce brechas y, al mismo tiempo, forma el talento técnico necesario.",
    44: "La incorporación educativa debe demostrar beneficios pedagógicos; de otro modo puede sustituir aprendizaje, reproducir sesgos o debilitar la evaluación.",
    45: "Docentes e instituciones necesitan formación, recursos y reglas para acompañar una adopción segura, ética y coherente con el propósito educativo.",
    46: "La educación superior y la investigación deben conectarse con prioridades nacionales y sectores productivos para convertir conocimiento en soluciones pertinentes.",
    47: "Una red territorial distribuye oportunidades de formación e investigación más allá de los centros tradicionales y favorece el acceso en distintos territorios.",
    48: "Las brechas rurales, territoriales y de accesibilidad pueden excluir a parte de la población; la inclusión debe ser condición de la política educativa.",
    49: "La IA puede afectar contratación, asignación y gestión laboral; información, proporcionalidad y revisión humana previenen decisiones injustas o inexplicables.",
    50: "La transición tecnológica puede ampliar desigualdades si no se anticipan cambios y se ofrecen formación y reconversión a las personas trabajadoras.",
    51: "Los servicios públicos y esenciales deben ser accesibles e inclusivos para que la automatización no excluya a personas con barreras de acceso.",
    52: "La diversidad lingüística y cultural necesita presencia en datos, herramientas y servicios para evitar una IA que reproduzca exclusión o invisibilización.",
    53: "Voces, relatos, imágenes y conocimientos colectivos requieren respeto y control para prevenir apropiación, extracción o uso indebido de patrimonio cultural.",
    54: "Niñas, niños y adolescentes requieren protección reforzada ante perfilado abusivo, riesgos de privacidad, contenido sintético nocivo y daños a su desarrollo.",
    55: "Una instancia de dirección estratégica responde a la dispersión institucional y permite orientar la política de IA con continuidad y rendición de cuentas.",
    56: "La composición plural equilibra responsabilidad estatal y conocimiento especializado, mejorando la legitimidad y la calidad técnica de las decisiones.",
    57: "Atribuciones claras convierten la estrategia en coordinación, lineamientos, cooperación e informes públicos verificables.",
    58: "La ejecución técnica permanente evita que la gobernanza quede solo en el nivel declarativo y aporta continuidad a tareas especializadas.",
    59: "Registro, asistencia, coordinación, prospectiva y programas requieren una capacidad operativa definida para sostener la implementación cotidiana.",
    60: "Los riesgos emergentes exigen análisis interdisciplinario e independiente que complemente, sin sustituir, las responsabilidades de las autoridades.",
    61: "Conservar competencias sectoriales permite aplicar conocimiento especializado, mientras la coordinación asegura mínimos comunes de derechos y control.",
    62: "La participación de universidades, empresas y sociedad civil incorpora experiencia diversa, fortalece la legitimidad y mejora la detección de impactos.",
    63: "La articulación territorial adapta la política a necesidades locales y evita que las capacidades y beneficios se concentren en pocos espacios.",
    64: "La prospectiva permite actualizar instrumentos ante cambios tecnológicos verificables, sin esperar a que los riesgos se vuelvan irreversibles.",
    65: "Un registro aporta visibilidad sobre sistemas públicos y de alto impacto, condición para el control, la transparencia y la rendición de cuentas.",
    66: "La evaluación y auditoría periódicas detectan efectos, sesgos e incidentes que pueden no ser visibles durante el diseño o la puesta en marcha.",
    67: "Las obligaciones solo protegen si existen medidas para investigar, corregir, restringir o retirar sistemas cuando se identifican incumplimientos o daños.",
    68: "Un régimen de infracciones y sanciones con debido proceso desincentiva incumplimientos y da eficacia práctica a las salvaguardas.",
    69: "Sin recursos previstos, las obligaciones pueden quedar declarativas; fuentes trazables permiten una implementación gradual bajo control público.",
    70: "La cooperación debe cerrar brechas de conocimiento, infraestructura y formación mediante transferencia efectiva, no generar dependencia permanente.",
    71: "La integridad protege la independencia regulatoria y evita que aportes o cooperación condicionen normas, inspecciones, contrataciones o sanciones.",
    72: "Metas, indicadores y evaluación anual permiten verificar avances, ajustar prioridades y hacer visible el uso de los recursos públicos.",
    73: "Las normas técnicas hacen operativa la ley, pero deben mantener las garantías y no modificar por vía reglamentaria sus elementos esenciales."
};
// Fuente legal primaria: “Ley Nacional de Inteligencia Artificial.pdf” proporcionado.
// Objetivo, impacto y resultado son síntesis explicativas para exposición pública.
const articleSeeds = [
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
export const articles = articleSeeds.map((article) => ({
    ...article,
    justification: articleJustifications[article.number]
}));
export const articleByNumber = new Map(articles.map((article) => [article.number, article]));
const chapterDetails = {
    "I:1": { objective: "Definir el objeto, prioridad, finalidades, alcance y relación de la propuesta con otras normas.", justification: "Un marco común evita vacíos de responsabilidad y orienta el desarrollo de IA hacia capacidades nacionales, derechos y fines legítimos." },
    "I:2": { objective: "Precisar las definiciones esenciales y los principios rectores aplicables a los sistemas de IA.", justification: "Conceptos y principios compartidos permiten aplicar obligaciones de forma coherente aun cuando la tecnología evolucione." },
    "II:1": { objective: "Reconocer derechos y protección reforzada para las personas afectadas por sistemas de IA.", justification: "Información, explicación, revisión humana y reparación responden a la opacidad y a los impactos desproporcionados sobre grupos vulnerables." },
    "II:2": { objective: "Clasificar los sistemas por riesgo y prohibir prácticas incompatibles con dignidad, autonomía e igualdad.", justification: "Los controles proporcionales concentran esfuerzos donde el daño es mayor; los riesgos irreversibles requieren límites claros antes de que ocurran." },
    "III:1": { objective: "Exigir diligencia, gestión de riesgos, datos adecuados, seguridad, trazabilidad e intervención ante incidentes.", justification: "Los riesgos cambian durante todo el ciclo de vida; evaluación, documentación y corrección hacen verificable la responsabilidad." },
    "III:2": { objective: "Regular el uso, inventario, contratación y coordinación sectorial de IA en el Estado.", justification: "Las decisiones públicas requieren finalidad, proporcionalidad, transparencia y control institucional para no trasladar riesgos a la ciudadanía." },
    "IV:1": { objective: "Organizar una estrategia nacional, un sistema tecnocientífico y prioridades de intervención en IA.", justification: "Metas, responsables e indicadores evitan iniciativas dispersas y enfocan recursos en problemas públicos con evidencia e impacto." },
    "IV:2": { objective: "Fortalecer infraestructura, datos, investigación, innovación, emprendimientos, transferencia y soberanía tecnológica.", justification: "Sin capacidades propias, la adopción puede profundizar brechas y dependencia; la infraestructura y el talento permiten generar valor local." },
    "V:1": { objective: "Impulsar formación, competencias fundamentales, especialización, docencia, educación superior e investigación en IA.", justification: "La educación planificada previene una adopción acrítica y permite que la IA fortalezca aprendizaje, pensamiento crítico y autonomía." },
    "V:2": { objective: "Articular una red territorial de talento y medidas de inclusión educativa y de accesibilidad.", justification: "Distribuir oportunidades de formación e investigación reduce brechas rurales, territoriales y de acceso para que el beneficio no se concentre." },
    "VI:1": { objective: "Proteger derechos laborales y promover una transición justa frente a los cambios que produce la IA.", justification: "La automatización puede modificar oportunidades y condiciones de trabajo; información, revisión humana, formación y reconversión previenen desigualdades." },
    "VI:2": { objective: "Asegurar inclusión, respeto a lenguas y cultura, protección de conocimientos colectivos y salvaguardas para la niñez.", justification: "Los impactos de IA no son neutrales: una protección reforzada evita exclusión, apropiación cultural y daños a grupos con mayor vulnerabilidad." },
    "VII:1": { objective: "Crear y organizar el Consejo Nacional de Inteligencia Artificial como instancia de dirección estratégica.", justification: "Una conducción plural reduce la fragmentación institucional y conecta la política con conocimiento técnico, coordinación y rendición de cuentas." },
    "VII:2": { objective: "Establecer la Unidad Operativa, la asesoría interdisciplinaria y la coordinación sectorial y territorial.", justification: "La gobernanza necesita capacidad técnica continua, evidencia independiente y articulación para que las obligaciones se implementen de manera coherente." },
    "VIII:1": { objective: "Crear instrumentos de registro, evaluación, auditoría, fiscalización, medidas e infracciones para sistemas relevantes.", justification: "La transparencia y la evaluación permiten detectar fallas, sesgos e incumplimientos y corregirlos antes de que los daños se amplifiquen." },
    "VIII:2": { objective: "Organizar financiamiento, cooperación, integridad, planificación, evaluación y reglamentación técnica para la implementación.", justification: "Los principios requieren recursos, transferencia de capacidades e independencia de decisiones para convertirse en resultados sostenibles y verificables." }
};
const romanChapters = ["I", "II"];
let searchIndexPromise;
function normalize(value) {
    return value
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}
function titleMatches(value, title, index) {
    const requested = normalize(value);
    return requested === normalize(title.numero) || requested === String(index + 1);
}
async function loadSearchIndex() {
    if (!searchIndexPromise) {
        searchIndexPromise = fetch("./assets/data/ley-search-index.json")
            .then(async (response) => {
            if (!response.ok)
                throw new Error("No se pudo cargar el índice de la Ley.");
            return response.json();
        })
            .then((source) => {
            const titleMap = new Map(source.titulos.map((title, index) => [title.numero, { ...title, number: index + 1 }]));
            const chapters = source.titulos.flatMap((title, titleIndex) => title.capitulos.map((chapter, chapterIndex) => {
                const key = `${title.numero}:${chapterIndex + 1}`;
                const detail = chapterDetails[key];
                return {
                    kind: "chapter",
                    id: `chapter-${title.numero}-${chapterIndex + 1}`,
                    titleRoman: title.numero,
                    titleNumber: titleIndex + 1,
                    titleName: title.nombre,
                    chapterRoman: romanChapters[chapterIndex] ?? String(chapterIndex + 1),
                    chapterName: chapter.nombre,
                    range: chapter.rango,
                    objective: detail?.objective ?? title.objetivo,
                    justification: detail?.justification ?? "La propuesta articula capacidades, garantías y mecanismos de implementación para responder a los riesgos y oportunidades de la IA."
                };
            }));
            const articles = source.articulos.map((article) => {
                const title = titleMap.get(article.titulo);
                return {
                    kind: "article",
                    id: `article-${article.n}`,
                    number: article.n,
                    titleRoman: article.titulo,
                    titleNumber: title?.number ?? 0,
                    titleName: title?.nombre ?? "",
                    legalTitle: article.nombre,
                    objective: article.resumen,
                    justification: articleJustifications[article.n] ?? "La medida permite que el desarrollo y uso de IA mantengan garantías de derechos, responsabilidad y capacidad institucional."
                };
            });
            return [...chapters, ...articles];
        });
    }
    return searchIndexPromise;
}
export function resultHeading(result) {
    if (result.kind === "article")
        return `Artículo ${result.number}. ${result.legalTitle}`;
    return `Título ${result.titleRoman} · Capítulo ${result.chapterRoman}. ${result.chapterName}`;
}
export function resultContext(result) {
    if (result.kind === "article")
        return `Título ${result.titleRoman} · ${result.titleName}`;
    return `${result.range} · ${result.titleName}`;
}
export async function searchLaw(term) {
    const query = normalize(term);
    if (!query)
        return [];
    const index = await loadSearchIndex();
    const articles = index.filter((item) => item.kind === "article");
    const chapters = index.filter((item) => item.kind === "chapter");
    const articleMatch = query.match(/^(?:art(?:iculo)?\.?\s*)?(\d{1,2})$/);
    if (articleMatch)
        return articles.filter((article) => article.number === Number(articleMatch[1]));
    const chapterMatch = query.match(/^cap(?:itulo)?\s+([\divxlcdm]+)(?:\s*(?:del|de)?\s*titulo\s+([\divxlcdm]+))?$/i);
    if (chapterMatch) {
        const chapterToken = normalize(chapterMatch[1]);
        const titleToken = chapterMatch[2] ? normalize(chapterMatch[2]) : null;
        return chapters.filter((chapter) => {
            const matchesChapter = chapterToken === normalize(chapter.chapterRoman) || chapterToken === String(romanChapters.indexOf(chapter.chapterRoman) + 1);
            const matchesTitle = !titleToken || titleToken === normalize(chapter.titleRoman) || titleToken === String(chapter.titleNumber);
            return matchesChapter && matchesTitle;
        });
    }
    const titleMatch = query.match(/^titulo\s+([\divxlcdm]+)$/i);
    if (titleMatch) {
        const requested = titleMatch[1];
        return chapters.filter((chapter) => requested === normalize(chapter.titleRoman) || requested === String(chapter.titleNumber));
    }
    return index.filter((result) => normalize(`${resultHeading(result)} ${resultContext(result)} ${result.objective} ${result.justification}`).includes(query));
}
