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
import { Status } from '../../enums/Status';
import { NotificationCard } from '../../components/notification-card/notification-card';

@Component({
  imports: [
    Timelines,
    RevisionHistory,
    Kpis,
    TimelineFlowBanner,
    AiBoxSuggestions,
    NotificationCard,
  ],
  selector: 'app-feedback',
  styleUrl: './feedback.scss',
  templateUrl: './feedback.html',
  standalone: true,
})
export class Feedback implements OnInit {
  private titleService = inject(Title);

  private kpis = signal<KpiResponse[]>([]);
  protected plannings = signal<PlanningResponse[]>([]);
  protected selectedPlanningId = signal<number | null>(null);

  constructor(
    private planningService: PlanningService,
    private kpiService: KpiService,
  ) {}

  protected selectedPlanning = computed(() => {
    const id = this.selectedPlanningId();
    const list = this.plannings();

    if (id === null) {
      return list[0];
    }

    return list.find((p) => p.id === id);
  });

  protected selectPlanning(id: number): void {
    this.selectedPlanningId.set(id);
  }

  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Feedback');

    this.loadPlannings();
    this.loadKpis();
  }

  loadPlannings() {
    this.planningService.getAllPlannings().subscribe({
      next: (data) => {
        this.plannings.set(data);
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

  //   function selectPlan(id) {
  //     selectedPlan = id;
  //     document.querySelectorAll(".planning-card")
  //       .forEach((c) => c.classList.remove("selected"));
  //     const card = document.getElementById("plan" + id);
  //     if (card) card.classList.add("selected");
  //
  //     const data = planData[id];
  //     renderTimeline(data.timeline);
  //     renderRevisions(data.revisions);
  //
  //     const aiBox = document.getElementById("aiBox");
  //     if (data.aiPrompt) {
  //       aiBox.style.display = "block";
  //       document.getElementById("aiBoxDesc").textContent = data.aiPrompt;
  //       const suggestions = document.getElementById("aiSuggestions");
  //       if (suggestionsGenerated[id]) {
  //         renderSuggestions(id);
  //         suggestions.classList.add("visible");
  //         aiBox.querySelector("button").style.display = "none";
  //         document.getElementById("aiLoading").classList.remove("visible");
  //       } else {
  //         suggestions.classList.remove("visible");
  //         suggestions.innerHTML = "";
  //         aiBox.querySelector("button").style.display = "";
  //         document.getElementById("aiLoading").classList.remove("visible");
  //       }
  //     } else {
  //       aiBox.style.display = "none";
  //     }
  //
  //     document.getElementById("notifCard").style.display =
  //       id === 1 ? "block" : "none";
  //   }
  //
  //
  //   function filterPlans(filter, btn) {
  //     document.querySelectorAll(".filter-tab")
  //       .forEach((t) => t.classList.remove("active"));
  //     btn.classList.add("active");
  //
  //     const cards = {
  //       plan1: "pending",
  //       plan2: "approved",
  //       plan3: "rejected",
  //       plan4: "pending",
  //     };
  //     Object.entries(cards).forEach(([id, status]) => {
  //       const el = document.getElementById(id);
  //       if (filter === "all" || filter === status) {
  //         el.style.display = "block";
  //       } else {
  //         el.style.display = "none";
  //       }
  //     });
  //   }
  //
  //   function applyCorrections(event) {
  //     event.stopPropagation();
  //     showToast("Abrindo editor de planejamento...", "info", "ti-pencil");
  //     setTimeout(() => {
  //       showToast(
  //         "Planejamento aberto para edição!",
  //         "success",
  //         "ti-circle-check",
  //       );
  //     }, 1000);
  //   }
  //
  //   function viewDocument(event) {
  //     event.stopPropagation();
  //     showToast("Abrindo documento aprovado...", "success", "ti-eye");
  //   }
  //
  //   function resendPlan(event) {
  //     event.stopPropagation();
  //     showToast(
  //       "Preparando reenvio do planejamento...",
  //       "warning",
  //       "ti-refresh",
  //     );
  //     setTimeout(() => {
  //       showToast(
  //         "Planejamento reenviado à coordenação!",
  //         "success",
  //         "ti-send",
  //       );
  //     }, 1200);
  //   }
  //
  //   function toggleNotifPanel() {
  //     const notifCard = document.getElementById("notifCard");
  //     const visible = notifCard.style.display === "block";
  //     notifCard.style.display = visible ? "none" : "block";
  //     document.getElementById("notifBadge").textContent = "0";
  //     if (!visible) {
  //       selectPlan(1);
  //       setTimeout(() => {
  //         notifCard.scrollIntoView({behavior: "smooth", block: "nearest"});
  //       }, 100);
  //     }
  //   }
  //
  //   function openCoordModal() {
  //     document.getElementById("coordModal").classList.add("open");
  //   }
  //
  //   function closeCoordModal() {
  //     document.getElementById("coordModal").classList.remove("open");
  //   }
  //
  //   document
  // .getElementById("coordModal")
  // .addEventListener("click", function (e) {
  //     if (e.target === this) closeCoordModal();
  //   });
  //
  //   function coordAction(btn, action) {
  //     const item = btn.closest(".coordination-plan-item");
  //     const badge = item.querySelector(".status-badge");
  //     const actions = item.querySelector(".coordination-actions");
  //
  //     if (action === "aprovado") {
  //       badge.className = "status-badge approved";
  //       badge.innerHTML = '<i class="ti ti-circle-check"></i> Aprovado';
  //       showToast(
  //         "Planejamento aprovado com sucesso!",
  //         "success",
  //         "ti-circle-check",
  //       );
  //     } else if (action === "ajustes") {
  //       badge.className = "status-badge pending";
  //       badge.innerHTML = '<i class="ti ti-clock"></i> Ajustes Solicitados';
  //       showToast(
  //         "Solicitação de ajustes enviada ao professor!",
  //         "warning",
  //         "ti-clock",
  //       );
  //     } else {
  //       badge.className = "status-badge rejected";
  //       badge.innerHTML = '<i class="ti ti-x"></i> Rejeitado';
  //       showToast(
  //         "Planejamento rejeitado. Professor será notificado.",
  //         "warning",
  //         "ti-x",
  //       );
  //     }
  //     actions.querySelectorAll("button").forEach((b) => {
  //       b.disabled = true;
  //       b.style.opacity = "0.4";
  //     });
  //   }
}
