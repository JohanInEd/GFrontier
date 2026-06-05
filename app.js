/* ==========================================================
   CERW - CRITERIA-BASED EVALUATION WORKSPACE
   Actual Corporation Programs: MNC Razonamiento Cuantitativo
   ========================================================== */

// --- 1. PREDEFINED COLOMBIAN MNC DATA STRUCTURES ---
const PROGRAM_HIERARCHY = {
  "Desarrollo de software y aplicaciones móviles": {
    level: "Técnico Laboral (MNC)",
    cuoc: "2512 - Desarrolladores y Analistas de Software y Aplicaciones",
    signatures: {
      "Razonamiento cuantitativo": {
        students: [
          { id: "S1", name: "Alexander Wright", tokens: 3 },
          { id: "S2", name: "Bianca Vance", tokens: 2 },
          { id: "S3", name: "Carlos Mendez", tokens: 2 },
          { id: "S4", name: "Diana Prince", tokens: 1 },
          { id: "S5", name: "Evan Fletcher", tokens: 3 }
        ],
        criteria: {
          "C1": { name: "Modelamiento Algebraico: Modelar expresiones algebraicas y lógicas de acuerdo con los requisitos del diseño de algoritmos", type: "Core", element: "Elemento 1: Formulación Algorítmica y Lógica" },
          "C2": { name: "Lógica Booleana: Resolver operaciones de tablas de verdad y lógica binaria de acuerdo con las reglas de flujos de control", type: "Core", element: "Elemento 1: Formulación Algorítmica y Lógica" },
          "C3": { name: "Complejidad Computacional: Calcular la complejidad temporal básica (Notación Big-O) de bucles para estimar la eficiencia estructural", type: "Core", element: "Elemento 2: Estimación de Eficiencia Estructural" },
          "A1": { name: "Geometría de Pantalla: Modelar planos de coordenadas cartesianas para determinar la georreferenciación en layouts y GPS", type: "Advanced", element: "Elemento 3: Modelado de Entornos y Analítica de Sistemas" },
          "A2": { name: "Analítica de Rendimiento: Representar datos cuantitativos de latencia y tiempos de respuesta de acuerdo con las especificaciones técnicas", type: "Advanced", element: "Elemento 3: Modelado de Entornos y Analítica de Sistemas" },
          "T1": { name: "Documentación Técnica Cuantitativa: Redactar reportes técnicos de análisis métricos cuantitativos empleando vocabulario técnico y asertivo", type: "Transversal", element: "Elemento Transversal: Comunicación y Calidad Laboral" },
          "T2": { name: "Resolución Colaborativa de Errores: Colaborar en la corrección lógica de fallas matemáticas en código mediante depuración grupal", type: "Transversal", element: "Elemento Transversal: Comunicación y Calidad Laboral" }
        },
        events: [
          "Taller 1: Lógica y Algoritmos", 
          "Evaluación 1: Parcial", 
          "Taller 2: Estructuras", 
          "Evaluación 2: Complejidad", 
          "Proyecto Final: Sustentación", 
          "Caso Final: Georreferenciación Móvil"
        ],
        activeCriteriaByEvent: {
          "Taller 1: Lógica y Algoritmos": ["C1", "C2", "T1"],
          "Evaluación 1: Parcial": ["C1", "C2", "T1"],
          "Taller 2: Estructuras": ["C1", "C2", "C3", "T2"],
          "Evaluación 2: Complejidad": ["C1", "C2", "C3", "A1", "T1", "T2"],
          "Proyecto Final: Sustentación": ["C1", "C2", "C3", "A1", "A2", "T1", "T2"],
          "Caso Final: Georreferenciación Móvil": ["C1", "C2", "C3", "A1", "A2", "T1", "T2"]
        },
        cuts: {
          "Nota 1": {
            weight: 0.3,
            events: {
              "Taller 1: Lógica y Algoritmos": { weight: 0.4, isExam: false },
              "Evaluación 1: Parcial": { weight: 0.6, isExam: true }
            }
          },
          "Nota 2": {
            weight: 0.3,
            events: {
              "Taller 2: Estructuras": { weight: 0.4, isExam: false },
              "Evaluación 2: Complejidad": { weight: 0.6, isExam: true }
            }
          },
          "Nota 3": {
            weight: 0.4,
            events: {
              "Proyecto Final: Sustentación": { weight: 0.3, isExam: false },
              "Caso Final: Georreferenciación Móvil": { weight: 0.7, isExam: true }
            }
          }
        }
      }
    }
  },
  "Desarrollo multimedia y comunicación gráfica": {
    level: "Técnico Laboral (MNC)",
    cuoc: "2166 - Diseñadores Gráficos y Multimedia",
    signatures: {
      "Razonamiento cuantitativo": {
        students: [
          { id: "S6", name: "Fiona Gallagher", tokens: 3 },
          { id: "S7", name: "Gabriel Torres", tokens: 3 },
          { id: "S8", name: "Hugo Martinez", tokens: 3 },
          { id: "S9", name: "Isabela Rios", tokens: 3 },
          { id: "S10", name: "Jorge Perez", tokens: 3 }
        ],
        criteria: {
          "C1": { name: "Proporciones y Ratios Visuales: Calcular relaciones de aspecto y escalas de encuadre según las especificaciones del diseño visual", type: "Core", element: "Elemento 1: Composición y Escalas Gráficas" },
          "C2": { name: "Vectores y Transformaciones 2D/3D: Resolver operaciones vectoriales básicas para transformaciones de traslación y rotación gráfica", type: "Core", element: "Elemento 1: Composición y Escalas Gráficas" },
          "C3": { name: "Tasas de Transferencia (Bitrate): Calcular tasas de compresión de audio y video de acuerdo con los requisitos del diseño de algoritmos", type: "Core", element: "Elemento 2: Compresión y Bitrates" },
          "A1": { name: "Física de Iluminación and Sombreado: Modelar la incidencia de luz en motores de renderizado usando ecuaciones físicas y matemáticas", type: "Advanced", element: "Elemento 3: Renderizado e Interacción UX" },
          "A2": { name: "Analítica de Interfaces (UX): Analizar métricas cuantitativas de usabilidad en interfaces web conforme a tiempos y tasas de rebote", type: "Advanced", element: "Elemento 3: Renderizado e Interacción UX" },
          "T1": { name: "Sustentación Técnica Cuantitativa: Presentar informes técnicos de compresión y pesos de assets digitales de forma estructurada", type: "Transversal", element: "Elemento Transversal: Optimización de Assets" },
          "T2": { name: "Optimización de Recursos Gráficos: Optimizar recursos gráficos y pesos de assets digitales de acuerdo con los estándares establecidos", type: "Transversal", element: "Elemento Transversal: Optimización de Assets" }
        },
        events: [
          "Taller 1: Vectores y Proporciones",
          "Evaluación 1: Fundamentos",
          "Taller 2: Composición",
          "Evaluación 2: Tasas y Bitrates",
          "Taller 3: Optimización",
          "Proyecto Final: Optimización de Assets"
        ],
        activeCriteriaByEvent: {
          "Taller 1: Vectores y Proporciones": ["C1", "C2", "T2"],
          "Evaluación 1: Fundamentos": ["C1", "C2", "T2"],
          "Taller 2: Composición": ["C1", "C2", "C3", "T2"],
          "Evaluación 2: Tasas y Bitrates": ["C1", "C2", "C3", "A1", "T2"],
          "Taller 3: Optimización": ["C1", "C2", "C3", "A1", "A2", "T1", "T2"],
          "Proyecto Final: Optimización de Assets": ["C1", "C2", "C3", "A1", "A2", "T1", "T2"]
        },
        cuts: {
          "Nota 1": {
            weight: 0.3,
            events: {
              "Taller 1: Vectores y Proporciones": { weight: 0.4, isExam: false },
              "Evaluación 1: Fundamentos": { weight: 0.6, isExam: true }
            }
          },
          "Nota 2": {
            weight: 0.3,
            events: {
              "Taller 2: Composición": { weight: 0.4, isExam: false },
              "Evaluación 2: Tasas y Bitrates": { weight: 0.6, isExam: true }
            }
          },
          "Nota 3": {
            weight: 0.4,
            events: {
              "Taller 3: Optimización": { weight: 0.3, isExam: false },
              "Proyecto Final: Optimización de Assets": { weight: 0.7, isExam: true }
            }
          }
        }
      }
    }
  }
};

// Initial state evaluations pre-loaded for software and multimedia student rosters
const SEED_EVALUATIONS = {
  // Corte 1
  "S1_C1_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S1_C2_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S1_T1_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S1_C1_Evaluación 1: Parcial": { state: "Met" },
  "S1_C2_Evaluación 1: Parcial": { state: "Met" },
  "S1_T1_Evaluación 1: Parcial": { state: "Met" },

  "S2_C1_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S2_C2_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S2_T1_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S2_C1_Evaluación 1: Parcial": { state: "Met" },
  "S2_C2_Evaluación 1: Parcial": { state: "Met" },
  "S2_T1_Evaluación 1: Parcial": { state: "Met" },

  // S3 Carlos Mendez is Absent from the C1 Exam and has supletorio Pending payment!
  "S3_C1_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S3_C2_Taller 1: Lógica y Algoritmos": { state: "Not Met" },
  "S3_T1_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S3_C1_Evaluación 1: Parcial": { state: "Absent", supletorioState: "Pending" },
  "S3_C2_Evaluación 1: Parcial": { state: "Absent", supletorioState: "Pending" },
  "S3_T1_Evaluación 1: Parcial": { state: "Absent", supletorioState: "Pending" },

  // S5 Evan Fletcher is Absent from the C1 Exam and has Paid the supletorio physically!
  "S5_C1_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S5_C2_Taller 1: Lógica y Algoritmos": { state: "Met" },
  "S5_T1_Taller 1: Lógica y Algoritmos": { state: "Pending" },
  "S5_C1_Evaluación 1: Parcial": { state: "Absent", supletorioState: "Paid" },
  "S5_C2_Evaluación 1: Parcial": { state: "Absent", supletorioState: "Paid" },
  "S5_T1_Evaluación 1: Parcial": { state: "Absent", supletorioState: "Paid" },

  // Corte 2
  "S1_C1_Evaluación 2: Complejidad": { state: "Met" },
  "S1_C2_Evaluación 2: Complejidad": { state: "Met" },
  "S1_C3_Evaluación 2: Complejidad": { state: "Not Met" },
  "S1_A1_Evaluación 2: Complejidad": { state: "Not Met" },
  "S1_T1_Evaluación 2: Complejidad": { state: "Met" },
  "S1_T2_Evaluación 2: Complejidad": { state: "Met" },

  "S2_C1_Evaluación 2: Complejidad": { state: "Met" },
  "S2_C2_Evaluación 2: Complejidad": { state: "Met" },
  "S2_C3_Evaluación 2: Complejidad": { state: "Met" },
  "S2_A1_Evaluación 2: Complejidad": { state: "Met" },
  "S2_A2_Evaluación 2: Complejidad": { state: "Not Met" },
  "S2_T1_Evaluación 2: Complejidad": { state: "Met" },
  "S2_T2_Evaluación 2: Complejidad": { state: "Not Met" },

  "S3_C1_Evaluación 2: Complejidad": { state: "Met" },
  "S3_C2_Evaluación 2: Complejidad": { 
    state: "Disputed", 
    defenseText: "En el punto 3 de la evaluación, mi expresión simplificada usando Álgebra de Boole es totalmente equivalente a la planteada por el docente en la clave." 
  },
  "S3_C3_Evaluación 2: Complejidad": { state: "Met" },
  "S3_A1_Evaluación 2: Complejidad": { state: "Met" },
  "S3_T1_Evaluación 2: Complejidad": { state: "Met" },
  "S3_T2_Evaluación 2: Complejidad": { state: "Pending" },

  // Corte 3
  "S4_C1_Caso Final: Georreferenciación Móvil": { state: "Met" },
  "S4_C2_Caso Final: Georreferenciación Móvil": { state: "Met" },
  "S4_C3_Caso Final: Georreferenciación Móvil": { state: "Met" },
  "S4_A1_Caso Final: Georreferenciación Móvil": { state: "Met" },
  "S4_A2_Caso Final: Georreferenciación Móvil": { state: "Met" },
  "S4_T1_Caso Final: Georreferenciación Móvil": { state: "Met" },
  "S4_T2_Caso Final: Georreferenciación Móvil": { state: "Met" },

  // S1 is absent from final exam and has paid no supletorio (None)
  "S1_C1_Caso Final: Georreferenciación Móvil": { state: "Absent", supletorioState: "None" },

  // Multimedia - Razonamiento Cuantitativo
  "S6_C1_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S6_C2_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S6_C3_Evaluación 2: Tasas y Bitrates": { state: "Not Met" },
  "S6_A1_Evaluación 2: Tasas y Bitrates": { state: "Not Met" },
  "S6_T2_Evaluación 2: Tasas y Bitrates": { state: "Met" },

  "S7_C1_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S7_C2_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S7_C3_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S7_A1_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S7_T2_Evaluación 2: Tasas y Bitrates": { state: "Met" },

  "S9_C1_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S9_C2_Evaluación 2: Tasas y Bitrates": { 
    state: "Disputed", 
    defenseText: "El cálculo del bitrate de audio propuesto en mi respuesta toma en cuenta los canales estéreo (factor x2), lo cual es físicamente correcto en la práctica multimedia."
  },
  "S9_C3_Evaluación 2: Tasas y Bitrates": { state: "Met" },
  "S9_A1_Evaluación 2: Tasas y Bitrates": { state: "Pending" },
  "S9_T2_Evaluación 2: Tasas y Bitrates": { state: "Met" }
};

// --- 2. PERSISTENCE LAYER ---
class LocalState {
  constructor() {
    this.load();
  }

  load() {
    const saved = localStorage.getItem("CERW_corp_state_v6");
    if (saved) {
      try {
        this.data = JSON.parse(saved);
        if (!this.data.geminiApiKey) {
          this.data.geminiApiKey = "AIzaSyBKnsF1Hp4HoiSd31NobFqV8ZFtQrqQY-Y";
          this.save();
        }
        if (!this.data.activeTab) {
          this.data.activeTab = "dashboard";
          this.save();
        }
        if (!this.data.managerSubjects) {
          this.data.managerSubjects = ["Razonamiento cuantitativo", "Ingles", "Comunicacion oral y escrita", "Competencias digitales"];
          this.save();
        }
        if (!this.data.habilitaciones) {
          this.data.habilitaciones = {};
          this.save();
        }
        if (!this.data.habilitacionStates) {
          this.data.habilitacionStates = {
            "S4_Razonamiento cuantitativo": "Pending",
            "S1_Razonamiento cuantitativo": "Paid"
          };
          this.save();
        }
        return;
      } catch (e) {
        console.error("Failed to load local storage state:", e);
      }
    }
    this.resetToDefaults();
  }

  save() {
    localStorage.setItem("CERW_corp_state_v6", JSON.stringify(this.data));
  }

  resetToDefaults() {
    this.data = {
      selectedProgram: "Desarrollo de software y aplicaciones móviles",
      selectedSignature: "Razonamiento cuantitativo",
      selectedEvent: "Taller 1: Lógica y Algoritmos",
      programs: JSON.parse(JSON.stringify(PROGRAM_HIERARCHY)),
      evaluations: JSON.parse(JSON.stringify(SEED_EVALUATIONS)),
      theme: "dark",
      geminiApiKey: "AIzaSyBKnsF1Hp4HoiSd31NobFqV8ZFtQrqQY-Y",
      activeTab: "dashboard",
      managerSubjects: ["Razonamiento cuantitativo", "Ingles", "Comunicacion oral y escrita", "Competencias digitales"],
      habilitaciones: {},
      habilitacionStates: {
        "S4_Razonamiento cuantitativo": "Pending",
        "S1_Razonamiento cuantitativo": "Paid"
      }
    };
    this.save();
  }
}

const localState = new LocalState();

// --- 3. DOM SELECTIONS CACHE ---
const DOM = {
  body: document.body,
  programSelector: document.getElementById("program-selector"),
  moduleSelector: document.getElementById("module-selector"),
  eventSelector: document.getElementById("event-selector"),
  addEventBtn: document.getElementById("add-event-btn"),
  themeToggle: document.getElementById("theme-toggle"),
  resetDbBtn: document.getElementById("reset-db-btn"),
  
  // Ribbon Badges
  valClassSize: document.getElementById("val-class-size"),
  radialProgressBar: document.getElementById("radial-progress-bar"),
  radialProgressText: document.getElementById("radial-progress-text"),
  valGradingCells: document.getElementById("val-grading-cells"),
  valDisputeCount: document.getElementById("val-dispute-count"),
  inboxBadgeCount: document.getElementById("inbox-badge-count"),
  valClassHealth: document.getElementById("val-class-health"),
  
  // Primary Tabs Navigation
  tabBtnGrading: document.getElementById("tab-btn-grading"),
  tabBtnMncSuite: document.getElementById("tab-btn-mnc-suite"),
  viewGrading: document.getElementById("view-grading"),
  viewMncSuite: document.getElementById("view-mnc-suite"),
  
  // Core layout blocks
  priorityInboxSidebar: document.getElementById("priority-inbox-sidebar"),
  toggleInboxBtn: document.getElementById("toggle-inbox-btn"),
  priorityInboxContainer: document.getElementById("priority-inbox-container"),
  inboxSearch: document.getElementById("inbox-search"),
  inboxFilterType: document.getElementById("inbox-filter-type"),
  inboxFilterUrgency: document.getElementById("inbox-filter-urgency"),
  emptyInboxState: document.getElementById("empty-inbox-state"),
  matrixModuleEventText: document.getElementById("matrix-module-event-text"),
  gradingMatrixTable: document.getElementById("grading-matrix-table"),
  matrixHeaderRow: document.getElementById("matrix-header-row"),
  matrixTopHeaderRow: document.getElementById("matrix-top-header-row"),
  matrixBody: document.getElementById("matrix-body"),
  
  // Matrix Criterion Inspector Elements
  inspectorPlaceholder: document.getElementById("inspector-placeholder"),
  inspectorContent: document.getElementById("inspector-content"),
  inspectorCodeType: document.getElementById("inspector-code-type"),
  inspectorElement: document.getElementById("inspector-element"),
  inspectorName: document.getElementById("inspector-name"),
  inspectorDesc: document.getElementById("inspector-desc"),
  
  // Consolidated MNC Control Suite Elements
  appMainContent: document.querySelector(".app-main-content"),
  matrixConfigToggleBtn: document.getElementById("matrix-config-toggle-btn"),
  mainDrawerTabBtns: document.querySelectorAll(".main-drawer-tab-btn"),
  mainTabContentAi: document.getElementById("main-tab-content-ai"),
  mainTabContentConfig: document.getElementById("main-tab-content-config"),
  mainTabContentAddManual: document.getElementById("main-tab-content-add-manual"),
  
  // Manual Criteria Input Form Elements
  formAddCriterion: document.getElementById("form-add-criterion"),
  newCritCode: document.getElementById("new-crit-code"),
  newCritType: document.getElementById("new-crit-type"),
  newCritElement: document.getElementById("new-crit-element"),
  newCritName: document.getElementById("new-crit-name"),
  newCritDesc: document.getElementById("new-crit-desc"),
  
  configSidebarConfirmBtn: document.getElementById("config-sidebar-confirm-btn"),
  configTabBtns: document.querySelectorAll(".config-tab-btn"),
  configTabDesc: document.getElementById("config-tab-desc"),
  configActiveEventName: document.getElementById("config-active-event-name"),
  coreCriteriaList: document.getElementById("core-criteria-list"),
  advancedCriteriaList: document.getElementById("advanced-criteria-list"),
  transversalCriteriaList: document.getElementById("transversal-criteria-list"),
  badgeCountCore: document.getElementById("badge-count-core"),
  badgeCountAdvanced: document.getElementById("badge-count-advanced"),
  badgeCountTransversal: document.getElementById("badge-count-transversal"),
  configCategoryDot: document.getElementById("config-category-dot"),
  configCategoryTitle: document.getElementById("config-category-title"),
  configCategoryPill: document.getElementById("config-category-pill"),

  // Common Drawers & Dialogs
  appealDrawerOverlay: document.getElementById("appeal-drawer-overlay"),
  appealDrawer: document.getElementById("appeal-drawer"),
  appealDrawerClose: document.getElementById("appeal-drawer-close"),
  appealStudentName: document.getElementById("appeal-student-name"),
  appealCriterionCode: document.getElementById("appeal-criterion-code"),
  appealEventName: document.getElementById("appeal-event-name"),
  appealStudentTokens: document.getElementById("appeal-student-tokens"),
  appealDefenseText: document.getElementById("appeal-defense-text"),
  appealBtnMaintain: document.getElementById("appeal-btn-maintain"),
  appealBtnApprove: document.getElementById("appeal-btn-approve"),
  
  // Student Portal Simulator
  tabBtnStudent: document.getElementById("tab-btn-student"),
  viewStudentSimulator: document.getElementById("view-student-simulator"),
  simStudentPicker: document.getElementById("sim-student-picker"),
  simScreenTokenDisplay: document.getElementById("sim-screen-token-display"),
  simScreenTokenDisplayList: document.getElementById("sim-screen-token-display-list"),
  simChecklistContainer: document.getElementById("sim-checklist-container"),
  simScreenTitle: document.getElementById("sim-screen-title"),
  simAppealEmptyState: document.getElementById("sim-appeal-empty-state"),
  simAppealFormContainer: document.getElementById("sim-appeal-form-container"),
  simAppealCritName: document.getElementById("sim-appeal-crit-name"),
  simAppealEventName: document.getElementById("sim-appeal-event-name"),
  simAppealDefenseInput: document.getElementById("sim-appeal-defense-input"),
  simAppealCancelBtn: document.getElementById("sim-appeal-cancel-btn"),
  formSubmitAppeal: document.getElementById("form-submit-appeal"),
  simMyAppealsList: document.getElementById("sim-my-appeals-list"),
  
  // Student Portal Sub-Tabs
  studentTabDashboard: document.getElementById("student-tab-dashboard"),
  studentTabCompetencies: document.getElementById("student-tab-competencies"),
  studentDashboardPanel: document.getElementById("student-dashboard-panel"),
  studentCompetenciesPanel: document.getElementById("student-competencies-panel"),
  studentTabBoletin: document.getElementById("student-tab-boletin"),
  studentBoletinPanel: document.getElementById("student-boletin-panel"),
  simBoletinTbody: document.getElementById("sim-boletin-tbody"),
  simBoletinSummaryBox: document.getElementById("sim-boletin-summary-box"),
  simHabilitacionBanner: document.getElementById("sim-habilitacion-banner"),
  simSupletoriosList: document.getElementById("sim-supletorios-list"),
  
  // Student Dashboard Details
  simDashboardGradeStatus: document.getElementById("sim-dashboard-grade-status"),
  simDashboardGradeDetail: document.getElementById("sim-dashboard-grade-detail"),
  simDashboardGradeBadge: document.getElementById("sim-dashboard-grade-badge"),
  simDashboardCoreFraction: document.getElementById("sim-dashboard-core-fraction"),
  simDashboardCoreBar: document.getElementById("sim-dashboard-core-bar"),
  simDashboardCoreStatusText: document.getElementById("sim-dashboard-core-status-text"),
  simDashboardTokenDisplay: document.getElementById("sim-dashboard-token-display"),
  simCompMyGrade: document.getElementById("sim-comp-my-grade"),
  simCompMyBar: document.getElementById("sim-comp-my-bar"),
  simCompAvgGrade: document.getElementById("sim-comp-avg-grade"),
  simCompAvgBar: document.getElementById("sim-comp-avg-bar"),
  simCompMaxGrade: document.getElementById("sim-comp-max-grade"),
  simCompMaxBar: document.getElementById("sim-comp-max-bar"),
  simCompStandingBanner: document.getElementById("sim-comp-standing-banner"),
  simRecommendationsList: document.getElementById("sim-recommendations-list"),

  
  dialogAddEvent: document.getElementById("dialog-add-event"),
  newEventName: document.getElementById("new-event-name"),
  closeAddEventBtn: document.getElementById("close-add-event-btn"),

  // Phase 2 DOM Elements
  aiAnalyzerToggleBtn: document.getElementById("ai-analyzer-toggle-btn"),
  aiUploadDropzone: document.getElementById("ai-upload-dropzone"),
  aiFileInput: document.getElementById("ai-file-input"),
  aiSampleSelector: document.getElementById("ai-sample-selector"),
  aiScannerSection: document.getElementById("ai-scanner-section"),
  aiLogTerminal: document.getElementById("ai-log-terminal"),
  aiReportView: document.getElementById("ai-report-view"),
  aiRadialBar: document.getElementById("ai-radial-bar"),
  aiRadialText: document.getElementById("ai-radial-text"),
  aiExtractedProgramName: document.getElementById("ai-extracted-program-name"),
  aiAlignmentSummary: document.getElementById("ai-alignment-summary"),
  aiCompetenciesContainer: document.getElementById("ai-competencies-container"),
  aiApplyBtn: document.getElementById("ai-apply-btn"),
  aiDrawerFooter: document.getElementById("ai-drawer-footer"),

  // Phase 3 DOM Elements
  aiKeyToggleHeader: document.getElementById("ai-key-toggle-header"),
  aiKeyBody: document.getElementById("ai-key-body"),
  keyArrow: document.getElementById("key-arrow"),
  aiApiKeyInput: document.getElementById("ai-api-key-input"),
  aiApiKeyToggleView: document.getElementById("ai-api-key-toggle-view"),
  aiStatusBadge: document.getElementById("ai-status-badge"),
  aiDropzoneLabel: document.getElementById("ai-dropzone-label"),

  // Dashboard DOM Elements
  tabBtnDashboard: document.getElementById("tab-btn-dashboard"),
  viewDashboard: document.getElementById("view-dashboard"),
  dashValSize: document.getElementById("dash-val-size"),
  dashValProgressText: document.getElementById("dash-val-progress-text"),
  dashValAppeals: document.getElementById("dash-val-appeals"),
  dashValHealth: document.getElementById("dash-val-health"),
  dashActiveEventBadge: document.getElementById("dash-active-event-badge"),
  dashProgressLabel: document.getElementById("dash-progress-label"),
  dashProgressPct: document.getElementById("dash-progress-pct"),
  dashProgressFill: document.getElementById("dash-progress-fill"),
  dashBtnGoGrading: document.getElementById("dash-btn-go-grading"),
  dashAtRiskFeed: document.getElementById("dash-at-risk-feed"),
  dashEmptyAtRisk: document.getElementById("dash-empty-at-risk"),
  dashAppealsFeed: document.getElementById("dash-appeals-feed"),
  dashEmptyAppeals: document.getElementById("dash-empty-appeals"),
  dashHeatmapContainer: document.getElementById("dash-heatmap-container"),
  histValFail: document.getElementById("hist-val-fail"),
  histBarFail: document.getElementById("hist-bar-fail"),
  histValPass: document.getElementById("hist-val-pass"),
  histBarPass: document.getElementById("hist-bar-pass"),
  histValMastery: document.getElementById("hist-val-mastery"),
  histBarMastery: document.getElementById("hist-bar-mastery"),
  histValPerfect: document.getElementById("hist-val-perfect"),
  histBarPerfect: document.getElementById("hist-bar-perfect"),
  
  // Manager Suite DOM Elements
  tabBtnManagerSuite: document.getElementById("tab-btn-manager-suite"),
  viewManagerSuite: document.getElementById("view-manager-suite"),
  mgrProgramName: document.getElementById("mgr-program-name"),
  mgrSubjectsContainer: document.getElementById("mgr-subjects-container"),
  mgrNewSubjectInput: document.getElementById("mgr-new-subject-input"),
  mgrAddSubjectBtn: document.getElementById("mgr-add-subject-btn"),
  mgrUploadDropzone: document.getElementById("mgr-upload-dropzone"),
  mgrFileInput: document.getElementById("mgr-file-input"),
  mgrDropzoneLabel: document.getElementById("mgr-dropzone-label"),
  mgrPasteText: document.getElementById("mgr-paste-text"),
  mgrHarmonizeBtn: document.getElementById("mgr-harmonize-btn"),
  mgrEmptyResults: document.getElementById("mgr-empty-results"),
  mgrScannerSection: document.getElementById("mgr-scanner-section"),
  mgrLogTerminal: document.getElementById("mgr-log-terminal"),
  mgrReportView: document.getElementById("mgr-report-view"),
  mgrReportProgramTitle: document.getElementById("mgr-report-program-title"),
  mgrResultsContainer: document.getElementById("mgr-results-container"),
  mgrSaveBtn: document.getElementById("mgr-save-btn"),

  // Exámenes Especiales DOM Elements
  tabBtnSpecialExams: document.getElementById("tab-btn-special-exams"),
  viewSpecialExams: document.getElementById("view-special-exams"),
  specialSupletoriosFeed: document.getElementById("special-supletorios-feed"),
  specialHabilitacionesFeed: document.getElementById("special-habilitaciones-feed")
};

