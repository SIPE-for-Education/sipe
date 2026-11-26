import { Component, inject } from '@angular/core';
import { ToastType } from '../../../enums/ToastType';
import { ToastService } from '../../../services/toastService';

@Component({
  imports: [],
  selector: 'app-modal-content-management',
  styleUrls: ['./modal-content-management.scss', '../modal.scss'],
  templateUrl: './modal-content-management.html',
  standalone: true,
})
export class ModalContentManagement {
  private readonly toast = inject(ToastService);

  upload(item: any) {
    if (item.classList.contains('uploaded')) {
      this.toast.show(
        'Material já indexado e disponível na IA.',
        ToastType.SUCCESS,
        'bi bi-check-circle-fill',
      );
      return;
    }

    item.classList.add('uploaded');
    item.querySelector('i').className = 'ti ti-cloud-check';
    // item.querySelector('.upload-item-name').textContent =
    item.querySelector('.upload-item-name').textContent;
    item.querySelector('.upload-item-desc').textContent = 'Indexando...';
    const bar = item.querySelector('.upload-progress-fill');

    setTimeout(() => {
      bar.style.width = '40%';
    }, 100);

    setTimeout(() => {
      bar.style.width = '80%';
    }, 600);

    setTimeout(() => {
      bar.style.width = '100%';
      item.querySelector('.upload-item-desc').textContent = 'Indexado com sucesso';
      item.querySelector('i').className = 'ti ti-circle-check';

      this.toast.show(
        'Material indexado pela IA com sucesso!',
        ToastType.SUCCESS,
        'bi bi-database-fill-up',
      );
    }, 1500);
  }

  close() {}
  //   document.getElementById("adminModal")
  // .addEventListener("click", function (e) {
  //     if (e.target === this) closeAdminModal();
  //   });

  // function closeAdminModal() {
  //   document.getElementById("adminModal").classList.remove("open");
  // }
}
