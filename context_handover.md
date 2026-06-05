# CERW - Context Handover & Resume Guide

This document is designed to transfer context to a new AI assistant session to resume development without wasting token context or losing progress.

---

## 1. Project Overview & Architecture
* **Name:** CERW (Criteria-Based Evaluation & Review Workspace)
* **Location:** `C:\Users\CBNSoporteCDI7\AppData\Local\cerw`
* **Local Server URL:** `http://localhost:5502` (Served via Python: `python -m http.server 5502`)
* **Technology:** Single-page Vanilla HTML5, CSS3, and ES6 JavaScript (`app.js`). Persistent local browser state via `localStorage` (current schema version `v6`). No backend database is needed.
* **Core Logic:** Implements Colombian academic grading rules (1.0 to 5.0 scale, passing at 3.0) and the Marco Nacional de Cualificaciones (MNC).

## 2. Key Files
* [index.html](file:///C:/Users/CBNSoporteCDI7/AppData/Local/cerw/index.html) - Fully translated to Spanish. Contains the layout shell, dashboard, grading matrix, MNC Suite, Manager Suite, Special Exams view, Student Simulator, and dialog modals.
* [style.css](file:///C:/Users/CBNSoporteCDI7/AppData/Local/cerw/style.css) - Contains the visual theme variables, layouts, sticky elements, grids, and typography.
* [app.js](file:///C:/Users/CBNSoporteCDI7/AppData/Local/cerw/app.js) - Contains all data state management, grading formulas, DOM manipulation, and integrations.
* [project_summary.md](file:///C:/Users/CBNSoporteCDI7/AppData/Local/cerw/project_summary.md) - Technical reference covering state schema, math logic, and workflow definitions.

## 3. New Features Added
* **Exámenes Especiales View:** A teacher cockpit view containing two columns:
  * *Supletorios:* Displays all missed exams marked `Absent` with `supletorioState === "Paid"`. Clicking "Calificar" launches the grading drawer.
  * *Habilitaciones:* Displays students failing the signature (`grade < 3.0`). Allows teachers to register physical payments (`Paid`) and approve habilitaciones (`Approved`), which overrides the final grade to `3.0` and marks all Core criteria as `Met`.
* **Cortes to Notas Renaming:** Renamed Cut identifiers to `Nota 1` (30%), `Nota 2` (30%), and `Nota 3` (40%). Displays descriptive student-friendly subtitles (e.g. `Nota 1 (Periodo Inicial: Parcial y Talleres)`) in the Boletín table.
* **Grading Observations:** Teachers can leave custom remarks/feedback when grading evaluations as `Not Met`. These observations render directly under the student's **"Aspects to Improve"** cards in the simulator.
* **Batch Replicate Grades:** Added buttons inside the inspector panel to replicate `Met` or `Not Met` (with comments) to all students in the active signature for the selected event and criterion.
* **Calculations Test Runner:** Validated calculations via an automated test sandbox [verify_calculations.js](file:///C:/Users/CBNSoporteCDI7/.gemini/antigravity/brain/90479b0d-ecd3-417d-b031-67ee82aaefa4/scratch/verify_calculations.js).

## 4. How to Resume in a New Conversation
To start a new conversation without losing context, paste this message into the new chat:
> *"Please read `C:\Users\CBNSoporteCDI7\AppData\Local\cerw\context_handover.md` and `C:\Users\CBNSoporteCDI7\AppData\Local\cerw\project_summary.md` to get up to speed on our current project. Let's continue from there."*
