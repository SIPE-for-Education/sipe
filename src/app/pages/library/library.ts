import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MaterialResponse } from '../../models/MaterialResponse';
import { MaterialService } from '../../services/materialService';
import { MaterialsGrid } from '../../components/materials-grid/materials-grid';

@Component({
  imports: [MaterialsGrid],
  selector: 'app-library',
  styleUrl: './library.scss',
  templateUrl: './library.html',
  standalone: true,
})
export class Library implements OnInit {
  private titleService = inject(Title);
  protected materials = signal<MaterialResponse[]>([]);

  constructor(private service: MaterialService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Library');

    this.loadMaterials();
  }

  loadMaterials(): void {
    this.service.getAllMaterials().subscribe({
      next: (data) => {
        this.materials.set(data);
      },
      error: (err) => {
        console.error('Erro ao carregar os materiais', err);
      },
    });
  }
}
