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

  selectOrigin(el: any) {
    document.querySelectorAll('.origin-option').forEach((o) => o.classList.remove('selected'));
    el.classList.add('selected');
  }

  selectDiff(el: any, type: any) {
    document
      .querySelectorAll('.difficulty-button')
      .forEach((b) => (b.className = 'difficulty-button'));
    const map = { easy: 'sel-easy', med: 'sel-med', hard: 'sel-hard' };
    // el.classList.add(map[type]);
  }

  startGeneration() {
    const overlay = document.getElementById('ai-overlay');
    const stepEl = document.getElementById('ai-step');
    const fill = document.getElementById('ai-fill');
    // overlay.classList.add('active');

    const steps = [
      {
        text: 'Analisando planejamento da Semana 22...',
        pct: 15,
        chip: 'sc1',
      },
      {
        text: 'Lendo Apostila Anglo — Módulo 4, páginas 140–145...',
        pct: 30,
        chip: 'sc2',
      },
      {
        text: 'Verificando competências BNCC obrigatórias...',
        pct: 48,
        chip: 'sc3',
      },
      {
        text: 'Cruzando com conteúdo efetivamente ministrado...',
        pct: 62,
        chip: 'sc4',
      },
      { text: 'Gerando questões objetivas...', pct: 75, chip: null },
      { text: 'Gerando questões dissertativas...', pct: 85, chip: null },
      {
        text: 'Montando gabarito e rastreabilidade...',
        pct: 94,
        chip: null,
      },
      { text: 'Finalizando documento oficial...', pct: 99, chip: null },
    ];

    let i = 0;
    const iv = setInterval(() => {
      if (i < steps.length) {
        // stepEl.textContent = steps[i].text;
        // fill.style.width = steps[i].pct + '%';
        if (steps[i].chip)
          // document.getElementById(steps[i].chip).classList.add('lit');
          i++;
      } else {
        clearInterval(iv);
        // fill.style.width = '100%';
        setTimeout(() => {
          // overlay.classList.remove('active');
          // renderDocument();
          // updateQuality();
          // showToast();
        }, 500);
      }
    }, 750);
  }

  updateQuality() {
    const vals = [
      ['qv-cob', '87%'],
      ['qv-cont', '12'],
      ['qv-bncc', '92%'],
      ['qv-pend', '0'],
    ];
    vals.forEach(([id, v], idx) => {
      setTimeout(() => {
        // document.getElementById(id).textContent = v;
      }, idx * 150);
    });
  }

  renderDocument() {
    const body = document.getElementById('doc-body');

    // const objQs = questions.filter((q) => q.type === 'obj');
    // const dissQs = questions.filter((q) => q.type === 'diss');

    let html = '';

    // html += `<div class="section-heading">Parte I — Questões Objetivas <span style="font-size:12px;font-weight:500;opacity:.7">(7 questões · 7,0 pontos)</span></div>`;
    // objQs.forEach((q, idx) => {
    //   const delay = idx * 100;
    //   html += `
    //   <div class="question-block ai-filled" style="opacity:1;transition:opacity .4s ${delay}ms" data-q="${q.num}">
    //     <div class="quality-number">
    //       Questão ${q.num}
    //       <span class="trace-tag"><i class="bi bi-pin-angle-fill"></i> ${q.origin}</span>
    //       <span style="margin-left:auto;font-size:12px;color:var(--muted);font-weight:600">${q.val}</span>
    //     </div>
    //     <div class="quality-text">${q.text}</div>
    //     <div class="quality-options">
    //       ${q.opts
    //     .map(
    //       (o) => `
    //         <div class="quality-option${o.correct ? ' correct-option' : ''}">
    //           <div class="option-letter">${o.l}</div> ${o.t}
    //           ${o.correct ? '<i class="ti ti-check" style="margin-left:auto;font-size:16px;color:#16A34A"></i>' : ''}
    //         </div>
    //       `
    //     )
    //     .join('')}
    //     </div>
    //     <div class="bncc-tag"><i class="ti ti-book-2" style="font-size:10px"></i>${q.bncc}</div>
    //   </div>
    // `;
    // });

    // html += `<div class="section-heading" style="margin-top:24px">Parte II — Questões Dissertativas <span style="font-size:12px;font-weight:500;opacity:.7">(3 questões · 3,0 pontos)</span></div>`;
    // dissQs.forEach((q, idx) => {
    //   const delay = (objQs.length + idx) * 100;
    //   html += `
    //   <div class="question-block ai-filled" style="opacity:0;transition:opacity .4s ${delay}ms" data-q="${q.num}">
    //     <div class="quality-number">
    //       Questão ${q.num}
    //       <span class="trace-tag"><i class="bi bi-pin-angle-fill"></i> ${q.origin}</span>
    //       <span style="margin-left:auto;font-size:12px;color:var(--muted);font-weight:600">${q.val}</span>
    //     </div>
    //     <div class="quality-text" style="white-space:pre-line">${q.text}</div>
    //     <div class="quality-dissert">
    //       <div class="dissert-lines">
    //         ${Array(4).fill('<div class="dissert-line"></div>').join('')}
    //       </div>
    //     </div>
    //     <div class="bncc-tag"><i class="ti ti-book-2" style="font-size:10px"></i>${q.bncc}</div>
    //   </div>
    // `;
    // });

    // html += `
    // <div class="trace-section">
    //   <div class="trace-title"><i class="bi bi-diagram-3"></i> Rastreabilidade Pedagógica — Gerado pelo SIPE</div>
    //   <div class="trace-grid">
    //     ${questions
    //   .map(
    //     (q) => `
    //       <div class="trace-card">
    //         <div class="trace-question">Questão ${q.num}</div>
    //         <div class="trace-origin">${q.origin}</div>
    //         <div class="trace-detail">${q.bncc}</div>
    //       </div>
    //     `
    //   )
    //   .join('')}
    //   </div>
    // </div>

    // body.innerHTML = html;

    // document.getElementById('doc-section').style.display = 'block';

    setTimeout(() => {
      document.querySelectorAll('.question-block').forEach((el, idx) => {
        setTimeout(() => {
          // el.style.opacity = '1';
        }, idx * 80);
      });
      // document
      // .getElementById('doc-section')
      // .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  openGabarito() {
    // document.getElementById('review-modal').classList.add('open');
  }

  closeModalBtn() {
    // document.getElementById('review-modal').classList.remove('open');
  }

  showToast() {
    const t = document.getElementById('toast');
    // t.classList.add('show');
    // setTimeout(() => t.classList.remove('show'), 4500);
  }
}
