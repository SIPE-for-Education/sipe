import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-modal-content-management',
  styleUrl: './modal-content-management.scss',
  templateUrl: './modal-content-management.html',
  standalone: true,
})
export class ModalContentManagement {
  //   document.getElementById("adminModal")
  // .addEventListener("click", function (e) {
  //     if (e.target === this) closeAdminModal();
  //   });
  // function closeAdminModal() {
  //   document.getElementById("adminModal").classList.remove("open");
  // }
  // function simulateUpload(item) {
  //   if (item.classList.contains("uploaded")) {
  //     showToast(
  //       "Material já indexado e disponível na IA.",
  //       "success",
  //       "ti-circle-check",
  //     );
  //     return;
  //   }
  //   item.classList.add("uploaded");
  //   item.querySelector("i").className = "ti ti-cloud-check";
  //   item.querySelector(".upload-item-name").textContent = item.querySelector(".upload-item-name").textContent;
  //   item.querySelector(".upload-item-desc").textContent = "Indexando...";
  //   const bar = item.querySelector(".upload-progress-fill");
  //   setTimeout(() => {
  //     bar.style.width = "40%";
  //   }, 100);
  //   setTimeout(() => {
  //     bar.style.width = "80%";
  //   }, 600);
  //   setTimeout(() => {
  //     bar.style.width = "100%";
  //     item.querySelector(".upload-item-desc").textContent =
  //       "Indexado com sucesso";
  //     item.querySelector("i").className = "ti ti-circle-check";
  //     showToast(
  //       "Material indexado pela IA com sucesso!",
  //       "success",
  //       "ti-database-import",
  //     );
  //   }, 1500);
  // }
}