let activeReviewDispute = null;
let activeStudentAppeal = null;

// --- 4. DATA LOGIC & GRADING FORMULAS ---

/**
 * Calculates grades for a specific student in a specific signature
 */
function getStudentGradeInfo(studentId, programName, signatureName, skipHabilitationCheck = false) {
  const currentProgram = localState.data.programs[programName];
  const currentSignature = currentProgram.signatures[signatureName];
  const evaluations = localState.data.evaluations;
  
  const student = currentSignature.students.find(s => s.id === studentId);
  if (!student) return null;
  
  const allEvents = currentSignature.events;
  const criteria = currentSignature.criteria;
  const activeCriteriaList = Object.keys(criteria);
  
  const finalCompetencies = {};
  
  // Calculate final (overall latest) state for each criterion
  activeCriteriaList.forEach(critId => {
    let latestState = null;
    
    // Latest Event Rule: Determined by the LATEST event evaluated
    for (let i = allEvents.length - 1; i >= 0; i--) {
      const eventItem = allEvents[i];
      const isActiveInEvent = currentSignature.activeCriteriaByEvent[eventItem]?.includes(critId);
      
      if (isActiveInEvent) {
        const evalKey = `${student.id}_${critId}_${eventItem}`;
        const cellEval = evaluations[evalKey];
        
        if (cellEval && cellEval.state && cellEval.state !== "Pending") {
          latestState = cellEval.state;
          break;
        }
      }
    }
    
    if (latestState === "Met" || latestState === "Approved") {
      finalCompetencies[critId] = 1;
    } else if (latestState === "Not Met" || latestState === "Disputed" || latestState === "Absent") {
      finalCompetencies[critId] = 0;
    } else {
      finalCompetencies[critId] = null; // Unevaluated
    }
  });

  // Sort MNC criteria types
  const activeModuleCores = [];
  const activeModuleAdvanced = [];
  
  activeCriteriaList.forEach(critId => {
    const crit = criteria[critId];
    if (crit.type === "Core") activeModuleCores.push(critId);
    if (crit.type === "Advanced") activeModuleAdvanced.push(critId);
  });
  
  let allCoresMet = true;
  let coresMetCount = 0;
  
  activeModuleCores.forEach(critId => {
    if (finalCompetencies[critId] === 1) {
      coresMetCount++;
    } else {
      allCoresMet = false;
    }
  });
  
  let advancedMetCount = 0;
  activeModuleAdvanced.forEach(critId => {
    if (finalCompetencies[critId] === 1) {
      advancedMetCount++;
    }
  });

  const cuts = currentSignature.cuts;
  let finalGrade = 1.0;
  let cutGrades = {};
  
  // 1. Check if Habilitacion is approved for this student in this signature
  const habKey = `${studentId}_${signatureName}`;
  const hasHabilitacion = localState.data.habilitaciones && localState.data.habilitaciones[habKey];

  if (hasHabilitacion) {
    // If habilitacion is approved: Grade is exactly 3.0 and all Core competencies are considered Met
    finalGrade = 3.0;
    allCoresMet = true;
    coresMetCount = activeModuleCores.length;
    activeModuleCores.forEach(critId => {
      finalCompetencies[critId] = 1;
    });
  } else if (cuts) {
    // 2. Hybrid Period-Based Calculation (Nota 1: 30%, Nota 2: 30%, Nota 3: 40%)
    let weightedGradeSum = 0;
    
    Object.keys(cuts).forEach(cutName => {
      const cutConfig = cuts[cutName];
      const cutEvents = Object.keys(cutConfig.events);
      
      // Find active criteria in this Cut
      const cutCriteria = [];
      activeCriteriaList.forEach(critId => {
        let evaluatedInCut = false;
        cutEvents.forEach(ev => {
          if (currentSignature.activeCriteriaByEvent[ev]?.includes(critId)) {
            evaluatedInCut = true;
          }
        });
        if (evaluatedInCut) {
          cutCriteria.push(critId);
        }
      });
      
      // Calculate latest state for each criterion *within* this Cut's events
      const cutCompetencies = {};
      cutCriteria.forEach(critId => {
        let latestCutState = null;
        for (let i = cutEvents.length - 1; i >= 0; i--) {
          const ev = cutEvents[i];
          if (currentSignature.activeCriteriaByEvent[ev]?.includes(critId)) {
            const evalKey = `${student.id}_${critId}_${ev}`;
            const cellEval = evaluations[evalKey];
            if (cellEval && cellEval.state && cellEval.state !== "Pending") {
              latestCutState = cellEval.state;
              break;
            }
          }
        }
        if (latestCutState === "Met" || latestCutState === "Approved") {
          cutCompetencies[critId] = 1;
        } else if (latestCutState === "Not Met" || latestCutState === "Disputed" || latestCutState === "Absent") {
          cutCompetencies[critId] = 0;
        } else {
          cutCompetencies[critId] = null; // Unevaluated
        }
      });
      
      // Calculate Cut Grade using MNC logic
      const cutCores = cutCriteria.filter(critId => criteria[critId].type === "Core");
      const cutAdvanced = cutCriteria.filter(critId => criteria[critId].type === "Advanced");
      
      let cutCoresMetCount = 0;
      let cutAllCoresMet = true;
      cutCores.forEach(critId => {
        if (cutCompetencies[critId] === 1) cutCoresMetCount++;
        else cutAllCoresMet = false;
      });
      
      let cutAdvancedMetCount = 0;
      cutAdvanced.forEach(critId => {
        if (cutCompetencies[critId] === 1) cutAdvancedMetCount++;
      });
      
      let cutGrade = 1.0;
      if (cutCores.length === 0) {
        const advPct = cutAdvanced.length > 0 ? cutAdvancedMetCount / cutAdvanced.length : 1;
        cutGrade = 3.0 + 2.0 * advPct;
      } else if (!cutAllCoresMet) {
        const corePct = cutCoresMetCount / cutCores.length;
        cutGrade = 1.0 + 1.9 * corePct;
      } else {
        const advPct = cutAdvanced.length > 0 ? cutAdvancedMetCount / cutAdvanced.length : 1;
        cutGrade = 3.0 + 2.0 * advPct;
      }
      
      cutGrades[cutName] = parseFloat(cutGrade.toFixed(2));
      weightedGradeSum += cutGrade * cutConfig.weight;
    });
    
    // Apply final weighted grade, but respect MNC Safety Cap (if any Core is Not Met, cap at 2.9)
    if (!allCoresMet && activeModuleCores.length > 0) {
      finalGrade = Math.min(2.9, weightedGradeSum);
    } else {
      finalGrade = weightedGradeSum;
    }
  } else {
    // 3. Fallback to Standard Numerical Calculation (without cuts)
    if (activeModuleCores.length === 0) {
      const advPct = activeModuleAdvanced.length > 0 ? advancedMetCount / activeModuleAdvanced.length : 1;
      finalGrade = 3.0 + 2.0 * advPct;
    } else if (!allCoresMet) {
      const corePct = coresMetCount / activeModuleCores.length;
      finalGrade = 1.0 + 1.9 * corePct;
    } else {
      const totalAdvanced = activeModuleAdvanced.length;
      if (totalAdvanced === 0) {
        finalGrade = 5.0;
      } else {
        const advPct = advancedMetCount / totalAdvanced;
        finalGrade = 3.0 + 2.0 * advPct;
      }
    }
  }
  
  // Calculate Habilitacion Eligibility
  let eligibleForHabilitacion = false;
  let reasonForIneligibility = "";
  
  if (!allCoresMet && !hasHabilitacion) {
    const calculatedGrade = parseFloat(finalGrade.toFixed(2));
    if (calculatedGrade >= 2.0 && calculatedGrade < 3.0) {
      if (skipHabilitationCheck) {
        eligibleForHabilitacion = true;
      } else {
        // Count how many subjects the student is failing in this program
        let failedSubjectsCount = 0;
        Object.keys(currentProgram.signatures).forEach(sigName => {
          const sigGradeInfo = getStudentGradeInfo(studentId, programName, sigName, true);
          if (sigGradeInfo && sigGradeInfo.grade < 3.0) {
            failedSubjectsCount++;
          }
        });
        
        if (failedSubjectsCount <= 2) {
          eligibleForHabilitacion = true;
        } else {
          reasonForIneligibility = `Reprobando ${failedSubjectsCount} asignaturas (máx. 2).`;
        }
      }
    } else if (calculatedGrade < 2.0) {
      reasonForIneligibility = "Nota final menor a 2.0.";
    }
  } else if (allCoresMet) {
    reasonForIneligibility = "Asignatura aprobada.";
  } else if (hasHabilitacion) {
    reasonForIneligibility = "Habilitación ya aprobada.";
  }
  
  return {
    finalCompetencies,
    grade: parseFloat(finalGrade.toFixed(2)),
    allCoresMet,
    coresMetCount,
    totalCores: activeModuleCores.length,
    advancedMetCount,
    totalAdvanced: activeModuleAdvanced.length,
    cutGrades,
    eligibleForHabilitacion,
    reasonForIneligibility,
    hasHabilitacion
  };
}

/**
 * Sweeps all structures to compute dashboard tallies and sync priority feeds
 */
function calculateGradesAndMetrics() {
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const evName = localState.data.selectedEvent;
  const evaluations = localState.data.evaluations;
  
  const currentProgram = localState.data.programs[pName];
  const currentSignature = currentProgram.signatures[sName];
  
  const students = currentSignature.students;
  const criteria = currentSignature.criteria;
  const allEvents = currentSignature.events;
  
  const studentGrades = {};
  
  students.forEach(student => {
    studentGrades[student.id] = getStudentGradeInfo(student.id, pName, sName);
  });
  
  // Ribbon metrics
  if (DOM.valClassSize) DOM.valClassSize.textContent = students.length;
  
  // Radial Progress
  const currentEventCrits = currentSignature.activeCriteriaByEvent[evName] || [];
  const totalCellPossible = students.length * currentEventCrits.length;
  let gradedCellsCount = 0;
  
  students.forEach(student => {
    currentEventCrits.forEach(critId => {
      const key = `${student.id}_${critId}_${evName}`;
      const cellEval = evaluations[key];
      if (cellEval && cellEval.state && cellEval.state !== "Pending") {
        gradedCellsCount++;
      }
    });
  });
  
  const completionPercentage = totalCellPossible > 0 ? Math.round((gradedCellsCount / totalCellPossible) * 100) : 0;
  if (DOM.radialProgressText) DOM.radialProgressText.textContent = `${completionPercentage}%`;
  if (DOM.valGradingCells) DOM.valGradingCells.textContent = `${gradedCellsCount} / ${totalCellPossible} evaluaciones`;
  if (DOM.radialProgressBar) DOM.radialProgressBar.setAttribute("stroke-dasharray", `${completionPercentage}, 100`);
  
  // Sweep global active disputes
  const activeDisputesList = [];
  
  Object.keys(localState.data.programs).forEach(pKey => {
    const prog = localState.data.programs[pKey];
    Object.keys(prog.signatures).forEach(sKey => {
      const sig = prog.signatures[sKey];
      
      sig.students.forEach(st => {
        sig.events.forEach(ev => {
          const sigActiveCrits = sig.activeCriteriaByEvent[ev] || [];
          sigActiveCrits.forEach(critId => {
            const key = `${st.id}_${critId}_${ev}`;
            const cellEval = evaluations[key];
            
            if (cellEval) {
              if (cellEval.state === "Disputed" && sig.criteria[critId]) {
                activeDisputesList.push({
                  studentId: st.id,
                  studentName: st.name,
                  studentTokens: st.tokens,
                  criterionId: critId,
                  criterionName: sig.criteria[critId].name,
                  criterionType: sig.criteria[critId].type,
                  eventId: ev,
                  defenseText: cellEval.defenseText || "Sin sustentaciones.",
                  evaluationKey: key,
                  programName: pKey,
                  signatureName: sKey,
                  isSupletorio: false
                });
              } else if (cellEval.state === "Absent" && cellEval.supletorioState === "Paid" && sig.criteria[critId]) {
                activeDisputesList.push({
                  studentId: st.id,
                  studentName: st.name,
                  studentTokens: st.tokens,
                  criterionId: critId,
                  criterionName: sig.criteria[critId].name,
                  criterionType: sig.criteria[critId].type,
                  eventId: ev,
                  defenseText: "Examen con supletorio pagado físicamente. Listo para calificar.",
                  evaluationKey: key,
                  programName: pKey,
                  signatureName: sKey,
                  isSupletorio: true
                });
              }
            }
          });
        });
      });
    });
  });
  
  if (DOM.valDisputeCount) {
    DOM.valDisputeCount.textContent = activeDisputesList.length;
    if (activeDisputesList.length > 0) {
      DOM.valDisputeCount.parentElement.classList.add("animate-pulse");
    } else {
      DOM.valDisputeCount.parentElement.classList.remove("animate-pulse");
    }
  }
  if (DOM.inboxBadgeCount) DOM.inboxBadgeCount.textContent = activeDisputesList.length;
  
  // Class Health
  let passingCount = 0;
  students.forEach(student => {
    const data = studentGrades[student.id];
    if (data && data.grade >= 3.0) {
      passingCount++;
    }
  });
  
  const healthPercentage = students.length > 0 ? Math.round((passingCount / students.length) * 100) : 0;
  if (DOM.valClassHealth) DOM.valClassHealth.textContent = `${healthPercentage}%`;
  
  return {
    studentGrades,
    activeDisputes: activeDisputesList,
    completionPercentage,
    totalCellPossible,
    gradedCellsCount,
    healthPercentage,
    activeEventName: evName
  };
}

// --- 5. RENDER SYSTEM ENGINE ---

/**
 * Renders Vista Docente Workspace spreadsheet matrix
 */
function renderTeacherWorkspace(calculatedData) {
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const evName = localState.data.selectedEvent;
  const evaluations = localState.data.evaluations;
  
  const currentProgram = localState.data.programs[pName];
  const currentSignature = currentProgram.signatures[sName];
  
  const students = currentSignature.students;
  const criteria = currentSignature.criteria;
  const activeCrits = currentSignature.activeCriteriaByEvent[evName] || [];
  
  if (DOM.matrixTopHeaderRow) DOM.matrixTopHeaderRow.innerHTML = "";
  DOM.matrixHeaderRow.innerHTML = "";
  DOM.matrixBody.innerHTML = "";
  DOM.matrixModuleEventText.textContent = `${pName} — ${sName} [${evName}]`;
  
  if (activeCrits.length === 0) {
    if (DOM.matrixTopHeaderRow) DOM.matrixTopHeaderRow.style.display = "none";
    DOM.matrixHeaderRow.innerHTML = `<th colspan="3" style="text-align: center; padding: 30px; font-weight: 500;">No hay competencias activadas para esta evidencia. Activa celdas en el configurador lateral.</th>`;
    return;
  }
  
  if (DOM.matrixTopHeaderRow) {
    DOM.matrixTopHeaderRow.style.display = "";
    
    // Grouping Top Header
    let activeCutName = "Sin Nota";
    let activeCutWeight = 0;
    if (currentSignature.cuts) {
      for (const [cutName, cutConfig] of Object.entries(currentSignature.cuts)) {
        if (cutConfig.events && cutConfig.events[evName]) {
          activeCutName = cutName;
          if (cutName === "Nota 1") activeCutName = "Nota 1 (Primer Periodo)";
          else if (cutName === "Nota 2") activeCutName = "Nota 2 (Segundo Periodo)";
          else if (cutName === "Nota 3") activeCutName = "Nota 3 (Periodo Final)";
          activeCutWeight = cutConfig.weight;
          break;
        }
      }
    }

    const thTopInfo = document.createElement("th");
    thTopInfo.colSpan = 3;
    thTopInfo.className = "font-mono";
    thTopInfo.style.textAlign = "left";
    thTopInfo.style.backgroundColor = "var(--bg-secondary)";
    thTopInfo.style.borderBottom = "1px solid var(--border-color)";
    thTopInfo.innerHTML = `<span style="font-size: 0.68rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Estudiante y Notas</span>`;
    DOM.matrixTopHeaderRow.appendChild(thTopInfo);

    const thTopCut = document.createElement("th");
    thTopCut.colSpan = activeCrits.length;
    thTopCut.className = "font-mono";
    thTopCut.style.textAlign = "center";
    thTopCut.style.backgroundColor = "rgba(16, 185, 129, 0.05)";
    thTopCut.style.borderBottom = "1px solid var(--border-color)";
    thTopCut.innerHTML = `
      <span style="font-size: 0.72rem; font-weight: 700; color: var(--color-success); text-transform: uppercase; letter-spacing: 0.05em;">
        ⚡ ${activeCutName} (${(activeCutWeight * 100).toFixed(0)}%) — Evidencia: ${evName}
      </span>
    `;
    DOM.matrixTopHeaderRow.appendChild(thTopCut);
  }
  
  // Headers
  const thName = document.createElement("th");
  thName.className = "font-mono";
  thName.innerHTML = `<div style="text-align: left; padding: 4px;">Roster Estudiantes</div>`;
  DOM.matrixHeaderRow.appendChild(thName);
  
  const thTokens = document.createElement("th");
  thTokens.className = "cell-center token-badge-col font-mono";
  thTokens.innerHTML = `<div class="col-header-subtitle">Tokens</div>`;
  DOM.matrixHeaderRow.appendChild(thTokens);
  
  const thGrade = document.createElement("th");
  thGrade.className = "cell-center grade-badge-col font-mono";
  thGrade.innerHTML = `<div class="col-header-subtitle">Nota MNC</div>`;
  DOM.matrixHeaderRow.appendChild(thGrade);
  
  activeCrits.forEach(critId => {
    const crit = criteria[critId];
    if (!crit) return;
    const thCrit = document.createElement("th");
    thCrit.dataset.criterionId = critId;
    
    let indicatorClass = "bg-danger";
    let typeLabel = "Core";
    if (crit.type === "Advanced") { indicatorClass = "bg-info"; typeLabel = "Adv"; }
    else if (crit.type === "Transversal") { indicatorClass = "bg-warning"; typeLabel = "Tran"; }
    
    const elementLabel = crit.element ? `[${crit.element.split(":")[0]}] ` : "";
    const elementFull = crit.element ? `Elemento: ${crit.element}\n` : "";
    
    thCrit.innerHTML = `
      <div class="col-header-cat font-mono">
        <span class="cat-indicator ${indicatorClass}"></span>
        <span>${typeLabel}</span>
      </div>
      <span class="col-header-title" style="font-size: 0.72rem;">${elementLabel}${critId}</span>
      <span class="col-header-subtitle" title="${elementFull}${crit.name}">${crit.name}</span>
    `;
    
    thCrit.style.cursor = "pointer";
    thCrit.addEventListener("click", () => {
      if (DOM.inspectorPlaceholder) DOM.inspectorPlaceholder.style.display = "none";
      if (DOM.inspectorContent) {
        DOM.inspectorContent.style.display = "block";
        
        if (DOM.inspectorCodeType) {
          DOM.inspectorCodeType.textContent = `${critId} • ${crit.type === "Core" ? "Core" : (crit.type === "Advanced" ? "Avanzada" : "Transversal")}`;
          let indicatorBg = "var(--color-danger)";
          if (crit.type === "Advanced") indicatorBg = "var(--color-info)";
          else if (crit.type === "Transversal") indicatorBg = "var(--color-warning)";
          DOM.inspectorCodeType.style.backgroundColor = indicatorBg;
          DOM.inspectorCodeType.style.color = "#fff";
          DOM.inspectorCodeType.style.padding = "2px 6px";
          DOM.inspectorCodeType.style.borderRadius = "4px";
          DOM.inspectorCodeType.style.fontWeight = "700";
        }
        
        if (DOM.inspectorElement) {
          DOM.inspectorElement.textContent = crit.element || "General";
        }
        
        const nameParts = crit.name.split(":");
        const cName = nameParts[0].trim();
        const cDesc = nameParts.slice(1).join(":").trim() || "";
        
        if (DOM.inspectorName) DOM.inspectorName.textContent = cName;
        if (DOM.inspectorDesc) DOM.inspectorDesc.innerHTML = cDesc || crit.name;
      }
    });
    
    DOM.matrixHeaderRow.appendChild(thCrit);
  });
  
  // Rows
  students.forEach(student => {
    const stGradeInfo = calculatedData.studentGrades[student.id];
    const tr = document.createElement("tr");
    tr.dataset.studentId = student.id;
    
    // Details
    const tdName = document.createElement("td");
    let coreStatusLabel = `${stGradeInfo.coresMetCount}/${stGradeInfo.totalCores} Técnicas`;
    if (stGradeInfo.totalCores === 0) coreStatusLabel = "Sin Cores";
    
    tdName.innerHTML = `
      <div class="student-cell-info">
        <span class="student-name-text">${student.name}</span>
        <span class="student-meta-sub font-mono">
          <span>${coreStatusLabel}</span>
          <span>•</span>
          <span>${stGradeInfo.advancedMetCount}/${stGradeInfo.totalAdvanced} Avan.</span>
        </span>
      </div>
    `;
    tr.appendChild(tdName);
    
    // Tokens
    const tdTokens = document.createElement("td");
    tdTokens.className = "cell-center";
    let tokensHTML = "";
    for (let i = 1; i <= 3; i++) {
      tokensHTML += (i <= student.tokens) ? `<span class="token-coin">🪙</span>` : `<span class="token-coin spent">🪙</span>`;
    }
    tdTokens.innerHTML = `<div class="token-badge">${tokensHTML}</div>`;
    tr.appendChild(tdTokens);
    
    // Grade
    const tdGrade = document.createElement("td");
    tdGrade.className = "cell-center grade-badge-col";
    let gradeClass = "grade-bracket-failing";
    if (stGradeInfo.grade >= 3.0 && stGradeInfo.grade < 4.0) gradeClass = "grade-bracket-passing";
    if (stGradeInfo.grade >= 4.0 && stGradeInfo.grade < 5.0) gradeClass = "grade-bracket-mastery";
    if (stGradeInfo.grade === 5.0) gradeClass = "grade-bracket-perfect";
    tdGrade.innerHTML = `<span class="grade-indicator ${gradeClass}">${stGradeInfo.grade.toFixed(1)}</span>`;
    tr.appendChild(tdGrade);
    
    // Grading cells blocks
    activeCrits.forEach(critId => {
      const tdBlock = document.createElement("td");
      const key = `${student.id}_${critId}_${evName}`;
      const cellEval = evaluations[key] || { state: "Pending" };
      
      let stateClass = "state-pending";
      let statusLabel = '<span class="cell-status-text">Pendiente</span> <span class="cell-status-icon">🟡</span>';
      let titleTooltip = "Click para alternar: Pendiente -> Logrado -> No Logrado -> Ausente";
      
      if (cellEval.state === "Met") { 
        stateClass = "state-met"; 
        statusLabel = '<span class="cell-status-text">Logrado</span> <span class="cell-status-icon">✅</span>'; 
      }
      else if (cellEval.state === "Not Met") { 
        stateClass = "state-notmet"; 
        statusLabel = '<span class="cell-status-text">No Logrado</span> <span class="cell-status-icon">❌</span>'; 
      }
      else if (cellEval.state === "Disputed") { 
        stateClass = "state-disputed"; 
        statusLabel = '<span class="cell-status-text">Apelación</span> <span class="cell-status-icon">⛔</span>'; 
        titleTooltip = "Sustentación de apelación activa. Haz clic para revisar.";
      }
      else if (cellEval.state === "Absent") {
        if (cellEval.supletorioState === "Paid") {
          stateClass = "state-absent-paid";
          statusLabel = '<span class="cell-status-text">Ausente (Supletorio Pagado)</span> <span class="cell-status-icon">🎫</span>';
          titleTooltip = "Supletorio verificado y pagado físicamente. Haz clic para calificar el examen.";
        } else if (cellEval.supletorioState === "Pending") {
          stateClass = "state-absent-pending";
          statusLabel = '<span class="cell-status-text">Ausente (Supletorio Pendiente)</span> <span class="cell-status-icon">🟡</span>';
          titleTooltip = "Ausente. Supletorio solicitado y pendiente de pago. Celda bloqueada.";
        } else {
          stateClass = "state-absent-none";
          statusLabel = '<span class="cell-status-text">Ausente</span> <span class="cell-status-icon">⚪</span>';
          titleTooltip = "Ausente de la evaluación. Sin registro de supletorio. Celda bloqueada.";
        }
      }
      
      tdBlock.innerHTML = `
        <div class="grading-cell-block ${stateClass}" 
             data-student-id="${student.id}" 
             data-criterion-id="${critId}" 
             data-event-id="${evName}"
             data-eval-key="${key}"
             title="${titleTooltip}">
          <span>${statusLabel}</span>
        </div>
      `;
      tr.appendChild(tdBlock);
    });
    
    DOM.matrixBody.appendChild(tr);
  });
  
  setupGridAlignmentGuides();
}

