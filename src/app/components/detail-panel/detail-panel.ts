import { Component, inject, input, output } from '@angular/core';
import { ToastService } from '../../services/toastService';
import { MaterialResponse } from '../../models/MaterialResponse';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [TitleCasePipe, UpperCasePipe],
  selector: 'app-detail-panel',
  styleUrl: './detail-panel.scss',
  templateUrl: './detail-panel.html',
  standalone: true,
})
export class DetailPanel {
  private readonly toast = inject(ToastService);

  material = input<MaterialResponse | null>(null);

  isOpen = input(false);
  closed = output<void>();

  generatePanelSuggestions() {
    // this.toast.show('Sugestões pedagógicas geradas!', ToastType.INFO, 'bi bi-stars');
    // this.toast.show('Material selecionado para a IA!', ToastType.SUCCESS, 'bi bi-cpu-fill');
  }
}
