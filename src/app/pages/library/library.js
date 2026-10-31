const materials = [
    {
        id: 1,
        sistema: "anglo",
        serie: "3ano",
        disc: "mat",
        bim: "2",
        type: "apostila",
        typeLabel: "Apostila",
        typeClass: "type-apostila",
        spineClass: "anglo",
        icon: "ti-book-2",
        iconBg: "#EDE9FE",
        iconColor: "#6D28D9",
        title: "Apostila Anglo Matemática",
        subtitle: "Módulo 4 · 3º Ano · Pág. 140–180",
        tags: ["3º Ano", "Matemática", "2º Bimestre", "Anglo"],
        pages: "180",
        updated: "15/04/2026",
        status: "ok",
        uses: {plans: 156, evals: 89, last: "Ontem"},
        topics: [
            {
                icon: "ti-coin",
                name: "Sistema Monetário",
                sub: "Pp. 140–152 · EF03MA23",
            },
            {
                icon: "ti-math-function",
                name: "Operações Fundamentais",
                sub: "Pp. 153–165 · EF03MA07",
            },
            {
                icon: "ti-wallet",
                name: "Educação Financeira",
                sub: "Pp. 166–180 · EF03MA25",
            },
            {
                icon: "ti-history",
                name: "História do Dinheiro",
                sub: "Pp. 140–143 · Contexto",
            },
        ],
        aiUses: [
            "Planejamento Semanal",
            "Avaliações Objetivas",
            "Atividades Práticas",
            "Sugestões Didáticas",
            "Recomendações BNCC",
        ],
        aiSuggestions: [
            {
                icon: "ti-award",
                text: "Com base no Módulo 4, recomenda-se trabalhar o Sistema Monetário com situações-problema contextualizadas ao cotidiano dos alunos.",
            },
            {
                icon: "ti-device-gamepad-2",
                text: "Atividade prática sugerida: simulação de mercado em sala com notas fictícias, exercitando operações e representação de valores.",
            },
            {
                icon: "ti-chart-bar",
                text: "A IA identificou 3 competências BNCC não exploradas nas pp. 153–165. Recomenda inclusão em avaliação bimestral.",
            },
        ],
    },
    {
        id: 2,
        sistema: "anglo",
        serie: "8ano",
        disc: "hist",
        bim: "1",
        type: "apostila",
        typeLabel: "Apostila",
        typeClass: "type-apostila",
        spineClass: "anglo",
        icon: "ti-book-2",
        iconBg: "#EDE9FE",
        iconColor: "#6D28D9",
        title: "Apostila Anglo História",
        subtitle: "Módulo 2 · 8º Ano · Pág. 60–95",
        tags: ["8º Ano", "História", "1º Bimestre", "Anglo"],
        pages: "230",
        updated: "10/03/2026",
        status: "ok",
        uses: {plans: 98, evals: 54, last: "Hoje"},
        topics: [
            {
                icon: "ti-globe",
                name: "2ª Guerra Mundial",
                sub: "Pp. 60–75 · EF08HI03",
            },
            {
                icon: "ti-flag",
                name: "Nazismo e Fascismo",
                sub: "Pp. 76–85 · EF08HI04",
            },
            {
                icon: "ti-users",
                name: "Movimentos de Resistência",
                sub: "Pp. 86–95 · EF08HI05",
            },
        ],
        aiUses: [
            "Planejamento Semanal",
            "Avaliações Discursivas",
            "Fontes Primárias",
            "Sugestões BNCC",
        ],
        aiSuggestions: [
            {
                icon: "ti-file-text",
                text: "Sugestão: incluir análise de documento histórico como fonte primária (ex: Manifesto Nazista) para trabalhar EF08HI03.",
            },
            {
                icon: "ti-users",
                text: "A IA recomenda uso de debate estruturado sobre movimentos de resistência — competência socioemocional + BNCC integrada.",
            },
        ],
    },
    {
        id: 3,
        sistema: "anglo",
        serie: "7ano",
        disc: "geo",
        bim: "2",
        type: "livro",
        typeLabel: "Livro Didático",
        typeClass: "type-livro",
        spineClass: "objetivo",
        icon: "ti-book",
        iconBg: "#DCFCE7",
        iconColor: "#15803D",
        title: "Livro Didático Geografia",
        subtitle: "FTD · 7º Ano · 2º Bimestre",
        tags: ["7º Ano", "Geografia", "2º Bimestre", "FTD"],
        pages: "220",
        updated: "01/02/2026",
        status: "ok",
        uses: {plans: 72, evals: 38, last: "3 dias atrás"},
        topics: [
            {
                icon: "ti-leaf",
                name: "Biomas Brasileiros",
                sub: "Pp. 80–110 · EF07GE08",
            },
            {
                icon: "ti-droplet",
                name: "Bacias Hidrográficas",
                sub: "Pp. 111–130 · EF07GE09",
            },
            {
                icon: "ti-map",
                name: "Cartografia Temática",
                sub: "Pp. 60–79 · EF07GE01",
            },
        ],
        aiUses: [
            "Planejamento Semanal",
            "Mapas e Atividades",
            "Avaliações Objetivas",
            "Recomendações BNCC",
        ],
        aiSuggestions: [
            {
                icon: "ti-map-2",
                text: "Recomenda-se trabalhar Biomas com mapa mudo interativo — identifica regiões e características com legenda guiada.",
            },
            {
                icon: "ti-droplet",
                text: "Atividade integrada sugerida: cartografia de bacias hidrográficas com dados reais do IBGE, trabalhando EF07GE09.",
            },
        ],
    },
    {
        id: 4,
        sistema: "sas",
        serie: "6ano",
        disc: "arte",
        bim: "1",
        type: "apostila",
        typeLabel: "Apostila",
        typeClass: "type-apostila",
        spineClass: "sas",
        icon: "ti-palette",
        iconBg: "#FFF7ED",
        iconColor: "#C2410C",
        title: "Material SAS Artes",
        subtitle: "Linguagens Visuais · 6º Ano · 1º Bim.",
        tags: ["6º Ano", "Artes", "1º Bimestre", "SAS"],
        pages: "96",
        updated: "05/02/2026",
        status: "pending",
        uses: {plans: 31, evals: 14, last: "Semana passada"},
        topics: [
            {
                icon: "ti-brush",
                name: "Linguagem Visual",
                sub: "Pp. 10–28 · EF69AR01",
            },
            {
                icon: "ti-photo",
                name: "Arte Contemporânea",
                sub: "Pp. 29–50 · EF69AR04",
            },
            {
                icon: "ti-color-swatch",
                name: "Elementos Visuais",
                sub: "Pp. 51–70 · EF69AR02",
            },
        ],
        aiUses: [
            "Planejamento Bimestral",
            "Avaliações Práticas",
            "Sugestões Criativas",
        ],
        aiSuggestions: [
            {
                icon: "ti-camera",
                text: "Sugestão: criar portfólio visual como atividade avaliativa — alunos registram produções em diferentes linguagens visuais.",
            },
            {
                icon: "ti-ppp",
                text: "A IA identificou desalinhamento com o PPP vigente. Recomenda-se revisar objetivos da unidade 1 antes do próximo planejamento.",
            },
        ],
    },
    {
        id: 5,
        sistema: "bncc",
        serie: "",
        disc: "",
        bim: "",
        type: "bncc",
        typeLabel: "BNCC",
        typeClass: "type-bncc",
        spineClass: "bncc",
        icon: "ti-building-government",
        iconBg: "#FEE2E2",
        iconColor: "#B91C1C",
        title: "BNCC — Ensino Fundamental",
        subtitle: "MEC · 2018 · Todas as disciplinas",
        tags: ["Nacional", "Oficial", "MEC", "Vigente", "Todas as Séries"],
        pages: "472",
        updated: "01/01/2026",
        status: "ok",
        uses: {plans: 1284, evals: 891, last: "Hoje"},
        topics: [
            {
                icon: "ti-star",
                name: "Competências Gerais",
                sub: "10 competências · Base curricular",
            },
            {
                icon: "ti-list-check",
                name: "Habilidades por Componente",
                sub: "EF01 a EF09 · 569 habilidades",
            },
            {
                icon: "ti-circles-relation",
                name: "Áreas do Conhecimento",
                sub: "5 áreas · Integração curricular",
            },
        ],
        aiUses: [
            "Todos os Planejamentos",
            "Todas as Avaliações",
            "Verificação de Cobertura",
            "Recomendações Didáticas",
            "Rastreabilidade Curricular",
        ],
        aiSuggestions: [
            {
                icon: "ti-checkup-list",
                text: "A BNCC é a fonte principal de rastreabilidade da IA. Cada planejamento gerado é automaticamente vinculado às competências correspondentes.",
            },
            {
                icon: "ti-chart-dots",
                text: "Termômetro BNCC ativo: cobertura atual de 84% das competências previstas para o 3º Ano no 2º Bimestre. Recomenda-se priorizar EF03HI06.",
            },
        ],
    },
    {
        id: 6,
        sistema: "anglo",
        serie: "",
        disc: "",
        bim: "",
        type: "institucional",
        typeLabel: "Planejamento Institucional",
        typeClass: "type-institucional",
        spineClass: "institucional",
        icon: "ti-file-certificate",
        iconBg: "#F0FDF4",
        iconColor: "#15803D",
        title: "PPP — Colégio Cavlac 2026",
        subtitle: "Projeto Político-Pedagógico · Vigente",
        tags: ["Institucional", "PPP", "2026", "Cavlac"],
        pages: "128",
        updated: "15/01/2026",
        status: "ok",
        uses: {plans: 342, evals: 178, last: "Hoje"},
        topics: [
            {
                icon: "ti-target",
                name: "Missão e Visão Institucional",
                sub: "Pp. 12–18 · Identidade pedagógica",
            },
            {
                icon: "ti-route",
                name: "Diretrizes Curriculares",
                sub: "Pp. 40–78 · Eixos pedagógicos",
            },
            {
                icon: "ti-users-group",
                name: "Perfil dos Estudantes",
                sub: "Pp. 20–38 · Público-alvo",
            },
        ],
        aiUses: [
            "Alinhamento de Planejamentos",
            "Validação pela Coordenação",
            "Sugestões Pedagógicas",
            "Diretrizes de Avaliação",
        ],
        aiSuggestions: [
            {
                icon: "ti-building",
                text: "O PPP é cruzado automaticamente com cada planejamento submetido para aprovação, garantindo alinhamento institucional.",
            },
            {
                icon: "ti-alert-triangle",
                text: "A IA identificou que o Planejamento Bimestral de Artes (6º Ano) apresenta desvio em relação ao eixo temático do PPP. Recomenda revisão.",
            },
        ],
    },
    {
        id: 7,
        sistema: "positivo",
        serie: "3ano",
        disc: "port",
        bim: "3",
        type: "apostila",
        typeLabel: "Apostila",
        typeClass: "type-apostila",
        spineClass: "positivo",
        icon: "ti-book-2",
        iconBg: "#FEF9C3",
        iconColor: "#A16207",
        title: "Apostila Positivo Português",
        subtitle: "Vol. 3 · 3º Ano · 3º Bimestre",
        tags: ["3º Ano", "Português", "3º Bimestre", "Positivo"],
        pages: "160",
        updated: "01/07/2026",
        status: "ok",
        uses: {plans: 64, evals: 29, last: "5 dias atrás"},
        topics: [
            {
                icon: "ti-abc",
                name: "Produção Textual",
                sub: "Pp. 80–105 · EF35LP07",
            },
            {
                icon: "ti-quote",
                name: "Gêneros Textuais",
                sub: "Pp. 106–130 · EF35LP14",
            },
            {
                icon: "ti-grammar",
                name: "Gramática Contextualizada",
                sub: "Pp. 131–160 · EF35LP28",
            },
        ],
        aiUses: [
            "Planejamento Semanal",
            "Ditados e Produção",
            "Avaliações de Escrita",
            "Sugestões BNCC",
        ],
        aiSuggestions: [
            {
                icon: "ti-pencil",
                text: "Sugestão de sequência didática: iniciar com leitura coletiva de gênero (notícia), identificar estrutura, produzir texto individual.",
            },
        ],
    },
    {
        id: 8,
        sistema: "sas",
        serie: "8ano",
        disc: "hist",
        bim: "2",
        type: "modelo",
        typeLabel: "Avaliação Modelo",
        typeClass: "type-modelo",
        spineClass: "sas",
        icon: "ti-forms",
        iconBg: "#F0F9FF",
        iconColor: "#0369A1",
        title: "Modelo de Avaliação Bimestral",
        subtitle: "Padrão Cavlac · Todas as disciplinas",
        tags: ["Modelo", "Avaliação", "Institucional", "Todas as Séries"],
        pages: "8",
        updated: "10/02/2026",
        status: "ok",
        uses: {plans: 0, evals: 421, last: "Hoje"},
        topics: [
            {
                icon: "ti-list-numbers",
                name: "Questões Objetivas",
                sub: "15 questões · Gabarito incluso",
            },
            {
                icon: "ti-writing",
                name: "Questões Discursivas",
                sub: "3 questões · Critérios de correção",
            },
            {
                icon: "ti-checkup-list",
                name: "Cabeçalho Institucional",
                sub: "Logo, turma, data, professor",
            },
        ],
        aiUses: [
            "Geração de Avaliações",
            "Formatação Automática",
            "Alinhamento Curricular",
        ],
        aiSuggestions: [
            {
                icon: "ti-sparkles",
                text: "A IA gera avaliações completas usando este modelo como template, preenchendo automaticamente com conteúdos indexados da apostila selecionada.",
            },
        ],
    },
];