/**
 * Grid mouse guides aligners
 */
function setupGridAlignmentGuides() {
  const cells = DOM.matrixBody.querySelectorAll(".grading-cell-block");
  
  cells.forEach(cell => {
    const parentTd = cell.closest("td");
    const parentTr = cell.closest("tr");
    const critId = cell.dataset.criterionId;
    
    cell.addEventListener("mouseenter", () => {
      parentTr.querySelectorAll("td").forEach(td => td.classList.add("hover-row-highlight"));
      const headerCell = DOM.matrixHeaderRow.querySelector(`th[data-criterion-id="${critId}"]`);
      if (headerCell) headerCell.classList.add("hover-col-highlight");
    });
    
    cell.addEventListener("mouseleave", () => {
      parentTr.querySelectorAll("td").forEach(td => td.classList.remove("hover-row-highlight"));
      const headerCell = DOM.matrixHeaderRow.querySelector(`th[data-criterion-id="${critId}"]`);
      if (headerCell) headerCell.classList.remove("hover-col-highlight");
    });
  });
}

/**
 * Renders the Hybrid Teacher Dashboard (Inicio view) with telemetry metrics,
 * at-risk alerts, dynamic appeals, criteria heatmap, and grade histogram.
 */
function renderDashboard(calculatedData) {
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const evName = localState.data.selectedEvent;
  const evaluations = localState.data.evaluations;

  const currentProgram = localState.data.programs[pName];
  const currentSignature = currentProgram.signatures[sName];

  const students = currentSignature.students;
  const criteria = currentSignature.criteria;
  const activeCrits = currentSignature.activeCriteriaByEvent[evName] || [];

  // 1. Update Metrics Cards
  if (DOM.dashValSize) DOM.dashValSize.textContent = students.length;
  if (DOM.dashValProgressText) DOM.dashValProgressText.textContent = `${calculatedData.completionPercentage}%`;
  
  // Clean appeals count relative to the current active module signature
  const activeModuleDisputes = calculatedData.activeDisputes.filter(d => 
    d.programName === pName && d.signatureName === sName
  );
  if (DOM.dashValAppeals) DOM.dashValAppeals.textContent = activeModuleDisputes.length;

  const appealsMetricCard = document.getElementById("dash-metric-appeals");
  if (appealsMetricCard) {
    if (activeModuleDisputes.length > 0) {
      appealsMetricCard.classList.add("alert-state");
      const icon = appealsMetricCard.querySelector(".metric-icon");
      if (icon) icon.classList.add("animate-pulse");
    } else {
      appealsMetricCard.classList.remove("alert-state");
      const icon = appealsMetricCard.querySelector(".metric-icon");
      if (icon) icon.classList.remove("animate-pulse");
    }
  }

  if (DOM.dashValHealth) DOM.dashValHealth.textContent = `${calculatedData.healthPercentage}%`;

  // 2. Grading Bottleneck Widget
  if (DOM.dashActiveEventBadge) DOM.dashActiveEventBadge.textContent = evName;
  if (DOM.dashProgressLabel) DOM.dashProgressLabel.textContent = `${calculatedData.gradedCellsCount} / ${calculatedData.totalCellPossible} Evaluaciones`;
  if (DOM.dashProgressPct) DOM.dashProgressPct.textContent = `${calculatedData.completionPercentage}%`;
  if (DOM.dashProgressFill) DOM.dashProgressFill.style.width = `${calculatedData.completionPercentage}%`;

  // 3. At-Risk Warnings Feed
  if (DOM.dashAtRiskFeed) {
    const tbody = document.getElementById("dash-at-risk-tbody");
    const table = document.getElementById("dash-at-risk-table");
    if (tbody) tbody.innerHTML = "";

    const atRiskStudents = [];
    students.forEach(student => {
      const stGradeInfo = calculatedData.studentGrades[student.id];
      if (stGradeInfo && stGradeInfo.grade < 3.0) {
        const missingCores = [];
        Object.keys(criteria).forEach(critId => {
          const crit = criteria[critId];
          if (crit && crit.type === "Core") {
            const hasMet = stGradeInfo.finalCompetencies[critId] === 1;
            if (!hasMet) {
              missingCores.push(critId);
            }
          }
        });
        atRiskStudents.push({
          student,
          gradeInfo: stGradeInfo,
          missingCores
        });
      }
    });

    if (atRiskStudents.length === 0) {
      if (DOM.dashEmptyAtRisk) DOM.dashEmptyAtRisk.style.display = "flex";
      if (table) table.style.display = "none";
    } else {
      if (DOM.dashEmptyAtRisk) DOM.dashEmptyAtRisk.style.display = "none";
      if (table) table.style.display = "table";

      atRiskStudents.forEach(({ student, gradeInfo, missingCores }) => {
        const row = document.createElement("tr");
        row.style.cursor = "pointer";
        
        let reasonLabel = "Faltan cores";
        if (missingCores.length > 0) {
          reasonLabel = missingCores.join(", ");
        } else if (gradeInfo.totalCores === 0) {
          reasonLabel = "Sin cores";
        }

        row.innerHTML = `
          <td style="font-weight: 600; color: var(--text-primary); font-size: 0.76rem;">${student.name}</td>
          <td style="text-align: center;">
            <span class="at-risk-grade" style="font-size: 0.65rem; padding: 1px 4px;">${gradeInfo.grade.toFixed(2)}</span>
          </td>
          <td class="font-mono text-xs" style="color: var(--color-notmet); font-size: 0.68rem; word-break: break-all;">${reasonLabel}</td>
        `;

        row.addEventListener("click", () => {
          DOM.simStudentPicker.value = student.id;
          renderStudentSimulator();
          switchWorkspaceTab("grading");
          setTimeout(() => {
            const elRow = DOM.matrixBody.querySelector(`tr[data-student-id="${student.id}"]`);
            if (elRow) {
              elRow.scrollIntoView({ behavior: "smooth", block: "center" });
              elRow.style.outline = "2px solid var(--color-notmet)";
              setTimeout(() => { elRow.style.outline = "none"; }, 3000);
            }
          }, 400);
        });

        if (tbody) tbody.appendChild(row);
      });
    }
  }

  // 4. Appeals Feed List inside Dashboard
  if (DOM.dashAppealsFeed) {
    const tbody = document.getElementById("dash-appeals-tbody");
    const table = document.getElementById("dash-appeals-table");
    if (tbody) tbody.innerHTML = "";

    if (activeModuleDisputes.length === 0) {
      if (DOM.dashEmptyAppeals) DOM.dashEmptyAppeals.style.display = "flex";
      if (table) table.style.display = "none";
    } else {
      if (DOM.dashEmptyAppeals) DOM.dashEmptyAppeals.style.display = "none";
      if (table) table.style.display = "table";

      activeModuleDisputes.forEach(dispute => {
        const row = document.createElement("tr");
        row.style.cursor = "pointer";

        row.innerHTML = `
          <td style="font-weight: 600; color: var(--text-primary); font-size: 0.76rem;">${dispute.studentName}</td>
          <td class="font-mono text-xs" style="font-size: 0.68rem;">${dispute.criterionId} (${dispute.eventId})</td>
          <td style="text-align: right; padding-right: 4px;">
            <button class="appeal-action-btn font-sans" style="font-size: 0.68rem; padding: 2px 6px;">
              <span>Revisar →</span>
            </button>
          </td>
        `;

        row.addEventListener("click", () => {
          openAppealDrawer(dispute);
        });

        if (tbody) tbody.appendChild(row);
      });
    }
  }

  // 5. MNC Competency Mastery Heatmap Progress Bars
  if (DOM.dashHeatmapContainer) {
    DOM.dashHeatmapContainer.innerHTML = "";

    if (activeCrits.length === 0) {
      DOM.dashHeatmapContainer.innerHTML = `<p style="font-size: 0.72rem; color: var(--text-muted); text-align: center; padding: 24px 0; font-style: italic;">No hay competencias activadas para esta evidencia.</p>`;
    } else {
      activeCrits.forEach(critId => {
        const crit = criteria[critId];
        if (!crit) return;

        let achievedCount = 0;
        students.forEach(student => {
          const key = `${student.id}_${critId}_${evName}`;
          const cellEval = evaluations[key];
          if (cellEval && (cellEval.state === "Met" || cellEval.state === "Approved")) {
            achievedCount++;
          }
        });

        const masteryPct = students.length > 0 ? Math.round((achievedCount / students.length) * 100) : 0;

        let fillClass = "low";
        if (masteryPct >= 80) fillClass = "high";
        else if (masteryPct >= 60) fillClass = "medium";

        const isCore = crit.type === "Core";
        const isAlertState = isCore && masteryPct < 60;

        const barGroup = document.createElement("div");
        barGroup.className = `heatmap-bar-group ${isAlertState ? 'pedagogical-alert' : ''}`;

        barGroup.innerHTML = `
          <div class="heatmap-bar-header">
            <span class="heatmap-bar-title" title="${crit.name}">${critId}: ${crit.name.split(":")[0]}</span>
            <span class="heatmap-bar-pct font-mono">${masteryPct}%</span>
          </div>
          <div class="heatmap-bar-track">
            <div class="heatmap-bar-fill ${fillClass}" style="width: ${masteryPct}%;"></div>
          </div>
          ${isAlertState ? `
            <div class="pedagogical-alert-badge">
              <span>⚠️ Pedagogical Alert: Review Required</span>
            </div>
          ` : ''}
        `;

        DOM.dashHeatmapContainer.appendChild(barGroup);
      });
    }
  }

  // 6. Grade Spread Histogram
  const tallies = { fail: 0, pass: 0, mastery: 0, perfect: 0 };
  students.forEach(student => {
    const info = calculatedData.studentGrades[student.id];
    if (info) {
      if (info.grade < 3.0) tallies.fail++;
      else if (info.grade >= 3.0 && info.grade < 4.0) tallies.pass++;
      else if (info.grade >= 4.0 && info.grade < 5.0) tallies.mastery++;
      else if (info.grade === 5.0) tallies.perfect++;
    }
  });

  const maxVal = Math.max(1, tallies.fail, tallies.pass, tallies.mastery, tallies.perfect);

  if (DOM.histValFail) DOM.histValFail.textContent = tallies.fail;
  if (DOM.histValPass) DOM.histValPass.textContent = tallies.pass;
  if (DOM.histValMastery) DOM.histValMastery.textContent = tallies.mastery;
  if (DOM.histValPerfect) DOM.histValPerfect.textContent = tallies.perfect;

  if (DOM.histBarFail) DOM.histBarFail.style.height = `${(tallies.fail / maxVal) * 85}%`;
  if (DOM.histBarPass) DOM.histBarPass.style.height = `${(tallies.pass / maxVal) * 85}%`;
  if (DOM.histBarMastery) DOM.histBarMastery.style.height = `${(tallies.mastery / maxVal) * 85}%`;
  if (DOM.histBarPerfect) DOM.histBarPerfect.style.height = `${(tallies.perfect / maxVal) * 85}%`;
}

/**
 * Renders Priority Inbox Widget Feed
 */
function renderPriorityInbox(disputes) {
  const filtersEl = document.querySelector(".inbox-filters-container");
  
  if (disputes.length === 0) {
    if (filtersEl) filtersEl.style.display = "none";
    DOM.priorityInboxContainer.querySelectorAll(".dispute-card, .inbox-group, .empty-feed-state-search").forEach(el => el.remove());
    DOM.emptyInboxState.style.display = "flex";
    return;
  }
  
  if (filtersEl) filtersEl.style.display = "flex";
  DOM.emptyInboxState.style.display = "none";
  
  // Extract current search & filter state
  const searchText = DOM.inboxSearch ? DOM.inboxSearch.value.trim().toLowerCase() : "";
  const filterType = DOM.inboxFilterType ? DOM.inboxFilterType.value : "All";
  const filterUrgency = DOM.inboxFilterUrgency ? DOM.inboxFilterUrgency.value : "All";
  
  // Filter active disputes
  const filteredDisputes = disputes.filter(dispute => {
    // 1. Search filter (by student name, criterion ID, or criterion name)
    if (searchText) {
      const matchName = dispute.studentName.toLowerCase().includes(searchText);
      const matchCritId = dispute.criterionId.toLowerCase().includes(searchText);
      const matchCritName = dispute.criterionName.toLowerCase().includes(searchText);
      if (!matchName && !matchCritId && !matchCritName) return false;
    }
    
    // 2. Category type filter (Core, Advanced, Transversal)
    if (filterType !== "All") {
      if (dispute.criterionType !== filterType) return false;
    }
    
    // 3. Urgency filter based on student's standing grade (< 3.0 is Risk, >= 3.0 is Safe)
    if (filterUrgency !== "All") {
      const gradeInfo = getStudentGradeInfo(dispute.studentId, dispute.programName, dispute.signatureName);
      const isRisk = gradeInfo && gradeInfo.grade < 3.0;
      if (filterUrgency === "Risk" && !isRisk) return false;
      if (filterUrgency === "Safe" && isRisk) return false;
    }
    
    return true;
  });
  
  // Clear previous cards and grouped sections
  DOM.priorityInboxContainer.querySelectorAll(".dispute-card, .inbox-group, .empty-feed-state-search").forEach(el => el.remove());
  
  if (filteredDisputes.length === 0) {
    const searchEmpty = document.createElement("div");
    searchEmpty.className = "empty-feed-state empty-feed-state-search";
    searchEmpty.innerHTML = `
      <div class="empty-badge">🔍</div>
      <h3>Sin resultados</h3>
      <p style="font-size: 0.72rem;">No se encontraron apelaciones con los criterios de búsqueda.</p>
    `;
    DOM.priorityInboxContainer.appendChild(searchEmpty);
    return;
  }
  
  // Group disputes by "Signature Name • Event ID"
  const groups = {};
  filteredDisputes.forEach(dispute => {
    const groupKey = `${dispute.signatureName} • ${dispute.eventId}`;
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(dispute);
  });
  
  window.collapsedInboxGroups = window.collapsedInboxGroups || new Set();
  
  Object.keys(groups).forEach(groupKey => {
    const groupDisputes = groups[groupKey];
    
    const groupEl = document.createElement("div");
    groupEl.className = "inbox-group";
    if (window.collapsedInboxGroups.has(groupKey)) {
      groupEl.classList.add("collapsed");
    }
    
    const headerEl = document.createElement("div");
    headerEl.className = "inbox-group-header";
    headerEl.innerHTML = `
      <div class="inbox-group-title-wrapper">
        <span class="inbox-group-arrow">▼</span>
        <span class="inbox-group-title font-sans font-semibold">${groupKey}</span>
      </div>
      <span class="inbox-group-badge font-mono">${groupDisputes.length}</span>
    `;
    
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "inbox-group-cards";
    
    groupDisputes.forEach(dispute => {
      const card = document.createElement("div");
      card.className = "dispute-card";
      card.dataset.evalKey = dispute.evaluationKey;
      
      const badgeHTML = dispute.isSupletorio 
        ? `<span class="dispute-token-badge font-mono" style="background-color: var(--bg-success-soft); color: var(--color-success); border-color: rgba(16, 185, 129, 0.2);">🎫 Supletorio Pagado</span>`
        : `<span class="dispute-token-badge font-mono">${dispute.studentTokens} Tokens left</span>`;
        
      const buttonText = dispute.isSupletorio 
        ? `<span>Revisar y Calificar →</span>`
        : `<span>Revisar Sustentación →</span>`;

      card.innerHTML = `
        <div class="dispute-card-header">
          <span class="dispute-student-name">${dispute.studentName}</span>
          ${badgeHTML}
        </div>
        <div>
          <span class="dispute-criterion-name font-mono font-semibold" style="font-size: 0.68rem; padding: 2px 4px;">
            ${dispute.criterionId} • ${dispute.criterionName}
          </span>
        </div>
        <div class="dispute-snippet">"${dispute.defenseText}"</div>
        <div class="dispute-action-footer">
          <button class="appeal-action-btn font-sans">
            ${buttonText}
          </button>
        </div>
      `;
      
      card.addEventListener("click", () => {
        openAppealDrawer(dispute);
      });
      
      cardsContainer.appendChild(card);
    });
    
    headerEl.addEventListener("click", () => {
      const collapsed = groupEl.classList.toggle("collapsed");
      if (collapsed) {
        window.collapsedInboxGroups.add(groupKey);
      } else {
        window.collapsedInboxGroups.delete(groupKey);
      }
    });
    
    groupEl.appendChild(headerEl);
    groupEl.appendChild(cardsContainer);
    DOM.priorityInboxContainer.appendChild(groupEl);
  });
}

/**
 * Renders Special Exams Workspace (Supletorios & Habilitaciones)
 */
function renderSpecialExamsWorkspace() {
  const calcData = calculateGradesAndMetrics();
  const supletorios = calcData.activeDisputes.filter(d => d.isSupletorio);

  // Render Supletorios
  if (DOM.specialSupletoriosFeed) {
    DOM.specialSupletoriosFeed.innerHTML = "";
    if (supletorios.length === 0) {
      DOM.specialSupletoriosFeed.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted); display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <span style="font-size: 2.5rem;">🎉</span>
          <h4 style="font-weight: 700; color: var(--text-primary); margin: 0;">Sin supletorios pendientes</h4>
          <p style="font-size: 0.72rem; color: var(--text-secondary); margin: 0; max-width: 300px; line-height: 1.35;">No hay exámenes especiales de inasistencia pagados listos para calificar.</p>
        </div>
      `;
    } else {
      supletorios.forEach(dispute => {
        const card = document.createElement("div");
        card.className = "student-portal-card";
        card.style.padding = "14px";
        card.style.backgroundColor = "var(--bg-primary)";
        card.style.border = "1px solid var(--border-color)";
        card.style.borderRadius = "var(--radius-sm)";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "10px";
        card.style.cursor = "pointer";
        card.style.transition = "transform 0.15s ease, border-color 0.15s ease";

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0;">${dispute.studentName}</h4>
              <p style="font-size: 0.7rem; color: var(--text-muted); margin: 2px 0 0 0;">${dispute.signatureName} • ${dispute.eventId}</p>
            </div>
            <span class="badge" style="background-color: rgba(16, 185, 129, 0.1); color: var(--color-success); border: 1px solid rgba(16, 185, 129, 0.2); padding: 1px 6px; border-radius: 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em;">Supletorio Pagado</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); background: var(--bg-secondary); padding: 8px; border-radius: 4px; border-left: 2px solid var(--color-success); line-height: 1.35;">
            <strong>Competencia:</strong> ${dispute.criterionId} - ${dispute.criterionName} (${dispute.criterionType})
          </div>
          <div style="display: flex; justify-content: flex-end; margin-top: 4px;">
            <button class="primary-btn font-sans" style="padding: 4px 12px; font-size: 0.7rem; border-radius: 4px; cursor: pointer;">Calificar →</button>
          </div>
        `;
        card.addEventListener("click", () => {
          openAppealDrawer(dispute);
        });
        DOM.specialSupletoriosFeed.appendChild(card);
      });
    }
  }

  // Render Habilitaciones
  if (DOM.specialHabilitacionesFeed) {
    DOM.specialHabilitacionesFeed.innerHTML = "";
    
    const pName = localState.data.selectedProgram;
    const sName = localState.data.selectedSignature;
    const currentProgram = localState.data.programs[pName];
    const currentSignature = currentProgram ? currentProgram.signatures[sName] : null;
    
    if (!currentSignature) return;
    
    const students = currentSignature.students;
    const failingOrHabStudents = [];

    students.forEach(student => {
      const habKey = `${student.id}_${sName}`;
      // Calculate original grade by temporarily disabling habilitacion
      const originalHasHab = localState.data.habilitaciones && localState.data.habilitaciones[habKey];
      if (originalHasHab) {
        localState.data.habilitaciones[habKey] = false;
      }
      const originalGradeInfo = getStudentGradeInfo(student.id, pName, sName);
      if (originalHasHab) {
        localState.data.habilitaciones[habKey] = true;
      }

      const currentGradeInfo = getStudentGradeInfo(student.id, pName, sName);
      const paymentState = (localState.data.habilitacionStates && localState.data.habilitacionStates[habKey]) || "None";

      if (originalGradeInfo.grade < 3.0 || currentGradeInfo.hasHabilitacion) {
        failingOrHabStudents.push({
          student,
          originalGradeInfo,
          currentGradeInfo,
          paymentState,
          habKey
        });
      }
    });

    if (failingOrHabStudents.length === 0) {
      DOM.specialHabilitacionesFeed.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted); display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <span style="font-size: 2.5rem;">🎓</span>
          <h4 style="font-weight: 700; color: var(--text-primary); margin: 0;">Sin habilitaciones</h4>
          <p style="font-size: 0.72rem; color: var(--text-secondary); margin: 0; max-width: 300px; line-height: 1.35;">No hay estudiantes reprobando o con habilitaciones activas en esta asignatura.</p>
        </div>
      `;
    } else {
      failingOrHabStudents.forEach(({ student, originalGradeInfo, currentGradeInfo, paymentState, habKey }) => {
        const card = document.createElement("div");
        card.className = "student-portal-card";
        card.style.padding = "14px";
        card.style.backgroundColor = "var(--bg-primary)";
        card.style.border = "1px solid var(--border-color)";
        card.style.borderRadius = "var(--radius-sm)";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "10px";

        let statusBadgeHTML = "";
        let actionBtnHTML = "";
        let statusExplanation = "";

        if (currentGradeInfo.hasHabilitacion || paymentState === "Approved") {
          statusBadgeHTML = `<span class="badge" style="background-color: rgba(16, 185, 129, 0.1); color: var(--color-success); border: 1px solid rgba(16, 185, 129, 0.2); padding: 1px 6px; border-radius: 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase;">Aprobada</span>`;
          statusExplanation = `<p style="font-size: 0.7rem; color: var(--color-success); margin: 0; font-weight: 600;">✅ Habilitación aprobada con nota definitiva 3.0.</p>`;
        } else if (!originalGradeInfo.eligibleForHabilitacion) {
          statusBadgeHTML = `<span class="badge" style="background-color: rgba(239, 68, 68, 0.1); color: var(--color-danger); border: 1px solid rgba(239, 68, 68, 0.2); padding: 1px 6px; border-radius: 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase;">No Apto</span>`;
          statusExplanation = `<p style="font-size: 0.7rem; color: var(--color-danger); margin: 0;">❌ No cumple requisitos MNC: ${originalGradeInfo.reasonForIneligibility}</p>`;
        } else {
          // Eligible but not approved yet
          if (paymentState === "None") {
            statusBadgeHTML = `<span class="badge" style="background-color: rgba(245, 158, 11, 0.1); color: var(--color-warning); border: 1px solid rgba(245, 158, 11, 0.2); padding: 1px 6px; border-radius: 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase;">Apto</span>`;
            statusExplanation = `<p style="font-size: 0.7rem; color: var(--text-secondary); margin: 0;">🟡 Apto para habilitar. Pendiente de radicación.</p>`;
            actionBtnHTML = `<button class="secondary-btn font-sans btn-register-payment" style="padding: 4px 10px; font-size: 0.68rem; border-radius: 4px; cursor: pointer; border: 1px solid var(--border-color);">Registrar Pago</button>`;
          } else if (paymentState === "Pending") {
            statusBadgeHTML = `<span class="badge" style="background-color: rgba(245, 158, 11, 0.15); color: var(--color-warning); border: 1px solid rgba(245, 158, 11, 0.25); padding: 1px 6px; border-radius: 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase;">Pendiente Pago</span>`;
            statusExplanation = `<p style="font-size: 0.7rem; color: var(--color-warning); margin: 0;">⚠️ Solicitud registrada. Pendiente de pago administrativo.</p>`;
            actionBtnHTML = `<button class="secondary-btn font-sans btn-register-payment" style="padding: 4px 10px; font-size: 0.68rem; border-radius: 4px; cursor: pointer; border: 1px solid var(--border-color);">Registrar Pago</button>`;
          } else if (paymentState === "Paid") {
            statusBadgeHTML = `<span class="badge" style="background-color: rgba(16, 185, 129, 0.15); color: var(--color-success); border: 1px solid rgba(16, 185, 129, 0.25); padding: 1px 6px; border-radius: 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase;">Pagado</span>`;
            statusExplanation = `<p style="font-size: 0.7rem; color: var(--color-info); margin: 0;">🟢 Pago verificado físicamente. Listo para programar y calificar.</p>`;
            actionBtnHTML = `<button class="primary-btn font-sans btn-approve-hab" style="padding: 4px 10px; font-size: 0.68rem; border-radius: 4px; cursor: pointer;">Aprobar Habilitación</button>`;
          }
        }

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0;">${student.name}</h4>
              <p style="font-size: 0.7rem; color: var(--text-muted); margin: 2px 0 0 0;">Nota original: <span style="font-family: var(--font-mono); font-weight: 600;">${originalGradeInfo.grade.toFixed(2)}</span></p>
            </div>
            ${statusBadgeHTML}
          </div>
          <div style="background: var(--bg-secondary); padding: 8px; border-radius: 4px; display: flex; flex-direction: column; gap: 4px;">
            ${statusExplanation}
          </div>
          ${actionBtnHTML ? `
          <div style="display: flex; justify-content: flex-end; margin-top: 2px;">
            ${actionBtnHTML}
          </div>
          ` : ''}
        `;

        // Wire up buttons
        const btnPay = card.querySelector(".btn-register-payment");
        if (btnPay) {
          btnPay.addEventListener("click", () => {
            if (!localState.data.habilitacionStates) localState.data.habilitacionStates = {};
            localState.data.habilitacionStates[habKey] = "Paid";
            refreshUI();
          });
        }

        const btnApprove = card.querySelector(".btn-approve-hab");
        if (btnApprove) {
          btnApprove.addEventListener("click", () => {
            if (!localState.data.habilitaciones) localState.data.habilitaciones = {};
            localState.data.habilitaciones[habKey] = true;
            if (!localState.data.habilitacionStates) localState.data.habilitacionStates = {};
            localState.data.habilitacionStates[habKey] = "Approved";
            refreshUI();
          });
        }

        DOM.specialHabilitacionesFeed.appendChild(card);
      });
    }
  }
}

