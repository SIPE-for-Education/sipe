const planData = {
    math: {
        subjectClass: "subj-mat",
        rows: [
            [
                {
                    subject: "Matemática",
                    title: "A História do Dinheiro",
                    ref: "Apostila Anglo · Mod.4 · p.140–142",
                    strategy: "Roda de conversa + situações-problema",
                    bncc: "EF03MA05",
                },
                {
                    subject: "Matemática",
                    title: "Adição com Reagrupamento",
                    ref: "Livro PNLD · Cap.6 · p.88–90",
                    strategy: "Resolução guiada no quadro",
                    bncc: "EF03MA07",
                },
                {
                    subject: "Matemática",
                    title: "Revisão: Operações",
                    ref: "Apostila Anglo · Mod.4 · p.143",
                    strategy: "Atividade em dupla",
                    bncc: "EF03MA07",
                },
                {
                    subject: "Matemática",
                    title: "Subtração com Reagrupamento",
                    ref: "Apostila Anglo · Mod.4 · p.144",
                    strategy: "Material concreto (palitos)",
                    bncc: "EF03MA07",
                },
                {
                    subject: "Matemática",
                    title: "Avaliação Formativa",
                    ref: "Instrumento interno Cavlac",
                    strategy: "Prova individual + autocorreção",
                    bncc: "EF03MA05",
                },
            ],
            [
                {
                    subject: "Matemática",
                    title: "Sistema Monetário Brasileiro",
                    ref: "Apostila Anglo · Mod.4 · p.142–143",
                    strategy: "Jogo de mercadinho com moedas",
                    bncc: "EF03MA05",
                },
                {
                    subject: "Matemática",
                    title: "Problemas com Dinheiro",
                    ref: "Livro PNLD · Cap.6 · p.91–93",
                    strategy: "Resolução em grupos",
                    bncc: "EF03MA05",
                },
                {
                    subject: "Matemática",
                    title: "Multiplicação: conceito",
                    ref: "Apostila Anglo · Mod.5 · p.150",
                    strategy: "Atividade prática com tampinhas",
                    bncc: "EF03MA12",
                },
                {
                    subject: "Matemática",
                    title: "Tabuada do 2 e do 3",
                    ref: "Apostila Anglo · Mod.5 · p.151",
                    strategy: "Música e repetição rítmica",
                    bncc: "EF03MA12",
                },
                {
                    subject: "Matemática",
                    title: "Exercícios de Fixação",
                    ref: "Livro PNLD · Cap.7 · p.95–96",
                    strategy: "Fichário individual",
                    bncc: "EF03MA12",
                },
            ],
            [
                {
                    subject: "Port.",
                    title: "Texto Informativo: O Comércio",
                    ref: "Livro PNLD Port. · Cap.5 · p.72",
                    strategy: "Leitura coletiva em voz alta",
                    bncc: "EF03LP01",
                },
                {
                    subject: "Port.",
                    title: "Interpretação de Texto",
                    ref: "Livro PNLD Port. · Cap.5 · p.73–74",
                    strategy: "Questões orais e escritas",
                    bncc: "EF03LP01",
                },
                {
                    subject: "Ciências",
                    title: "Os Seres Vivos e o Ambiente",
                    ref: "Apostila Anglo Cie. · Mod.3 · p.90",
                    strategy: "Observação de imagens + debate",
                    bncc: "EF03CI04",
                },
                {
                    subject: "Ciências",
                    title: "Cadeia Alimentar",
                    ref: "Apostila Anglo Cie. · Mod.3 · p.92–93",
                    strategy: "Montagem de cadeia com cartões",
                    bncc: "EF03CI04",
                },
                {
                    subject: "Port.",
                    title: "Produção Textual: Receita",
                    ref: "Livro PNLD Port. · Cap.6 · p.80",
                    strategy: "Escrita individual guiada",
                    bncc: "EF03LP15",
                },
            ],
            [
                {
                    subject: "Socioemoc.",
                    title: "Projeto de Vida: Meus Sonhos",
                    ref: "Material Socioemocional · Sem.22",
                    strategy: "Roda de conversa + desenho",
                    bncc: "—",
                },
                {
                    subject: "Socioemoc.",
                    title: "Resolvendo Conflitos",
                    ref: "Material Socioemocional · Sem.22",
                    strategy: "Teatro de fantoches",
                    bncc: "—",
                },
                {
                    subject: "Hist.",
                    title: "Trabalho e Profissões",
                    ref: "Apostila Anglo Hist. · Mod.3 · p.55",
                    strategy: "Pesquisa em grupo + apresentação",
                    bncc: "EF03HI02",
                },
                {
                    subject: "Hist.",
                    title: "Profissões do Passado e do Presente",
                    ref: "Apostila Anglo Hist. · Mod.3 · p.57–58",
                    strategy: "Linha do tempo coletiva",
                    bncc: "EF03HI02",
                },
                {
                    subject: "Artes",
                    title: "Releitura: Portinari e o Trabalho",
                    ref: "Apostila Anglo Artes · p.40–41",
                    strategy: "Produção plástica individual",
                    bncc: "EF15AR04",
                },
            ],
            [
                {
                    subject: "Geo.",
                    title: "O Bairro e a Cidade",
                    ref: "Apostila Anglo Geo. · Mod.3 · p.62–63",
                    strategy: "Mapa do bairro desenhado pelos alunos",
                    bncc: "EF03GE01",
                },
                {
                    subject: "Geo.",
                    title: "Espaços de Convivência",
                    ref: "Apostila Anglo Geo. · Mod.3 · p.64",
                    strategy: "Fotografia + debate em roda",
                    bncc: "EF03GE01",
                },
                {
                    subject: "Geo.",
                    title: "Campo e Cidade: diferenças",
                    ref: "Livro PNLD Geo. · Cap.4 · p.60–62",
                    strategy: "Vídeo curto + discussão",
                    bncc: "EF03GE03",
                },
                {
                    subject: "Matemática",
                    title: "Geometria: Figuras Planas",
                    ref: "Apostila Anglo · Mod.6 · p.158–160",
                    strategy: "Dobraduras e tangram",
                    bncc: "EF03MA14",
                },
                {
                    subject: "Matemática",
                    title: "Revisão Semanal Geral",
                    ref: "Plano anterior (Sem. 21) + Sem. 22",
                    strategy: "Jogo de perguntas e respostas",
                    bncc: "EF03MA05",
                },
            ],
        ],
    },
};