let selectedId = null;
let suggestionsGenerated = {};
let currentView = "grid";

document.addEventListener("DOMContentLoaded", () => {
    ["kpi1", "kpi2", "kpi3", "kpi4"].forEach((id, i) => {
        setTimeout(
            () => document.getElementById(id).classList.add("visible"),
            100 + i * 100,
        );
    });
    document
        .querySelectorAll(".upload-item.uploaded .upload-progress-fill")
        .forEach((el) => {
            setTimeout(() => (el.style.width = "100%"), 300);
        });
    renderMaterials(materials);
});

function renderMaterials(list) {
    const grid = document.getElementById("materialsGrid");
    const empty = document.getElementById("emptyState");
    if (!list.length) {
        grid.innerHTML = "";
        empty.classList.add("visible");
        return;
    }
    empty.classList.remove("visible");
    grid.innerHTML = list
        .map(
            (m) => `
      <div class="materials-card ${selectedId === m.id ? "selected" : ""}" id="mat_${m.id}" onclick="openPanel(${m.id})">
        <div class="materials-card-spine ${m.spineClass}"></div>
        <div class="materials-card-body">
          <div class="materials-type-row">
            <span class="materials-type-badge ${m.typeClass}">
              <i class="ti ${m.icon}"></i> ${m.typeLabel}
            </span>
            <span class="materials-status ${m.status}">
              ${
                m.status === "ok"
                    ? '<i class="ti ti-circle-check-filled"></i> Homologado'
                    : '<i class="ti ti-clock"></i> Em revisão'
            }
            </span>
          </div>
          <div class="materials-title">${m.title}</div>
          <div class="materials-subtitle">${m.subtitle}</div>
          <div class="materials-tags">${m.tags
                .slice(0, 4)
                .map((t) => `<span class="materials-tag">${t}</span>`)
                .join("")}</div>
          <div class="materials-footer">
            <div class="materials-footer-info"><i class="ti ti-refresh"></i> ${m.updated}</div>
            <div class="materials-actions">
              <button class="materials-button materials-button-view" onclick="event.stopPropagation(); openPanel(${m.id})">
                <i class="ti ti-eye"></i> Visualizar
              </button>
              <button class="materials-button materials-button-ai" onclick="event.stopPropagation(); openPanelAndSuggest(${m.id})">
                <i class="ti ti-cpu"></i> Usar IA
              </button>
            </div>
          </div>
        </div>
        <div class="materials-usage-bar">
          <div class="materials-usage-stat"><i class="ti ti-file-text"></i> <strong>${m.uses.plans}</strong> planos gerados</div>
          <div class="materials-usage-stat"><i class="ti ti-clipboard-list"></i> <strong>${m.uses.evals}</strong> avaliações</div>
          <div class="materials-usage-stat"><i class="ti ti-clock"></i> ${m.uses.last}</div>
        </div>
      </div>
    `,
        )
        .join("");
}

