const planData = {
    1: {
        title: "Planejamento Semanal — Matemática",
        status: "pending",
        timeline: [
            {
                status: "done",
                icon: "ti-circle-plus",
                title: "Planejamento Criado",
                date: "10/05/2026",
            },
            {
                status: "done",
                icon: "ti-send",
                title: "Enviado para Coordenação",
                date: "11/05/2026",
            },
            {
                status: "pending",
                icon: "ti-clock-edit",
                title: "Ajustes Solicitados",
                date: "12/05/2026",
            },
            {
                status: "upcoming",
                icon: "ti-pencil",
                title: "Correções Aplicadas",
                date: "—",
            },
            {
                status: "upcoming",
                icon: "ti-circle-check",
                title: "Aprovação Final",
                date: "—",
            },
        ],
        revisions: [
            {
                version: "Versão 1",
                date: "11/05/2026",
                comment: '"Adicionar atividade prática na quinta-feira."',
            },
            {
                version: "Versão atual",
                date: "12/05/2026",
                comment: '"Aguardando aplicação das correções solicitadas."',
            },
        ],
        aiPrompt:
            "A coordenação solicitou atividade prática e reforço em sistema monetário. Deseja gerar sugestões pedagógicas?",
        aiSuggestions: [
            {
                icon: "ti-device-gamepad-2",
                text: "Atividade prática: Simulação de mercado com uso de notas fictícias — exercita operações e sistema monetário de forma lúdica.",
            },
            {
                icon: "ti-files",
                text: "Proposta: Exercício em duplas com recorte de preços de supermercado para calcular troco e comparar valores.",
            },
            {
                icon: "ti-bulb",
                text: 'Sugestão: Criação de um "cardápio de lanchonete" pelos alunos, praticando adição, subtração e representação de valores.',
            },
        ],
    },
    2: {
        title: "Planejamento Semanal — História",
        status: "approved",
        timeline: [
            {
                status: "done",
                icon: "ti-circle-plus",
                title: "Planejamento Criado",
                date: "05/05/2026",
            },
            {
                status: "done",
                icon: "ti-send",
                title: "Enviado para Coordenação",
                date: "06/05/2026",
            },
            {
                status: "done",
                icon: "ti-clock-edit",
                title: "Ajustes Solicitados",
                date: "07/05/2026",
            },
            {
                status: "done",
                icon: "ti-pencil",
                title: "Correções Aplicadas",
                date: "08/05/2026",
            },
            {
                status: "done",
                icon: "ti-circle-check",
                title: "Aprovado",
                date: "08/05/2026",
            },
        ],
        revisions: [
            {
                version: "Versão 1",
                date: "06/05/2026",
                comment: '"Aprofundar análise das causas da 2ª Guerra Mundial."',
            },
            {
                version: "Versão 2",
                date: "07/05/2026",
                comment: '"Incluir fonte primária como documento de análise."',
            },
            {
                version: "Versão 3 — Aprovada",
                date: "08/05/2026",
                comment:
                    '"Planejamento aprovado sem ressalvas. Excelente estrutura BNCC."',
            },
        ],
        aiPrompt: null,
        aiSuggestions: [],
    },
    3: {
        title: "Planejamento Bimestral — Artes",
        status: "rejected",
        timeline: [
            {
                status: "done",
                icon: "ti-circle-plus",
                title: "Planejamento Criado",
                date: "26/04/2026",
            },
            {
                status: "done",
                icon: "ti-send",
                title: "Enviado para Coordenação",
                date: "27/04/2026",
            },
            {
                status: "rejected",
                icon: "ti-x",
                title: "Rejeitado pela Coordenação",
                date: "29/04/2026",
            },
            {
                status: "upcoming",
                icon: "ti-refresh",
                title: "Aguardando Reenvio",
                date: "—",
            },
            {
                status: "upcoming",
                icon: "ti-circle-check",
                title: "Aprovação Final",
                date: "—",
            },
        ],
        revisions: [
            {
                version: "Versão 1 — Rejeitada",
                date: "29/04/2026",
                comment:
                    '"Objetivos não alinhados ao PPP. Falta estratégia de recuperação."',
            },
        ],
        aiPrompt:
            "O planejamento foi rejeitado por desalinhamento com o PPP. Deseja sugestões para reestruturação?",
        aiSuggestions: [
            {
                icon: "ti-target",
                text: "Reformular objetivos de aprendizagem com base nas competências específicas do componente Arte (BNCC — EF69AR).",
            },
            {
                icon: "ti-users",
                text: "Incluir atividades diferenciadas: alunos em recuperação recebem roteiro simplificado com os mesmos conteúdos em linguagem visual acessível.",
            },
            {
                icon: "ti-book",
                text: "Vincular o planejamento ao Projeto Político-Pedagógico: citar eixo temático e competências previstas no documento institucional.",
            },
        ],
    },
    4: {
        title: "Planejamento Semanal — Geografia",
        status: "pending",
        timeline: [
            {
                status: "done",
                icon: "ti-circle-plus",
                title: "Planejamento Criado",
                date: "19/05/2026",
            },
            {
                status: "done",
                icon: "ti-send",
                title: "Enviado para Coordenação",
                date: "20/05/2026",
            },
            {
                status: "pending",
                icon: "ti-clock-edit",
                title: "Ajustes Solicitados",
                date: "21/05/2026",
            },
            {
                status: "upcoming",
                icon: "ti-pencil",
                title: "Correções Aplicadas",
                date: "—",
            },
            {
                status: "upcoming",
                icon: "ti-circle-check",
                title: "Aprovação Final",
                date: "—",
            },
        ],
        revisions: [
            {
                version: "Versão 1",
                date: "20/05/2026",
                comment:
                    '"Incluir estratégia diferenciada para alunos com dificuldade."',
            },
        ],
        aiPrompt:
            "A coordenação solicitou estratégia diferenciada. Deseja gerar sugestões de atividades de recuperação?",
        aiSuggestions: [
            {
                icon: "ti-map",
                text: "Proposta diferenciada: Alunos com dificuldade trabalham com mapa mudo interativo — identificam biomas com legendas guiadas.",
            },
            {
                icon: "ti-video",
                text: "Usar vídeo-aula curta (5 min) do conteúdo principal como reforço prévio para alunos em recuperação antes da aula coletiva.",
            },
            {
                icon: "ti-star",
                text: "Atividade gamificada: Quiz por equipes onde alunos com dificuldade são estrategicamente distribuídos para aprendizagem cooperativa.",
            },
        ],
    },
};

