import { Component, input } from '@angular/core';
import { KpiResponse } from '../../models/KpiResponse';

@Component({
  imports: [],
  selector: 'app-kpis',
  styleUrl: './kpis.scss',
  templateUrl: './kpis.html',
  standalone: true,
})
export class Kpis {
  kpis = input<KpiResponse>();
}