function renderCell(lesson) {
    const colorMap = {
        math: "subj-mat",
        "Port.": "subj-por",
        "Geo.": "subj-geo",
        "Hist.": "subj-his",
        science: "subj-cie",
        "Socioemoc.": "subj-mat",
        Artes: "subj-his",
    };
    const cls = colorMap[lesson.subject] || "subj-mat";
    const bnccHtml =
        lesson.bncc !== "—"
            ? `<div class="bncc-tag"><i class="ti ti-book-2" style="font-size:10px"></i>${lesson.bncc}</div>`
            : "";
    return `
    <div class="lesson-subject ${cls}">${lesson.subject}</div>
    <div class="lesson-content-title">${lesson.title}</div>
    <div class="lesson-reference"><i class="ti ti-book" style="font-size:12px; margin-right:3px"></i>${lesson.ref}</div>
    <div class="lesson-strategy"><i class="ti ti-bulb"></i>${lesson.strategy}</div>
    ${bnccHtml}
  `;
}


let panelOpen = false;

function togglePanel() {
    panelOpen = !panelOpen;
    document
        .getElementById("side-panel")
        .classList.toggle("open", panelOpen);
}

function handleSchoolChange() {
    const chip = document.getElementById("doc-status-chip");
    chip.innerHTML =
        '<i class="ti ti-building-school" style="font-size:14px"></i> Instituição alterada — recarregando modelos...';
    chip.className = "doc-status-chip chip-draft chip-pulse";
    setTimeout(() => {
        chip.innerHTML =
            '<i class="ti ti-clock" style="font-size:14px"></i> Aguardando geração';
        chip.className = "doc-status-chip chip-draft";
    }, 2000);
}

function startGeneration() {
    const overlay = document.getElementById("ai-overlay");
    const stepText = document.getElementById("ai-step-text");
    const progress = document.getElementById("ai-progress");

    overlay.classList.add("active");

    const steps = [
        {
            text: "Consultando modelo institucional Cavlac...",
            pct: 10,
            chip: null,
        },
        {
            text: "Lendo Apostila Anglo — Módulo 4...",
            pct: 25,
            chip: "chip-apostila",
        },
        {
            text: "Verificando competências BNCC obrigatórias...",
            pct: 42,
            chip: "chip-bncc",
        },
        {
            text: "Cruzando com planejamento semana 21...",
            pct: 58,
            chip: "chip-prev",
        },
        {
            text: "Inserindo materiais socioemocionais...",
            pct: 72,
            chip: "chip-socio",
        },
        {
            text: "Verificando conflitos e sobreposições...",
            pct: 86,
            chip: null,
        },
        {
            text: "Finalizando documento institucional...",
            pct: 95,
            chip: null,
        },
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < steps.length) {
            stepText.textContent = steps[i].text;
            progress.style.width = steps[i].pct + "%";
            if (steps[i].chip) {
                document.getElementById(steps[i].chip).classList.add("lit");
            }
            i++;
        } else {
            clearInterval(interval);
            progress.style.width = "100%";
            setTimeout(() => {
                overlay.classList.remove("active");
                fillDocument();
                openPanelAndUpdateQuality();
                showSuccessToast();
            }, 500);
        }
    }, 700);
}

function fillDocument() {
    const rows = document.querySelectorAll("#schedule-body tr");
    const data = planData["math"].rows;

    rows.forEach((row, rowIdx) => {
        const cells = row.querySelectorAll("td.lesson-cell");
        cells.forEach((cell, colIdx) => {
            const lesson = data[rowIdx][colIdx];

            cell.innerHTML = `
        <div class="typing-placeholder">
          <div class="skeleton-line" style="width:60%"></div>
          <div class="skeleton-line" style="width:85%"></div>
          <div class="skeleton-line" style="width:70%"></div>
        </div>
      `;

            const delay = (rowIdx * 5 + colIdx) * 90;
            setTimeout(() => {
                cell.classList.add("ai-filled");
                cell.innerHTML = renderCell(lesson);
            }, delay + 200);
        });
    });

    document.getElementById("info-disciplina").textContent =
        "Matemática / Multi";
    const now = new Date();
    document.getElementById("information-generate-time").textContent =
        `SIPE IA · ${now.toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"})}`;

    setTimeout(() => {
        const chip = document.getElementById("doc-status-chip");
        chip.innerHTML =
            '<i class="ti ti-circle-check" style="font-size:14px"></i> Gerado com IA — Pronto para revisão';
        chip.className = "doc-status-chip chip-generated";
        document.getElementById("btn-approve").disabled = false;
    }, 300);
}

function openPanelAndUpdateQuality() {
    panelOpen = true;
    document.getElementById("side-panel").classList.add("open");

    setTimeout(() => {
        document.getElementById("q-bncc").textContent = "92%";
        document.getElementById("q-content").textContent = "100%";
        document.getElementById("q-conflicts").textContent = "0";
        document.getElementById("q-pending").textContent = "2";
    }, 600);
}

function showSuccessToast() {
    const toast = document.getElementById("success-toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
}