let selectedPlan = null;
let suggestionsGenerated = {};

document.addEventListener("DOMContentLoaded", () => {
    const kpis = document.querySelectorAll(".kpi-card");
    kpis.forEach((kpi, i) => {
        setTimeout(() => kpi.classList.add("visible"), 150 + i * 100);
    });

    selectPlan(1);
});

function selectPlan(id) {
    selectedPlan = id;
    document.querySelectorAll(".planning-card")
        .forEach((c) => c.classList.remove("selected"));
    const card = document.getElementById("plan" + id);
    if (card) card.classList.add("selected");

    const data = planData[id];
    renderTimeline(data.timeline);
    renderRevisions(data.revisions);

    const aiBox = document.getElementById("aiBox");
    if (data.aiPrompt) {
        aiBox.style.display = "block";
        document.getElementById("aiBoxDesc").textContent = data.aiPrompt;
        const suggestions = document.getElementById("aiSuggestions");
        if (suggestionsGenerated[id]) {
            renderSuggestions(id);
            suggestions.classList.add("visible");
            aiBox.querySelector("button").style.display = "none";
            document.getElementById("aiLoading").classList.remove("visible");
        } else {
            suggestions.classList.remove("visible");
            suggestions.innerHTML = "";
            aiBox.querySelector("button").style.display = "";
            document.getElementById("aiLoading").classList.remove("visible");
        }
    } else {
        aiBox.style.display = "none";
    }

    document.getElementById("notifCard").style.display =
        id === 1 ? "block" : "none";
}

function renderTimeline(steps) {
    const container = document.getElementById("timelineContent");
    container.innerHTML = steps
        .map((s) => `
      <div class="timeline-item">
        <div class="timeline-dot-col">
          <div class="timeline-dot ${s.status}">
            <i class="ti ${s.icon}" style="font-size:15px"></i>
          </div>
          <div class="timeline-line"></div>
        </div>
        <div class="timeline-content">
          <div class="timeline-title">${s.title}</div>
          <div class="timeline-date">${s.date}</div>
        </div>
      </div>
    `,).join("");
}