function filterMaterials() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    const sis = document.getElementById("filterSistema").value;
    const ser = document.getElementById("filterSerie").value;
    const disc = document.getElementById("filterDisc").value;
    const bim = document.getElementById("filterBim").value;
    const filtered = materials.filter((m) => {
        const matchQ =
            !q ||
            m.title.toLowerCase().includes(q) ||
            m.subtitle.toLowerCase().includes(q) ||
            m.tags.some((t) => t.toLowerCase().includes(q));
        const matchSis = !sis || m.sistema === sis || m.sistema === "bncc";
        const matchSer = !ser || m.serie === ser || m.serie === "";
        const matchDisc = !disc || m.disc === disc || m.disc === "";
        const matchBim = !bim || m.bim === bim || m.bim === "";
        return matchQ && matchSis && matchSer && matchDisc && matchBim;
    });
    renderMaterials(filtered);
}

function setView(v) {
    currentView = v;
    const grid = document.getElementById("materialsGrid");
    document
        .getElementById("btnGrid")
        .classList.toggle("active", v === "grid");
    document
        .getElementById("btnList")
        .classList.toggle("active", v === "list");
    grid.classList.toggle("list-view", v === "list");
}

function openPanel(id, autoSuggest) {
    const m = materials.find((x) => x.id === id);
    if (!m) return;

    selectedId = id;
    document
        .querySelectorAll(".materials-card")
        .forEach((c) => c.classList.remove("selected"));
    const card = document.getElementById("mat_" + id);
    if (card) card.classList.add("selected");

    document.getElementById("panelIcon").innerHTML =
        `<i class="ti ${m.icon}" style="color:${m.iconColor}"></i>`;
    document.getElementById("panelIcon").style.background = m.iconBg;
    document.getElementById("panelTitle").textContent = m.title;
    document.getElementById("panelSub").textContent = m.subtitle;

    const already = suggestionsGenerated[id];
    document.getElementById("panelBody").innerHTML = `
      <div>
        <div class="panel-section-title">Informações do Material</div>
        <div class="panel-info-grid">
          <div class="panel-info-item">
            <div class="panel-info-label">Páginas</div>
            <div class="panel-info-value">${m.pages}</div>
          </div>
          <div class="panel-info-item">
            <div class="panel-info-label">Atualizado</div>
            <div class="panel-info-value">${m.updated}</div>
          </div>
          <div class="panel-info-item">
            <div class="panel-info-label">Sistema</div>
            <div class="panel-info-value" style="text-transform:capitalize">${m.sistema === "bncc" ? "MEC/BNCC" : m.sistema.charAt(0).toUpperCase() + m.sistema.slice(1)}</div>
          </div>
          <div class="panel-info-item">
            <div class="panel-info-label">Status</div>
            <div class="panel-info-value" style="color:${m.status === "ok" ? "#15803D" : "#A16207"}">${m.status === "ok" ? "✓ Homologado" : "⏳ Em revisão"}</div>
          </div>
        </div>
      </div>

      <div>
        <div class="panel-section-title">Conteúdos Encontrados</div>
        ${m.topics
        .map(
            (t) => `
          <div class="content-topic">
            <i class="ti ${t.icon}"></i>
            <div>
              <div class="content-topic-name">${t.name}</div>
              <div class="content-topic-sub">${t.sub}</div>
            </div>
          </div>
        `,
        )
        .join("")}
      </div>

      <div>
        <div class="panel-section-title">Como a IA utiliza este material</div>
        ${m.aiUses
        .map(
            (u) => `
          <div class="ai-use-row">
            <i class="ti ti-circle-check"></i> ${u}
          </div>
        `,
        )
        .join("")}
      </div>

      <div>
        <div class="panel-section-title">Utilização deste Material</div>
        <div class="usage-stats-row">
          <div class="usage-stat-box">
            <div class="usage-stat-num">${m.uses.plans}</div>
            <div class="usage-stat-label">Planos Gerados</div>
          </div>
          <div class="usage-stat-box">
            <div class="usage-stat-num">${m.uses.evals}</div>
            <div class="usage-stat-label">Avaliações</div>
          </div>
          <div class="usage-stat-box" style="grid-column:span 1">
            <div class="usage-stat-num" style="font-size:14px;padding-top:4px">${m.uses.last}</div>
            <div class="usage-stat-label">Último uso</div>
          </div>
        </div>
      </div>

      <div class="panel-ai-box">
        <div class="panel-ai-header">
          <i class="ti ti-sparkles"></i>
          <div class="panel-ai-header-text">Sugestões da IA para este Conteúdo</div>
        </div>
        <div class="panel-ai-description">A IA analisou o material e pode gerar recomendações pedagógicas específicas baseadas neste conteúdo homologado.</div>
        <div class="panel-ai-results ${already ? "visible" : ""}" id="panelAiResults">
          ${
        already
            ? m.aiSuggestions
                .map(
                    (s) => `
            <div class="panel-ai-result"><i class="ti ${s.icon}"></i><span>${s.text}</span></div>
          `,
                )
                .join("")
            : ""
    }
        </div>
        <div id="panelAiLoading" style="display:none;align-items:center;gap:8px;padding:8px 0;font-size:12px;color:var(--purple)">
          <span class="library-ai-spinner visible"></span> Analisando conteúdo indexado...
        </div>
        ${
        !already
            ? `<button class="button-generate-suggestions" onclick="generatePanelSuggestions(${id})">
          <i class="ti ti-bolt"></i> Gerar Sugestões
        </button>`
            : `<div style="text-align:center;font-size:11px;font-weight:700;color:#15803D;padding:6px 0">✓ Sugestões geradas com sucesso</div>`
    }
      </div>
    `;

    document.getElementById("detailPanel").classList.add("open");

    if (autoSuggest && !already) {
        setTimeout(() => generatePanelSuggestions(id), 300);
    }
}