/**
 * Renders Configurator Checklist Panel
 */
function renderConfiguratorPanel() {
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const evName = localState.data.selectedEvent;
  
  const currentProgram = localState.data.programs[pName];
  const currentSignature = currentProgram.signatures[sName];
  
  DOM.configActiveEventName.textContent = evName;
  
  const activeEventCriteria = currentSignature.activeCriteriaByEvent[evName] || [];
  
  // Update category tab count badges dynamically
  const allCriteria = currentSignature.criteria;
  let coreCount = 0;
  let advancedCount = 0;
  let transversalCount = 0;

  activeEventCriteria.forEach(critId => {
    const crit = allCriteria[critId];
    if (crit) {
      if (crit.type === "Core") coreCount++;
      else if (crit.type === "Advanced") advancedCount++;
      else if (crit.type === "Transversal") transversalCount++;
    }
  });

  if (DOM.badgeCountCore) DOM.badgeCountCore.textContent = coreCount;
  if (DOM.badgeCountAdvanced) DOM.badgeCountAdvanced.textContent = advancedCount;
  if (DOM.badgeCountTransversal) DOM.badgeCountTransversal.textContent = transversalCount;
  
  const renderCategorizedList = (container, listType) => {
    container.innerHTML = "";
    
    const catCriteria = Object.keys(currentSignature.criteria).filter(critId => {
      return currentSignature.criteria[critId].type === listType;
    });
    
    if (catCriteria.length === 0) {
      container.innerHTML = `<p style="font-size: 0.72rem; color: var(--text-muted); padding: 8px 0; font-style: italic;">Sin competencias en esta categoría.</p>`;
      return;
    }
    
    // Group by Element of Performance
    const groups = {};
    catCriteria.forEach(critId => {
      const crit = currentSignature.criteria[critId];
      const elName = crit.element || "Elemento General de Desempeño";
      if (!groups[elName]) groups[elName] = [];
      groups[elName].push(critId);
    });
    
    // Render Element Blocks
    Object.keys(groups).forEach(elName => {
      const elHeader = document.createElement("div");
      elHeader.className = "config-element-sub-header font-mono";
      elHeader.innerHTML = `<span class="element-icon">📌</span> ${elName}`;
      container.appendChild(elHeader);
      
      groups[elName].forEach(critId => {
        const crit = currentSignature.criteria[critId];
        const isActive = activeEventCriteria.includes(critId);
        
        const row = document.createElement("div");
        row.className = `checkbox-row ${isActive ? 'active' : ''}`;
        row.dataset.criterionId = critId;
        
        row.innerHTML = `
          <input type="checkbox" id="chk-${critId}" ${isActive ? 'checked' : ''}>
          <span class="custom-checkbox-indicator font-sans">${isActive ? '✓' : ''}</span>
          <div class="checkbox-row-text">
            <span class="criterion-code-label">${critId}: ${crit.name.split(":")[0]}</span>
            <span class="criterion-desc-label">${crit.name.split(":").slice(1).join(":").trim()}</span>
          </div>
        `;
        
        row.addEventListener("click", (e) => {
          e.preventDefault();
          toggleConfigCriterion(critId, evName);
        });
        
        container.appendChild(row);
      });
    });
  };
  
  renderCategorizedList(DOM.coreCriteriaList, "Core");
  renderCategorizedList(DOM.advancedCriteriaList, "Advanced");
  renderCategorizedList(DOM.transversalCriteriaList, "Transversal");
}

/**
 * Renders floating student portal simulator dock (bottom-left)
 */
/**
 * Action plans and specific improvements tailored for each standard MNC criterion
 */
function getCriterionActionPlan(critId, critName) {
  const normalizedId = critId.toUpperCase();
  if (normalizedId.includes("C1")) {
    return "<strong>Acción de mejora recomendada:</strong> Practicar el modelamiento de algoritmos simples mediante pseudocódigo e identificar variables críticas de entrada/salida. Se recomienda resolver la guía de ejercicios del Hito 1 y asistir a la tutoría grupal de los martes.";
  }
  if (normalizedId.includes("C2")) {
    return "<strong>Acción de mejora recomendada:</strong> Repasar las compuertas lógicas (AND, OR, NOT) y las leyes de simplificación del Álgebra de Boole. Realizar los cuestionarios de autoestudio interactivos en el aula virtual.";
  }
  if (normalizedId.includes("C3")) {
    return "<strong>Acción de mejora recomendada:</strong> Estudiar la Notación Big-O, enfocándose en la diferencia entre complejidades lineales O(n), cuadráticas O(n²) y logarítmicas O(log n). Revisar la eficiencia de bucles anidados.";
  }
  if (normalizedId.includes("A1")) {
    return "<strong>Acción de mejora recomendada:</strong> Repasar el cálculo de distancias y mapeo de coordenadas cartesianas en pantallas. Consultar la documentación de la API del Canvas para dibujar elementos dinámicos.";
  }
  if (normalizedId.includes("A2")) {
    return "<strong>Acción de mejora recomendada:</strong> Practicar la lectura de logs de servidor y profiling de base de datos para identificar cuellos de botella en peticiones HTTP recurrentes.";
  }
  if (normalizedId.includes("T1")) {
    return "<strong>Acción de mejora recomendada:</strong> Asegurar que la documentación técnica use una terminología cuantitativa clara y estructurada. Evitar descripciones subjetivas en los reportes de calidad.";
  }
  if (normalizedId.includes("T2")) {
    return "<strong>Acción de mejora recomendada:</strong> Participar activamente en actividades grupales de pair programming, haciendo una comunicación asertiva durante la resolución conjunta de fallas de lógica.";
  }
  
  return `<strong>Acción de mejora recomendada:</strong> Repasar el contenido de la competencia "${critName}" y consultar con el docente de la asignatura sobre los recursos de apoyo disponibles en el aula virtual.`;
}

function renderStudentSimulator() {
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const evName = localState.data.selectedEvent;
  const evaluations = localState.data.evaluations;
  
  const currentProgram = localState.data.programs[pName];
  const currentSignature = currentProgram.signatures[sName];
  const students = currentSignature.students;
  
  // Rebuild sim students picker if needed
  const options = DOM.simStudentPicker.querySelectorAll("option");
  let studentIdsInOptions = Array.from(options).map(o => o.value).join(",");
  let studentIdsInSignature = students.map(s => s.id).join(",");
  
  if (studentIdsInOptions !== studentIdsInSignature) {
    DOM.simStudentPicker.innerHTML = "";
    students.forEach(st => {
      const opt = document.createElement("option");
      opt.value = st.id;
      opt.textContent = st.name;
      DOM.simStudentPicker.appendChild(opt);
    });
  }
  
  const currentSimStudentId = DOM.simStudentPicker.value;
  const student = students.find(s => s.id === currentSimStudentId);
  
  if (!student) return;

  // Active Appeal Validation: Close the appeal form if the student does not have the target criterion "Not Met"
  if (activeStudentAppeal) {
    const { studentId, criterionId, eventId } = activeStudentAppeal;
    const key = `${studentId}_${criterionId}_${eventId}`;
    const cellEval = evaluations[key] || { state: "Pending" };
    
    if (studentId !== student.id || cellEval.state !== "Not Met") {
      activeStudentAppeal = null;
      if (DOM.simAppealFormContainer) DOM.simAppealFormContainer.style.display = "none";
      if (DOM.simAppealEmptyState) DOM.simAppealEmptyState.style.display = "flex";
    }
  }
  
  if (DOM.simScreenTitle) {
    DOM.simScreenTitle.textContent = `Competencias de ${student.name}`;
  }
  
  // Emojis tokens display updates
  let tokensHTML = "";
  for (let i = 0; i < 3; i++) {
    tokensHTML += (i < student.tokens) ? "🪙" : "⚪";
  }
  if (DOM.simScreenTokenDisplay) {
    DOM.simScreenTokenDisplay.textContent = `Tokens: ${tokensHTML} (${student.tokens})`;
  }
  if (DOM.simScreenTokenDisplayList) {
    DOM.simScreenTokenDisplayList.textContent = `Tokens: ${tokensHTML} (${student.tokens})`;
  }
  if (DOM.simDashboardTokenDisplay) {
    DOM.simDashboardTokenDisplay.textContent = `${tokensHTML} (${student.tokens})`;
  }

  // --- Dynamic Dashboard Metrics Rendering ---
  const stGradeInfo = getStudentGradeInfo(student.id, pName, sName);
  if (stGradeInfo) {
    // 1. Grade Badge and Status Text
    if (DOM.simDashboardGradeBadge) {
      DOM.simDashboardGradeBadge.textContent = stGradeInfo.grade.toFixed(1);
      DOM.simDashboardGradeBadge.className = "grade-indicator";
      let gradeClass = "grade-bracket-failing";
      if (stGradeInfo.grade >= 3.0 && stGradeInfo.grade < 4.0) gradeClass = "grade-bracket-passing";
      else if (stGradeInfo.grade >= 4.0 && stGradeInfo.grade < 5.0) gradeClass = "grade-bracket-mastery";
      else if (stGradeInfo.grade === 5.0) gradeClass = "grade-bracket-perfect";
      DOM.simDashboardGradeBadge.classList.add(gradeClass);
    }
    
    if (DOM.simDashboardGradeStatus) {
      if (stGradeInfo.grade >= 3.0) {
        DOM.simDashboardGradeStatus.textContent = "Aprobando";
        DOM.simDashboardGradeStatus.style.color = "var(--color-met)";
      } else {
        DOM.simDashboardGradeStatus.textContent = "Reprobando";
        DOM.simDashboardGradeStatus.style.color = "var(--color-notmet)";
      }
    }
    
    if (DOM.simDashboardGradeDetail) {
      if (stGradeInfo.totalCores === 0) {
        DOM.simDashboardGradeDetail.textContent = "Sin competencias obligatorias";
      } else if (stGradeInfo.coresMetCount === stGradeInfo.totalCores) {
        DOM.simDashboardGradeDetail.textContent = "Criterios Core aprobados";
      } else {
        DOM.simDashboardGradeDetail.textContent = `Falta(n) ${stGradeInfo.totalCores - stGradeInfo.coresMetCount} Core`;
      }
    }
    
    // 2. Core Progress Bar
    if (DOM.simDashboardCoreFraction) {
      DOM.simDashboardCoreFraction.textContent = `${stGradeInfo.coresMetCount} / ${stGradeInfo.totalCores}`;
    }
    if (DOM.simDashboardCoreBar) {
      const corePct = stGradeInfo.totalCores > 0 ? (stGradeInfo.coresMetCount / stGradeInfo.totalCores) * 100 : 100;
      DOM.simDashboardCoreBar.style.width = `${corePct}%`;
    }
    if (DOM.simDashboardCoreStatusText) {
      if (stGradeInfo.totalCores === 0) {
        DOM.simDashboardCoreStatusText.textContent = "No hay competencias técnicas obligatorias definidas.";
      } else if (stGradeInfo.coresMetCount === stGradeInfo.totalCores) {
        DOM.simDashboardCoreStatusText.textContent = "¡Todas las competencias técnicas obligatorias logradas!";
      } else {
        DOM.simDashboardCoreStatusText.textContent = `Falta(n) ${stGradeInfo.totalCores - stGradeInfo.coresMetCount} competencia(s) obligatoria(s) por cumplir.`;
      }
    }

    // 3. Cohort Comparison calculations
    const cohortGrades = students.map(s => getStudentGradeInfo(s.id, pName, sName).grade);
    const maxGrade = Math.max(...cohortGrades);
    const avgGrade = parseFloat((cohortGrades.reduce((sum, g) => sum + g, 0) / students.length).toFixed(2));
    const myGrade = stGradeInfo.grade;
    
    if (DOM.simCompMyGrade) DOM.simCompMyGrade.textContent = myGrade.toFixed(1);
    if (DOM.simCompMyBar) DOM.simCompMyBar.style.width = `${(myGrade / 5.0) * 100}%`;
    if (DOM.simCompAvgGrade) DOM.simCompAvgGrade.textContent = avgGrade.toFixed(1);
    if (DOM.simCompAvgBar) DOM.simCompAvgBar.style.width = `${(avgGrade / 5.0) * 100}%`;
    if (DOM.simCompMaxGrade) DOM.simCompMaxGrade.textContent = maxGrade.toFixed(1);
    if (DOM.simCompMaxBar) DOM.simCompMaxBar.style.width = `${(maxGrade / 5.0) * 100}%`;
    
    if (DOM.simCompStandingBanner) {
      if (myGrade === maxGrade && maxGrade > avgGrade) {
        DOM.simCompStandingBanner.textContent = "🥇 ¡Felicidades! Tienes el rendimiento académico más alto del grupo.";
        DOM.simCompStandingBanner.style.backgroundColor = "var(--bg-success-soft)";
        DOM.simCompStandingBanner.style.borderColor = "rgba(16, 185, 129, 0.15)";
        DOM.simCompStandingBanner.style.color = "var(--color-success)";
      } else if (myGrade > avgGrade) {
        DOM.simCompStandingBanner.textContent = "📈 Te encuentras por encima del promedio del grupo de formación.";
        DOM.simCompStandingBanner.style.backgroundColor = "var(--bg-info-soft)";
        DOM.simCompStandingBanner.style.borderColor = "rgba(14, 165, 233, 0.15)";
        DOM.simCompStandingBanner.style.color = "var(--color-info)";
      } else if (myGrade === avgGrade) {
        DOM.simCompStandingBanner.textContent = "⚖️ Tu rendimiento es equivalente al promedio exacto del grupo.";
        DOM.simCompStandingBanner.style.backgroundColor = "var(--bg-warning-soft)";
        DOM.simCompStandingBanner.style.borderColor = "rgba(245, 158, 11, 0.15)";
        DOM.simCompStandingBanner.style.color = "var(--color-warning)";
      } else {
        DOM.simCompStandingBanner.textContent = "⚠️ Te encuentras por debajo del promedio del grupo. Revisa los aspectos a mejorar.";
        DOM.simCompStandingBanner.style.backgroundColor = "var(--bg-danger-soft)";
        DOM.simCompStandingBanner.style.borderColor = "rgba(239, 68, 68, 0.15)";
        DOM.simCompStandingBanner.style.color = "var(--color-danger)";
      }
    }

    // 4. Aspect-Level Diagnostic Recommendations
    if (DOM.simRecommendationsList) {
      DOM.simRecommendationsList.innerHTML = "";
      const activeCrits = currentSignature.activeCriteriaByEvent[evName] || [];
      const notMetList = [];
      const pendingList = [];
      
      activeCrits.forEach(critId => {
        const key = `${student.id}_${critId}_${evName}`;
        const cellEval = evaluations[key] || { state: "Pending" };
        if (cellEval.state === "Not Met") {
          notMetList.push({ id: critId, state: cellEval.state });
        } else if (cellEval.state === "Pending") {
          pendingList.push({ id: critId, state: cellEval.state });
        } else if (cellEval.state === "Disputed") {
          notMetList.push({ id: critId, state: cellEval.state });
        }
      });
      
      if (notMetList.length === 0 && pendingList.length === 0 && activeCrits.length > 0) {
        DOM.simRecommendationsList.innerHTML = `
          <div style="text-align: center; padding: 30px 10px; color: var(--text-secondary);">
            <span style="font-size: 3rem;">🎉</span>
            <h4 style="font-weight: 700; color: var(--text-primary); margin-top: 10px;">¡Excelente Desempeño!</h4>
            <p style="font-size: 0.75rem; margin-top: 4px;">Has cumplido satisfactoriamente con todos los criterios de evaluación activos para este hito académico.</p>
          </div>
        `;
      } else if (activeCrits.length === 0) {
        DOM.simRecommendationsList.innerHTML = `<p style="font-size: 0.75rem; color: var(--text-muted); text-align: center; padding: 12px 0;">No hay criterios activos en este evento.</p>`;
      } else {
        // Priority rendering: Not Met (Core first), then other Not Met, then Pending
        const sortedDiagnosis = [];
        
        // Cores Not Met
        notMetList.forEach(item => {
          const crit = currentSignature.criteria[item.id];
          if (crit.type === "Core") sortedDiagnosis.push({ ...item, crit });
        });
        
        // Advanced/Transversal Not Met/Disputed
        notMetList.forEach(item => {
          const crit = currentSignature.criteria[item.id];
          if (crit.type !== "Core") sortedDiagnosis.push({ ...item, crit });
        });
        
        // Pending Criteria
        pendingList.forEach(item => {
          const crit = currentSignature.criteria[item.id];
          sortedDiagnosis.push({ ...item, crit });
        });
        
        sortedDiagnosis.forEach(diag => {
          const card = document.createElement("div");
          card.className = "diagnostic-card";
          
          let title = "";
          let advice = "";
          let typeLabel = diag.crit.type === "Core" ? "Técnica (Core)" : (diag.crit.type === "Advanced" ? "Avanzada" : "Transversal");
          
          if (diag.state === "Not Met") {
            if (diag.crit.type === "Core") {
              card.classList.add("warning-core");
              title = `🚨 URGENTE: ${diag.id} - ${diag.crit.name.split(":")[0]} (No Lograda)`;
              advice = `Esta competencia técnica es de carácter <strong>indispensable</strong>. Tu calificación actual está reprobando (< 3.0) debido a este pendiente. Si consideras que cumples con la rúbrica, utiliza tus tokens para redactar una sustentación técnica en la sección 'Competencias y Apelaciones'.`;
            } else if (diag.crit.type === "Advanced") {
              card.classList.add("info-advanced");
              title = `⭐ MEJORA: ${diag.id} - ${diag.crit.name.split(":")[0]} (No Lograda)`;
              advice = `Esta competencia es avanzada. Lograr este criterio te permitirá elevar tu calificación de aprobado hasta el rango superior o de excelencia (máximo 5.0).`;
            } else {
              card.classList.add("suggest-transversal");
              title = `🤝 SUGERENCIA: ${diag.id} - ${diag.crit.name.split(":")[0]} (No Lograda)`;
              advice = `Esta competencia transversal de habilidades socio-laborales es importante para tu formación integral. Revisa con el docente las condiciones de cumplimiento.`;
            }
          } else if (diag.state === "Disputed") {
            card.className = "diagnostic-card";
            card.style.borderLeft = "3px solid var(--color-disputed)";
            title = `⛔ EN APELACIÓN: ${diag.id} - ${diag.crit.name.split(":")[0]}`;
            advice = `Has presentado una apelación técnica para este criterio. Se encuentra en la bandeja del docente esperando revisión de tu caso de defensa.`;
          } else {
            // Pending
            card.style.borderLeft = "3px solid var(--text-muted)";
            title = `⏳ PENDIENTE: ${diag.id} - ${diag.crit.name.split(":")[0]}`;
            advice = `Este criterio aún no ha sido evaluado en este hito académico. Prepárate con antelación para sustentar tu desempeño ante el evaluador corporativo.`;
          }
          
          const actionPlan = getCriterionActionPlan(diag.id, diag.crit.name);
          card.innerHTML = `
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-primary); display: flex; justify-content: space-between; align-items: center;">
              <span>${title}</span>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">${typeLabel}</span>
            </div>
            <p style="font-size: 0.72rem; color: var(--text-secondary); line-height: 1.35; margin-top: 2px;">${advice}</p>
            <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed var(--border-color); font-size: 0.7rem; color: var(--text-muted);">
              ${actionPlan}
            </div>
          `;
          
          DOM.simRecommendationsList.appendChild(card);
        });
      }
    }
  }

  // --- Render Competencies Checklist Sub-view ---
  DOM.simChecklistContainer.innerHTML = "";
  const activeCrits = currentSignature.activeCriteriaByEvent[evName] || [];
  
  if (activeCrits.length === 0) {
    DOM.simChecklistContainer.innerHTML = `<p style="font-size: 0.72rem; color: var(--text-muted); text-align: center; padding: 12px 0;">No hay celdas de calificación activas para este evento de hito.</p>`;
    return;
  }
  
  activeCrits.forEach(critId => {
    const crit = currentSignature.criteria[critId];
    const key = `${student.id}_${critId}_${evName}`;
    const cellEval = evaluations[key] || { state: "Pending" };
    
    const row = document.createElement("div");
    row.className = "sim-chk-item";
    
    let badgeClass = "bg-sim-pending";
    let badgeText = "🟡";
    let statusText = `<span class="sim-text-pending">Pendiente</span>`;
    let appealBtnHTML = "";
    
    if (cellEval.state === "Met") {
      badgeClass = "bg-sim-met";
      badgeText = "✓";
      statusText = `<span class="sim-text-met">Logrado</span>`;
    } else if (cellEval.state === "Not Met") {
      badgeClass = "bg-sim-notmet";
      badgeText = "✕";
      statusText = `<span class="sim-text-notmet">No Logrado</span>`;
      
      if (student.tokens > 0) {
        appealBtnHTML = `<button class="sim-chk-btn-appeal font-sans" data-student-id="${student.id}" data-criterion-id="${critId}" data-event-id="${evName}">Sustentar</button>`;
      } else {
        appealBtnHTML = `<span style="font-size: 0.65rem; color: var(--text-muted); font-style: italic;">Sin tokens</span>`;
      }
    } else if (cellEval.state === "Disputed") {
      badgeClass = "bg-sim-disputed";
      badgeText = "⛔";
      statusText = `<span class="sim-text-disputed">Apelado</span>`;
    }
    
    row.innerHTML = `
      <div class="sim-chk-left">
        <span class="sim-chk-badge ${badgeClass}">${badgeText}</span>
        <div class="sim-chk-details">
          <span class="sim-chk-name">${critId}: ${crit.name}</span>
          <span class="sim-chk-type">${statusText} • ${crit.type === "Core" ? "Técnica" : (crit.type === "Advanced" ? "Avanzada" : "Transversal")}</span>
        </div>
      </div>
      <div class="sim-chk-right">
        ${appealBtnHTML}
      </div>
    `;
    
    const btn = row.querySelector(".sim-chk-btn-appeal");
    if (btn) {
      btn.addEventListener("click", () => {
        openStudentAppealForm(student.id, critId, evName);
      });
    }
    
    DOM.simChecklistContainer.appendChild(row);
  });

  // --- Render Appeals History for Active Student ---
  if (DOM.simMyAppealsList) {
    DOM.simMyAppealsList.innerHTML = "";
    const activeAppeals = [];

    // Loop through all evaluations to find Disputed ones belonging to this student
    Object.keys(evaluations).forEach(key => {
      const parts = key.split("_");
      if (parts.length >= 3 && parts[0] === student.id) {
        const cellEval = evaluations[key];
        if (cellEval && cellEval.state === "Disputed") {
          const critId = parts[1];
          const eventItemName = parts.slice(2).join("_");
          const crit = currentSignature.criteria[critId];
          if (crit) {
            activeAppeals.push({
              key: key,
              critId: critId,
              critName: crit.name.split(":")[0],
              event: eventItemName,
              defenseText: cellEval.defenseText || "Sin justificación."
            });
          }
        }
      }
    });

    if (activeAppeals.length === 0) {
      DOM.simMyAppealsList.innerHTML = `
        <div style="text-align: center; padding: 16px; color: var(--text-secondary); font-size: 0.72rem; font-style: italic;">
          No tienes apelaciones radicadas activas para este módulo.
        </div>
      `;
    } else {
      activeAppeals.forEach(appeal => {
        const item = document.createElement("div");
        item.className = "sim-my-appeal-item";
        item.style.backgroundColor = "var(--bg-primary)";
        item.style.border = "1px solid var(--border-color)";
        item.style.borderRadius = "var(--radius-sm)";
        item.style.padding = "10px";
        item.style.fontSize = "0.72rem";
        item.style.display = "flex";
        item.style.flexDirection = "column";
        item.style.gap = "4px";
        item.style.marginBottom = "8px";
        
        item.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--text-primary); align-items: center;">
            <span>⛔ ${appeal.critId} - ${appeal.critName}</span>
            <span class="badge" style="background-color: var(--bg-purple-soft); color: var(--color-disputed); border: 1px solid rgba(168, 85, 247, 0.15); padding: 1px 4px; border-radius: 3px; font-size: 0.62rem; text-transform: uppercase; font-weight: 700;">Apelado</span>
          </div>
          <div style="font-size: 0.65rem; color: var(--text-muted);">
            <span>Evidencia: ${appeal.event}</span>
          </div>
          <p style="margin: 4px 0 0 0; font-style: italic; color: var(--text-secondary); line-height: 1.35; padding: 6px; background-color: var(--bg-secondary); border-radius: 4px; border-left: 2px solid var(--color-disputed); font-size: 0.7rem;">
            "${appeal.defenseText}"
          </p>
        `;
        DOM.simMyAppealsList.appendChild(item);
      });
    }
  }

  // --- Render Boletín de Notas por Periodos (Nota 1, 2 y 3) ---
  if (DOM.simBoletinTbody) {
    DOM.simBoletinTbody.innerHTML = "";
    
    if (currentSignature.cuts) {
      Object.keys(currentSignature.cuts).forEach(cutName => {
        const cutConfig = currentSignature.cuts[cutName];
        const gradeVal = stGradeInfo.cutGrades && stGradeInfo.cutGrades[cutName] !== undefined ? stGradeInfo.cutGrades[cutName] : 1.0;
        
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid var(--border-color)";
        
        let gradeClass = "grade-bracket-failing";
        if (gradeVal >= 3.0 && gradeVal < 4.0) gradeClass = "grade-bracket-passing";
        else if (gradeVal >= 4.0 && gradeVal < 5.0) gradeClass = "grade-bracket-mastery";
        else if (gradeVal === 5.0) gradeClass = "grade-bracket-perfect";
        
        let displayCutName = cutName;
        if (cutName === "Nota 1") {
          displayCutName = "Nota 1 (Periodo Inicial: Parcial y Talleres)";
        } else if (cutName === "Nota 2") {
          displayCutName = "Nota 2 (Periodo Intermedio: Hitos y Complejidad)";
        } else if (cutName === "Nota 3") {
          displayCutName = "Nota 3 (Periodo Final: Proyectos Integradores)";
        }

        tr.innerHTML = `
          <td style="padding: 10px; font-size: 0.78rem; font-weight: 600; color: var(--text-primary);">${displayCutName}</td>
          <td style="padding: 10px; text-align: center; font-size: 0.75rem; color: var(--text-secondary); font-family: var(--font-mono);">${(cutConfig.weight * 100).toFixed(0)}%</td>
          <td style="padding: 10px; text-align: right;">
            <span class="grade-indicator ${gradeClass}" style="padding: 3px 8px; border-radius: 4px; font-size: 0.72rem; font-weight: 700;">${gradeVal.toFixed(2)}</span>
          </td>
        `;
        DOM.simBoletinTbody.appendChild(tr);
      });
    } else {
      DOM.simBoletinTbody.innerHTML = `<tr><td colspan="3" style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.72rem;">Esta asignatura no tiene una estructura de cortes definida.</td></tr>`;
    }
  }

  // --- Render Boletín Summary Box ---
  if (DOM.simBoletinSummaryBox) {
    DOM.simBoletinSummaryBox.innerHTML = "";
    
    const originalWeighted = stGradeInfo.grade;
    let cappingAlert = "";
    let summaryBg = "var(--bg-secondary)";
    
    let weightedAverage = 0;
    if (currentSignature.cuts) {
      Object.keys(currentSignature.cuts).forEach(cutName => {
        const cutConfig = currentSignature.cuts[cutName];
        const cutGrade = stGradeInfo.cutGrades && stGradeInfo.cutGrades[cutName] !== undefined ? stGradeInfo.cutGrades[cutName] : 1.0;
        weightedAverage += cutGrade * cutConfig.weight;
      });
    }
    
    const wasCapped = !stGradeInfo.allCoresMet && weightedAverage >= 3.0;
    
    let gradeLabelClass = "grade-bracket-failing";
    if (stGradeInfo.grade >= 3.0) gradeLabelClass = "grade-bracket-passing";
    
    if (wasCapped) {
      summaryBg = "rgba(239, 68, 68, 0.05)";
      cappingAlert = `
        <div style="margin-top: 6px; padding: 8px; background-color: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 4px; color: var(--color-danger); font-size: 0.68rem; line-height: 1.35;">
          <strong>⚠️ Restricción de Competencias (MNC):</strong> Tu promedio ponderado de notas es <strong>${weightedAverage.toFixed(2)}</strong>, pero la nota definitiva ha sido limitada a <strong>2.9</strong> debido a que tienes competencias técnicas obligatorias (Core) en estado no logrado.
        </div>
      `;
    }
    
    DOM.simBoletinSummaryBox.style.backgroundColor = summaryBg;
    DOM.simBoletinSummaryBox.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem;">
        <span style="font-weight: 700; color: var(--text-primary);">Nota Semestral Definitiva:</span>
        <span class="grade-indicator ${gradeLabelClass}" style="font-size: 1rem; font-weight: 800; padding: 4px 10px; border-radius: 4px;">${stGradeInfo.grade.toFixed(2)}</span>
      </div>
      <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 4px;">
        Fórmula: (Nota 1 * 30%) + (Nota 2 * 30%) + (Nota 3 * 40%) ${stGradeInfo.allCoresMet ? "" : " + Límite MNC"}
      </div>
      ${cappingAlert}
    `;
  }

  // --- Render Habilitación Alert Banner ---
  if (DOM.simHabilitacionBanner) {
    DOM.simHabilitacionBanner.innerHTML = "";
    
    const bannerEl = DOM.simHabilitacionBanner;
    const habKey = `${student.id}_${sName}`;
    const paymentState = (localState.data.habilitacionStates && localState.data.habilitacionStates[habKey]) || "None";
    
    if (stGradeInfo.hasHabilitacion || paymentState === "Approved") {
      bannerEl.parentElement.style.display = "";
      bannerEl.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
      bannerEl.style.borderColor = "var(--color-success)";
      bannerEl.style.color = "var(--color-success)";
      bannerEl.innerHTML = `
        <strong style="display: block; font-size: 0.8rem; margin-bottom: 4px;">✅ Habilitación Aprobada</strong>
        Has presentado y aprobado la prueba de habilitación académica para esta asignatura. La nota definitiva ha sido registrada en el sistema institucional como <strong>3.0 (Aprobado)</strong> y las competencias técnicas asociadas se consideran superadas.
      `;
    } else if (paymentState === "Paid") {
      bannerEl.parentElement.style.display = "";
      bannerEl.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
      bannerEl.style.borderColor = "var(--color-info)";
      bannerEl.style.color = "var(--color-info)";
      bannerEl.innerHTML = `
        <strong style="display: block; font-size: 0.8rem; margin-bottom: 4px;">🟢 Habilitación Pagada</strong>
        Habilitación Pagada. En espera de programación y registro por el docente.
      `;
    } else if (paymentState === "Pending") {
      bannerEl.parentElement.style.display = "";
      bannerEl.style.backgroundColor = "rgba(245, 158, 11, 0.08)";
      bannerEl.style.borderColor = "var(--color-warning)";
      bannerEl.style.color = "var(--color-warning)";
      bannerEl.innerHTML = `
        <strong style="display: block; font-size: 0.8rem; margin-bottom: 4px;">⚠️ Solicitud Registrada</strong>
        Solicitud de Habilitación registrada. Pendiente de pago en administración.
      `;
    } else if (stGradeInfo.grade >= 3.0) {
      bannerEl.parentElement.style.display = "";
      bannerEl.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
      bannerEl.style.borderColor = "rgba(16, 185, 129, 0.2)";
      bannerEl.style.color = "var(--color-success)";
      bannerEl.innerHTML = `
        <strong style="display: block; font-size: 0.8rem; margin-bottom: 4px;">🎉 Asignatura Aprobada</strong>
        Cumples satisfactoriamente con los requisitos académicos establecidos. Has aprobado todas las competencias obligatorias de esta asignatura y no requieres realizar trámites adicionales.
      `;
    } else if (stGradeInfo.eligibleForHabilitacion) {
      bannerEl.parentElement.style.display = "";
      bannerEl.style.backgroundColor = "rgba(245, 158, 11, 0.08)";
      bannerEl.style.borderColor = "var(--color-warning)";
      bannerEl.style.color = "var(--color-warning)";
      bannerEl.innerHTML = `
        <strong style="display: block; font-size: 0.8rem; margin-bottom: 4px;">⚠️ Apto para Habilitación</strong>
        Tienes derecho a presentar una prueba de habilitación para esta asignatura, ya que tu nota definitiva está entre 2.0 y 2.9 (tienes <strong>${stGradeInfo.grade.toFixed(2)}</strong>) y no repruebas más de 2 asignaturas en total en el programa actual. 
        <br><em style="display: block; margin-top: 4px; font-size: 0.7rem; color: var(--text-secondary);">Radica tu solicitud en la administración para habilitar esta materia.</em>
      `;
    } else {
      bannerEl.parentElement.style.display = "";
      bannerEl.style.backgroundColor = "rgba(239, 68, 68, 0.08)";
      bannerEl.style.borderColor = "var(--color-danger)";
      bannerEl.style.color = "var(--color-danger)";
      bannerEl.innerHTML = `
        <strong style="display: block; font-size: 0.8rem; margin-bottom: 4px;">❌ Reprobado sin derecho a Habilitación</strong>
        No eres apto para habilitar esta asignatura. 
        <br><strong>Motivo:</strong> ${stGradeInfo.reasonForIneligibility}
        <br><em style="display: block; margin-top: 4px; font-size: 0.7rem; color: var(--text-secondary);">Deberás cursar y pagar la asignatura nuevamente en el próximo periodo académico.</em>
      `;
    }
  }

  // --- Render Missed Exams & Supletorios ---
  if (DOM.simSupletoriosList) {
    DOM.simSupletoriosList.innerHTML = "";
    
    let supletoriosCount = 0;
    
    // Scan evaluations for "Absent" states
    Object.keys(evaluations).forEach(key => {
      const parts = key.split("_");
      if (parts.length >= 3 && parts[0] === student.id) {
        const cellEval = evaluations[key];
        if (cellEval && cellEval.state === "Absent") {
          supletoriosCount++;
          const critId = parts[1];
          const eventItemName = parts.slice(2).join("_");
          
          let statusText = "Sin supletorio solicitado";
          let statusColorClass = "state-absent-none";
          let statusBadge = "🔴";
          let explanation = "La calificación está bloqueada. Comunícate con la coordinación administrativa.";
          
          if (cellEval.supletorioState === "Pending") {
            statusText = "Pendiente de pago";
            statusColorClass = "state-absent-pending";
            statusBadge = "🟡";
            explanation = "Supletorio registrado administrativamente. Realiza el pago en tesorería.";
          } else if (cellEval.supletorioState === "Paid") {
            statusText = "Pagado físicamente";
            statusColorClass = "state-absent-paid";
            statusBadge = "🟢";
            explanation = "Pago verificado y registrado. El docente ha recibido un ticket y ya puede calificarte.";
          }
          
          const item = document.createElement("div");
          item.style.padding = "10px";
          item.style.borderRadius = "var(--radius-sm)";
          item.style.backgroundColor = "var(--bg-primary)";
          item.style.border = "1px solid var(--border-color)";
          item.style.fontSize = "0.72rem";
          item.style.display = "flex";
          item.style.flexDirection = "column";
          item.style.gap = "4px";
          
          item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; font-weight: 700; color: var(--text-primary);">
              <span>📝 Examen: ${eventItemName}</span>
              <span class="font-mono font-semibold" style="font-size: 0.65rem; color: var(--text-muted);">${critId}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.68rem; margin-top: 2px;">
              <span style="color: var(--text-secondary);">Estado de Pago:</span>
              <span class="font-semibold" style="display: flex; align-items: center; gap: 4px;">
                ${statusBadge} <span class="badge ${statusColorClass}" style="padding: 1px 6px; border-radius: 3px; font-size: 0.65rem; border: none;">${statusText}</span>
              </span>
            </div>
            <p style="margin: 4px 0 0 0; font-size: 0.68rem; color: var(--text-muted); line-height: 1.3;">
              ${explanation}
            </p>
          `;
          
          DOM.simSupletoriosList.appendChild(item);
        }
      }
    });
    
    if (supletoriosCount === 0) {
      DOM.simSupletoriosList.innerHTML = `
        <div style="text-align: center; padding: 20px 10px; color: var(--text-muted); font-size: 0.72rem; font-style: italic;">
          ✅ No registras inasistencias ni exámenes perdidos en este módulo.
        </div>
      `;
    }
  }
}

