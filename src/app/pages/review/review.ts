import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Kpis } from '../../components/kpis/kpis';
import { KpiResponse } from '../../models/KpiResponse';
import { KpiService } from '../../services/kpiService';

@Component({
  imports: [Kpis],
  selector: 'app-review',
  styleUrl: './review.scss',
  templateUrl: './review.html',
  standalone: true,
})
export class Review implements OnInit {
  private kpis = signal<KpiResponse[]>([]);

  private titleService = inject(Title);

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Review');
    this.loadKpis();
  }

  loadKpis(): void {
    this.kpiService.getAllKpis('review').subscribe({
      next: (data) => {
        this.kpis.set(data);
      },
      error: (err) => {
        console.error('Erro ao carregar os kpis', err);
      },
    });
  }
}
