import { Component, input, output } from '@angular/core';
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
  materialSelected = output<number>();

  openPanel(id: number) {
    this.materialSelected.emit(id);
  }
}
