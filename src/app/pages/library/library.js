
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