function openPanelAndSuggest(id) {
    openPanel(id, true);
    showToast("Material selecionado para a IA!", "success", "ti-cpu");
}

function closePanel() {
    document.getElementById("detailPanel").classList.remove("open");
    selectedId = null;
    document.querySelectorAll(".materials-card")
        .forEach((c) => c.classList.remove("selected"));
}

function generatePanelSuggestions(id) {
    const m = materials.find((x) => x.id === id);
    const btn = document.querySelector(".button-generate-suggestions");
    const loading = document.getElementById("panelAiLoading");
    const results = document.getElementById("panelAiResults");
    if (btn) btn.style.display = "none";
    if (loading) loading.style.display = "flex";

    setTimeout(() => {
        if (loading) loading.style.display = "none";
        suggestionsGenerated[id] = true;
        if (results) {
            results.innerHTML = m.aiSuggestions
                .map((s) => `
                      <div class="panel-ai-result"><i class="ti ${s.icon}"></i><span>${s.text}</span></div>
                    `,).join("");
            results.classList.add("visible");
        }
        const aiBox = document.querySelector(".panel-ai-box");
        if (aiBox) {
            const oldBtn = aiBox.querySelector(".button-generate-suggestions");
            if (oldBtn)
                oldBtn.outerHTML = `<div style="text-align:center;font-size:11px;font-weight:700;color:#15803D;padding:6px 0">✓ Sugestões geradas com sucesso</div>`;
        }
        showToast("Sugestões pedagógicas geradas!", "info", "ti-sparkles");
    }, 1800);
}

