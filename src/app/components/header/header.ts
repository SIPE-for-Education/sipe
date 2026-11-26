import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CoordinatorModalService } from '../../services/coordinator-modal';
import { ToastService } from '../../services/toastService';
import { ToastType } from '../../enums/ToastType';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly toast = inject(ToastService);

  private readonly router = inject(Router);
  private readonly coordinatorModal = inject(CoordinatorModalService);

  async openCoordinatorModal(): Promise<void> {
    const navigated = await this.router.navigateByUrl('/feedback');

    if (navigated || this.router.url === '/feedback') {
      this.coordinatorModal.open();
    }
  }
  handleSchoolChange() {}

  openAdminModal() {
    //   document.getElementById("adminModal").classList.add("open");
    //   setTimeout(() => {
    //     document.querySelectorAll(".upload-item.uploaded .upload-progress-fill")
    //       .forEach((el) => {
    //         el.style.width = "100%";
    //       });
    //   }, 200);
  }

  toggleNotifPanel() {
    this.toast.show('4 novas notificações', ToastType.INFO, 'bi bi-bell-fill');

    //     const notifCard = document.getElementById("notifCard");
    //     const visible = notifCard.style.display === "block";
    //     notifCard.style.display = visible ? "none" : "block";
    //     document.getElementById("notifBadge").textContent = "0";
    //     if (!visible) {
    //       selectPlan(1);
    //       setTimeout(() => {
    //         notifCard.scrollIntoView({behavior: "smooth", block: "nearest"});
    //       }, 100);
    //     }
  }
}
