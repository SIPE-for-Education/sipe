import { Component, inject, input, output } from '@angular/core';
import { ToastService } from '../../../services/toastService';
import { ToastType } from '../../../enums/ToastType';

@Component({
  imports: [],
  selector: 'app-coordinator-modal',
  styleUrls: ['./coordinator-modal.scss', '../modal.scss'],
  templateUrl: './coordinator-modal.html',
  standalone: true,
})
export class CoordinatorModal {
  private readonly toast = inject(ToastService);

  isOpen = input(false);
  closed = output<void>();

  close(): void {
    this.closed.emit();
  }

  reviewPlanning(btn: any, action: string) {
    //     const item = btn.closest(".coordination-plan-item");
    //     const badge = item.querySelector(".status-badge");
    //     const actions = item.querySelector(".coordination-actions");
    //
    //     if (action === "aprovado") {
    //       badge.className = "status-badge approved";
    //       badge.innerHTML = '<i class="ti ti-circle-check"></i> Aprovado';

    this.toast.show(
      'Planejamento aprovado com sucesso!',
      ToastType.SUCCESS,
      'bi bi-check-circle-fill',
    );

    //     } else if (action === "ajustes") {
    //       badge.className = "status-badge pending";
    //       badge.innerHTML = '<i class="ti ti-clock"></i> Ajustes Solicitados';

    this.toast.show(
      'Solicitação de ajustes enviada ao professor!',
      ToastType.WARNING,
      'bi bi-wrench-adjustable-circle-fill',
    );
    //     } else {
    //       badge.className = "status-badge rejected";
    //       badge.innerHTML = '<i class="ti ti-x"></i> Rejeitado';

    this.toast.show(
      'Planejamento rejeitado. Professor será notificado.',
      ToastType.WARNING,
      'bi bi-x',
    );
    //     }
    //     actions.querySelectorAll("button").forEach((b) => {
    //       b.disabled = true;
    //       b.style.opacity = "0.4";
    //     });
  }
}
