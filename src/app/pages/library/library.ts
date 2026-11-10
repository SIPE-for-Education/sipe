import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MaterialResponse } from '../../models/MaterialResponse';
import { MaterialService } from '../../services/materialService';
import { MaterialsGrid } from '../../components/materials-grid/materials-grid';
import { Kpis } from '../../components/kpis/kpis';
import { KpiService } from '../../services/kpiService';
import { KpiResponse } from '../../models/KpiResponse';
import { AiFlowBanner } from '../../components/ai-flow-banner/ai-flow-banner';

@Component({
  imports: [MaterialsGrid, Kpis, AiFlowBanner],
  selector: 'app-library',
  styleUrl: './library.scss',
  templateUrl: './library.html',
  standalone: true,
})
export class Library implements OnInit {
  private titleService = inject(Title);
  protected materials = signal<MaterialResponse[]>([]);
  protected kpis = signal<KpiResponse | undefined>(undefined);

  constructor(
    private materialService: MaterialService,
    private kpiService: KpiService,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('SIPE - Library');

    this.loadKpis();
    this.loadMaterials();
  }

  loadKpis(): void {
    this.kpiService.getAllKpis().subscribe({
      next: (data) => {
        this.kpis.set(data);
      },
      error: (err) => {
        console.error('Erro ao carregar os kpis', err);
      },
    });
  }

  loadMaterials(): void {
    this.materialService.getAllMaterials().subscribe({
      next: (data) => {
        this.materials.set(data);
      },
      error: (err) => {
        console.error('Erro ao carregar os materiais', err);
      },
    });
  }
}