function renderRevisions(revisions) {
    const container = document.getElementById("revisionsContent");
    container.innerHTML = revisions
        .map((r) => `
      <div class="revision-item">
        <div class="revision-header">
          <span class="revision-version">${r.version}</span>
          <span class="revision-date">${r.date}</span>
        </div>
        <div class="revision-comment">${r.comment}</div>
      </div>
    `,).join("");
}

function generateSuggestions() {
    if (!selectedPlan) return;
    const id = selectedPlan;
    const loading = document.getElementById("aiLoading");
    const btn = document.querySelector("#aiBox button");
    loading.classList.add("visible");
    btn.style.display = "none";

    setTimeout(() => {
        loading.classList.remove("visible");
        suggestionsGenerated[id] = true;
        renderSuggestions(id);
        document.getElementById("aiSuggestions").classList.add("visible");
        showToast(
            "Sugestões pedagógicas geradas com sucesso!",
            "info",
            "ti-sparkles",
        );
    }, 1800);
}

function renderSuggestions(id) {
    const container = document.getElementById("aiSuggestions");
    const data = planData[id];
    container.innerHTML = data.aiSuggestions
        .map((s) => `
      <div class="ai-suggestion-item">
        <i class="ti ${s.icon}"></i>
        <span>${s.text}</span>
      </div>
    `,).join("");
}

function filterPlans(filter, btn) {
    document.querySelectorAll(".filter-tab")
        .forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");

    const cards = {
        plan1: "pending",
        plan2: "approved",
        plan3: "rejected",
        plan4: "pending",
    };
    Object.entries(cards).forEach(([id, status]) => {
        const el = document.getElementById(id);
        if (filter === "all" || filter === status) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
}

function applyCorrections(event) {
    event.stopPropagation();
    showToast("Abrindo editor de planejamento...", "info", "ti-pencil");
    setTimeout(() => {
        showToast(
            "Planejamento aberto para edição!",
            "success",
            "ti-circle-check",
        );
    }, 1000);
}

function viewDocument(event) {
    event.stopPropagation();
    showToast("Abrindo documento aprovado...", "success", "ti-eye");
}

function resendPlan(event) {
    event.stopPropagation();
    showToast(
        "Preparando reenvio do planejamento...",
        "warning",
        "ti-refresh",
    );
    setTimeout(() => {
        showToast(
            "Planejamento reenviado à coordenação!",
            "success",
            "ti-send",
        );
    }, 1200);
}

function toggleNotifPanel() {
    const notifCard = document.getElementById("notifCard");
    const visible = notifCard.style.display === "block";
    notifCard.style.display = visible ? "none" : "block";
    document.getElementById("notifBadge").textContent = "0";
    if (!visible) {
        selectPlan(1);
        setTimeout(() => {
            notifCard.scrollIntoView({behavior: "smooth", block: "nearest"});
        }, 100);
    }
}

function openCoordModal() {
    document.getElementById("coordModal").classList.add("open");
}

function closeCoordModal() {
    document.getElementById("coordModal").classList.remove("open");
}

document
    .getElementById("coordModal")
    .addEventListener("click", function (e) {
        if (e.target === this) closeCoordModal();
    });

function coordAction(btn, action) {
    const item = btn.closest(".coordination-plan-item");
    const badge = item.querySelector(".status-badge");
    const actions = item.querySelector(".coordination-actions");

    if (action === "aprovado") {
        badge.className = "status-badge approved";
        badge.innerHTML = '<i class="ti ti-circle-check"></i> Aprovado';
        showToast(
            "Planejamento aprovado com sucesso!",
            "success",
            "ti-circle-check",
        );
    } else if (action === "ajustes") {
        badge.className = "status-badge pending";
        badge.innerHTML = '<i class="ti ti-clock"></i> Ajustes Solicitados';
        showToast(
            "Solicitação de ajustes enviada ao professor!",
            "warning",
            "ti-clock",
        );
    } else {
        badge.className = "status-badge rejected";
        badge.innerHTML = '<i class="ti ti-x"></i> Rejeitado';
        showToast(
            "Planejamento rejeitado. Professor será notificado.",
            "warning",
            "ti-x",
        );
    }
    actions.querySelectorAll("button").forEach((b) => {
        b.disabled = true;
        b.style.opacity = "0.4";
    });
}

function showToast(msg, type, icon) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast-msg toast-${type}`;
    toast.innerHTML = `<i class="ti ${icon}" style="font-size:18px"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3100);
}