function openAdminModal() {
    document.getElementById("adminModal").classList.add("open");
    setTimeout(() => {
        document.querySelectorAll(".upload-item.uploaded .upload-progress-fill")
            .forEach((el) => {
                el.style.width = "100%";
            });
    }, 200);
}

function closeAdminModal() {
    document.getElementById("adminModal").classList.remove("open");
}

document.getElementById("adminModal")
    .addEventListener("click", function (e) {
        if (e.target === this) closeAdminModal();
    });

function simulateUpload(item) {
    if (item.classList.contains("uploaded")) {
        showToast(
            "Material já indexado e disponível na IA.",
            "success",
            "ti-circle-check",
        );
        return;
    }
    item.classList.add("uploaded");
    item.querySelector("i").className = "ti ti-cloud-check";
    item.querySelector(".upload-item-name").textContent = item.querySelector(".upload-item-name").textContent;
    item.querySelector(".upload-item-desc").textContent = "Indexando...";
    const bar = item.querySelector(".upload-progress-fill");
    setTimeout(() => {
        bar.style.width = "40%";
    }, 100);
    setTimeout(() => {
        bar.style.width = "80%";
    }, 600);
    setTimeout(() => {
        bar.style.width = "100%";
        item.querySelector(".upload-item-desc").textContent =
            "Indexado com sucesso";
        item.querySelector("i").className = "ti ti-circle-check";
        showToast(
            "Material indexado pela IA com sucesso!",
            "success",
            "ti-database-import",
        );
    }, 1500);
}

function showToast(msg, type, icon) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast-msg toast-${type}`;
    toast.innerHTML = `<i class="ti ${icon}"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}
