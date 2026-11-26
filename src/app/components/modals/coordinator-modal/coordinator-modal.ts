import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-coordinator-modal',
  styleUrls: ['./coordinator-modal.scss', '../modal.scss'],
  templateUrl: './coordinator-modal.html',
  standalone: true,
})
export class CoordinatorModal {
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
    //       showToast(
    //         "Planejamento aprovado com sucesso!",
    //         "success",
    //         "ti-circle-check",
    //       );
    //     } else if (action === "ajustes") {
    //       badge.className = "status-badge pending";
    //       badge.innerHTML = '<i class="ti ti-clock"></i> Ajustes Solicitados';
    //       showToast(
    //         "Solicitação de ajustes enviada ao professor!",
    //         "warning",
    //         "ti-clock",
    //       );
    //     } else {
    //       badge.className = "status-badge rejected";
    //       badge.innerHTML = '<i class="ti ti-x"></i> Rejeitado';
    //       showToast(
    //         "Planejamento rejeitado. Professor será notificado.",
    //         "warning",
    //         "ti-x",
    //       );
    //     }
    //     actions.querySelectorAll("button").forEach((b) => {
    //       b.disabled = true;
    //       b.style.opacity = "0.4";
    //     });
  }
}
