import { Component, inject, input } from '@angular/core';
import { PlanningResponse } from '../../models/PlanningResponse';
import { ToastService } from '../../services/toastService';
import { ToastType } from '../../enums/ToastType';

@Component({
  imports: [],
  selector: 'app-planning-card',
  styleUrl: './planning-card.scss',
  templateUrl: './planning-card.html',
  standalone: true,
})
export class PlanningCard {
  private readonly toast = inject(ToastService);

  plan = input<PlanningResponse>();

  applyCorrections() {
    this.toast.show('Abrindo editor de planejamento', ToastType.INFO, 'bi bi-pencil');

    setTimeout(() => {
      this.toast.show(
        'Planejamento aberto para edição!',
        ToastType.SUCCESS,
        'bi bi-check-circle-fill',
      );
    }, 1000);
  }
}
