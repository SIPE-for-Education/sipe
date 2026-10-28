function selectOrigin(el) {
    document
        .querySelectorAll(".origin-option")
        .forEach((o) => o.classList.remove("selected"));
    el.classList.add("selected");
}

function selectDiff(el, type) {
    document
        .querySelectorAll(".difficulty-button")
        .forEach((b) => (b.className = "difficulty-button"));
    const map = {easy: "sel-easy", med: "sel-med", hard: "sel-hard"};
    el.classList.add(map[type]);
}

function startGeneration() {
    const overlay = document.getElementById("ai-overlay");
    const stepEl = document.getElementById("ai-step");
    const fill = document.getElementById("ai-fill");
    overlay.classList.add("active");

    const steps = [
        {
            text: "Analisando planejamento da Semana 22...",
            pct: 15,
            chip: "sc1",
        },
        {
            text: "Lendo Apostila Anglo — Módulo 4, páginas 140–145...",
            pct: 30,
            chip: "sc2",
        },
        {
            text: "Verificando competências BNCC obrigatórias...",
            pct: 48,
            chip: "sc3",
        },
        {
            text: "Cruzando com conteúdo efetivamente ministrado...",
            pct: 62,
            chip: "sc4",
        },
        {text: "Gerando questões objetivas...", pct: 75, chip: null},
        {text: "Gerando questões dissertativas...", pct: 85, chip: null},
        {
            text: "Montando gabarito e rastreabilidade...",
            pct: 94,
            chip: null,
        },
        {text: "Finalizando documento oficial...", pct: 99, chip: null},
    ];

    let i = 0;
    const iv = setInterval(() => {
        if (i < steps.length) {
            stepEl.textContent = steps[i].text;
            fill.style.width = steps[i].pct + "%";
            if (steps[i].chip)
                document.getElementById(steps[i].chip).classList.add("lit");
            i++;
        } else {
            clearInterval(iv);
            fill.style.width = "100%";
            setTimeout(() => {
                overlay.classList.remove("active");
                renderDocument();
                updateQuality();
                showToast();
            }, 500);
        }
    }, 750);
}

function updateQuality() {
    const vals = [
        ["qv-cob", "87%"],
        ["qv-cont", "12"],
        ["qv-bncc", "92%"],
        ["qv-pend", "0"],
    ];
    vals.forEach(([id, v], idx) => {
        setTimeout(() => {
            document.getElementById(id).textContent = v;
        }, idx * 150);
    });
}

const questions = [
    {
        type: "obj",
        num: 1,
        val: "1,0 pt",
        text: "O sistema monetário brasileiro utiliza qual moeda como unidade oficial de troca?",
        opts: [
            {l: "A", t: "Euro"},
            {l: "B", t: "Real", correct: true},
            {l: "C", t: "Peso"},
            {l: "D", t: "Dólar"},
        ],
        bncc: "EF03MA05",
        origin: "Apostila Anglo · Mod.4 · p.142",
    },
    {
        type: "obj",
        num: 2,
        val: "1,0 pt",
        text: "Maria foi à feira com R$ 20,00. Comprou frutas por R$ 7,50. Quanto sobrou de troco?",
        opts: [
            {l: "A", t: "R$ 7,50"},
            {l: "B", t: "R$ 10,00"},
            {l: "C", t: "R$ 12,50", correct: true},
            {l: "D", t: "R$ 15,00"},
        ],
        bncc: "EF03MA07",
        origin: "Apostila Anglo · Mod.4 · p.143",
    },
    {
        type: "obj",
        num: 3,
        val: "1,0 pt",
        text: 'Qual das expressões abaixo representa corretamente a ideia de "4 grupos de 3 objetos"?',
        opts: [
            {l: "A", t: "4 × 3 = 12", correct: true},
            {l: "B", t: "4 + 3 = 7"},
            {l: "C", t: "4 − 3 = 1"},
            {l: "D", t: "4 ÷ 3 = 1,3"},
        ],
        bncc: "EF03MA12",
        origin: "Apostila Anglo · Mod.5 · p.150",
    },
    {
        type: "obj",
        num: 4,
        val: "1,0 pt",
        text: "Uma professora distribuiu 3 lápis para cada um dos 5 alunos do grupo. Quantos lápis foram distribuídos ao todo?",
        opts: [
            {l: "A", t: "8"},
            {l: "B", t: "15", correct: true},
            {l: "C", t: "18"},
            {l: "D", t: "20"},
        ],
        bncc: "EF03MA12",
        origin: "Apostila Anglo · Mod.5 · p.151",
    },
    {
        type: "obj",
        num: 5,
        val: "1,0 pt",
        text: "João comprou um brinquedo por R$ 45,00 e pagou com R$ 50,00. Qual operação deve fazer para saber o troco?",
        opts: [
            {l: "A", t: "Adição"},
            {l: "B", t: "Multiplicação"},
            {l: "C", t: "Divisão"},
            {l: "D", t: "Subtração", correct: true},
        ],
        bncc: "EF03MA07",
        origin: "Livro PNLD · Cap.6 · p.90",
    },
    {
        type: "obj",
        num: 6,
        val: "1,0 pt",
        text: "Qual figura plana possui 4 lados iguais e 4 ângulos retos?",
        opts: [
            {l: "A", t: "Triângulo"},
            {l: "B", t: "Retângulo"},
            {l: "C", t: "Quadrado", correct: true},
            {l: "D", t: "Círculo"},
        ],
        bncc: "EF03MA14",
        origin: "Apostila Anglo · Mod.6 · p.158",
    },
    {
        type: "obj",
        num: 7,
        val: "1,0 pt",
        text: "Numa gincana, cada equipe marcou 4 pontos por rodada. Após 6 rodadas, quantos pontos uma equipe acumulou?",
        opts: [
            {l: "A", t: "24", correct: true},
            {l: "B", t: "20"},
            {l: "C", t: "28"},
            {l: "D", t: "16"},
        ],
        bncc: "EF03MA12",
        origin: "Planejamento Sem.22 · Tabuada do 4",
    },
    {
        type: "diss",
        num: 8,
        val: "1,0 pt",
        text: "Em suas próprias palavras, explique para que serve o dinheiro na vida das pessoas. Dê pelo menos dois exemplos de situações em que usamos dinheiro no dia a dia.",
        bncc: "EF03MA05",
        origin: "Apostila Anglo · Mod.4 · p.140",
    },
    {
        type: "diss",
        num: 9,
        val: "1,0 pt",
        text: "Resolva a conta abaixo mostrando todos os passos:\n\n   247 + 85 + 11 = ____\n\nExplique como você chegou ao resultado.",
        bncc: "EF03MA07",
        origin: "Livro PNLD · Cap.6 · p.91",
    },
    {
        type: "diss",
        num: 10,
        val: "1,0 pt",
        text: "Crie uma situação-problema de compra e venda usando números que você escolher. Depois, resolva o problema que você mesmo criou.",
        bncc: "EF03MA05",
        origin: "Planejamento Sem.22 · Situação-problema",
    },
];

