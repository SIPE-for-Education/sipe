import { Component, input } from '@angular/core';
import { MaterialResponse } from '../../models/MaterialResponse';

@Component({
  imports: [],
  selector: 'app-materials-grid',
  styleUrl: './materials-grid.scss',
  templateUrl: './materials-grid.html',
  standalone: true,
})
export class MaterialsGrid {
  materials = input<MaterialResponse[]>([]);

  openPanel(id: string) {
    console.log('Opening panel for material with ID:', id);
  }

  openPanelAndSuggest(id: string) {
    console.log('Opening panel and suggesting for material with ID:', id);
  }
}