function refreshUI() {
  const calcData = calculateGradesAndMetrics();
  
  // Dynamic header metadata updates (MNC level & CUOC occupational alignment)
  const pName = localState.data.selectedProgram;
  const currentProgram = localState.data.programs[pName];
  const metaEl = document.getElementById("header-program-meta");
  if (metaEl && currentProgram) {
    const levelStr = currentProgram.level || "Técnico Laboral (MNC)";
    const cuocStr = currentProgram.cuoc ? ` | CUOC: ${currentProgram.cuoc}` : "";
    metaEl.textContent = `${levelStr}${cuocStr}`;
  }
  
  renderDashboard(calcData);
  renderTeacherWorkspace(calcData);
  renderPriorityInbox(calcData.activeDisputes);
  renderConfiguratorPanel();
  renderStudentSimulator();
  if (typeof renderSpecialExamsWorkspace === "function") {
    renderSpecialExamsWorkspace();
  }
  localState.save();
}

// --- 6. CORE MNC INTERACTIONS ---

/**
 * Click cell evaluation cycles states
 */
function cycleCellEvaluation(studentId, criterionId, eventId) {
  const key = `${studentId}_${criterionId}_${eventId}`;
  const cellEval = localState.data.evaluations[key] || { state: "Pending" };
  
  if (cellEval.state === "Disputed") {
    // Open dispute details slide panel
    const pName = localState.data.selectedProgram;
    const sName = localState.data.selectedSignature;
    const currentSignature = localState.data.programs[pName].signatures[sName];
    const student = currentSignature.students.find(s => s.id === studentId);
    
    openAppealDrawer({
      studentId: studentId,
      studentName: student.name,
      studentTokens: student.tokens,
      criterionId: criterionId,
      criterionName: currentSignature.criteria[criterionId].name,
      criterionType: currentSignature.criteria[criterionId].type,
      eventId: eventId,
      defenseText: cellEval.defenseText || "",
      evaluationKey: key,
      programName: pName,
      signatureName: sName,
      isSupletorio: false
    });
    return;
  }
  
  if (cellEval.state === "Absent") {
    if (cellEval.supletorioState === "Paid") {
      const pName = localState.data.selectedProgram;
      const sName = localState.data.selectedSignature;
      const currentSignature = localState.data.programs[pName].signatures[sName];
      const student = currentSignature.students.find(s => s.id === studentId);
      
      openAppealDrawer({
        studentId: studentId,
        studentName: student.name,
        studentTokens: student.tokens,
        criterionId: criterionId,
        criterionName: currentSignature.criteria[criterionId].name,
        criterionType: currentSignature.criteria[criterionId].type,
        eventId: eventId,
        defenseText: "Examen con supletorio pagado físicamente. Listo para calificar.",
        evaluationKey: key,
        programName: pName,
        signatureName: sName,
        isSupletorio: true
      });
    } else {
      alert("Esta celda está bloqueada porque el estudiante estuvo ausente en el examen. Para poder calificar, se debe verificar y registrar físicamente el pago del supletorio.");
    }
    return;
  }
  
  let nextState = "Pending";
  if (cellEval.state === "Pending") nextState = "Met";
  else if (cellEval.state === "Met") nextState = "Not Met";
  else if (cellEval.state === "Not Met") {
    // Only exam/parcial events can have "Absent" state
    const pName = localState.data.selectedProgram;
    const sName = localState.data.selectedSignature;
    const currentSignature = localState.data.programs[pName].signatures[sName];
    let isExam = false;
    if (currentSignature.cuts) {
      for (const cutConfig of Object.values(currentSignature.cuts)) {
        if (cutConfig.events && cutConfig.events[eventId]) {
          if (cutConfig.events[eventId].isExam) {
            isExam = true;
            break;
          }
        }
      }
    }
    if (isExam) {
      nextState = "Absent";
    } else {
      nextState = "Pending";
    }
  }
  
  // Initialize supletorioState if next state is Absent
  if (nextState === "Absent") {
    localState.data.evaluations[key] = { state: "Absent", supletorioState: "None" };
  } else {
    localState.data.evaluations[key] = { state: nextState };
  }
  refreshUI();
}

/**
 * Toggles MNC criterion active in current event
 */
function toggleConfigCriterion(critId, eventId) {
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  
  const currentSignature = localState.data.programs[pName].signatures[sName];
  const activeList = currentSignature.activeCriteriaByEvent[eventId] || [];
  
  let updatedList;
  if (activeList.includes(critId)) {
    updatedList = activeList.filter(id => id !== critId);
  } else {
    updatedList = [...activeList, critId];
  }
  
  currentSignature.activeCriteriaByEvent[eventId] = updatedList;
  refreshUI();
}

/**
 * Workflow 1 - Launch Student Appeal Modal
 */
function openStudentAppealForm(studentId, critId, eventId) {
  activeStudentAppeal = { studentId, criterionId: critId, eventId };
  
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const currentSignature = localState.data.programs[pName].signatures[sName];
  const crit = currentSignature.criteria[critId];
  
  if (DOM.simAppealCritName) DOM.simAppealCritName.textContent = `${critId}: ${crit.name}`;
  if (DOM.simAppealEventName) DOM.simAppealEventName.textContent = eventId;
  if (DOM.simAppealDefenseInput) {
    DOM.simAppealDefenseInput.value = "";
    DOM.simAppealDefenseInput.focus();
  }
  
  if (DOM.simAppealEmptyState) DOM.simAppealEmptyState.style.display = "none";
  if (DOM.simAppealFormContainer) DOM.simAppealFormContainer.style.display = "flex";
}

/**
 * Complete Student Appeal submission
 */
function submitStudentDispute(defenseText) {
  if (!activeStudentAppeal) return;
  const { studentId, criterionId, eventId } = activeStudentAppeal;
  const key = `${studentId}_${criterionId}_${eventId}`;
  
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const currentSignature = localState.data.programs[pName].signatures[sName];
  const student = currentSignature.students.find(s => s.id === studentId);
  const evaluations = localState.data.evaluations;
  const cellEval = evaluations[key] || { state: "Pending" };

  if (!student || student.tokens <= 0 || cellEval.state !== "Not Met") {
    alert("No es posible radicar la apelación. Verifique sus tokens o el estado del criterio.");
    return;
  }
  
  student.tokens--;
  
  // Transition cell to Disputed with justification
  localState.data.evaluations[key] = {
    state: "Disputed",
    defenseText: defenseText
  };
  
  activeStudentAppeal = null;
  
  if (DOM.simAppealFormContainer) DOM.simAppealFormContainer.style.display = "none";
  if (DOM.simAppealEmptyState) DOM.simAppealEmptyState.style.display = "flex";
  
  refreshUI();
}

/**
 * Open Teacher Appeal Details Drawer
 */
function openAppealDrawer(dispute) {
  activeReviewDispute = dispute;
  
  DOM.appealStudentName.textContent = dispute.studentName;
  DOM.appealCriterionCode.textContent = `${dispute.criterionId}: ${dispute.criterionName} (${dispute.criterionType})`;
  DOM.appealEventName.textContent = `${dispute.signatureName} [${dispute.eventId}]`;
  DOM.appealDefenseText.textContent = `"${dispute.defenseText}"`;
  
  const tokenRow = DOM.appealStudentTokens.closest(".meta-row");
  const drawerTitle = document.getElementById("appeal-drawer-title");
  const defenseTitle = document.querySelector(".defense-evidence-section h3");
  const rulesReminder = document.querySelector(".appeal-rules-reminder");

  if (dispute.isSupletorio) {
    if (drawerTitle) drawerTitle.textContent = "Calificación de Supletorio";
    if (tokenRow) tokenRow.style.display = "none";
    if (defenseTitle) defenseTitle.textContent = "Detalle del Supletorio";
    if (rulesReminder) {
      rulesReminder.innerHTML = `
        <h4>Instrucciones del Supletorio:</h4>
        <p style="font-size: 0.72rem; line-height: 1.35; color: var(--text-secondary); margin: 0;">
          Este estudiante registró y pagó el supletorio físicamente en la corporación. 
          Al calificar como <strong>Logrado</strong> o <strong>No Logrado</strong>, se actualizará el estado de la competencia y se recalculará su promedio. No se consumen ni se reembolsan tokens.
        </p>
      `;
    }
    if (DOM.appealBtnApprove) DOM.appealBtnApprove.querySelector("span").textContent = "Marcar como Logrado (✅)";
    if (DOM.appealBtnMaintain) DOM.appealBtnMaintain.querySelector("span").textContent = "Marcar como No Logrado (❌)";
  } else {
    if (drawerTitle) drawerTitle.textContent = "Grade Appeal Request";
    if (tokenRow) tokenRow.style.display = "flex";
    if (defenseTitle) defenseTitle.textContent = "Sustentación Técnica de Estudiante";
    if (rulesReminder) {
      rulesReminder.innerHTML = `
        <h4>Consecuencias de la Decisión:</h4>
        <ul style="margin: 0; padding-left: 16px;">
          <li><strong>Aprobar Apelación:</strong> La celda cambia a <strong class="text-success">Met (✅)</strong> permanentemente. Se reembolsa el token al estudiante y se recalcula la nota.</li>
          <li><strong>Mantener Calificación:</strong> La celda se mantiene en <strong class="text-danger">Not Met (❌)</strong>. El token se <strong class="text-danger">consume permanentemente</strong> y la disputa se cierra.</li>
        </ul>
      `;
    }
    if (DOM.appealBtnApprove) DOM.appealBtnApprove.querySelector("span").textContent = "Aprobar Apelación (✅)";
    if (DOM.appealBtnMaintain) DOM.appealBtnMaintain.querySelector("span").textContent = "Mantener Calificación (❌)";
    
    DOM.appealStudentTokens.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const coin = document.createElement("span");
      coin.className = `token-coin ${i > dispute.studentTokens ? 'spent' : ''}`;
      coin.textContent = "🪙";
      DOM.appealStudentTokens.appendChild(coin);
    }
  }
  
  DOM.appealDrawerOverlay.classList.add("active");
  DOM.appealDrawer.classList.add("active");
}

function closeAppealDrawer() {
  DOM.appealDrawerOverlay.classList.remove("active");
  DOM.appealDrawer.classList.remove("active");
  activeReviewDispute = null;
}

/**
 * Teacher Dispute Actions - Approve Appeal
 * Cell permanently set to Met, refund token to student, resolves dispute.
 */
function approveDispute() {
  if (!activeReviewDispute) return;
  const { studentId, evaluationKey, programName, signatureName, isSupletorio } = activeReviewDispute;
  
  // Turn to Met
  localState.data.evaluations[evaluationKey] = {
    state: "Met"
  };
  
  // Refund Token only for standard disputes
  if (!isSupletorio) {
    const currentSignature = localState.data.programs[programName].signatures[signatureName];
    const student = currentSignature.students.find(s => s.id === studentId);
    if (student && student.tokens < 3) {
      student.tokens++;
    }
  }
  
  closeAppealDrawer();
  refreshUI();
}

/**
 * Teacher Dispute Actions - Maintain Grade
 * Lock cell to Not Met, consumes token permanently, resolves dispute.
 */
