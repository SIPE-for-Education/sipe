let selectedId = null;
let suggestionsGenerated = {};
let currentView = "grid";

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
