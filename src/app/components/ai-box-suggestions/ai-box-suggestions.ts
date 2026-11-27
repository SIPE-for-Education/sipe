import { Component, inject, input, signal } from '@angular/core';
import { PlanningAiSuggestionResponse } from '../../models/PlanningAiSuggestionResponse';
import { PlanningResponse } from '../../models/PlanningResponse';
import { ToastService } from '../../services/toastService';
import { ToastType } from '../../enums/ToastType';

@Component({
  imports: [],
  selector: 'app-ai-box-suggestions',
  styleUrl: './ai-box-suggestions.scss',
  templateUrl: './ai-box-suggestions.html',
  standalone: true,
})
export class AiBoxSuggestions {
  private readonly toast = inject(ToastService);

  aiSuggestions = input<PlanningAiSuggestionResponse[]>([]);
  iaPrompt = input<string>();

  isGenerating = signal(false);
  hasGenerated = signal(false);

  generateSuggestions() {
    if (!this.iaPrompt() || this.isGenerating()) return;

    this.isGenerating.set(true);

    setTimeout(() => {
      this.isGenerating.set(false);
      this.hasGenerated.set(true);

      this.toast.show('Sugestões pedagógicas geradas com sucesso!', ToastType.INFO, 'bi bi-stars');
    }, 1800);
  }
}
