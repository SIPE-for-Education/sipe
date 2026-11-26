import { Component, input } from '@angular/core';
import { PlanningResponse } from '../../models/PlanningResponse';

@Component({
  imports: [],
  selector: 'app-planning-card',
  styleUrl: './planning-card.scss',
  templateUrl: './planning-card.html',
  standalone: true,
})
export class PlanningCard {
  plan = input<PlanningResponse>();

  applyCorrections() {
    // showToast("Abrindo editor de planejamento...", "info", "ti-pencil");
    setTimeout(() => {
      // showToast("Planejamento aberto para edição!", "success", "ti-circle-check");
    }, 1000);
  }
}
