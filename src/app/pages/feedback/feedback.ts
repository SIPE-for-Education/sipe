import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PlanningService } from '../../services/planningService';
import { PlanningResponse } from '../../models/PlanningResponse';
import { Timelines } from '../../components/timeline/timelines';
import { RevisionHistory } from '../../components/revision-history/revision-history';
import { KpiService } from '../../services/kpiService';
import { KpiResponse } from '../../models/KpiResponse';
import { Kpis } from '../../components/kpis/kpis';
import { TimelineFlowBanner } from '../../components/timeline-flow-banner/timeline-flow-banner';
import { AiBoxSuggestions } from '../../components/ai-box-suggestions/ai-box-suggestions';
import { PlanningCard } from '../../components/planning-card/planning-card';
import { NotificationCard } from '../../components/notification-card/notification-card';
import { CoordinatorModal } from '../../components/modals/coordinator-modal/coordinator-modal';
import { CoordinatorModalService } from '../../services/coordinator-modal';
import { ToastService } from '../../services/toastService';
import { ToastType } from '../../enums/ToastType';

type PlanFilter = 'all' | 'pending' | 'approved';

@Component({
  imports: [
    Timelines,
    RevisionHistory,
    Kpis,
    TimelineFlowBanner,
    AiBoxSuggestions,
    PlanningCard,
    NotificationCard,
    CoordinatorModal,
  ],
  selector: 'app-feedback',
  styleUrl: './feedback.scss',
  templateUrl: './feedback.html',
  standalone: true,
})
export class Feedback implements OnInit {
  private titleService = inject(Title);
  private readonly toast = inject(ToastService);

  private kpis = signal<KpiResponse[]>([]);
  protected plans = signal<PlanningResponse[]>([]);
  protected selectedPlanningId = signal<number | null>(null);

  constructor(
    private planningService: PlanningService,
    private kpiService: KpiService,
  ) {}

  protected selectedPlanning = computed(() => {
    const id = this.selectedPlanningId();
    const list = this.plans();

    if (id === null) {
      return list[0];
    }

    return list.find((p) => p.id === id);
  });

  protected selectPlanning(id: number): void {
    this.selectedPlanningId.set(id);
  }

  protected activePlanFilter = signal<PlanFilter>('all');

  protected filteredPlans = computed(() => {
    const filter = this.activePlanFilter();

    return this.plans().filter((plan) => filter === 'all' || plan.status === filter);
  });

  protected filterPlans(filter: PlanFilter): void {
    this.activePlanFilter.set(filter);
  }

  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Feedback');

    this.loadPlannings();
    this.loadKpis();
  }

  loadPlannings() {
    this.planningService.getAllPlannings().subscribe({
      next: (data) => {
        this.plans.set(data);
        console.log(this.kpis);
      },
      error: (err) => {
        console.error('Erro ao carregar os planejamentos', err);
      },
    });
  }

  loadKpis(): void {
    this.kpiService.getAllKpis('feedback').subscribe({
      next: (data) => {
        this.kpis.set(data);
      },
      error: (err) => {
        console.error('Erro ao carregar os kpis', err);
      },
    });
  }

  private readonly coordinatorModal = inject(CoordinatorModalService);
  protected readonly coordinatorModalOpen = this.coordinatorModal.isOpen;

  protected closeCoordinatorModal(): void {
    this.coordinatorModal.close();
  }

  viewDocument() {
    this.toast.show('Abrindo documento aprovado', ToastType.SUCCESS, 'bi bi-eye-fill');
  }

  resendPlan() {
    this.toast.show(
      'Preparando reenvio do planejamento',
      ToastType.WARNING,
      'bi bi-arrow-clockwise',
    );
    setTimeout(() => {
      this.toast.show(
        'Planejamento reenviado à coordenação!',
        ToastType.SUCCESS,
        'bi bi-send-check-fill',
      );
    }, 1200);
  }
}