function maintainDisputeGrade() {
  if (!activeReviewDispute) return;
  const { evaluationKey } = activeReviewDispute;
  
  // Lock to Not Met
  localState.data.evaluations[evaluationKey] = {
    state: "Not Met"
  };
  
  closeAppealDrawer();
  refreshUI();
}

// ==========================================
// --- 6b. Phase 2: MNC Qualifications AI Extractor Logic ---
// ==========================================

// ==========================================
// --- 6b. Phase 2: MNC Qualifications AI Extractor Logic ---
// ==========================================

let parsedAIResult = null;

// ==========================================
// --- Phase 3: Gemini Real AI Connection & Serialization Helpers ---
// ==========================================

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

async function analyzeWithGeminiAPI(fileData, mimeType, filename, isText = false) {
  const apiKey = localState.data.geminiApiKey || "";
  if (!apiKey) {
    alert("Por favor, configure su API Key de Gemini en el panel superior.");
    return;
  }

  // Show scanning progress
  DOM.aiReportView.style.display = "none";
  DOM.aiDrawerFooter.style.display = "none";
  DOM.aiScannerSection.style.display = "flex";
  DOM.aiLogTerminal.innerHTML = "";

  const logLine = (text, type = "info") => {
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    line.textContent = text;
    DOM.aiLogTerminal.appendChild(line);
    DOM.aiLogTerminal.scrollTop = DOM.aiLogTerminal.scrollHeight;
  };

  logLine("[INFO] Iniciando conexión con Google Gemini Developer API...", "info");
  logLine("[INFO] Cargando modelo: gemini-3.1-flash-lite", "info");

  if (isText) {
    logLine(`[INFO] Leyendo archivo de texto: ${filename}`, "info");
  } else {
    logLine(`[INFO] Serializando archivo PDF (${Math.round(fileData.length / 1024)} KB) en Base64...`, "info");
  }

  logLine("[INFO] Aplicando filtros de nivel del Marco Nacional de Cualificaciones...", "meta");
  logLine("[WARNING] Alerta de nivel: Downgrading automático activado para competencias de nivel Tecnólogo/Profesional a Nivel Técnico (Nivel 3).", "warning");

  const promptText = `Extract all performance criteria (criterios de desempeño) from this curriculum document. I need them classified into Core (técnicas obligatorias), Advanced (especializadas), and Transversal (transversales de ley).

  CRITICAL INSTRUCTION: Under the Colombian Marco Nacional de Cualificaciones (MNC), competencies are defined for different levels (Technical, Technological, Professional, Mastery). In this workspace, we ONLY evaluate at the Technical level (Técnico Laboral / Nivel 3).
  If any extracted competencies or criteria are expressed at a higher level (e.g. Professional or Technological level, such as "Designing entire distributed system architectures", "Formulating large-scale research methods", or "Managing global system infrastructures"), you MUST automatically adapt, simplify, and DOWNGRADE them to the Technical scope. 
  This means rewriting the action verbs and scope from "Designing, formulating, or managing" to "Implementing, coding, configuring, testing, verifying, and executing according to specifications", while maintaining their mathematical, quantitative, and logical reasoning core.

  GRAMMATICAL REDACTION RULE: For every criterion (both Technical/Core/Advanced AND Transversal criteria), you MUST write the "name" field strictly following this SENA / MNC structure: 
  "[Name of Competency]: [Verbo en Infinitivo (e.g. Codificar, Resolver, Calcular, Redactar, Colaborar)] + [Objeto (e.g. expresiones algebraicas, tasas de compresión, reportes técnicos)] + [Condición de Referencia/Calidad (e.g. según especificaciones, de acuerdo con el manual técnico, de forma estructurada, mediante depuración grupal)]."
  Example Technical: "Modelamiento Algebraico: Modelar expresiones algebraicas y lógicas de acuerdo con los requisitos del diseño de algoritmos."
  Example Transversal: "Documentación Técnica: Redactar reportes técnicos de análisis métricos cuantitativos empleando vocabulario técnico y asertivo."
  Ensure every single extracted criterion, technical or transversal, strictly uses this Verbo + Objeto + Condición pattern.

  For each Criterio de Desempeño (Performance Criterion), you MUST identify which Elemento de Desempeño (Element of Performance) it belongs to.

  Respond ONLY with a valid JSON block matching this exact schema:
  {
    "programName": "Program Name (e.g. Desarrollo de software y aplicaciones móviles)",
    "qualCode": "Qualification code (e.g. MNC-TEC-DSAM-2026)",
    "cuoc": "CUOC occupational 4-digit code and title corresponding to this program (e.g. 2512 - Desarrolladores y Analistas de Software y Aplicaciones)",
    "criteria": {
      "C1": { 
        "name": "Performance Criterion Name: Detailed Description adapted to technical level following the grammatical rule", 
        "type": "Core",
        "element": "Parent Element of Performance (e.g. Elemento 1: Formulación Algorítmica y Lógica)"
      },
      "A1": { 
        "name": "Performance Criterion Name: Detailed Description adapted to technical level following the grammatical rule", 
        "type": "Advanced",
        "element": "Parent Element of Performance (e.g. Elemento 3: Modelado de Entornos y Analítica)"
      },
      "T1": { 
        "name": "Performance Criterion Name: Detailed Description adapted to technical level following the grammatical rule", 
        "type": "Transversal",
        "element": "Parent Element of Performance (e.g. Elemento Transversal: Comunicación y Calidad)"
      }
    }
  }
  Ensure Core codes start with C1, C2, C3..., Advanced start with A1, A2..., and Transversal start with T1, T2... Do not add any markdown formatting wrapper around the JSON itself (just return raw JSON).`;

  let parts = [];
  if (isText) {
    parts.push({ text: `Curriculum Document Content:\n${fileData}` });
  } else {
    parts.push({
      inlineData: {
        mimeType: mimeType,
        data: fileData
      }
    });
  }
  parts.push({ text: promptText });

  const payload = {
    contents: [{ parts: parts }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  logLine("[INFO] Enviando payload seguro al endpoint generativo...", "info");

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Error en API de Gemini: ${response.status} - ${errText}`);
    }

    logLine("[SUCCESS] Respuesta HTTP 200 OK recibida de Google Gemini.", "success");
    logLine("[INFO] Decodificando respuesta JSON y analizando competencias...", "info");

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    
    const parsed = JSON.parse(rawText.trim());
    
    logLine(`[SUCCESS] Extracción realizada con éxito para: Técnico en ${parsed.programName}`, "success");
    logLine(`[META] Código de Cualificación: ${parsed.qualCode}`, "meta");
    logLine(`[SUCCESS] Se han extraído y adaptado ${Object.keys(parsed.criteria).length} competencias oficiales.`, "success");

    parsedAIResult = parsed;

    let totalScore = 0;
    let count = 0;
    const competencyCardsData = [];

    Object.keys(parsed.criteria).forEach(code => {
      const crit = parsed.criteria[code];
      const details = getAlignmentDetails(parsed.programName, code, crit);
      totalScore += details.pct;
      count++;
      
      competencyCardsData.push({
        code,
        name: crit.name.split(":")[0],
        desc: crit.name.split(":").slice(1).join(":").trim(),
        type: crit.type,
        pct: details.pct,
        rationale: details.rationale,
        element: details.element || crit.element || "Elemento General de Desempeño"
      });
    });

    const avgScore = count > 0 ? Math.round(totalScore / count) : 0;

    logLine(`[INFO] Análisis de alineación con Razonamiento Cuantitativo completado. Promedio: ${avgScore}%.`, "info");
    logLine("[SUCCESS] Generando reporte gráfico interactivo...", "success");

    setTimeout(() => {
      DOM.aiScannerSection.style.display = "none";
      DOM.aiReportView.style.display = "block";
      DOM.aiDrawerFooter.style.display = "flex";
      
      DOM.aiExtractedProgramName.textContent = `Técnico en ${parsed.programName}`;
      DOM.aiRadialText.textContent = `${avgScore}%`;
      DOM.aiRadialBar.setAttribute("stroke-dasharray", `${avgScore}, 100`);
      
      let summaryText = "";
      if (avgScore >= 85) {
        summaryText = "Excelente alineación cuantitativa. Contiene conceptos directos de álgebra, vectores o lógica binaria.";
      } else if (avgScore >= 75) {
        summaryText = "Alineación cuantitativa óptima. Se identificaron modelos de acotación, mediciones o estimaciones físicas.";
      } else {
        summaryText = "Alineación cuantitativa regular. Centrado en depuración lógica y métricas transversales.";
      }
      DOM.aiAlignmentSummary.textContent = summaryText;
      
      DOM.aiCompetenciesContainer.innerHTML = "";
      competencyCardsData.forEach(card => {
        const cardEl = document.createElement("div");
        cardEl.className = "ai-competency-card";
        
        let badgeClass = "bg-danger-soft text-danger";
        if (card.type === "Advanced") badgeClass = "bg-info-soft text-info";
        else if (card.type === "Transversal") badgeClass = "bg-warning-soft text-warning";
        
        cardEl.innerHTML = `
          <div class="ai-comp-header">
            <div class="ai-comp-badge-group">
              <span class="ai-comp-code">${card.code}</span>
              <span class="ai-comp-type ${badgeClass}">${card.type}</span>
            </div>
            <span class="ai-comp-score">${card.pct}% Match</span>
          </div>
          <div class="ai-comp-element font-mono" style="font-size: 0.65rem; color: var(--text-muted); margin-bottom: 4px; border-bottom: 1px dashed var(--border-color); padding-bottom: 2px;">📌 ${card.element}</div>
          <span class="ai-comp-name">${card.name}</span>
          <p class="ai-comp-desc">${card.desc}</p>
          <p class="ai-comp-rationale font-mono">AI: ${card.rationale}</p>
        `;
        
        DOM.aiCompetenciesContainer.appendChild(cardEl);
      });
    }, 1000);

  } catch (err) {
    console.error("Gemini Extraction Error:", err);
    logLine(`[ERROR] Fallo en la extracción de IA: ${err.message}`, "warning");
    alert(`Fallo en la extracción de IA: ${err.message}`);
    
    if (isText) {
      logLine("[INFO] Iniciando fallback automático: Ejecutando escáner de heurística local...", "meta");
      setTimeout(() => {
        processMNCFileContent(fileData);
      }, 2000);
    } else {
      logLine("[ERROR] Imposible analizar PDF de manera local. Por favor verifique su API Key de Gemini y su conexión a Internet.", "warning");
    }
  }
}

const MATH_KEYWORDS = [
  "algebra", "álgebra", "lógica", "boolean", "verdad", "binaria", "complejidad", 
  "big-o", "bucle", "geometría", "coordenadas", "cartesiana", 
  "latencia", "estadística", "métrica", "matemática", "proporción", "ratio", 
  "escala", "vector", "cota", "dimensión", "esfuerzo", "tracción", "compresión", 
  "elasticidad", "torsión", "fatiga", "percentil", "ergonomía", "presupuesto", 
  "costo", "cálculo"
];

// --- 6c. PRIMARY WORKSPACE & MNC SUB-TAB NAVIGATION SYSTEM ---

/**
 * Switch primary workspace tab (Panel de Calificaciones vs Suite MNC)
 */
function switchWorkspaceTab(tabName) {
  localState.data.activeTab = tabName;
  localState.save();

  // Reset active classes on tab buttons and view containers
  DOM.tabBtnDashboard.classList.remove("active");
  DOM.tabBtnGrading.classList.remove("active");
  DOM.tabBtnMncSuite.classList.remove("active");
  if (DOM.tabBtnManagerSuite) DOM.tabBtnManagerSuite.classList.remove("active");
  if (DOM.tabBtnStudent) DOM.tabBtnStudent.classList.remove("active");
  if (DOM.tabBtnSpecialExams) DOM.tabBtnSpecialExams.classList.remove("active");

  DOM.viewDashboard.classList.remove("active");
  DOM.viewGrading.classList.remove("active");
  DOM.viewMncSuite.classList.remove("active");
  if (DOM.viewManagerSuite) DOM.viewManagerSuite.classList.remove("active");
  if (DOM.viewStudentSimulator) DOM.viewStudentSimulator.classList.remove("active");
  if (DOM.viewSpecialExams) DOM.viewSpecialExams.classList.remove("active");

  if (tabName === "dashboard") {
    DOM.tabBtnDashboard.classList.add("active");
    DOM.viewDashboard.classList.add("active");
    refreshUI();
  } else if (tabName === "grading") {
    DOM.tabBtnGrading.classList.add("active");
    DOM.viewGrading.classList.add("active");
    refreshUI();
  } else if (tabName === "mnc-suite") {
    DOM.tabBtnMncSuite.classList.add("active");
    DOM.viewMncSuite.classList.add("active");
    
    // Default to 'ai' sub-tab if none selected
    switchMainDrawerTab("ai");
  } else if (tabName === "manager-suite") {
    if (DOM.tabBtnManagerSuite) DOM.tabBtnManagerSuite.classList.add("active");
    if (DOM.viewManagerSuite) DOM.viewManagerSuite.classList.add("active");
    renderManagerSubjectsChecklist();
  } else if (tabName === "student-simulator") {
    if (DOM.tabBtnStudent) DOM.tabBtnStudent.classList.add("active");
    if (DOM.viewStudentSimulator) DOM.viewStudentSimulator.classList.add("active");
    switchStudentTab("dashboard");
    renderStudentSimulator();
  } else if (tabName === "special-exams") {
    if (DOM.tabBtnSpecialExams) DOM.tabBtnSpecialExams.classList.add("active");
    if (DOM.viewSpecialExams) DOM.viewSpecialExams.classList.add("active");
    renderSpecialExamsWorkspace();
  }
}

function switchStudentTab(tabName) {
  const tabBtns = document.querySelectorAll(".student-tab-btn");
  tabBtns.forEach(btn => {
    if (btn.dataset.studentTab === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (DOM.studentDashboardPanel) {
    if (tabName === "dashboard") {
      DOM.studentDashboardPanel.classList.add("active");
    } else {
      DOM.studentDashboardPanel.classList.remove("active");
    }
  }
  if (DOM.studentCompetenciesPanel) {
    if (tabName === "competencies") {
      DOM.studentCompetenciesPanel.classList.add("active");
    } else {
      DOM.studentCompetenciesPanel.classList.remove("active");
    }
  }
  if (DOM.studentBoletinPanel) {
    if (tabName === "boletin") {
      DOM.studentBoletinPanel.classList.add("active");
    } else {
      DOM.studentBoletinPanel.classList.remove("active");
    }
  }
}

/**
 * Switch MNC Qual Suite Sub-Tab content view
 */
function switchMainDrawerTab(tabName) {
  // Toggle main active classes on sidebar buttons
  DOM.mainDrawerTabBtns.forEach(btn => {
    if (btn.dataset.mainTab === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Toggle content block displays
  DOM.mainTabContentAi.style.display = tabName === "ai" ? "flex" : "none";
  DOM.mainTabContentConfig.style.display = tabName === "config" ? "flex" : "none";
  DOM.mainTabContentAddManual.style.display = tabName === "add-manual" ? "flex" : "none";

  if (tabName === "config") {
    switchConfigTab("core");
    renderConfiguratorPanel();
  }
}

function openAIDrawer() {
  switchWorkspaceTab("mnc-suite");
  switchMainDrawerTab("ai");
}

function closeAIDrawer() {
  switchWorkspaceTab("grading");
  
  // Reset the scanner and sample values
  DOM.aiScannerSection.style.display = "none";
  DOM.aiReportView.style.display = "none";
  DOM.aiDrawerFooter.style.display = "none";
  DOM.aiSampleSelector.value = "";
  parsedAIResult = null;
}

function openConfigSidebar() {
  switchWorkspaceTab("mnc-suite");
  switchMainDrawerTab("config");
}

function closeConfigSidebar() {
  switchWorkspaceTab("grading");
}

/**
 * Toggle Priority Inbox sidebar collapsibility
 */
function togglePriorityInboxSidebar() {
  const isCollapsed = DOM.priorityInboxSidebar.classList.contains("collapsed");
  if (isCollapsed) {
    DOM.priorityInboxSidebar.classList.remove("collapsed");
    DOM.toggleInboxBtn.title = "Minimizar Bandeja de Apelaciones";
  } else {
    DOM.priorityInboxSidebar.classList.add("collapsed");
    DOM.toggleInboxBtn.title = "Expandir Bandeja de Apelaciones";
  }
}

/**
 * Handle manual custom criterion creation and injection
 */
function handleAddManualCriterion(e) {
  e.preventDefault();
  
  const critCode = DOM.newCritCode.value.trim().toUpperCase();
  const critType = DOM.newCritType.value;
  const critElement = DOM.newCritElement.value.trim();
  const critName = DOM.newCritName.value.trim();
  const critDesc = DOM.newCritDesc.value.trim();
  
  if (!critCode || !critType || !critElement || !critName || !critDesc) {
    alert("Por favor complete todos los campos obligatorios.");
    return;
  }
  
  // Code format validations (must start with letter corresponding to type)
  const expectedPrefix = critType === "Core" ? "C" : (critType === "Advanced" ? "A" : "T");
  if (!critCode.startsWith(expectedPrefix)) {
    alert(`El código del criterio debe comenzar con la letra '${expectedPrefix}' para el tipo ${critType} (Ejemplo: ${expectedPrefix}4).`);
    return;
  }
  
  const pName = localState.data.selectedProgram;
  const sName = localState.data.selectedSignature;
  const currentSignature = localState.data.programs[pName].signatures[sName];
  
  // Check if criterion code already exists in active signature
  if (currentSignature.criteria[critCode]) {
    alert(`El código de criterio '${critCode}' ya está registrado en este módulo.`);
    return;
  }
  
  // Create drop-in criterion structure
  const formattedName = `${critName}: ${critDesc}`;
  
  // Insert into criteria definitions
  currentSignature.criteria[critCode] = {
    name: formattedName,
    type: critType,
    element: critElement
  };
  
  // Auto-activate in the current event checklist
  const activeEvent = localState.data.selectedEvent;
  if (currentSignature.activeCriteriaByEvent[activeEvent]) {
    currentSignature.activeCriteriaByEvent[activeEvent].push(critCode);
  } else {
    currentSignature.activeCriteriaByEvent[activeEvent] = [critCode];
  }
  
  // Sync the rosters evaluations with Pending state for the new criterion cells
  currentSignature.students.forEach(st => {
    const evalKey = `${st.id}_${critCode}_${activeEvent}`;
    localState.data.evaluations[evalKey] = { state: "Pending" };
  });
  
  // Save to persistence layer
  localState.save();
  
  alert(`¡Éxito! Se ha creado el criterio '${critCode}: ${critName}' y se ha activado automáticamente para la evidencia '${activeEvent}'.`);
  
  // Clear form inputs
  DOM.formAddCriterion.reset();
  
  // Refresh UI and switch sub-tab to Config to show it is active!
  refreshUI();
  switchMainDrawerTab("config");
}

function switchConfigTab(tabName) {
  // Update active class on tab buttons
  DOM.configTabBtns.forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Show/Hide lists
  DOM.coreCriteriaList.style.display = tabName === "core" ? "flex" : "none";
  DOM.advancedCriteriaList.style.display = tabName === "advanced" ? "flex" : "none";
  DOM.transversalCriteriaList.style.display = tabName === "transversal" ? "flex" : "none";

  // Update dynamic category header indicators matching user attachment!
  if (DOM.configCategoryDot && DOM.configCategoryTitle && DOM.configCategoryPill) {
    if (tabName === "core") {
      DOM.configCategoryTitle.textContent = "Competencias Técnicas (Core)";
      DOM.configCategoryDot.style.backgroundColor = "var(--color-danger)";
      DOM.configCategoryPill.textContent = "Obligatorias";
      DOM.configCategoryPill.style.backgroundColor = "var(--bg-danger-soft)";
      DOM.configCategoryPill.style.color = "var(--color-danger)";
    } else if (tabName === "advanced") {
      DOM.configCategoryTitle.textContent = "Competencias Avanzadas";
      DOM.configCategoryDot.style.backgroundColor = "var(--color-disputed)";
      DOM.configCategoryPill.textContent = "Rango Superior";
      DOM.configCategoryPill.style.backgroundColor = "var(--bg-purple-soft)";
      DOM.configCategoryPill.style.color = "var(--color-disputed)";
    } else if (tabName === "transversal") {
      DOM.configCategoryTitle.textContent = "Competencias Transversales";
      DOM.configCategoryDot.style.backgroundColor = "var(--color-success)";
      DOM.configCategoryPill.textContent = "Socio-laborales";
      DOM.configCategoryPill.style.backgroundColor = "var(--bg-success-soft)";
      DOM.configCategoryPill.style.color = "var(--color-success)";
    }
  }

  // Update description
  let desc = "";
  if (tabName === "core") {
    desc = "Deficiencias en competencias técnicas obligatorias MNC implican una nota reprobatoria < 3.0.";
  } else if (tabName === "advanced") {
    desc = "Permiten al estudiante alcanzar los rangos superiores de nota (3.1 a 5.0). Deben estar habilitadas para calificar sobre 3.0.";
  } else if (tabName === "transversal") {
    desc = "Competencias transversales de comunicación y calidad indispensables en la industria moderna.";
  }
  DOM.configTabDesc.textContent = desc;
}

function parseMNCDocument(text) {
  let qualCode = "MNC-QUAL-2026";
  const qualMatch = text.match(/CÓDIGO DE CUALIFICACIÓN:\s*(.*)/i);
  if (qualMatch) qualCode = qualMatch[1].trim();

  let programName = "Programa de Formación";
  const programMatch = text.match(/PROGRAMA DE FORMACIÓN:\s*Técnico en\s*(.*)/i);
  if (programMatch) {
    programName = programMatch[1].trim();
  }
  
  // Attempt to parse CUOC from text, or map based on programName
  let cuoc = "";
  const cuocMatch = text.match(/CUOC:\s*(.*)/i);
  if (cuocMatch) {
    cuoc = cuocMatch[1].trim();
  } else {
    const progLower = programName.toLowerCase();
    if (progLower.includes("software")) {
      cuoc = "2512 - Desarrolladores y Analistas de Software y Aplicaciones";
    } else if (progLower.includes("multimedia")) {
      cuoc = "2166 - Diseñadores Gráficos y Multimedia";
    } else if (progLower.includes("diseño") || progLower.includes("diseno")) {
      cuoc = "2163 - Diseñadores Industriales y de Productos";
    }
  }
  
  const blocks = text.split(/\[CLAVE:/i);
  const criteria = {};
  
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const typeMatch = block.match(/^([A-Za-z]+)\]/);
    const codeMatch = block.match(/CÓDIGO:\s*(.*)/i);
    const nameMatch = block.match(/COMPETENCIA:\s*(.*)/i);
    const descMatch = block.match(/DESCRIPCIÓN:\s*(.*)/i);
    
    if (codeMatch && nameMatch && descMatch) {
      const code = codeMatch[1].trim();
      const name = nameMatch[1].trim();
      const desc = descMatch[1].trim();
      const type = typeMatch ? typeMatch[1].trim() : "Core";
      
      criteria[code] = {
        name: `${name}: ${desc}`,
        type: type
      };
    }
  }
  
  return {
    programName,
    qualCode,
    cuoc,
    criteria
  };
}

function getAlignmentDetails(programName, code, criterion) {
  const nameLower = programName.toLowerCase();
  const fullText = (criterion.name).toLowerCase();
  let element = "Elemento General de Desempeño";
  
  if (nameLower.includes("software")) {
    if (code === "C1" || code === "C2") element = "Elemento 1: Formulación Algorítmica y Lógica";
    else if (code === "C3") element = "Elemento 2: Estimación de Eficiencia Estructural";
    else if (code === "A1" || code === "A2") element = "Elemento 3: Modelado de Entornos y Analítica de Sistemas";
    else element = "Elemento Transversal: Comunicación y Calidad Laboral";
    
    if (code === "C1") return { pct: 95, rationale: "Relación directa con modelamiento algebraico y diseño formal de algoritmos.", element };
    if (code === "C2") return { pct: 98, rationale: "Evaluación formal de lógica de proposiciones, variables booleanas y condicionales.", element };
    if (code === "C3") return { pct: 90, rationale: "Cálculo matemático de complejidad computacional y límites Big-O de bucles.", element };
    if (code === "A1") return { pct: 85, rationale: "Aplicación de geometría de coordenadas cartesianas para interfaces y geolocalización.", element };
    if (code === "A2") return { pct: 80, rationale: "Análisis estadístico descriptivo cuantitativo de latencias y red.", element };
    if (code === "T1") return { pct: 70, rationale: "Reportes técnicos escritos de análisis métricos y mediciones.", element };
    if (code === "T2") return { pct: 65, rationale: "Depuración lógica colaborativa en testing y corrección de bugs.", element };
  }
  
  if (nameLower.includes("multimedia")) {
    if (code === "C1" || code === "C2") element = "Elemento 1: Composición y Escalas Gráficas";
    else if (code === "C3") element = "Elemento 2: Compresión y Bitrates";
    else if (code === "A1" || code === "A2") element = "Elemento 3: Renderizado e Interacción UX";
    else element = "Elemento Transversal: Optimización de Assets";
    
    if (code === "C1") return { pct: 92, rationale: "Cálculo de relaciones de aspecto y escala proporcional en composición visual.", element };
    if (code === "C2") return { pct: 96, rationale: "Operaciones algebraicas vectoriales de rotación y traslación en planos 2D/3D.", element };
    if (code === "C3") return { pct: 88, rationale: "Cálculo cuantitativo de tasas de compresión de bitrates y muestreo de audio/video.", element };
    if (code === "A1") return { pct: 82, rationale: "Física óptica de iluminación, refracción y renderizado matemático de luxes.", element };
    if (code === "A2") return { pct: 78, rationale: "Métricas de comportamiento y analítica cuantitativa de interfaces (UX).", element };
    if (code === "T1") return { pct: 72, rationale: "Informes cuantitativos de pesos y tasas de compresión de assets.", element };
    if (code === "T2") return { pct: 68, rationale: "Optimización de assets multimedia y cálculo de dimensiones de archivos.", element };
  }
  
  if (nameLower.includes("diseño industrial") || nameLower.includes("diseno industrial") || nameLower.includes("objetos")) {
    if (code === "C1" || code === "C2" || code === "C3") element = "Elemento 1: Cotas y Estructuras Mecánicas";
    else if (code === "A1" || code === "A2") element = "Elemento 2: Simulaciones y Antropometría";
    else element = "Elemento Transversal: Ensamble y Presupuestos";
    
    if (code === "C1") return { pct: 90, rationale: "Acotación matemática precisa y modelamiento de dimensiones en sólidos 3D.", element };
    if (code === "C2") return { pct: 94, rationale: "Ecuaciones mecánicas de esfuerzos, resistencia de materiales y fatiga sólida.", element };
    if (code === "C3") return { pct: 86, rationale: "Modelado geométrico axonométrico bidimensional de figuras complejas.", element };
    if (code === "A1") return { pct: 80, rationale: "Cálculos CAD de esfuerzos mecánicos y fatiga de componentes.", element };
    if (code === "A2") return { pct: 76, rationale: "Mapeo estadístico cuantitativo de percentiles de poblaciones para ergonomía.", element };
    if (code === "T1") return { pct: 70, rationale: "Presupuestos y listas de materiales (BOM) cuantitativas de prototipos.", element };
    if (code === "T2") return { pct: 64, rationale: "Coordinación geométrica precisa para acoplamientos tridimensionales.", element };
  }
  
  // Dynamic fallback
  let matchesCount = 0;
  MATH_KEYWORDS.forEach(kw => {
    if (fullText.includes(kw)) matchesCount++;
  });
  
  const pct = Math.min(95, 45 + (matchesCount * 12));
  let rationale = "Alineación cuantitativa regular determinada por análisis de densidad léxica.";
  if (matchesCount > 2) {
    rationale = "Alineación matemática alta basada en vocabulario cuantitativo directo.";
  } else if (matchesCount === 0) {
    rationale = "Alineación básica mediante competencias transversales y resolución lógica.";
  }
  
  return { pct, rationale, element };
}

function processMNCFileContent(text) {
  // Hide report and show scanning progress
  DOM.aiReportView.style.display = "none";
  DOM.aiDrawerFooter.style.display = "none";
  DOM.aiScannerSection.style.display = "flex";
  DOM.aiLogTerminal.innerHTML = "";
  
  const parsed = parseMNCDocument(text);
  parsedAIResult = parsed;
  
  // Calculate average score and construct report competencies
  let totalScore = 0;
  let count = 0;
  const competencyCardsData = [];
  
  Object.keys(parsed.criteria).forEach(code => {
    const crit = parsed.criteria[code];
    const details = getAlignmentDetails(parsed.programName, code, crit);
    totalScore += details.pct;
    count++;
    
    competencyCardsData.push({
      code,
      name: crit.name.split(":")[0],
      desc: crit.name.split(":").slice(1).join(":").trim(),
      type: crit.type,
      pct: details.pct,
      rationale: details.rationale
    });
  });
  
  const avgScore = count > 0 ? Math.round(totalScore / count) : 0;
  
  // Telemetry trace loops
  const logs = [
    { text: "[INFO] Iniciando lectura de archivo oficial MNC...", type: "info", delay: 100 },
    { text: `[INFO] Archivo leído con éxito. Tamaño: ${text.length} bytes.`, type: "info", delay: 400 },
    { text: `[META] Código de Cualificación detectado: ${parsed.qualCode}`, type: "meta", delay: 700 },
    { text: `[META] Programa detectado: Técnico en ${parsed.programName}`, type: "meta", delay: 1000 },
    { text: `[INFO] Analizando competencias en "Razonamiento cuantitativo" (Nivel Técnico)...`, type: "info", delay: 1300 },
    { text: `[SUCCESS] Extracción finalizada. Se han detectado ${count} competencias oficiales.`, type: "success", delay: 1600 },
    { text: "[INFO] Calculando alineación semántica mediante densidad léxica con matemáticas...", type: "info", delay: 1950 },
    { text: `[SUCCESS] Análisis completado. Promedio de alineación: ${avgScore}%.`, type: "success", delay: 2300 },
    { text: "[SUCCESS] Generando reporte gráfico de alineación oficial...", type: "success", delay: 2600 }
  ];
  
  logs.forEach(log => {
    setTimeout(() => {
      const line = document.createElement("div");
      line.className = `terminal-line ${log.type}`;
      line.textContent = log.text;
      DOM.aiLogTerminal.appendChild(line);
      DOM.aiLogTerminal.scrollTop = DOM.aiLogTerminal.scrollHeight;
    }, log.delay);
  });
  
  // Render report after scanner finishes
  setTimeout(() => {
    DOM.aiScannerSection.style.display = "none";
    DOM.aiReportView.style.display = "block";
    DOM.aiDrawerFooter.style.display = "flex";
    
    // Update Report Header
    DOM.aiExtractedProgramName.textContent = `Técnico en ${parsed.programName}`;
    DOM.aiRadialText.textContent = `${avgScore}%`;
    DOM.aiRadialBar.setAttribute("stroke-dasharray", `${avgScore}, 100`);
    
    let summaryText = "";
    if (avgScore >= 85) {
      summaryText = "Excelente alineación cuantitativa. Contiene conceptos directos de álgebra, vectores o lógica binaria.";
    } else if (avgScore >= 75) {
      summaryText = "Alineación cuantitativa óptima. Se identificaron modelos de acotación, mediciones o estimaciones físicas.";
    } else {
      summaryText = "Alineación cuantitativa regular. Centrado en depuración lógica y métricas transversales.";
    }
    DOM.aiAlignmentSummary.textContent = summaryText;
    
    // Render competencies grid in report
    DOM.aiCompetenciesContainer.innerHTML = "";
    competencyCardsData.forEach(card => {
      const cardEl = document.createElement("div");
      cardEl.className = "ai-competency-card";
      
      let badgeClass = "bg-danger-soft text-danger";
      if (card.type === "Advanced") badgeClass = "bg-info-soft text-info";
      else if (card.type === "Transversal") badgeClass = "bg-warning-soft text-warning";
      
      cardEl.innerHTML = `
        <div class="ai-comp-header">
          <div class="ai-comp-badge-group">
            <span class="ai-comp-code">${card.code}</span>
            <span class="ai-comp-type ${badgeClass}">${card.type}</span>
          </div>
          <span class="ai-comp-score">${card.pct}% Match</span>
        </div>
        <span class="ai-comp-name">${card.name}</span>
        <p class="ai-comp-desc">${card.desc}</p>
        <p class="ai-comp-rationale font-mono">AI: ${card.rationale}</p>
      `;
      
      DOM.aiCompetenciesContainer.appendChild(cardEl);
    });
  }, 2900);
}

function applyExtractedAICompetencies() {
  if (!parsedAIResult) return;
  const { programName, criteria, cuoc } = parsedAIResult;
  
  // Check if program already exists
  const existingProgramKey = Object.keys(localState.data.programs).find(
    k => k.toLowerCase() === programName.toLowerCase() || programName.toLowerCase().includes(k.toLowerCase())
  );
  
  if (existingProgramKey) {
    // Overwrite criteria for existing program
    localState.data.programs[existingProgramKey].signatures["Razonamiento cuantitativo"].criteria = criteria;
    if (cuoc) {
      localState.data.programs[existingProgramKey].cuoc = cuoc;
    }
    localState.data.selectedProgram = existingProgramKey;
    localState.data.selectedSignature = "Razonamiento cuantitativo";
    
    alert(`¡Éxito! Se han actualizado las competencias del programa "${existingProgramKey}" con los datos extraídos de la cualificación MNC.`);
  } else {
    // Dynamic Create new program "Diseño industrial y modelado de objetos"
    const newProgramName = `Diseño industrial y modelado de objetos`;
    
    const idStudents = [
      { id: "I1", name: "Laura Espinosa", tokens: 3 },
      { id: "I2", name: "Mateo Delgado", tokens: 3 },
      { id: "I3", name: "Valentina Gómez", tokens: 3 },
      { id: "I4", name: "Nicolás Ruiz", tokens: 3 },
      { id: "I5", name: "Camila Ortega", tokens: 3 }
    ];
    
    localState.data.programs[newProgramName] = {
      level: "Técnico Laboral (MNC)",
      cuoc: cuoc || "2163 - Diseñadores Industriales y de Productos",
      signatures: {
        "Razonamiento cuantitativo": {
          students: idStudents,
          criteria: criteria,
          events: ["Taller 1: Cotas y Medidas", "Evaluación 2: Esfuerzos", "Caso Final: Prototipado 3D"],
          activeCriteriaByEvent: {
            "Taller 1: Cotas y Medidas": ["C1", "C3", "T1"],
            "Evaluación 2: Esfuerzos": ["C1", "C2", "C3", "T1", "T2"],
            "Caso Final: Prototipado 3D": ["C1", "C2", "C3", "A1", "A2", "T1", "T2"]
          }
        }
      }
    };
    
    // Seed evaluations
    localState.data.evaluations["I1_C1_Taller 1: Cotas y Medidas"] = { state: "Met" };
    localState.data.evaluations["I1_C3_Taller 1: Cotas y Medidas"] = { state: "Met" };
    localState.data.evaluations["I1_T1_Taller 1: Cotas y Medidas"] = { state: "Met" };
    
    localState.data.evaluations["I2_C1_Taller 1: Cotas y Medidas"] = { state: "Met" };
    localState.data.evaluations["I2_C3_Taller 1: Cotas y Medidas"] = { state: "Not Met" };
    localState.data.evaluations["I2_T1_Taller 1: Cotas y Medidas"] = { state: "Met" };

    localState.data.evaluations["I3_C1_Taller 1: Cotas y Medidas"] = { state: "Met" };
    localState.data.evaluations["I3_C3_Taller 1: Cotas y Medidas"] = { state: "Met" };
    localState.data.evaluations["I3_T1_Taller 1: Cotas y Medidas"] = { state: "Met" };

    localState.data.evaluations["I4_C1_Taller 1: Cotas y Medidas"] = { state: "Met" };
    localState.data.evaluations["I4_C3_Taller 1: Cotas y Medidas"] = { state: "Met" };
    localState.data.evaluations["I4_T1_Taller 1: Cotas y Medidas"] = { state: "Met" };

    localState.data.evaluations["I5_C1_Taller 1: Cotas y Medidas"] = { state: "Pending" };
    localState.data.evaluations["I5_C3_Taller 1: Cotas y Medidas"] = { state: "Pending" };
    localState.data.evaluations["I5_T1_Taller 1: Cotas y Medidas"] = { state: "Pending" };
    
    localState.data.selectedProgram = newProgramName;
    localState.data.selectedSignature = "Razonamiento cuantitativo";
    localState.data.selectedEvent = "Taller 1: Cotas y Medidas";
    
    alert(`¡Éxito! Se ha creado dinámicamente el programa "${newProgramName}", matriculado una cohorte de 5 estudiantes de diseño, inyectado sus criterios MNC y pre-cargado sus notas del Taller 1.`);
  }
  
  // Rebuild program selector and sync UI
  populateProgramDropdown();
  populateSignatureDropdown();
  populateEventDropdown();
  
  closeAIDrawer();
  refreshUI();
}

// --- 7. EVENT INITIALIZERS ---
function initializeEvents() {
  
  // Inbox Search & Filter listeners
  if (DOM.inboxSearch) {
    DOM.inboxSearch.addEventListener("input", () => {
      const calcData = calculateGradesAndMetrics();
      renderPriorityInbox(calcData.activeDisputes);
    });
  }
  if (DOM.inboxFilterType) {
    DOM.inboxFilterType.addEventListener("change", () => {
      const calcData = calculateGradesAndMetrics();
      renderPriorityInbox(calcData.activeDisputes);
    });
  }
  if (DOM.inboxFilterUrgency) {
    DOM.inboxFilterUrgency.addEventListener("change", () => {
      const calcData = calculateGradesAndMetrics();
      renderPriorityInbox(calcData.activeDisputes);
    });
  }
  
  // Program Select (Teacher)
  DOM.programSelector.addEventListener("change", (e) => {
    localState.data.selectedProgram = e.target.value;
    const sigKeys = Object.keys(localState.data.programs[localState.data.selectedProgram].signatures);
    localState.data.selectedSignature = sigKeys[0];
    const evKeys = localState.data.programs[localState.data.selectedProgram].signatures[localState.data.selectedSignature].events;
    localState.data.selectedEvent = evKeys[0];
    
    populateSignatureDropdown();
    populateEventDropdown();
    refreshUI();
  });
  
  // Signature Select (Teacher)
  DOM.moduleSelector.addEventListener("change", (e) => {
    localState.data.selectedSignature = e.target.value;
    const evKeys = localState.data.programs[localState.data.selectedProgram].signatures[localState.data.selectedSignature].events;
    localState.data.selectedEvent = evKeys[0];
    
    populateEventDropdown();
    refreshUI();
  });
  
  // Event Select (Teacher)
  DOM.eventSelector.addEventListener("change", (e) => {
    localState.data.selectedEvent = e.target.value;
    refreshUI();
  });

  // Table cell clicks (Teacher)
  DOM.matrixBody.addEventListener("click", (e) => {
    const block = e.target.closest(".grading-cell-block");
    if (block) {
      const { studentId, criterionId, eventId } = block.dataset;
      cycleCellEvaluation(studentId, criterionId, eventId);
    }
  });
  
  // Theme toggle
  DOM.themeToggle.addEventListener("click", () => {
    if (DOM.body.classList.contains("dark-theme")) {
      DOM.body.classList.remove("dark-theme");
      DOM.body.classList.add("light-theme");
      localState.data.theme = "light";
    } else {
      DOM.body.classList.remove("light-theme");
      DOM.body.classList.add("dark-theme");
      localState.data.theme = "dark";
    }
    localState.save();
  });
  
  // Reset Simulation
  DOM.resetDbBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres reiniciar la base de datos de simulación? Se restablecerán todos los programas, notas oficiales MNC y los tokens de estudiantes.")) {
      localState.resetToDefaults();
      
      DOM.body.className = localState.data.theme === "light" ? "light-theme" : "dark-theme";
      populateProgramDropdown();
      populateSignatureDropdown();
      populateEventDropdown();
      
      refreshUI();
    }
  });
  
  // Student Portal Sub-Tabs
  if (DOM.studentTabDashboard) {
    DOM.studentTabDashboard.addEventListener("click", () => switchStudentTab("dashboard"));
  }
  if (DOM.studentTabCompetencies) {
    DOM.studentTabCompetencies.addEventListener("click", () => switchStudentTab("competencies"));
  }
  if (DOM.studentTabBoletin) {
    DOM.studentTabBoletin.addEventListener("click", () => switchStudentTab("boletin"));
  }

  // Student Picker in Simulator
  DOM.simStudentPicker.addEventListener("change", () => {
    activeStudentAppeal = null;
    if (DOM.simAppealFormContainer) DOM.simAppealFormContainer.style.display = "none";
    if (DOM.simAppealEmptyState) DOM.simAppealEmptyState.style.display = "flex";
    renderStudentSimulator();
  });
  
  // Cancel Student Appeal Form
  if (DOM.simAppealCancelBtn) {
    DOM.simAppealCancelBtn.addEventListener("click", () => {
      if (DOM.simAppealFormContainer) DOM.simAppealFormContainer.style.display = "none";
      if (DOM.simAppealEmptyState) DOM.simAppealEmptyState.style.display = "flex";
      activeStudentAppeal = null;
    });
  }
  
  // Submit Student Appeal Form
  if (DOM.formSubmitAppeal) {
    DOM.formSubmitAppeal.addEventListener("submit", (e) => {
      e.preventDefault();
      if (DOM.simAppealDefenseInput) {
        const defense = DOM.simAppealDefenseInput.value.trim();
        if (defense) {
          submitStudentDispute(defense);
        }
      }
    });
  }
  
  // Close Appeal Drawer
  DOM.appealDrawerClose.addEventListener("click", closeAppealDrawer);
  DOM.appealDrawerOverlay.addEventListener("click", closeAppealDrawer);
  
  // Teacher Drawer buttons
  DOM.appealBtnApprove.addEventListener("click", approveDispute);
  DOM.appealBtnMaintain.addEventListener("click", maintainDisputeGrade);
  
  // Dialog: Add Event
  DOM.addEventBtn.addEventListener("click", () => DOM.dialogAddEvent.showModal());
  DOM.closeAddEventBtn.addEventListener("click", () => DOM.dialogAddEvent.close());
  DOM.dialogAddEvent.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = DOM.newEventName.value.trim();
    
    if (name) {
      const pName = localState.data.selectedProgram;
      const sName = localState.data.selectedSignature;
      const currentSignature = localState.data.programs[pName].signatures[sName];
      
      if (currentSignature.events.includes(name)) {
        alert("Esa evidencia / evento ya se encuentra registrada en esta asignatura.");
        return;
      }
      
      currentSignature.events.push(name);
      const prevEvent = currentSignature.events[currentSignature.events.length - 2];
      currentSignature.activeCriteriaByEvent[name] = prevEvent ? [...currentSignature.activeCriteriaByEvent[prevEvent]] : [];
      
      localState.data.selectedEvent = name;
      DOM.dialogAddEvent.close();
      DOM.newEventName.value = "";
      
      populateEventDropdown();
      refreshUI();
    }
  });

  // ==========================================
  // --- Workspace Tabs Navigation Event Listeners ---
  // ==========================================

  // Workspace Primary Tabs toggling (Dashboard vs Calificaciones vs Suite MNC vs Suite Gerencia vs Vista Estudiante)
  DOM.tabBtnDashboard.addEventListener("click", () => switchWorkspaceTab("dashboard"));
  DOM.tabBtnGrading.addEventListener("click", () => switchWorkspaceTab("grading"));
  DOM.tabBtnMncSuite.addEventListener("click", () => switchWorkspaceTab("mnc-suite"));
  if (DOM.tabBtnManagerSuite) {
    DOM.tabBtnManagerSuite.addEventListener("click", () => switchWorkspaceTab("manager-suite"));
  }
  if (DOM.tabBtnStudent) {
    DOM.tabBtnStudent.addEventListener("click", () => switchWorkspaceTab("student-simulator"));
  }
  if (DOM.tabBtnSpecialExams) {
    DOM.tabBtnSpecialExams.addEventListener("click", () => switchWorkspaceTab("special-exams"));
  }

  // Dashboard Bottleneck quick link redirect
  DOM.dashBtnGoGrading.addEventListener("click", () => switchWorkspaceTab("grading"));

  // Configurator toolbar button switches workspace and selects 'config' sub-tab
  DOM.matrixConfigToggleBtn.addEventListener("click", openConfigSidebar);
  DOM.configSidebarConfirmBtn.addEventListener("click", closeConfigSidebar);

  // Priority Inbox Collapsibility Trigger
  DOM.toggleInboxBtn.addEventListener("click", togglePriorityInboxSidebar);

  // Manual Custom Criterion Form submission
  DOM.formAddCriterion.addEventListener("submit", handleAddManualCriterion);

  // Sub-Tab Toggling in MNC Control Suite
  DOM.mainDrawerTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mainTabName = btn.dataset.mainTab;
      switchMainDrawerTab(mainTabName);
    });
  });

  // Configurator sub-tabs toggling (Técnicas, Avanzadas, Transversales)
  DOM.configTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;
      switchConfigTab(tabName);
    });
  });

  // ==========================================
  // --- Phase 3: AI Qualifications Analyzer Event Listeners ---
  // ==========================================

  // Toggle buttons switch to MNC AI tab
  if (DOM.aiAnalyzerToggleBtn) {
    DOM.aiAnalyzerToggleBtn.addEventListener("click", openAIDrawer);
  }

  // Expand/collapse API Key configuration panel
  DOM.aiKeyToggleHeader.addEventListener("click", () => {
    const isExpanded = DOM.aiKeyBody.style.display === "flex";
    if (isExpanded) {
      DOM.aiKeyBody.style.display = "none";
      DOM.keyArrow.textContent = "▼";
      DOM.keyArrow.classList.remove("expanded");
    } else {
      DOM.aiKeyBody.style.display = "flex";
      DOM.keyArrow.textContent = "▲";
      DOM.keyArrow.classList.add("expanded");
    }
  });

  // Password visibility toggle for API Key input
  DOM.aiApiKeyToggleView.addEventListener("click", () => {
    const isPassword = DOM.aiApiKeyInput.type === "password";
    DOM.aiApiKeyInput.type = isPassword ? "text" : "password";
    DOM.aiApiKeyToggleView.textContent = isPassword ? "🙈" : "👁️";
  });

  // Load key into input
  DOM.aiApiKeyInput.value = localState.data.geminiApiKey || "";
  
  if (localState.data.geminiApiKey) {
    DOM.aiStatusBadge.textContent = "⚡ Real Gemini AI Connected";
    DOM.aiStatusBadge.className = "drawer-tag bg-ai-tag";
  } else {
    DOM.aiStatusBadge.textContent = "⚠️ No API Key Loaded";
    DOM.aiStatusBadge.className = "drawer-tag bg-danger";
  }

  // Listen to changes and save
  DOM.aiApiKeyInput.addEventListener("input", (e) => {
    localState.data.geminiApiKey = e.target.value.trim();
    localState.save();
    
    if (localState.data.geminiApiKey) {
      DOM.aiStatusBadge.textContent = "⚡ Real Gemini AI Connected";
      DOM.aiStatusBadge.className = "drawer-tag bg-ai-tag";
    } else {
      DOM.aiStatusBadge.textContent = "⚠️ No API Key Loaded";
      DOM.aiStatusBadge.className = "drawer-tag bg-danger";
    }
  });

  // Sample file selector listener
  DOM.aiSampleSelector.addEventListener("change", (e) => {
    const filename = e.target.value;
    if (filename) {
      fetch(`./${filename}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(text => {
          if (localState.data.geminiApiKey) {
            analyzeWithGeminiAPI(text, "text/plain", filename, true);
          } else {
            processMNCFileContent(text);
          }
        })
        .catch(err => {
          console.error("Error fetching sample MNC file:", err);
          alert(`Error al cargar el archivo de muestra MNC: ${err.message}`);
        });
    }
  });

  // Dropzone drag-and-drop actions
  DOM.aiUploadDropzone.addEventListener("click", () => DOM.aiFileInput.click());

  DOM.aiUploadDropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    DOM.aiUploadDropzone.classList.add("dragover");
  });

  DOM.aiUploadDropzone.addEventListener("dragleave", () => {
    DOM.aiUploadDropzone.classList.remove("dragover");
  });

  DOM.aiUploadDropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    DOM.aiUploadDropzone.classList.remove("dragover");
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      const isPdf = file.name.endsWith(".pdf");
      const isTxt = file.name.endsWith(".txt");
      
      if (isPdf) {
        fileToBase64(file).then(base64 => {
          analyzeWithGeminiAPI(base64, "application/pdf", file.name, false);
        }).catch(err => {
          alert(`Error al procesar el archivo PDF: ${err.message}`);
        });
      } else if (isTxt) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const text = evt.target.result;
          if (localState.data.geminiApiKey) {
            analyzeWithGeminiAPI(text, "text/plain", file.name, true);
          } else {
            processMNCFileContent(text);
          }
        };
        reader.readAsText(file);
      } else {
        alert("Por favor, suba únicamente archivos de texto (.txt) o PDF (.pdf) del Marco Nacional de Cualificaciones.");
      }
    }
  });

  // Standard File Input change listener
  DOM.aiFileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const isPdf = file.name.endsWith(".pdf");
      const isTxt = file.name.endsWith(".txt");
      
      if (isPdf) {
        fileToBase64(file).then(base64 => {
          analyzeWithGeminiAPI(base64, "application/pdf", file.name, false);
        }).catch(err => {
          alert(`Error al procesar el archivo PDF: ${err.message}`);
        });
      } else if (isTxt) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const text = evt.target.result;
          if (localState.data.geminiApiKey) {
            analyzeWithGeminiAPI(text, "text/plain", file.name, true);
          } else {
            processMNCFileContent(text);
          }
        };
        reader.readAsText(file);
      } else {
        alert("Por favor, seleccione únicamente archivos .txt o .pdf.");
      }
    }
  });

  // Apply button action
  DOM.aiApplyBtn.addEventListener("click", applyExtractedAICompetencies);
}