function renderDocument() {
    const body = document.getElementById("doc-body");

    const objQs = questions.filter((q) => q.type === "obj");
    const dissQs = questions.filter((q) => q.type === "diss");

    let html = "";

    html += `<div class="section-heading">Parte I — Questões Objetivas <span style="font-size:12px;font-weight:500;opacity:.7">(7 questões · 7,0 pontos)</span></div>`;
    objQs.forEach((q, idx) => {
        const delay = idx * 100;
        html += `
      <div class="question-block ai-filled" style="opacity:1;transition:opacity .4s ${delay}ms" data-q="${q.num}">
        <div class="quality-number">
          Questão ${q.num}
          <span class="trace-tag"><i class="bi bi-pin-angle-fill"></i> ${q.origin}</span>
          <span style="margin-left:auto;font-size:12px;color:var(--muted);font-weight:600">${q.val}</span>
        </div>
        <div class="quality-text">${q.text}</div>
        <div class="quality-options">
          ${q.opts
            .map(
                (o) => `
            <div class="quality-option${o.correct ? " correct-option" : ""}">
              <div class="option-letter">${o.l}</div> ${o.t}
              ${o.correct ? '<i class="ti ti-check" style="margin-left:auto;font-size:16px;color:#16A34A"></i>' : ""}
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="bncc-tag"><i class="ti ti-book-2" style="font-size:10px"></i>${q.bncc}</div>
      </div>
    `;
    });

    html += `<div class="section-heading" style="margin-top:24px">Parte II — Questões Dissertativas <span style="font-size:12px;font-weight:500;opacity:.7">(3 questões · 3,0 pontos)</span></div>`;
    dissQs.forEach((q, idx) => {
        const delay = (objQs.length + idx) * 100;
        html += `
      <div class="question-block ai-filled" style="opacity:0;transition:opacity .4s ${delay}ms" data-q="${q.num}">
        <div class="quality-number">
          Questão ${q.num}
          <span class="trace-tag"><i class="bi bi-pin-angle-fill"></i> ${q.origin}</span>
          <span style="margin-left:auto;font-size:12px;color:var(--muted);font-weight:600">${q.val}</span>
        </div>
        <div class="quality-text" style="white-space:pre-line">${q.text}</div>
        <div class="quality-dissert">
          <div class="dissert-lines">
            ${Array(4).fill('<div class="dissert-line"></div>').join("")}
          </div>
        </div>
        <div class="bncc-tag"><i class="ti ti-book-2" style="font-size:10px"></i>${q.bncc}</div>
      </div>
    `;
    });

    html += `
    <div class="trace-section">
      <div class="trace-title"><i class="bi bi-diagram-3"></i> Rastreabilidade Pedagógica — Gerado pelo SIPE</div>
      <div class="trace-grid">
        ${questions
        .map(
            (q) => `
          <div class="trace-card">
            <div class="trace-question">Questão ${q.num}</div>
            <div class="trace-origin">${q.origin}</div>
            <div class="trace-detail">${q.bncc}</div>
          </div>
        `,
        )
        .join("")}
      </div>
    </div>
  `;

    body.innerHTML = html;

    document.getElementById("doc-section").style.display = "block";

    setTimeout(() => {
        document.querySelectorAll(".question-block").forEach((el, idx) => {
            setTimeout(() => {
                el.style.opacity = "1";
            }, idx * 80);
        });
        document
            .getElementById("doc-section")
            .scrollIntoView({behavior: "smooth", block: "start"});
    }, 100);
}

function openGabarito() {
    document.getElementById("review-modal").classList.add("open");
}

function closeModalBtn() {
    document.getElementById("review-modal").classList.remove("open");
}

function showToast() {
    const t = document.getElementById("toast");
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 4500);
}