/**
 * Dropdowns populating chains
 */
function populateProgramDropdown() {
  DOM.programSelector.innerHTML = "";
  Object.keys(localState.data.programs).forEach(pKey => {
    const opt = document.createElement("option");
    opt.value = pKey;
    opt.textContent = pKey;
    DOM.programSelector.appendChild(opt);
  });
  DOM.programSelector.value = localState.data.selectedProgram;
}

function populateSignatureDropdown() {
  DOM.moduleSelector.innerHTML = "";
  const currentProgram = localState.data.programs[localState.data.selectedProgram];
  Object.keys(currentProgram.signatures).forEach(sKey => {
    const opt = document.createElement("option");
    opt.value = sKey;
    opt.textContent = sKey;
    DOM.moduleSelector.appendChild(opt);
  });
  DOM.moduleSelector.value = localState.data.selectedSignature;
}

function populateEventDropdown() {
  DOM.eventSelector.innerHTML = "";
  const currentProgram = localState.data.programs[localState.data.selectedProgram];
  const currentSignature = currentProgram.signatures[localState.data.selectedSignature];
  currentSignature.events.forEach(ev => {
    const opt = document.createElement("option");
    opt.value = ev;
    opt.textContent = ev;
    DOM.eventSelector.appendChild(opt);
  });
  DOM.eventSelector.value = localState.data.selectedEvent;
}

// ==========================================
// --- 7b. Suite de Gerencia (Manager Portal) Logic ---
// ==========================================

let parsedManagerHarmonizeResult = null;

function renderManagerSubjectsChecklist() {
  if (!DOM.mgrSubjectsContainer) return;
  DOM.mgrSubjectsContainer.innerHTML = "";
  
  const subjects = localState.data.managerSubjects || [];
  subjects.forEach(sub => {
    const row = document.createElement("label");
    row.className = "subject-checkbox-row";
    
    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.value = sub;
    chk.checked = true; // Selected by default
    chk.dataset.subject = sub;
    
    const text = document.createElement("span");
    text.textContent = sub;
    
    row.appendChild(chk);
    row.appendChild(text);
    
    DOM.mgrSubjectsContainer.appendChild(row);
  });
}

function handleAddManagerNewSubject() {
  if (!DOM.mgrNewSubjectInput) return;
  const newSub = DOM.mgrNewSubjectInput.value.trim();
  if (!newSub) {
    alert("Por favor ingrese un nombre de asignatura válido.");
    return;
  }
  
  if (!localState.data.managerSubjects) {
    localState.data.managerSubjects = [];
  }
  
  if (localState.data.managerSubjects.includes(newSub)) {
    alert("Esta asignatura ya está en la lista.");
    return;
  }
  
  localState.data.managerSubjects.push(newSub);
  localState.save();
  
  renderManagerSubjectsChecklist();
  DOM.mgrNewSubjectInput.value = "";
}

async function harmonizeProgramWithGemini() {
  const apiKey = localState.data.geminiApiKey || "";
  const programName = DOM.mgrProgramName.value.trim() || "Programa de Formación";
  
  // Get checked subjects
  const checkedCheckboxes = DOM.mgrSubjectsContainer.querySelectorAll("input[type='checkbox']:checked");
  const subjectsList = Array.from(checkedCheckboxes).map(chk => chk.value);
  
  if (subjectsList.length === 0) {
    alert("Por favor seleccione al menos una asignatura para armonizar.");
    return;
  }
  
  const catalogText = DOM.mgrPasteText.value.trim();
  if (!catalogText) {
    alert("Por favor pegue el contenido del catálogo o suba un archivo.");
    return;
  }

  // Hide idle view, show scanning view
  DOM.mgrEmptyResults.style.display = "none";
  DOM.mgrReportView.style.display = "none";
  DOM.mgrScannerSection.style.display = "flex";
  DOM.mgrLogTerminal.innerHTML = "";

  const logLine = (text, type = "info") => {
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    line.textContent = text;
    DOM.mgrLogTerminal.appendChild(line);
    DOM.mgrLogTerminal.scrollTop = DOM.mgrLogTerminal.scrollHeight;
  };

  logLine("[INFO] Iniciando Armonización Curricular Multidisciplinar...", "info");
  logLine("[INFO] Cargando modelo generativo de Google Gemini...", "info");
  logLine(`[INFO] Programa de Formación: ${programName}`, "meta");
  logLine(`[INFO] Asignaturas a estructurar: ${subjectsList.join(", ")}`, "meta");

  if (!apiKey) {
    logLine("[WARNING] No se detectó clave API Key de Gemini. Ejecutando motor de armonización heurística local...", "warning");
    setTimeout(() => {
      executeLocalOfflineHarmonization(programName, subjectsList, catalogText, logLine);
    }, 2000);
    return;
  }

  logLine("[INFO] Conectando con la API Key cargada...", "info");

  const promptText = `Eres experto en diseño curricular y gerencia de currículos. Necesito que estructures los módulos de contenido para un programa de formación "${programName}" de acuerdo con los criterios del catálogo proporcionado. Tu tarea consiste en extraer y organizar los criterios de desempeño correspondientes únicamente a las asignaturas: ${subjectsList.join(", ")}.

  CRITICAL INSTRUCTION: Under the Colombian Marco Nacional de Cualificaciones (MNC), competencies are defined for different levels (Technical, Technological, Professional, Mastery). In this workspace, we ONLY evaluate at the Technical level (Técnico Laboral / Nivel 3).
  If any extracted competencies or criteria are expressed at a higher level (e.g. Professional or Technological level, such as "Designing entire distributed system architectures", "Formulating large-scale research methods", or "Managing global system infrastructures"), you MUST automatically adapt, simplify, and DOWNGRADE them to the Technical scope. 
  This means rewriting the action verbs and scope from "Designing, formulating, or managing" to "Implementing, coding, configuring, testing, verifying, and executing according to specifications", while maintaining their mathematical, quantitative, and logical reasoning core.

  GRAMMATICAL REDACTION RULE: For every criterion (both Technical/Core/Advanced AND Transversal criteria), you MUST write the "name" field strictly following this SENA / MNC structure: 
  "[Name of Competency]: [Verbo en Infinitivo (e.g. Codificar, Resolver, Calcular, Redactar, Colaborar, Leer, Comunicar)] + [Objeto] + [Condición de Referencia/Calidad]."
  Example: "Modelamiento Algebraico: Modelar expresiones algebraicas y lógicas de acuerdo con los requisitos del diseño de algoritmos."
  Ensure every single extracted criterion, technical or transversal, strictly uses this Verbo + Objeto + Condición pattern.

  For each Criterio de Desempeño (Performance Criterion), classify them into Core (técnicas obligatorias), Advanced (especializadas), and Transversal (transversales).
  For each subject, return 3 to 5 criteria. Make sure to name codes starting with C1, C2... for Core, A1, A2... for Advanced, and T1, T2... for Transversal.

  Respond ONLY with a valid JSON block matching this exact schema:
  {
    "programName": "Program Name",
    "subjects": {
      "${subjectsList[0]}": {
        "criteria": {
          "C1": { 
            "name": "Performance Criterion Name following rule", 
            "type": "Core",
            "element": "Parent Element of Performance"
          },
          "A1": { 
            "name": "Performance Criterion Name following rule", 
            "type": "Advanced",
            "element": "Parent Element of Performance"
          },
          "T1": { 
            "name": "Performance Criterion Name following rule", 
            "type": "Transversal",
            "element": "Parent Element of Performance"
          }
        }
      }
    }
  }
  Do not add any markdown formatting wrapper around the JSON itself (just return raw JSON).`;

  let parts = [];
  if (DOM.mgrPasteText.dataset.pdfBase64 && DOM.mgrPasteText.value.startsWith("[Archivo PDF Cargado:")) {
    parts.push({
      inlineData: {
        mimeType: DOM.mgrPasteText.dataset.pdfMime,
        data: DOM.mgrPasteText.dataset.pdfBase64
      }
    });
  } else {
    parts.push({ text: `Catálogo de Cualificación Proporcionado:\n${catalogText}` });
  }
  parts.push({ text: promptText });

  const payload = {
    contents: [{ parts: parts }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error: ${response.status} - ${errText}`);
    }

    logLine("[SUCCESS] Respuesta recibida de Gemini. Analizando estructura...", "success");
    
    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const parsed = JSON.parse(rawText.trim());

    // Normalize criteria types, elements and keys case-insensitively
    if (parsed.subjects) {
      Object.keys(parsed.subjects).forEach(subName => {
        const subData = parsed.subjects[subName];
        if (subData && subData.criteria) {
          const normalizedCriteria = {};
          Object.keys(subData.criteria).forEach(oldKey => {
            const crit = subData.criteria[oldKey];
            if (!crit) return;
            
            // Normalize type
            let type = crit.type || "Core";
            if (type.toLowerCase().includes("core") || type.toLowerCase().includes("obligatoria") || type.toLowerCase().includes("técnica") || type.toLowerCase().includes("tecnica") || type.toLowerCase().includes("obligatorio")) {
              type = "Core";
            } else if (type.toLowerCase().includes("advanced") || type.toLowerCase().includes("avanzada") || type.toLowerCase().includes("especializada") || type.toLowerCase().includes("rango superior") || type.toLowerCase().includes("avanzado")) {
              type = "Advanced";
            } else if (type.toLowerCase().includes("transversal") || type.toLowerCase().includes("socio-laboral") || type.toLowerCase().includes("socio laboral")) {
              type = "Transversal";
            } else {
              type = "Core";
            }
            crit.type = type;
            
            // Normalize key
            let key = oldKey.trim().toUpperCase();
            if (type === "Core" && !key.startsWith("C")) {
              key = "C" + key.replace(/[^0-9]/g, "");
            } else if (type === "Advanced" && !key.startsWith("A")) {
              key = "A" + key.replace(/[^0-9]/g, "");
            } else if (type === "Transversal" && !key.startsWith("T")) {
              key = "T" + key.replace(/[^0-9]/g, "");
            }
            if (!key || key === "C" || key === "A" || key === "T") {
              const count = Object.keys(normalizedCriteria).length + 1;
              key = (type === "Core" ? "C" : (type === "Advanced" ? "A" : "T")) + count;
            }
            
            normalizedCriteria[key] = crit;
          });
          subData.criteria = normalizedCriteria;
        }
      });
    }

    parsedManagerHarmonizeResult = parsed;
    renderHarmonizedResults(parsed);

  } catch (err) {
    console.error("Manager Harmonization Gemini Error:", err);
    logLine(`[ERROR] Fallo en la comunicación con la IA: ${err.message}`, "warning");
    logLine("[INFO] Ejecutando motor de armonización heurística de respaldo local...", "meta");
    setTimeout(() => {
      executeLocalOfflineHarmonization(programName, subjectsList, catalogText, logLine);
    }, 1500);
  }
}

function executeLocalOfflineHarmonization(programName, subjects, catalogText, logLine) {
  logLine("[INFO] Analizando texto del catálogo mediante expresiones regulares locales...", "info");
  logLine("[INFO] Extrayendo descriptores y acotando a Nivel Técnico (Nivel 3 MNC)...", "info");
  
  const result = {
    programName: programName,
    subjects: {}
  };

  const mockDatabase = {
    "Razonamiento cuantitativo": {
      "C1": { name: "Modelamiento de Parámetros: Calcular variables algebraicas de acuerdo con los requisitos técnicos establecidos", type: "Core", element: "Elemento 1: Estimaciones Métricas" },
      "C2": { name: "Análisis Estadístico Básicos: Resolver operaciones aritméticas básicas de acuerdo con los estándares de control", type: "Core", element: "Elemento 1: Estimaciones Métricas" },
      "A1": { name: "Optimización de Algoritmos Métricos: Calcular la eficiencia cuantitativa de bucles y procesos según la notación Big-O", type: "Advanced", element: "Elemento 2: Eficiencia Estructural" },
      "T1": { name: "Documentación de Informes Cuantitativos: Redactar reportes técnicos con estimaciones matemáticas de forma clara y asertiva", type: "Transversal", element: "Elemento Transversal: Comunicación y Calidad" }
    },
    "Ingles": {
      "C1": { name: "Comprensión Lectora Técnica: Leer manuales de especificaciones de hardware y software de acuerdo con la sintaxis del idioma", type: "Core", element: "Elemento 1: Lectura y Traducción" },
      "C2": { name: "Comunicación Oral de Reportes: Expresar ideas sobre incidentes técnicos utilizando vocabulario formal en inglés", type: "Core", element: "Elemento 1: Lectura y Traducción" },
      "A1": { name: "Redacción de Correos de Soporte: Escribir requerimientos técnicos detallados a proveedores extranjeros según las guías corporativas", type: "Advanced", element: "Elemento 2: Producción Escrita" },
      "T1": { name: "Interacción Multicultural: Colaborar en equipos de desarrollo internacionales de manera asertiva y respetuosa", type: "Transversal", element: "Elemento Transversal: Comunicación y Calidad" }
    },
    "Comunicacion oral y escrita": {
      "C1": { name: "Redacción Estructurada: Redactar correos y bitácoras de trabajo utilizando reglas de ortografía y cohesión textual", type: "Core", element: "Elemento 1: Expresión Escrita" },
      "C2": { name: "Sustentación Asertiva de Ideas: Explicar propuestas de solución técnica en reuniones de equipo con lenguaje claro y preciso", type: "Core", element: "Elemento 1: Expresión Escrita" },
      "A1": { name: "Redacción de Informes de Avance: Elaborar reportes ejecutivos de rendimiento del proyecto de acuerdo con los formatos corporativos", type: "Advanced", element: "Elemento 2: Documentación Ejecutiva" },
      "T1": { name: "Negociación Colaborativa: Resolver conflictos de prioridades en el equipo de desarrollo de forma pacífica y asertiva", type: "Transversal", element: "Elemento Transversal: Comunicación y Calidad" }
    },
    "Competencias digitales": {
      "C1": { name: "Administración de Sistemas Operativos: Configurar entornos virtuales y sistemas de archivos de acuerdo con los manuales de seguridad", type: "Core", element: "Elemento 1: Entornos de Trabajo" },
      "C2": { name: "Gestión Segura de Datos: Almacenar archivos y backups en servicios de nube siguiendo los protocolos de cifrado estándar", type: "Core", element: "Elemento 1: Entornos de Trabajo" },
      "A1": { name: "Control de Versiones Distribuido: Resolver conflictos de merge en repositorios Git según el flujo de trabajo establecido", type: "Advanced", element: "Elemento 2: Integración Continua" },
      "T1": { name: "Uso Ético de Herramientas Digitales: Compartir recursos en redes corporativas respetando los derechos de propiedad intelectual", type: "Transversal", element: "Elemento Transversal: Comunicación y Calidad" }
    }
  };

  subjects.forEach(sub => {
    if (mockDatabase[sub]) {
      result.subjects[sub] = { criteria: mockDatabase[sub] };
    } else {
      const cleanSub = sub.replace(/[^a-zA-Z0-9 ]/g, "");
      result.subjects[sub] = {
        criteria: {
          "C1": { name: `Operación de Procesos de ${cleanSub}: Ejecutar tareas fundamentales del área de acuerdo con las especificaciones del manual`, type: "Core", element: "Elemento 1: Operación Básica" },
          "C2": { name: `Control de Calidad de ${cleanSub}: Verificar los estándares del producto final siguiendo las directivas del supervisor`, type: "Core", element: "Elemento 1: Operación Básica" },
          "A1": { name: `Optimización Avanzada de ${cleanSub}: Implementar metodologías de mejora continua en procesos según estándares internacionales`, type: "Advanced", element: "Elemento 2: Mejora Continua" },
          "T1": { name: `Comunicación de Incidencias en ${cleanSub}: Reportar fallas de manera oportuna empleando canales oficiales y lenguaje formal`, type: "Transversal", element: "Elemento Transversal: Comunicación y Calidad" }
        }
      };
    }
    logLine(`[SUCCESS] Armonizado módulo para asignatura: ${sub}`, "success");
  });

  logLine("[SUCCESS] Extracción local completada. Generando reporte...", "success");

  setTimeout(() => {
    parsedManagerHarmonizeResult = result;
    renderHarmonizedResults(result);
  }, 1000);
}

function renderHarmonizedResults(result) {
  DOM.mgrScannerSection.style.display = "none";
  DOM.mgrReportView.style.display = "flex";
  DOM.mgrReportProgramTitle.textContent = result.programName;
  
  DOM.mgrResultsContainer.innerHTML = "";
  
  Object.keys(result.subjects).forEach(subName => {
    const subData = result.subjects[subName];
    const criteriaKeys = Object.keys(subData.criteria);
    
    const header = document.createElement("div");
    header.className = "mgr-subject-header";
    header.innerHTML = `
      <span>${subName}</span>
      <span class="mgr-subject-badge">${criteriaKeys.length} Criterios</span>
    `;
    
    const content = document.createElement("div");
    content.className = "mgr-subject-content";
    content.style.display = "flex"; // visible initially
    
    criteriaKeys.forEach(code => {
      const crit = subData.criteria[code];
      const row = document.createElement("div");
      row.className = "mgr-criterion-row";
      
      let badgeClass = "bg-danger-soft text-danger";
      if (crit.type === "Advanced") badgeClass = "bg-info-soft text-info";
      else if (crit.type === "Transversal") badgeClass = "bg-warning-soft text-warning";
      
      row.innerHTML = `
        <div class="mgr-criterion-meta">
          <span class="mgr-crit-code font-mono">${code}</span>
          <span class="mgr-crit-type ${badgeClass}">${crit.type}</span>
        </div>
        <div class="mgr-crit-element">📌 ${crit.element || 'Elemento General'}</div>
        <div class="mgr-crit-desc"><strong>${crit.name.split(":")[0]}:</strong> ${crit.name.split(":").slice(1).join(":").trim()}</div>
      `;
      content.appendChild(row);
    });
    
    header.addEventListener("click", () => {
      const isCollapsed = content.style.display === "none";
      content.style.display = isCollapsed ? "flex" : "none";
    });
    
    DOM.mgrResultsContainer.appendChild(header);
    DOM.mgrResultsContainer.appendChild(content);
  });
}

function saveHarmonizedCurriculum() {
  if (!parsedManagerHarmonizeResult) return;
  const { programName, subjects } = parsedManagerHarmonizeResult;
  
  // Clean custom PDF attributes
  if (DOM.mgrPasteText) {
    delete DOM.mgrPasteText.dataset.pdfBase64;
    delete DOM.mgrPasteText.dataset.pdfMime;
  }
  if (DOM.mgrDropzoneLabel) {
    DOM.mgrDropzoneLabel.textContent = "Subir catálogo (.txt, .pdf) o pegue texto";
  }
  
  // Ensure the program exists in localState
  if (!localState.data.programs[programName]) {
    localState.data.programs[programName] = {
      level: "Técnico Laboral (MNC)",
      cuoc: "2163 - Diseñadores Industriales y de Productos", // default or fallback
      signatures: {}
    };
  }
  
  // Check if we can determine a better CUOC code based on program name
  const progLower = programName.toLowerCase();
  if (progLower.includes("software")) {
    localState.data.programs[programName].cuoc = "2512 - Desarrolladores y Analistas de Software y Aplicaciones";
  } else if (progLower.includes("multimedia")) {
    localState.data.programs[programName].cuoc = "2166 - Diseñadores Gráficos y Multimedia";
  } else if (progLower.includes("diseño") || progLower.includes("diseno")) {
    localState.data.programs[programName].cuoc = "2163 - Diseñadores Industriales y de Productos";
  } else if (parsedManagerHarmonizeResult.cuoc) {
    localState.data.programs[programName].cuoc = parsedManagerHarmonizeResult.cuoc;
  }
  
  const mockStudents = [
    { id: "M1", name: "Ana María Cárdenas", tokens: 3 },
    { id: "M2", name: "Carlos Daniel Ortiz", tokens: 3 },
    { id: "M3", name: "Elena Sofía Medina", tokens: 3 },
    { id: "M4", name: "Fernando José Vega", tokens: 3 },
    { id: "M5", name: "Gabriela Ruiz", tokens: 3 }
  ];
  
  // Loop over subjects and save them
  Object.keys(subjects).forEach(subName => {
    const subData = subjects[subName];
    
    localState.data.programs[programName].signatures[subName] = {
      students: JSON.parse(JSON.stringify(mockStudents)),
      criteria: subData.criteria,
      events: ["Taller 1: Fundamentos", "Evaluación 2: Caso de Estudio", "Caso Final: Proyecto Integrador"],
      activeCriteriaByEvent: {
        "Taller 1: Fundamentos": Object.keys(subData.criteria).filter(k => k.startsWith("C") || k.startsWith("T")),
        "Evaluación 2: Caso de Estudio": Object.keys(subData.criteria),
        "Caso Final: Proyecto Integrador": Object.keys(subData.criteria)
      }
    };

    // Seed evaluations for each cell as Pending
    mockStudents.forEach(st => {
      Object.keys(subData.criteria).forEach(critId => {
        localState.data.programs[programName].signatures[subName].events.forEach(ev => {
          const key = `${st.id}_${critId}_${ev}`;
          if (!localState.data.evaluations[key]) {
            localState.data.evaluations[key] = { state: "Pending" };
          }
        });
      });
    });
  });
  
  // Set the newly saved program and its first signature as active
  localState.data.selectedProgram = programName;
  const firstSub = Object.keys(subjects)[0];
  localState.data.selectedSignature = firstSub;
  localState.data.selectedEvent = "Taller 1: Fundamentos";
  
  // Save state
  localState.save();
  
  // Re-populate and sync
  populateProgramDropdown();
  populateSignatureDropdown();
  populateEventDropdown();
  
  alert(`¡Éxito! Se ha guardado el plan curricular para el programa "${programName}". Habilitadas las asignaturas: ${Object.keys(subjects).join(", ")}. Se han matriculado 5 estudiantes en cada una.`);
  
  // Switch to the matrix grading tab!
  switchWorkspaceTab("grading");
  
  // Clear manager results and form inputs
  parsedManagerHarmonizeResult = null;
  DOM.mgrPasteText.value = "";
  DOM.mgrEmptyResults.style.display = "flex";
  DOM.mgrReportView.style.display = "none";
}

function initializeManagerEvents() {
  if (DOM.mgrAddSubjectBtn) {
    DOM.mgrAddSubjectBtn.addEventListener("click", handleAddManagerNewSubject);
  }
  
  if (DOM.mgrNewSubjectInput) {
    DOM.mgrNewSubjectInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddManagerNewSubject();
      }
    });
  }
  
  if (DOM.mgrHarmonizeBtn) {
    DOM.mgrHarmonizeBtn.addEventListener("click", harmonizeProgramWithGemini);
  }
  
  if (DOM.mgrSaveBtn) {
    DOM.mgrSaveBtn.addEventListener("click", saveHarmonizedCurriculum);
  }
  
  // Manager upload drag-and-drop listeners
  if (DOM.mgrUploadDropzone && DOM.mgrFileInput) {
    DOM.mgrUploadDropzone.addEventListener("click", () => DOM.mgrFileInput.click());
    
    DOM.mgrUploadDropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      DOM.mgrUploadDropzone.classList.add("dragover");
    });
    
    DOM.mgrUploadDropzone.addEventListener("dragleave", () => {
      DOM.mgrUploadDropzone.classList.remove("dragover");
    });
    
    DOM.mgrUploadDropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      DOM.mgrUploadDropzone.classList.remove("dragover");
      
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        const isPdf = file.name.endsWith(".pdf");
        const isTxt = file.name.endsWith(".txt");
        
        if (isPdf) {
          fileToBase64(file).then(base64 => {
            logManagerUploadFile(file.name);
            analyzeManagerPDFWithGemini(base64, file.name);
          }).catch(err => {
            alert(`Error al procesar el archivo PDF: ${err.message}`);
          });
        } else if (isTxt) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            DOM.mgrPasteText.value = evt.target.result;
            logManagerUploadFile(file.name);
          };
          reader.readAsText(file);
        } else {
          alert("Por favor, suba únicamente archivos de texto (.txt) o PDF (.pdf).");
        }
      }
    });

    DOM.mgrFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        const isPdf = file.name.endsWith(".pdf");
        const isTxt = file.name.endsWith(".txt");
        
        if (isPdf) {
          fileToBase64(file).then(base64 => {
            logManagerUploadFile(file.name);
            analyzeManagerPDFWithGemini(base64, file.name);
          }).catch(err => {
            alert(`Error al procesar el archivo PDF: ${err.message}`);
          });
        } else if (isTxt) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            DOM.mgrPasteText.value = evt.target.result;
            logManagerUploadFile(file.name);
          };
          reader.readAsText(file);
        } else {
          alert("Por favor, seleccione únicamente archivos .txt o .pdf.");
        }
      }
    });
  }
}

function logManagerUploadFile(filename) {
  if (DOM.mgrDropzoneLabel) {
    DOM.mgrDropzoneLabel.textContent = `Archivo cargado: ${filename}`;
  }
}

function analyzeManagerPDFWithGemini(base64, filename) {
  const apiKey = localState.data.geminiApiKey || "";
  if (!apiKey) {
    alert("No se puede extraer texto de un PDF localmente sin API Key de Gemini. Por favor suba un archivo .txt o pegue el catálogo directamente.");
    return;
  }
  
  DOM.mgrPasteText.value = `[Archivo PDF Cargado: ${filename}. Presione 'Armonizar Plan' para enviar a Gemini]`;
  DOM.mgrPasteText.dataset.pdfBase64 = base64;
  DOM.mgrPasteText.dataset.pdfMime = "application/pdf";
}

// --- 8. RUNTIME BOOT ---
window.addEventListener("DOMContentLoaded", () => {
  DOM.body.className = localState.data.theme === "light" ? "light-theme" : "dark-theme";
  
  populateProgramDropdown();
  populateSignatureDropdown();
  populateEventDropdown();
  
  initializeEvents();
  initializeManagerEvents();
  switchWorkspaceTab(localState.data.activeTab || "dashboard");
});
